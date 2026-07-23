import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/assets/img/cinnamon-logo.jpeg" 
                alt="Cinnamon Spa Logo" 
                width={50} 
                height={50} 
                className="grayscale brightness-200 rounded-full"
              />
              <h2 className="text-2xl font-playfair font-bold uppercase tracking-widest">
                Cinnamon <span className="text-brand-accent">Spa</span>
              </h2>
            </Link>
            <p className="text-gray-400 font-poppins max-w-md leading-relaxed">
              Experience therapeutic treatments cooled by the sea breeze and the meditative sounds of the Indian Ocean. Come as a guest, leave as a friend.
            </p>
            <div className="flex gap-4">
              {[
                { id: 'facebook', href: '#' },
                { id: 'instagram', href: 'https://www.instagram.com/mnarani_cinnamon_spa/' },
                { id: 'tiktok', href: 'https://www.tiktok.com/@mnarani_cinnamon_spa?_r=1&_t=ZS-960fwx0zoMq' },
              ].map((social) => (
                <a 
                  key={social.id} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                >
                  <i className={`bx bxl-${social.id} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-8 decoration-brand-accent decoration-2 underline-offset-8 underline">Useful Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-poppins">
              {['Home', 'About Us', 'Services', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-brand-accent transition-colors flex items-center gap-2">
                    <span className="text-brand-accent">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-bold mb-8 decoration-brand-accent decoration-2 underline-offset-8 underline">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Stay updated with our latest offers and treatments.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex-1 outline-none focus:ring-1 focus:ring-brand-accent transition-all text-sm w-full"
              />
              <button className="bg-brand-accent text-white px-8 py-3 rounded-xl text-xs font-bold uppercase hover:bg-brand-accent/80 transition-all w-full sm:w-auto">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 py-12">
          <h4 className="text-center text-lg font-playfair font-bold mb-8 uppercase tracking-widest text-brand-accent">
            Our Partners & Sponsors
          </h4>
          <div className="flex justify-center items-center gap-12">
            <a href="https://www.lighthousezanzibar.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Image 
                  src="/assets/img/Mnarani-Logo-Small.jpg" 
                  alt="Mnarani Beach Cottages" 
                  width={160} 
                  height={80} 
                  className="object-contain transition-all duration-500"
                />
              </div>
              <span className="text-sm font-poppins text-gray-400 group-hover:text-brand-accent transition-colors">Mnarani Beach Cottages</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-poppins">
          <p>© {new Date().getFullYear()} mugogoinc all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
