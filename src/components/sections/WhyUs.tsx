export default function WhyUs() {
  const reasons = [
    {
      id: "01",
      title: "SPORTS MASSAGE",
      description: "Deep massage to relieve tired muscles. Recommended for guests returning from safari or climbing Kilimanjaro.",
      icon: <span className="material-symbols-outlined text-[40px]">sports_martial_arts</span>
    },
    {
      id: "02",
      title: "TRADITIONAL ZANZIBAR",
      description: "Authentic head massage to remove tension and banish stressful thoughts. Relax deeply in our serene environment.",
      icon: <span className="material-symbols-outlined text-[40px]">self_improvement</span>
    },
    {
      id: "03",
      title: "BEAUTY TREATMENT",
      description: "Manicure, Pedicure, Henna Painting, and Hair Plaiting available to make you feel as good as you look.",
      icon: <span className="material-symbols-outlined text-[40px]">face_retouching_natural</span>
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-brand-cream/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-accent uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-brand-accent/50" />
            Why Choose Us
            <span className="w-12 h-px bg-brand-accent/50" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-dark">The Cinnamon Experience</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group border border-gray-50 relative overflow-hidden"
            >
              {/* Card Hover Effect Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500 shadow-sm">
                  {reason.icon}
                </div>
                <div className="text-5xl font-playfair font-black text-gray-100 group-hover:text-brand-accent/10 transition-colors duration-500">
                  {reason.id}
                </div>
              </div>
              
              <h4 className="text-2xl font-playfair font-bold text-brand-dark mb-4 relative z-10">{reason.title}</h4>
              <p className="text-gray-500 font-poppins leading-relaxed relative z-10 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
