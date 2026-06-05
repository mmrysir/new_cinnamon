"use client";

import { useBooking } from "@/context/BookingContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function BookingCartIndicator() {
  const { selectedServices, openBooking } = useBooking();
  const count = selectedServices.length;

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[95] pointer-events-none pl-4"
        >
          <button
            onClick={() => openBooking()}
            className="pointer-events-auto group relative bg-brand-dark text-white p-4 rounded-r-2xl rounded-l-md shadow-[10px_0_30px_rgba(0,0,0,0.2)] border-l-4 border-brand-accent flex items-center gap-3 transition-all hover:bg-brand-accent hover:border-brand-dark"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              <motion.span
                key={count}
                initial={{ scale: 1.5, backgroundColor: "#c5a572" }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-brand-accent text-brand-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark"
              >
                {count}
              </motion.span>
            </div>
            <div className="flex flex-col items-start pr-2">
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Your</span>
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Booking</span>
            </div>
            
            {/* Hover Tooltip/Label */}
            <div className="absolute left-full ml-4 py-2 px-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
              View Selection
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
