"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('/assets/img/spabackground.jpeg')",
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      />
      
      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-brand-dark/90" />
      <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />

      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl space-y-8 w-full text-center lg:text-left pt-12 lg:pt-0"
        >
          <div className="inline-block">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-brand-accent uppercase tracking-[0.3em] text-xs md:text-sm font-bold bg-brand-accent/10 px-4 py-2 rounded-full border border-brand-accent/20 backdrop-blur-md"
            >
              A Sanctuary of Peace
            </motion.span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-playfair font-bold text-white leading-[1.1] drop-shadow-xl">
            Welcome to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-200 block mt-2">
              CINNAMON SPA
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-poppins font-light text-white/80 italic max-w-2xl mx-auto lg:mx-0">
            Come as a guest, leave as a friend. Experience therapeutic treatments cooled by the sea breeze.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link 
              href="#book" 
              className="group relative overflow-hidden bg-brand-accent text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Treatment
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>
            <Link 
              href="#services" 
              className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Explore Menu
            </Link>
          </div>
        </motion.div>

        {/* Video Trigger - Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="lg:ml-12 flex justify-center items-center pb-12 lg:pb-0"
        >
          <a 
            href="https://youtu.be/Y49pq8jb_aA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-28 h-28 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-accent/20 rounded-full animate-ping" />
            <div className="absolute inset-0 bg-brand-accent/40 rounded-full animate-pulse" />
            
            <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent/90">
              <span className="material-symbols-outlined text-white text-4xl ml-2 drop-shadow-md">
                play_arrow
              </span>
            </div>
            
            {/* Hover tooltip */}
            <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white text-sm font-poppins tracking-widest">
              Watch Video
            </div>
          </a>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</span>
        <span className="material-symbols-outlined text-sm">south</span>
      </motion.div>
    </section>
  );
}
