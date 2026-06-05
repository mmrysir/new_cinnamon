"use client";

import { useBooking } from "@/context/BookingContext";
import Modal from "./Modal";
import { X, Plus, Minus, Send, Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function BookingModal() {
  const { 
    selectedServices, 
    isBookingOpen, 
    closeBooking, 
    removeService, 
    addService,
    bookingDetails,
    updateDetails 
  } = useBooking();

  const handleWhatsAppSend = () => {
    const phone = "255712345678"; // Replace with real number
    
    const servicesList = selectedServices.map(s => `- ${s.name} (${s.price})`).join("\n");
    const total = selectedServices.reduce((acc, s) => {
      const price = parseInt(s.price.replace(/[^0-9]/g, ""));
      return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const message = `*NEW BOOKING REQUEST* 🌿\n\n` +
      `*Details:*\n` +
      `Name: ${bookingDetails.name || "Not specified"}\n` +
      `Date: ${bookingDetails.date || "Not specified"}\n` +
      `Time: ${bookingDetails.time || "Not specified"}\n` +
      `Guests: ${bookingDetails.guests}\n\n` +
      `*Services Requested:*\n${servicesList}\n\n` +
      `*Approx. Total:* $${total}\n\n` +
      `${bookingDetails.notes ? `*Notes:* ${bookingDetails.notes}\n\n` : ""}` +
      `Please confirm availability!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (selectedServices.length === 0 && isBookingOpen) {
    return (
      <Modal isOpen={isBookingOpen} onClose={closeBooking} title="Your Selection">
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto text-brand-accent">
            <Plus size={32} />
          </div>
          <h3 className="text-xl font-playfair font-bold text-brand-dark">Your selection is empty</h3>
          <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
            Please select a treatment from our menu to begin your booking.
          </p>
          <button 
            onClick={closeBooking}
            className="mt-4 text-brand-accent font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Go to Menu
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal 
      isOpen={isBookingOpen} 
      onClose={closeBooking} 
      title="Complete Your Booking"
      maxWidth="max-w-2xl"
    >
      <div className="space-y-8">
        {/* Step 1: Selected Services */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Selected Treatments</h4>
            <span className="text-[10px] bg-brand-cream text-brand-accent px-2 py-0.5 rounded-full font-bold">
              {selectedServices.length} Items
            </span>
          </div>
          <div className="space-y-2">
            {selectedServices.map((service) => (
              <div 
                key={service.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-brand-accent/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                    <img src={service.image} alt={service.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h5 className="font-playfair font-bold text-brand-dark text-sm leading-tight">{service.name}</h5>
                    <p className="text-brand-accent font-bold text-xs">{service.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeService(service.id)}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
          <button 
            onClick={closeBooking}
            className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 text-xs font-bold uppercase tracking-widest hover:border-brand-accent/30 hover:text-brand-accent transition-all flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Add Another Service
          </button>
        </div>

        {/* Step 2: Details Form */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Appointment Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={bookingDetails.name}
                  onChange={(e) => updateDetails({ name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Preferred Date</label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-4 w-4 h-4 text-brand-accent" />
                <input 
                  type="date" 
                  value={bookingDetails.date}
                  onChange={(e) => updateDetails({ date: e.target.value })}
                  className="w-full bg-gray-50 border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 focus:ring-brand-accent/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Preferred Time</label>
              <div className="relative flex items-center">
                <Clock className="absolute left-4 w-4 h-4 text-brand-accent" />
                <input 
                  type="time" 
                  value={bookingDetails.time}
                  onChange={(e) => updateDetails({ time: e.target.value })}
                  className="w-full bg-gray-50 border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 focus:ring-brand-accent/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Number of People</label>
              <div className="relative flex items-center">
                <Users className="absolute left-4 w-4 h-4 text-brand-accent" />
                <select 
                  value={bookingDetails.guests}
                  onChange={(e) => updateDetails({ guests: e.target.value })}
                  className="w-full bg-gray-50 border-none rounded-xl p-4 pl-12 text-sm focus:ring-2 focus:ring-brand-accent/20 transition-all appearance-none"
                >
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Special Notes (Optional)</label>
            <textarea 
              value={bookingDetails.notes}
              onChange={(e) => updateDetails({ notes: e.target.value })}
              placeholder="Any specific requests or allergies?"
              rows={3}
              className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-gray-300 resize-none"
            />
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-6 border-t border-gray-100">
          <button 
            onClick={handleWhatsAppSend}
            className="w-full bg-[#25D366] text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold uppercase tracking-widest text-sm"
          >
            <MessageSquare size={20} />
            Send Booking to WhatsApp
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-[0.1em]">
            This will open WhatsApp to finalise your booking
          </p>
        </div>
      </div>
    </Modal>
  );
}
