"use client";

import { useBooking } from "@/context/BookingContext";
import { MessageSquare, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Booking() {
  const { openBooking } = useBooking();

  return (
    <section id="book" className="py-16 md:py-32 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Reservations Open</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
            Ready to Experience <br />
            <span className="text-brand-accent italic">Pure Serenity?</span>
          </h2>
          
          <p className="text-gray-400 font-poppins max-w-xl mx-auto leading-relaxed">
            Skip the forms and book your session instantly. Our team is ready to curate the perfect wellness journey for you.
          </p>

          <div className="pt-8">
            <button 
              onClick={() => openBooking()}
              className="px-12 py-5 bg-brand-accent text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-all shadow-[0_20px_50px_rgba(197,165,114,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
            >
              <MessageSquare size={20} />
              Open Booking Form
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 border-t border-white/10 mt-16">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest">Instant Confirmation</h4>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                <Heart size={24} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest">Personalized Care</h4>
            </div>
            <div className="hidden md:flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest">Premium Ambiance</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

