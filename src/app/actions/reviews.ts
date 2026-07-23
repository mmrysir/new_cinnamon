'use server'

interface GoogleReviewResponse {
  name: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
  rating?: number;
  text?: {
    text?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime: string;
}

export async function getCachedGoogleReviews() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_BUSINESS_PLACE_ID; // Your place ID string

  if (!apiKey || !placeId) {
    console.error("Reviews API Error: GOOGLE_MAPS_API_KEY or GOOGLE_BUSINESS_PLACE_ID is missing.");
    return { success: false, error: "Configuration Error: Missing environment tokens." };
  }

  // The new endpoint routes using a direct URL path variable instead of query params
  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        // The Field Mask dictates exactly what parameters Google's engine is allowed to return
        'X-Goog-FieldMask': 'reviews.authorAttribution,reviews.rating,reviews.text,reviews.relativePublishTimeDescription,reviews.publishTime,reviews.name,rating,userRatingCount'
      },
      next: { revalidate: 86400 } // Cache cleanly for 24 hours to protect quotas
    });

    const data = await res.json();

    if (res.ok) {
      // Structure formatting: we normalize the data map here so your UI layer stays clean
      const normalizedReviews = (data.reviews || [])
        .map((review: GoogleReviewResponse) => ({
          id: review.name, // Format: "places/PLACE_ID/reviews/REVIEW_ID"
          author: review.authorAttribution?.displayName || "Anonymous",
          avatar: review.authorAttribution?.photoUri || null,
          authorUrl: review.authorAttribution?.uri || null,
          rating: review.rating || 5,
          text: review.text?.text || "",
          timeDescription: review.relativePublishTimeDescription || "Recently",
          publishTime: review.publishTime // ISO format for sorting
        }))
        .sort((a: { publishTime: string }, b: { publishTime: string }) => 
          new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
        );

      return {
        success: true,
        reviews: normalizedReviews,
        rating: data.rating || 0,
        total_reviews: data.userRatingCount || 0
      };
    } else {
      return { success: false, error: data.error?.message || "Places API error encountered." };
    }
  } catch {
    return { success: false, error: "Network connection lost to cloud endpoint." };
  }
}
