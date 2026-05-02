"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-brand-dark/90 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/img/cinnamon-logo.jpeg" 
            alt="Cinnamon Spa Logo" 
            width={40} 
            height={40} 
            className="rounded-full object-cover"
          />
          <h1 className="text-white text-xl lg:text-2xl font-poppins font-light uppercase tracking-widest">
            Cinnamon <span className="hidden sm:inline">Spa</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-brand-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#book" 
            className="border-2 border-brand-accent text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 ml-4"
          >
            Book Treatment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-playfair hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#book" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-2 border-brand-accent text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest mt-4"
          >
            Book Treatment
          </Link>
          <button 
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
}
