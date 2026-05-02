import Image from "next/image";

export default function Gallery() {
  const images = [
    "/assets/img/gallery/Cottage_home.jpg",
    "/assets/img/gallery/drone.jpg",
    "/assets/img/gallery/mnarani-beach-cottages-superior-room.jpg",
    "/assets/img/gallery/zanzibar-house-room2.jpg",
    "/assets/img/parlour.jpeg",
    "/assets/img/parlour2.jpeg",
    "/assets/img/parlour4.jpeg",
    "/assets/img/spabackground.jpeg"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold">Gallery</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">Photos From Our SPA</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image 
                src={src} 
                alt={`Spa Gallery ${index + 1}`} 
                width={500} 
                height={700} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
