"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12 py-6 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/website-logo.png"
              alt="SMS Logistics"
              width={180}
              height={40}
              className="w-62 h-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10 text-white/90">
          <Link href="#" className="hover:text-white">Home</Link>
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#contact" className="hover:text-white">Contact us</Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <span className="text-white/90 text-sm">+91 9029605529</span>
          <Link
            href="#track"
            className="inline-flex items-center rounded-md bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 text-sm font-medium shadow-md transition-colors"
          >
            Track a shipment
          </Link>
        </div>

        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-full bg-white/20 text-white h-9 w-9 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </div>
  );
}


