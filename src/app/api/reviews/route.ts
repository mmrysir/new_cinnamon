import { NextResponse } from 'next/server';

export async function GET() {
  const PLACE_ID = 'ChIJ1Y1ELscfQxgRUS93WNkKxgQ';
  const API_KEY = 'AIzaSyArUQv0Fke4ayN6XoTOmn0gHimLOk3hYrY';
  
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.error_message || 'Failed to fetch reviews' }, { status: 500 });
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating,
      total_reviews: data.result.user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
