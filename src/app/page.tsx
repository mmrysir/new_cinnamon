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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.berinajumwa.com/#owner",
        "name": "Berina Jumwa",
        "url": "https://www.berinajumwa.com",
        "email": "berinakarisa600@gmail.com",
        "jobTitle": "Founder & Owner",
        "knowsAbout": [
          "Spa Management",
          "Wellness & Hospitality"
        ],
        "owns": [
          { "@id": "https://mnaranicinnamonspa.com/#entity" },
          { "@id": "https://www.kiluaspa.com/#entity" }
        ]
      },
      {
        "@type": "DaySpa",
        "@id": "https://mnaranicinnamonspa.com/#entity",
        "name": "Mnarani Cinnamon Spa",
        "description": "Experience therapeutic treatments cooled by the sea breeze and the meditative sounds of the Indian Ocean at Mnarani Cinnamon Spa in Nungwi, Zanzibar. Come as a guest, leave as a friend.",
        "url": "https://mnaranicinnamonspa.com",
        "logo": "https://mnaranicinnamonspa.com/assets/img/cinnamon-logo.jpeg",
        "image": "https://mnaranicinnamonspa.com/assets/img/cinnamon-logo.jpeg",
        "telephone": "+255776583434",
        "email": "berinakarisa600@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mnarani Beach Cottages",
          "addressLocality": "Nungwi",
          "addressRegion": "Zanzibar North",
          "addressCountry": "TZ"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.google.com/search?q=mnarani+cinnamon+spa",
          "https://www.instagram.com/mnarani_cinnamon_spa/",
          "https://www.tiktok.com/@mnarani_cinnamon_spa"
        ],
        "parentOrganization": { "@id": "https://www.berinajumwa.com/#owner" }
      },
      {
        "@type": "DaySpa",
        "@id": "https://www.kiluaspa.com/#entity",
        "name": "Kilua Spa",
        "url": "https://www.kiluaspa.com",
        "parentOrganization": { "@id": "https://www.berinajumwa.com/#owner" }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
