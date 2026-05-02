"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type GoogleReview = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ rating: 0, total: 0 });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        if (data.reviews) {
          setReviews(data.reviews);
          setStats({ rating: data.rating, total: data.total_reviews });
        } else {
          console.error("API Error:", data.error || "Unknown error");
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
    <section id="testimonials" className="py-24 bg-brand-dark text-white overflow-hidden">
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
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {reviews.length > 0 ? (
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
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center space-y-8 px-6">
                    <div className="relative inline-block">
                      <span className="text-6xl text-brand-accent/20 font-serif absolute -top-8 -left-8">"</span>
                      <p className="text-lg md:text-xl font-poppins italic leading-relaxed text-white/90 line-clamp-4">
                        {review.text}
                      </p>
                      <span className="text-6xl text-brand-accent/20 font-serif absolute -bottom-12 -right-8">"</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 pt-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-accent shadow-xl">
                        <img 
                          src={review.profile_photo_url} 
                          alt={review.author_name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-playfair font-bold text-brand-accent">{review.author_name}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{review.relative_time_description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-gray-500 italic">No reviews found for this location yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
