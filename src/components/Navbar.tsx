"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`inset-x-0 top-0 z-20 transition-all duration-300 ${
      isScrolled 
        ? 'fixed bg-white/95 backdrop-blur-md shadow-lg' 
        : 'absolute'
    }`}>
      <nav className={`mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'py-3 text-gray-800' 
          : 'py-4 sm:py-6 text-white'
      }`}>
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/images/website-logo.png"
              alt="SMS Logistics"
              width={180}
              height={40}
              className="w-36 sm:w-44 md:w-62 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-8 xl:gap-10 transition-colors ${
          isScrolled ? 'text-gray-600' : 'text-white/90'
        }`}>
          <Link href="#" className={`font-semibold uppercase transition-colors ${
            isScrolled ? 'hover:text-gray-800' : 'hover:text-white'
          }`}>Home</Link>
          <Link href="#about" className={`font-semibold uppercase transition-colors ${
            isScrolled ? 'hover:text-gray-800' : 'hover:text-white'
          }`}>About</Link>
          <Link href="#services" className={`font-semibold uppercase transition-colors ${
            isScrolled ? 'hover:text-gray-800' : 'hover:text-white'
          }`}>Services</Link>
          <Link href="#contact" className={`font-semibold uppercase transition-colors ${
            isScrolled ? 'hover:text-gray-800' : 'hover:text-white'
          }`}>Contact us</Link>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          <span className={`hidden xl:block text-sm transition-colors ${
            isScrolled ? 'text-gray-600' : 'text-white/90'
          }`}>+91 98765 43210</span>
          <Link
            href="#track"
            className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-5 py-2.5 xl:py-3 text-sm font-medium shadow-md transition-colors"
          >
            <span className="hidden sm:block">Contact Us Now</span>
            <span className="sm:hidden">Contact Us Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} 
          className={`lg:hidden inline-flex items-center justify-center rounded-full h-10 w-10 backdrop-blur-sm transition-colors ${
            isScrolled 
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/images/website-logo.png"
                alt="SMS Logistics"
                width={140}
                height={35}
                className="h-auto"
              />
            </Link>
            <button 
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center rounded-full bg-white/20 text-white h-10 w-10 hover:bg-white/30 transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-6">
              <Link 
                href="#" 
                onClick={closeMobileMenu}
                className="block text-white text-lg font-semibold uppercase hover:text-blue-300 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-white text-lg font-semibold uppercase hover:text-blue-300 transition-colors"
              >
                About
              </Link>
              <Link 
                href="#services" 
                onClick={closeMobileMenu}
                className="block text-white text-lg font-semibold uppercase hover:text-blue-300 transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-white text-lg font-semibold uppercase hover:text-blue-300 transition-colors"
              >
                Contact us
              </Link>
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                  </svg>
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <Link
                  href="#track"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium shadow-md transition-colors w-full justify-center"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


