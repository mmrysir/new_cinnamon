import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const socialPosts = [
  { 
    src: "/assets/img/social/nails-blue.png", 
    likes: "1.2k", 
    comments: "45"
  },
  { 
    src: "/assets/img/social/nails-colors.png", 
    likes: "850", 
    comments: "12"
  },
  { 
    src: "/assets/img/social/zanzibar-coast.png", 
    likes: "920", 
    comments: "28"
  },
  { 
    src: "/assets/img/social/tropical-beach.png", 
    likes: "1.5k", 
    comments: "56"
  },
  { 
    src: "/assets/img/detrox.jpg", 
    likes: "1.1k", 
    comments: "31"
  },
  { 
    src: "/assets/img/spabackground.jpeg", 
    likes: "740", 
    comments: "19"
  },
];

export default function Instagram() {
  const instaLink = "https://www.instagram.com/mnarani_cinnamon_spa/";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4 w-full md:w-auto">
            <h3 className="text-brand-accent uppercase tracking-[0.3em] text-xs font-bold font-poppins text-center md:text-left">Social Feed</h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-dark leading-tight text-center md:text-left">
              Follow Our Island Vibe
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 md:gap-8 w-full md:w-auto">
            <a 
              href={instaLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-brand-dark hover:text-brand-accent transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-brand-accent/20 hover:border-brand-accent pb-2"
            >
              <InstagramIcon size={18} className="group-hover:scale-110 transition-transform" />
              @mnarani_cinnamon_spa
            </a>
            <a 
              href="https://www.tiktok.com/@mnarani_cinnamon_spa?_r=1&_t=ZS-960fwx0zoMq" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-brand-dark hover:text-brand-accent transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-brand-accent/20 hover:border-brand-accent pb-2"
            >
              <TikTokIcon size={18} className="group-hover:scale-110 transition-transform text-brand-dark" />
              @mnarani_cinnamon_spa
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-2 md:px-0">
          {socialPosts.map((post, index) => (
            <a 
              key={index} 
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-50 rounded-lg md:rounded-2xl shadow-sm block"
            >
              <Image 
                src={post.src} 
                alt="Instagram post" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    <Heart size={18} className="fill-white" />
                    <span className="text-xs font-bold font-poppins">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={18} className="fill-white" />
                    <span className="text-xs font-bold font-poppins">{post.comments}</span>
                  </div>
                </div>
                <InstagramIcon size={24} />
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em]">
            Join 5,000+ others finding their peace in Zanzibar
          </p>
        </div>
      </div>
    </section>
  );
}
