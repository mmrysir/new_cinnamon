"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";

// WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.67.15-.199.301-.77.971-.944 1.17-.175.199-.349.224-.651.074-.301-.15-1.27-.467-2.42-1.493-.895-.798-1.499-1.784-1.675-2.085-.175-.301-.019-.463.13-.612.135-.133.301-.351.452-.527.15-.176.199-.301.301-.502.1-.199.05-.375-.025-.526-.075-.15-.67-1.611-.918-2.209-.241-.58-.487-.5-.67-.508-.173-.008-.371-.01-.57-.01-.198 0-.522.074-.795.372-.272.301-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.295.174-1.418-.076-.123-.277-.198-.578-.348zM12.004 20h-.002c-1.38 0-2.733-.372-3.916-1.077l-.28-.166-2.91.763.777-2.834-.183-.29A8.25 8.25 0 014.045 12.3c0-4.553 3.704-8.259 8.258-8.259 2.208 0 4.283.86 5.842 2.42 1.559 1.56 2.418 3.636 2.418 5.84 0 4.554-3.704 8.259-8.259 8.259zM19.9 5.958A10.873 10.873 0 0012.004 2.666C6.01 2.666 1.157 7.521 1.157 13.515c0 1.916.499 3.786 1.446 5.462L.65 24l5.22-.137a10.852 10.852 0 005.132 1.29h.005c5.993 0 10.846-4.854 10.846-10.848 0-2.903-1.129-5.631-3.185-7.687z" />
  </svg>
);

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
            aria-label="Book on WhatsApp"
          >
            <div className="mr-0 lg:mr-2">
              <WhatsAppIcon />
            </div>
            <span className="hidden lg:inline font-poppins font-semibold text-sm">Book Now</span>
          </motion.button>
        )}
      </AnimatePresence>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Book A Treatment"
        maxWidth="max-w-4xl"
      >
        <div className="relative w-full h-[600px] md:h-[800px] bg-white rounded-xl overflow-hidden">
          <iframe 
            src="https://whatsform.com/SYsga5" 
            className="absolute inset-0 w-full h-full border-0"
            title="Booking Form"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
