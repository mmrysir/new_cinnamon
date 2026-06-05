"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Clock, MapPin } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { Treatment } from "@/types";

// Using shared Treatment type from @/types
const treatments: Treatment[] = [
  {
    id: 1,
    name: "Hands and Feet",
    price: "$25",
    description: "A thorough grooming to your hands or feet that will condition, nourish and soften them using a cocktail of our rich natural oils. This treatment includes exfoliating, massage, and nail care.",
    image: "/assets/img/bg.jpeg",
    category: "beauty"
  },
  {
    id: 2,
    name: "African Facial",
    price: "$30",
    description: "A traditional specialty used to renew & refresh all skin types using natural ingredients that will leave your skin fresh and nourished. Perfect for sun-exposed skin.",
    image: "/assets/img/six.jpg",
    category: "facial"
  },
  {
    id: 3,
    name: "Herbal Oil",
    price: "$35",
    description: "Soothing massage done using warm herbal oil mixed with spices and long movements helping you release all accumulated stress and tension in the muscles.",
    image: "/assets/img/five.jpg",
    category: "massage"
  },
  {
    id: 4,
    name: "Stress Relief",
    price: "$15",
    description: "A unique deep style massage that highlights the back, shoulders and neck releasing pressure on accumulated points caused by everyday stress.",
    image: "/assets/img/one.jpg",
    category: "massage"
  },
  {
    id: 5,
    name: "Cinnamon Relax",
    price: "$30",
    description: "African exotic treatment that rebalances the body and mind through the dedicated hand of our therapist and the meditative sounds of the ocean.",
    image: "/assets/img/three.jpg",
    category: "massage"
  },
  {
    id: 6,
    name: "Deep Tissue",
    price: "$40",
    description: "We go deeper into your tired muscles releasing your accumulated stress with specialized pressure techniques aimed at chronic tension.",
    image: "/assets/img/two.jpg",
    category: "massage"
  },
  {
    id: 7,
    name: "Hot Stone",
    price: "$45",
    description: "Rebalances body and soul by placing heated volcanic stones on pressure points, combined with long soothing massage strokes.",
    image: "/assets/img/four.jpg",
    category: "massage"
  },
  {
    id: 8,
    name: "Detox Scrub",
    price: "$30",
    description: "Refresh your whole body with a deep detoxifying and nourishing natural body scrub using local ingredients like coffee, sea salt, or cinnamon.",
    image: "/assets/img/detrox.jpg",
    category: "scrub"
  }
];

export default function Services() {
  const [filter, setFilter] = useState<Treatment["category"]>("all");
  const [selectedItem, setSelectedItem] = useState<Treatment | null>(null);
  const { openBooking } = useBooking();

  const filteredTreatments = filter === "all" 
    ? treatments 
    : (treatments as Treatment[]).filter(t => t.category === filter);

  const handleBookingClick = (item: Treatment | null) => {
    if (!item) return;
    setSelectedItem(null); // Close the detail modal
    openBooking(item);     // Open the booking form with this item
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h3 className="text-brand-accent uppercase tracking-[0.2em] text-[10px] font-bold">The Menu</h3>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-dark">Our Services</h2>
          
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pt-6 pb-2 -mx-4 px-4 md:mx-0">
            {["all", "massage", "beauty", "facial", "scrub"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
                  filter === cat 
                    ? "bg-brand-dark text-white border-brand-dark shadow-md" 
                    : "bg-gray-50 text-gray-400 border-transparent hover:border-brand-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTreatments.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-32 md:h-56 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 md:bottom-2 md:right-2">
                    <div className="bg-brand-accent text-white px-4 py-2 md:px-6 md:py-3 rounded-tl-3xl md:rounded-full shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                      <span className="text-base md:text-xl font-bold tracking-tighter">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-1 space-y-2">
                  <h4 className="text-[13px] md:text-lg font-playfair font-bold text-brand-dark group-hover:text-brand-accent transition-colors duration-300 leading-snug">
                    {item.name}
                  </h4>
                  {/* Keep description as requested */}
                  <p className="text-[10px] md:text-sm text-gray-500 font-poppins leading-relaxed line-clamp-2 italic">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DETAILS MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-lg max-h-[90vh] flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-brand-dark transition-all"
                >
                  <X size={24} />
                </button>

                <div className="relative h-48 md:h-72 w-full shrink-0">
                  <Image 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white leading-tight">
                      {selectedItem.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-10 space-y-4 md:space-y-6 flex-1 overflow-y-auto">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-brand-accent font-bold text-xl md:text-2xl tracking-tighter">{selectedItem.price}</span>
                    <span className="text-[10px] md:text-xs font-bold font-poppins uppercase tracking-[0.2em] text-gray-400">{selectedItem.category}</span>
                  </div>
                  
                  <p className="text-gray-600 font-poppins leading-relaxed md:text-lg">
                    {selectedItem.description}
                  </p>

                  <div className="pt-6">
                    <button 
                      onClick={() => handleBookingClick(selectedItem)}
                      className="w-full bg-[#25D366] text-white py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold uppercase tracking-widest text-sm"
                    >
                      <MessageSquare size={20} />
                      Add to Booking
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-[0.1em]">
                      Secure your spot instantly
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <button className="bg-brand-dark text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-lg">
            Download Price List
          </button>
        </div>
      </div>
    </section>
  );
}
