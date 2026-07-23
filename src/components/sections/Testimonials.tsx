"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { getCachedGoogleReviews } from "@/app/actions/reviews";

interface GoogleReview {
  id: string;
  author: string;
  avatar: string | null;
  authorUrl: string | null;
  rating: number;
  text: string;
  timeDescription: string;
  publishTime: string;
}

const ReviewCard = ({ review }: { review: GoogleReview }) => {
  const [imgError, setImgError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.text.length > 200;

  const handleInteraction = () => {
    if (isLong && !isExpanded) {
      setIsExpanded(true);
    } else if (review.authorUrl) {
      window.open(review.authorUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="text-center space-y-8 px-6">
      <div 
        className="relative inline-block max-w-2xl mx-auto cursor-pointer group/text transition-all duration-300"
        onClick={handleInteraction}
      >
        <span className="text-6xl text-brand-accent/20 font-serif absolute -top-8 -left-8 group-hover/text:text-brand-accent/40 transition-colors">&quot;</span>
        <div className="space-y-4">
          <p className={`text-lg md:text-xl font-poppins italic leading-relaxed text-white/90 transition-all duration-500 ${!isExpanded && isLong ? "line-clamp-4" : ""}`}>
            {review.text}
          </p>
          {isLong && !isExpanded && (
            <div className="text-brand-accent text-sm font-semibold animate-pulse">
              Tap to Expand
            </div>
          )}
          {(isExpanded || !isLong) && (
            <div className="text-brand-accent/40 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover/text:opacity-100 transition-opacity">
              Tap again to view on Google
            </div>
          )}
        </div>
        <span className="text-6xl text-brand-accent/20 font-serif absolute -bottom-10 -right-8 group-hover/text:text-brand-accent/40 transition-colors">&quot;</span>
      </div>
      
      <div className="flex flex-col items-center gap-4 pt-6">
        {review.rating > 0 && (
          <div className="flex text-yellow-500 text-sm mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < review.rating ? "fill-current" : "opacity-30"}>★</span>
            ))}
          </div>
        )}
        <div className="group relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent shadow-xl flex items-center justify-center bg-gray-800 transition-transform group-hover:scale-110">
            {review.avatar && !imgError ? (
              <Image 
                src={review.avatar} 
                alt={review.author} 
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-xl font-bold text-brand-accent">{review.author[0]}</span>
            )}
          </div>
          {review.authorUrl && (
            <a 
              href={review.authorUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute inset-0 z-10"
              aria-label="View on Google"
            />
          )}
        </div>
        <div>
          {review.authorUrl ? (
            <a 
              href={review.authorUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-playfair font-bold text-brand-accent hover:underline"
            >
              {review.author}
            </a>
          ) : (
            <h4 className="text-xl font-playfair font-bold text-brand-accent">{review.author}</h4>
          )}
          <p className="text-xs text-gray-500 uppercase tracking-widest">{review.timeDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ rating: 0, total: 0 });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const result = await getCachedGoogleReviews();
        if (result.success && result.reviews) {
          setReviews(result.reviews);
          setStats({ rating: result.rating || 0, total: result.total_reviews || 0 });
        } else {
          console.error("API Error:", result.error || "Unknown error");
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-brand-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-accent"></div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 bg-brand-dark text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold italic">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">What They Say About Us</h2>
          
          {stats.rating > 0 && (
            <div className="flex flex-col items-center gap-2 pt-4">
              <div className="flex text-yellow-500 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(stats.rating) ? "fill-current" : "opacity-30"}>★</span>
                ))}
              </div>
              <p className="text-sm font-poppins text-gray-400">
                <span className="text-white font-bold">{stats.rating}</span> avg rating from <span className="text-white font-bold">{stats.total}</span> Google reviews
              </p>
              <div className="flex items-center gap-2 mt-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Powered by</span>
                <svg className="w-16 h-5" viewBox="0 0 54 18" fill="currentColor">
                  <path d="M7.8 8.2v2.4h3.9c-.2 1.2-1.4 3.5-3.9 3.5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.2 0 2.1.5 2.6 1l1.9-1.8C11.1 4.1 9.6 3.3 7.8 3.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7c3.9 0 6.5-2.7 6.5-6.6 0-.5 0-.8-.1-1.2H7.8z"/>
                  <path d="M20.5 10.1c0-2.3-1.8-4-4.1-4s-4.1 1.7-4.1 4 1.8 4 4.1 4 4.1-1.7 4.1-4zm-2.4 0c0 1.2-.9 1.9-1.7 1.9s-1.7-.8-1.7-1.9.9-1.9 1.7-1.9 1.7.7 1.7 1.9z"/>
                  <path d="M29.5 10.1c0-2.3-1.8-4-4.1-4s-4.1 1.7-4.1 4 1.8 4 4.1 4 4.1-1.7 4.1-4zm-2.4 0c0 1.2-.9 1.9-1.7 1.9s-1.7-.8-1.7-1.9.9-1.9 1.7-1.9 1.7.7 1.7 1.9z"/>
                  <path d="M38.1 6.5v7.2c0 3-1.8 4.2-3.9 4.2-1.9 0-3.1-1.3-3.5-2.4l2.1-.9c.4.9 1.1 1.4 1.5 1.4 1 0 1.9-.6 1.9-1.8v-.6h-.1c-.4.5-1.2 1-2.1 1-2 0-3.6-1.7-3.6-3.8s1.6-3.8 3.6-3.8c1 0 1.7.4 2.1 1h.1v-.6h2.3zm-2.3 3.6c0-1.2-.8-2-1.6-2s-1.7.8-1.7 2 .8 1.9 1.7 1.9 1.6-.8 1.6-1.9z"/>
                  <path d="M41.4 2.1h2.4v12H41.4z"/>
                  <path d="M49.9 11.6c-1.1 0-1.7-.5-2.1-1.2l5.4-2.2-.2-.5c-.4-1-1.5-2.9-3.9-2.9-2.3 0-4.1 1.8-4.1 4 0 2.2 1.8 4 4.1 4 1.9 0 3-.9 3.6-1.8l-1.9-1.3c-.6.9-1.2 1.3-1.9 1.3zm.1-3.6c.7 0 1.3.4 1.5.9l-3.6 1.4c-.1-1.3 1.1-2.3 2.1-2.3z"/>
                </svg>
              </div>
            </div>
          )}
          
          <div className="flex justify-center mt-8">
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJ1Y1ELscfQxgRUS93WNkKxgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-accent/50 px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-brand-accent/10"
            >
              <div className="bg-white p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-widest text-brand-accent font-bold leading-tight">Love our service?</span>
                <span className="block text-sm font-bold text-white tracking-wide">Leave a Review</span>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {(() => {
            const displayReviews = reviews.length > 0 ? reviews : [
              { 
                id: "f1", 
                author: "Sarah Johnson", 
                text: "The most relaxing massage I've ever had. The ambiance is perfect and the staff is incredibly professional. Highly recommend the hot stone treatment!", 
                timeDescription: "2 months ago",
                rating: 5,
                avatar: null,
                authorUrl: "https://maps.app.goo.gl/Y49pq8jb_aA",
                publishTime: ""
              },
              { 
                id: "f2", 
                author: "Michael Chen", 
                text: "A hidden gem in Zanzibar. From the moment you walk in, you feel the stress melting away. Clean, luxurious, and worth every penny.", 
                timeDescription: "1 month ago",
                rating: 5,
                avatar: null,
                authorUrl: "https://maps.app.goo.gl/Y49pq8jb_aA",
                publishTime: ""
              }
            ];

            return (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="pb-16"
              >
                {displayReviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <ReviewCard review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
