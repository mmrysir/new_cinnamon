import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Instagram from "@/components/sections/Instagram";
import Booking from "@/components/sections/Booking";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <ScrollReveal direction="up" delay={0.1}>
        <About />
      </ScrollReveal>

      <WhyUs />

      <ScrollReveal direction="up" delay={0.2}>
        <Services />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <Gallery />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <Instagram />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <Testimonials />
      </ScrollReveal>

      <Booking />
      
      <ScrollReveal direction="up">
        <Contact />
      </ScrollReveal>
    </main>
  );
}
