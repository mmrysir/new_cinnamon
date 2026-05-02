import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Decorative Element with Dark Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: "url('/assets/img/homepage.jpeg')", 
          backgroundSize: 'cover', 
          backgroundAttachment: 'fixed' 
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 group">
              <div className="absolute -inset-4 border-2 border-brand-accent transition-all duration-500 group-hover:inset-0" />
              <Image 
                src="/assets/img/drone.jpg" 
                alt="Cinnamon Spa View" 
                width={800} 
                height={600} 
                className="relative z-20 shadow-2xl rounded-sm object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
              Located at Cinnamon Spa
            </h2>
            <div className="space-y-4 text-white/90 font-poppins leading-relaxed">
              <p className="italic text-lg text-white">
                Directly on the beach, cooled by the sea breeze and with it’s own meditative wave sound system...
              </p>
              <p>
                Cinnamon Spa location and massage team will help you get rid of the tension that was created by the pressures of everyday life. Choose from locally prepared natural aromatic oils; essences of cinnamon, lemongrass, jasmine or clove oil to help you relax and revitalize.
              </p>
              <p className="font-medium text-white border-l-4 border-brand-accent pl-4 py-2 bg-brand-accent/10">
                A massage that will relax your body and your mind, soothe aching muscles and help you unwind for the rest of the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
