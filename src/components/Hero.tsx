"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    src: "/images/client resources/hero.jpg",
    alt: "Highway truck 1",
    heading: "TRUST IN TRANSIT",
    paragraph: "Empowering your business with fast, secure, and flexible transport solutions across India."
  },
  {
    id: 2,
    src: "/images/hero/hero-bg2.jpg", 
    alt: "Highway truck 2",
    heading: "THE WHEELS THAT KEEP YOUR BUSINESS MOVING",
    paragraph: "Proudly serving India with second-generation leadership and an extensive fleet network."
  },
  {
    id: 3,
    src: "/images/hero/hero-bg2.png",
    alt: "Highway truck 3", 
    heading: "SMART SOLUTIONS FOR EVERY JOURNEY",
    paragraph: "From first-mile pickup to last-mile delivery, we tailor logistics to move your business forward."
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 10000); // Auto-swipe every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate h-[85vh] sm:h-[90vh] md:h-[93vh] hero-mobile overflow-hidden rounded-2xl m-2 sm:m-3 md:m-4 lg:m-6 bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <Image
            key={s.id}
            src={s.src}
            alt={s.alt}
            fill
            priority={i === index}
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />
      </div>

      {/* Transparent navbar area is absolute in Navbar component */}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 pb-8 pt-40 sm:pt-24 md:pt-32 lg:pt-40">
        <div className="text-white text-center max-w-5xl mx-auto">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-[0.03em] transition-opacity duration-700">
            {slides[index].heading}
          </h1>
          <p className="mt-6 sm:mt-7 max-w-2xl lg:max-w-3xl mx-auto text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0 transition-opacity duration-700">
            {slides[index].paragraph}
          </p>
          <div className="mt-8 sm:mt-10 inline-flex">
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group inline-flex items-stretch rounded-xl overflow-hidden shadow-lg"
            >
              <span className="rounded-xl rounded-r-none border border-white/25 bg-white/10 backdrop-blur px-4 sm:px-6 py-2.5 sm:py-3 text-white text-sm sm:text-base font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600">
                Get a quote
              </span>
              <span className="rounded-xl rounded-l-none bg-blue-600 group-hover:bg-blue-600 text-white px-3 sm:px-4 flex items-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 sm:h-5 w-4 sm:w-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <path d="M7 17L17 7" strokeLinecap="round" />
                  <path d="M7 7h10v10" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom slide indicator buttons */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex items-center justify-center gap-3 sm:gap-4">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-blue-500' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


