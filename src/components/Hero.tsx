"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    src: "/images/hero/hero-bg1.png",
    alt: "Highway truck 1",
    heading: "RELIABLE LOGISTICS, DELIVERED",
    paragraph: "Empowering your business with fast, secure, and flexible transport solutions across India."
  },
  {
    id: 2,
    src: "/images/hero/hero-bg2.jpg", 
    alt: "Highway truck 2",
    heading: "DECADES OF TRUST, NATIONWIDE REACH",
    paragraph: "Proudly serving India with second-generation leadership and an extensive fleet network."
  },
  {
    id: 3,
    src: "/images/hero/hero-bg3.jpg",
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
  }, [slides.length]);

  return (
    <section className="relative isolate min-h-[90vh] sm:min-h-[93vh] overflow-hidden rounded-2xl">
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
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-[0.0001em] transition-opacity duration-700">
            {slides[index].heading}
          </h1>
          <p className="mt-6 sm:mt-7 max-w-2xl lg:max-w-3xl mx-auto text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0 transition-opacity duration-700">
            {slides[index].paragraph}
          </p>
          <div className="mt-8 sm:mt-10 inline-flex">
            <button 
              onClick={() => {
                const element = document.getElementById("our-solution");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group inline-flex items-stretch rounded-xl overflow-hidden shadow-lg"
            >
              <span className="rounded-xl rounded-r-none border border-white/25 bg-white/10 backdrop-blur px-4 sm:px-6 py-2.5 sm:py-3 text-white text-sm sm:text-base font-medium transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600">
                Contact Us Now
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

      {/* Bottom-right carousel controls */}
      <div className="pointer-events-none absolute bottom-4 sm:bottom-6 right-3 sm:right-4 md:right-6 lg:right-8 flex items-end justify-end">
        <div className="pointer-events-auto rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <button
            type="button"
            onClick={next}
            className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 inline-flex items-center justify-center bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="M13 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={prev}
            className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 inline-flex items-center justify-center bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M19 12H5" strokeLinecap="round" />
              <path d="M11 5l-7 7 7 7" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom-left slide indicator */}
      <div className="absolute bottom-4 sm:bottom-6 right-20 md:right-30 lg:right-35 flex flex-col items-start gap-2">
        <div className="text-white/95 text-xs sm:text-sm font-semibold tracking-wide">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div className="h-[2px] sm:h-[3px] w-20 sm:w-28 bg-white/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}


