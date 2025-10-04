"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  { id: "delhi", name: "New Delhi", address: "National Capital Territory, New Delhi", left: 47, top: 35 },
  { id: "mumbai", name: "Mumbai", address: "Financial Capital, Maharashtra", left: 45, top: 45, offsetY: -3 },
  { id: "bangalore", name: "Bangalore", address: "Silicon Valley of India, Karnataka", left: 45, top: 50 },
  { id: "kolkata", name: "Kolkata", address: "Cultural Capital, West Bengal", left: 55, top: 40, offsetY: -3 },
  { id: "chennai", name: "Chennai", address: "Detroit of India, Tamil Nadu", left: 49, top: 55, offsetY: 2 },
  { id: "ahmedabad", name: "Ahmedabad", address: "Industrial Hub of Western India", left: 43, top: 41, offsetY: -2 },
];

function GlobalPresence() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close active marker
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If we have an active marker and the click is outside any marker button
      if (activeId && mapRef.current && event.target && !(event.target as Element).closest('button')) {
        setActiveId(null);
      }
    }

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeId]);

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
              { name: "Gujarat" },
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
          <div ref={mapRef} className="relative w-full aspect-[4/4] sm:aspect-video md:aspect-[16/14] lg:aspect-[16/14] -mt-20 sm:-mt-40 md:-mt-50 lg:-mt-80">
            <Image
              src="/images/global/india.jpg"
              alt="India map"
              fill
              priority
              className="object-cover object-center"
              style={{ 
                transform: 'scale(1.1) translateY(-5%)', 
                transformOrigin: 'center',
              }}
            />
            
            {/* Tablet-specific overlay for perfect positioning */}
            <div className="hidden md:block lg:hidden absolute inset-0" 
                 style={{ 
                   transform: 'scale(1.05) translateY(-3%)', 
                   transformOrigin: 'center',
                   zIndex: 1
                 }}>
              <Image
                src="/images/global/india.jpg"
                alt="India map tablet"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Markers */}
            {MARKERS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(activeId === m.id ? null : m.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10`}
                style={{ left: `${m.left}%`, top: `${m.top}%` }}
                aria-label={m.name}
              >
                <span className="relative inline-flex items-center justify-center">
                  {/* Animated pulse ring - Perfect circles - Mobile optimized */}
                  <span className="absolute aspect-square h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-[#2563eb]/50 animate-ping" style={{ borderRadius: '50%' }} />
                  <span className="absolute aspect-square h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full bg-[#2563eb]/60 animate-pulse" style={{ borderRadius: '50%' }} />
                  <span className="absolute aspect-square h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 rounded-full bg-[#2563eb]/40 animate-ping" style={{ borderRadius: '50%', animationDelay: '0.5s' }} />
                  
                  {/* Main marker - Mobile optimized */}
                  <span className="relative aspect-square h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white bg-[#2563eb] grid place-items-center shadow-lg" style={{ borderRadius: '50%' }}>
                    {/* Simple dot */}
                    <span className="aspect-square h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 lg:h-2.5 lg:w-2.5 rounded-full bg-white" style={{ borderRadius: '50%' }} />
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
                    {/* Line starts from marker center - Mobile optimized */}
                    <div className="h-[12px] sm:h-[16px] md:h-[20px] w-0.5 bg-[#2563eb]" />
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#2563eb]" />
                    <div className="mt-1.5 sm:mt-2 md:mt-3 rounded-lg bg-[#2563eb] text-white shadow-xl min-w-[140px] sm:min-w-[180px] md:min-w-[220px] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-center">
                      <div className="font-semibold text-sm sm:text-base">{active.name}</div>
                      <div className="mt-1 text-xs sm:text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                  </div>
                ) : (
                  // card above marker
                  <div className="flex flex-col items-center -translate-x-1/2 -translate-y-full animate-in fade-in zoom-in duration-200">
                    <div className="mb-1.5 sm:mb-2 md:mb-3 rounded-lg bg-[#2563eb] text-white shadow-xl min-w-[140px] sm:min-w-[180px] md:min-w-[220px] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-center">
                      <div className="font-semibold text-xs sm:text-sm md:text-base">{active.name}</div>
                      <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#2563eb]" />
                    {/* Line ends at marker center - Mobile optimized */}
                    <div className="h-[12px] sm:h-[16px] md:h-[20px] w-0.5 bg-[#2563eb]" />
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


