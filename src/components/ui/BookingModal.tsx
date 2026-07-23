"use client";

import { useBooking } from "@/context/BookingContext";
import Modal from "./Modal";

import { Treatment } from "@/types";
import { treatments } from "@/data/treatments";
import { useState } from "react";
import Image from "next/image";

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

  const [isAddingMore, setIsAddingMore] = useState(false);



  const handleWhatsAppSend = () => {
    const phone = "255776583434"; 
    
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

  const handleAddFromModal = (service: Treatment) => {
    addService(service);
    // Visual feedback? maybe a small toast or just let it be added
  };

  return (
    <Modal 
      isOpen={isBookingOpen} 
      onClose={() => {
        closeBooking();
        setIsAddingMore(false);
      }} 
      title={isAddingMore ? "Add More Treatments" : "Complete Your Booking"}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-8 min-h-[400px]">
        {isAddingMore ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatments.map((service) => {
                const isSelected = selectedServices.find(s => s.id === service.id);
                return (
                  <div 
                    key={service.id}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer ${
                      isSelected 
                        ? "bg-brand-cream/20 border-brand-accent shadow-sm" 
                        : "bg-gray-50 border-gray-100 hover:border-brand-accent/30"
                    }`}
                    onClick={() => handleAddFromModal(service)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
                        <Image src={service.image} alt={service.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark text-xs leading-tight">{service.name}</h5>
                        <p className="text-brand-accent font-bold text-[10px]">{service.price}</p>
                      </div>
                    </div>
                    {isSelected ? (
                      <div className="bg-brand-accent text-white p-1 rounded-full">
                        <span className="material-symbols-outlined text-[12px] rotate-45" onClick={(e) => {
                          e.stopPropagation();
                          removeService(service.id);
                        }}>add</span>
                      </div>
                    ) : (
                      <div className="bg-gray-200 text-gray-500 p-1 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[12px]">add</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <button 
              onClick={() => setIsAddingMore(false)}
              className="w-full py-4 bg-brand-dark text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all shadow-xl"
            >
              Finish Selection ({selectedServices.length})
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300 space-y-8">
            {/* Step 1: Selected Services */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Selected Treatments</h4>
                <span className="text-[10px] bg-brand-cream text-brand-accent px-2 py-0.5 rounded-full font-bold">
                  {selectedServices.length} Items
                </span>
              </div>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {selectedServices.map((service) => (
                  <div 
                    key={service.id} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-brand-accent/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                        <Image src={service.image} alt={service.name} fill className="object-cover" />
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
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setIsAddingMore(true)}
                className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 text-xs font-bold uppercase tracking-widest hover:border-brand-accent/30 hover:text-brand-accent transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[14px]">add</span> Add Another Service
              </button>
            </div>

            {/* Step 2: Details Form */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Appointment Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark ml-1 italic opacity-70">Your Name</label>
                  <input 
                    type="text" 
                    value={bookingDetails.name}
                    onChange={(e) => updateDetails({ name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark ml-1 italic opacity-70">Preferred Date</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-[16px] text-brand-accent pointer-events-none">calendar_month</span>
                    <input 
                      type="date" 
                      value={bookingDetails.date}
                      onChange={(e) => updateDetails({ date: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 pl-12 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-accent/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark ml-1 italic opacity-70">Preferred Time</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-[16px] text-brand-accent pointer-events-none">schedule</span>
                    <input 
                      type="time" 
                      value={bookingDetails.time}
                      onChange={(e) => updateDetails({ time: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 pl-12 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-accent/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark ml-1 italic opacity-70">Guests</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-4 text-[16px] text-brand-accent pointer-events-none">group</span>
                    <select 
                      value={bookingDetails.guests}
                      onChange={(e) => updateDetails({ guests: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 pl-12 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-accent/20 transition-all appearance-none"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark ml-1 italic opacity-70">Notes</label>
                <textarea 
                  value={bookingDetails.notes}
                  onChange={(e) => updateDetails({ notes: e.target.value })}
                  placeholder="Special requests..."
                  rows={2}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-brand-dark font-medium focus:ring-2 focus:ring-brand-accent/20 transition-all resize-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button 
                onClick={handleWhatsAppSend}
                disabled={selectedServices.length === 0}
                className="w-full bg-[#25D366] disabled:bg-gray-300 text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-xl font-bold uppercase tracking-widest text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Send to WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

