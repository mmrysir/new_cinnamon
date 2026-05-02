"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-playfair font-bold text-gray-900">Location</h4>
                <p className="text-gray-600 text-sm">Cinnamon Spa, Zanzibar, Tanzania North Coast</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-lg font-playfair font-bold text-gray-900">Open Hours</h4>
                <p className="text-gray-600 text-sm">Monday-Sunday: 09:00 AM - 07:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-playfair font-bold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">Berinakarisa1@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-playfair font-bold text-gray-900">Call</h4>
                <p className="text-gray-600 text-sm">+255776583434</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-gray-50 p-10 rounded-2xl shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your experience..." 
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-brand-accent text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-dark transition-all duration-300 w-full md:w-auto"
              >
                Send Review
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden h-96 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps?q=Mnarani%20Beach%20Cottages%2C%20Zanzibar%2C%20Tanzania&z=14&t=&ie=UTF8&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
