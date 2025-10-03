"use client";

import Image from "next/image";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
// Flag emojis for countries

type Marker = {
  id: string;
  name: string;
  address: string;
  // Position as percentage relative to the image container
  left: number; // 0-100
  top: number; // 0-100
  offsetY?: number; // fine-tune connector alignment (px)
};

const MARKERS: Marker[] = [
  { id: "delhi", name: "New Delhi", address: "National Capital Territory, New Delhi", left: 47, top: 40 },
  { id: "mumbai", name: "Mumbai", address: "Financial Capital, Maharashtra", left: 45, top: 50, offsetY: -3 },
  { id: "bangalore", name: "Bangalore", address: "Silicon Valley of India, Karnataka", left: 45, top: 55 },
  { id: "kolkata", name: "Kolkata", address: "Cultural Capital, West Bengal", left: 55, top: 45, offsetY: -3 },
  { id: "chennai", name: "Chennai", address: "Detroit of India, Tamil Nadu", left: 49, top: 60, offsetY: 2 },
];

function GlobalPresence() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = MARKERS.find((m) => m.id === activeId) ?? null;

  return (
    <section
      id="global-presence"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F7F9FC] overflow-x-hidden"
    >
      <div className="w-full px-0">
        {/* Header */}
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 mb-8 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start gap-6 sm:gap-8">
          <div>
            <div className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-500">India Presence</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold text-[#0A3AB6] leading-tight">
              Major Cities We
              <br className="hidden sm:block" />
              Serve Across India
            </h2>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 text-sm sm:text-base md:text-lg text-gray-700">
            {[
              { name: "New Delhi" },
              { name: "Mumbai" },
              { name: "Bangalore" },
              { name: "Kolkata" },
              { name: "Chennai" },
            ].map((city) => (
              <div key={city.name} className="inline-flex items-center gap-2 sm:gap-3">
                <MdLocationOn className="text-xl sm:text-2xl md:text-3xl text-[#2563eb]" />
                <span className="font-medium">{city.name}</span>
              </div>
            ))}
          </div>
        </div>

        </div>
        </div>
        
        {/* Map with markers - Full Width */}
        <div className="relative w-full overflow-hidden">
          {/* Background map image */}
          <div className="relative w-full aspect-video sm:aspect-[16/8] md:aspect-[16/14] -mt-80">
            <Image
              src="/images/global/india.jpg"
              alt="India map"
              fill
              priority
              className="object-cover object-center"
              style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
            />

            {/* Markers */}
            {MARKERS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(activeId === m.id ? null : m.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer`}
                style={{ left: `${m.left}%`, top: `${m.top}%` }}
                aria-label={m.name}
              >
                <span className="relative inline-flex items-center justify-center">
                  {/* Animated pulse ring - Perfect circles */}
                  <span className="absolute aspect-square h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-[#2563eb]/50 animate-ping" style={{ borderRadius: '50%' }} />
                  <span className="absolute aspect-square h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-[#2563eb]/60 animate-pulse" style={{ borderRadius: '50%' }} />
                  <span className="absolute aspect-square h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 rounded-full bg-[#2563eb]/40 animate-ping" style={{ borderRadius: '50%', animationDelay: '0.5s' }} />
                  
                  {/* Main marker */}
                  <span className="relative aspect-square h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full border-2 border-white bg-[#2563eb] grid place-items-center shadow-lg" style={{ borderRadius: '50%' }}>
                    {/* Simple dot */}
                    <span className="aspect-square h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 rounded-full bg-white" style={{ borderRadius: '50%' }} />
                  </span>
                </span>
              </button>
            ))}

            {/* Tooltip card for active marker */}
            {active && (
              <div
                className="absolute z-10"
                style={{ left: `${active.left}%`, top: `${active.top}%` }}
              >
                {/* Tooltip group - line connects to center of marker */}
                {active.top < 40 ? (
                  // card below marker
                  <div className="flex flex-col items-center -translate-x-1/2 animate-in fade-in zoom-in duration-200">
                    {/* Line starts from marker center */}
                    <div className="h-[16px] sm:h-[20px] w-0.5 bg-[#2563eb]" />
                    <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#2563eb]" />
                    <div className="mt-2 sm:mt-3 rounded-lg bg-[#2563eb] text-white shadow-xl min-w-[180px] sm:min-w-[220px] max-w-[240px] sm:max-w-[280px] px-3 sm:px-4 py-2 sm:py-3 text-center">
                      <div className="font-semibold text-sm sm:text-base">{active.name}</div>
                      <div className="mt-1 text-xs sm:text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                  </div>
                ) : (
                  // card above marker
                  <div className="flex flex-col items-center -translate-x-1/2 -translate-y-full animate-in fade-in zoom-in duration-200">
                    <div className="mb-2 sm:mb-3 rounded-lg bg-[#2563eb] text-white shadow-xl min-w-[180px] sm:min-w-[220px] max-w-[240px] sm:max-w-[280px] px-3 sm:px-4 py-2 sm:py-3 text-center">
                      <div className="font-semibold text-sm sm:text-base">{active.name}</div>
                      <div className="mt-1 text-xs sm:text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                    <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#2563eb]" />
                    {/* Line ends at marker center */}
                    <div className="h-[16px] sm:h-[20px] w-0.5 bg-[#2563eb]" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
    </section>
  );
}

export default GlobalPresence;


