"use client";

import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppBook = () => {
    const phone = "255712345678"; 
    const message = encodeURIComponent(`Hi Cinnamon Spa! I'm on your website and would like to book a treatment. Can you help me?`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          onClick={handleWhatsAppBook}
          className="fixed bottom-6 right-6 z-[90] lg:hidden bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
          aria-label="Book on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <motion.span 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            className="overflow-hidden whitespace-nowrap font-bold uppercase text-[10px] tracking-widest ml-0 group-active:ml-2"
          >
            {/* The text can expand on click or just be a circle */}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
