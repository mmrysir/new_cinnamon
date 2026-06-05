"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/assets/img/spabackground.jpeg')",
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-3xl space-y-6 md:space-y-8 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight break-words">
            Welcome to <span className="text-brand-accent block mt-2">CINNAMON SPA AND MASSAGE</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-poppins font-light text-white/90 italic">
            Come as a guest, leave as a friend
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <Link 
              href="#services" 
              className="bg-transparent border-2 border-brand-accent text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-brand-accent transition-all duration-300"
            >
              Our Menu
            </Link>
            <Link 
              href="#book" 
              className="bg-brand-accent border-2 border-brand-accent text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-transparent transition-all duration-300"
            >
              Book Treatment
            </Link>
          </div>
        </div>

        {/* Pulsating Video Play Button */}
        <div className="mt-16 lg:mt-0 lg:ml-12 flex justify-center items-center">
          <a 
            href="https://youtu.be/Y49pq8jb_aA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-24 h-24 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-accent rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-brand-accent rounded-full animate-pulse opacity-40" />
            <div className="relative w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg 
                className="w-8 h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
