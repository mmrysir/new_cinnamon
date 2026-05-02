export default function Booking() {
  return (
    <section id="book" className="py-16 md:py-24 bg-brand-cream/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h3 className="text-brand-accent uppercase tracking-widest text-xs md:text-sm font-semibold italic">Reservation</h3>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 leading-tight">Book A Treatment</h2>
          <p className="text-sm md:text-base text-gray-500 font-poppins max-w-xl mx-auto italic px-4">
            Schedule your relaxation. Complete the form below and our team will confirm your appointment.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl md:rounded-[2rem] shadow-2xl overflow-hidden border border-brand-accent/10">
          <div className="relative w-full h-[600px] md:h-[800px]">
            <iframe 
              src="https://whatsform.com/SYsga5" 
              className="absolute inset-0 w-full h-full border-0"
              title="Booking Form"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
