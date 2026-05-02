import { Shield, Sparkles, Heart } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      id: "01",
      title: "SPORTS MASSAGE",
      description: "Deep massage to relieve tired muscles. Recommended for guests returning from safari or climbing Kilimanjaro.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: "02",
      title: "TRADITIONAL ZANZIBAR",
      description: "Authentic head massage to remove tension and banish stressful thoughts. Relax deeply in our serene environment.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      id: "03",
      title: "BEAUTY TREATMENT",
      description: "Manicure, Pedicure, Henna Painting, and Hair Plaiting available to make you feel as good as you look.",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-accent/60 uppercase tracking-widest text-sm font-semibold">Why Choose Us</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">Why Choose Our SPA</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl font-playfair font-black text-gray-100 mb-6 group-hover:text-brand-accent/10 transition-colors">
                {reason.id}
              </div>
              <div className="text-brand-accent mb-6">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-playfair font-bold text-gray-900 mb-4">{reason.title}</h4>
              <p className="text-gray-500 font-poppins leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
