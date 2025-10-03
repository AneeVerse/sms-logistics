"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloatingPoster() {
  return (
    <section className="relative z-10 -mt-40 sm:-mt-8 md:-mt-80 lg:-mt-130  -mb-10 sm:-mb-14 md:-mb-20 lg:-mb-24">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-[#0a0e2a]/10 ring-1 ring-black/10">
          {/* Background image */}
          <Image
            src="/images/poster-bg1.png"
            alt=""
            width={1500}
            height={420}
            priority
            className="w-full h-[240px] sm:h-[280px] md:h-[340px] lg:h-[380px] object-cover"
          />

          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#0B2D8D]/10" aria-hidden />

          {/* Content */}
          <div className="absolute inset-0 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
              Ready for Hassle Free
              <br className="hidden sm:block" /> Logistics?
            </h3>
            <p className="mt-3 sm:mt-4 text-white/85 max-w-2xl text-sm sm:text-base md:text-lg">
              Experience seamless, transparent, and dependable deliveries with SMS Logistics.
            </p>

            <div className="mt-5 sm:mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-[#0B2D8D] px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold transition-colors shadow-md"
              >
                Get a Free Quote
                <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#e8edff]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


