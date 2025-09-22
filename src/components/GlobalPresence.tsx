"use client";

import Image from "next/image";
import { useState } from "react";
// Flag emojis for countries

type Marker = {
  id: string;
  name: string;
  address: string;
  // Position as percentage relative to the image container
  left: number; // 0-100
  top: number; // 0-100
};

const MARKERS: Marker[] = [
  { id: "russia", name: "Russia", address: "Moscow, Russia", left: 66, top: 20 },
  { id: "china", name: "China", address: "89 Innovation Avenue Suite 5A, Shanghai", left: 80, top: 40 },
  { id: "germany", name: "Germany", address: "Berlin, Germany", left: 58, top: 34 },
  { id: "america", name: "America", address: "New York, USA", left: 21, top: 38 },
  { id: "canada", name: "Canada", address: "Toronto, Canada", left: 18, top: 28 },
  { id: "australia", name: "Australia", address: "Sydney, Australia", left: 88, top: 78 },
  { id: "france", name: "France", address: "12 Rue de la Lumière Bâtiment C, Bureau 45, Paris 75012 France", left: 52, top: 34 },
  { id: "south-africa", name: "South Africa", address: "Cape Town, South Africa", left: 55, top: 73 },
];

export default function GlobalPresence() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = MARKERS.find((m) => m.id === activeId) ?? null;

  return (
    <section
      id="global-presence"
      className="relative -mx-3 md:-mx-4 lg:-mx-6 py-16 md:py-20 lg:py-24 bg-[#F7F9FC]"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start gap-8">
          <div>
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500">Global Presence</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#0A3AB6] leading-tight">
              List Of Nations We
              <br className="hidden md:block" />
              Work With Worldwide
            </h2>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-700">
            {[
              { name: "Russia", code: "ru" },
              { name: "America", code: "us" },
              { name: "Canada", code: "ca" },
              { name: "China", code: "cn" },
              { name: "Germany", code: "de" },
              { name: "Australia", code: "au" },
              { name: "France", code: "fr" },
              { name: "South Africa", code: "za" },
            ].map((country) => (
              <div key={country.name} className="inline-flex items-center gap-2">
                <span className={`fi fi-${country.code} w-5 h-3 rounded-sm`} />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map with markers */}
        <div className="relative mt-10 rounded-3xl overflow-hidden">
          {/* Background map image */}
          <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/global/global.png"
              alt="World map"
              fill
              priority
              className="object-cover"
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
                  {/* Animated pulse ring */}
                  <span className="absolute h-12 w-12 rounded-full bg-[#F36B21]/20 animate-ping" />
                  <span className="absolute h-10 w-10 rounded-full bg-[#F36B21]/30 animate-pulse" />
                  
                  {/* Main marker */}
                  <span className="relative h-8 w-8 rounded-full border-2 border-white bg-[#F36B21] grid place-items-center shadow-lg">
                    {/* Simple dot */}
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </span>
              </button>
            ))}

            {/* Tooltip card for active marker */}
            {active && (
              <div
                className="absolute z-10 animate-in fade-in zoom-in duration-200"
                style={{ left: `${active.left}%`, top: `${active.top}%` }}
              >
                {active.top < 35 ? (
                  // show card below for top markers
                  <div className="-translate-x-1/2 translate-y-8 flex flex-col items-center">
                    {/* line */}
                    <div className="h-6 w-0.5 bg-[#F36B21]" />
                    <div className="h-3 w-3 rounded-full bg-[#F36B21]" />
                    <div className="mt-3 rounded-lg bg-[#F36B21] text-white shadow-xl min-w-[220px] max-w-[280px] px-4 py-3 text-center">
                      <div className="font-semibold text-base">{active.name}</div>
                      <div className="mt-1 text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                  </div>
                ) : (
                  // show card above otherwise
                  <div className="-translate-x-1/2 -translate-y-28 flex flex-col items-center">
                    <div className="mb-3 rounded-lg bg-[#F36B21] text-white shadow-xl min-w-[220px] max-w-[280px] px-4 py-3 text-center">
                      <div className="font-semibold text-base">{active.name}</div>
                      <div className="mt-1 text-sm text-white/95 whitespace-normal">{active.address}</div>
                    </div>
                    <div className="h-6 w-0.5 bg-[#F36B21]" />
                    <div className="h-3 w-3 rounded-full bg-[#F36B21]" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


