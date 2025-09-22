"use client";

import Image from "next/image";
import { useState } from "react";

type FreightKey = "air" | "sea" | "rail" | "road";

type FreightConfig = {
  key: FreightKey;
  label: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
};

const FREIGHTS: FreightConfig[] = [
  {
    key: "air",
    label: "Air Freight",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "Air cargo airplane on runway",
    heading:
      "Fast, reliable shipping for high-priority items across the globe.",
    description:
      "When time is of the essence and your cargo cannot afford delays, air freight provides the ultimate solution for businesses and individuals who demand speed without compromising on security. This premium shipping method leverages the world's most extensive airline networks to transport everything from critical medical supplies and perishable goods to high-value electronics and urgent business documents.",
  },
  {
    key: "sea",
    label: "Sea Freight",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "Container ship at sea port",
    heading: "Cost‑effective global shipping for large and bulky cargo.",
    description:
      "Sea freight is the most economical way to move high‑volume goods internationally. Ideal for pallets and containers, it balances affordability with dependable schedules, ensuring your supply chain remains predictable and efficient.",
  },
  {
    key: "rail",
    label: "Rail Freight",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Freight train carrying containers",
    heading: "Efficient inland transport across long distances.",
    description:
      "Rail freight offers a greener, reliable option for moving heavy cargo over land. With strong timetables and less weather dependency, it's perfect for cost‑conscious shipments that still require timely delivery.",
  },
  {
    key: "road",
    label: "Road Freight",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Cargo truck on highway",
    heading: "Flexible door‑to‑door delivery to any destination.",
    description:
      "Road freight connects the last mile. From regional to cross‑border routes, trucks provide the agility and reach needed to get your goods exactly where they must be—on time and intact.",
  },
];

export default function OurSolution() {
  const [active, setActive] = useState<FreightKey>("air");

  const activeConfig = FREIGHTS.find((f) => f.key === active)!;

  return (
    <section id="our-solution" className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 py-20">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 text-[#D11E2B] font-medium justify-center">
        <span className="h-3 w-3 rounded-full bg-[#D11E2B] inline-block" />
        <span className="text-black font-normal">OUR FREIGHT SOLUTION</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-center text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight">
        <span className="text-[#0A3AB6]">Expertly Managing </span>
        <span className="text-[#D11E2B]">Every Step </span>
        <span className="text-[#0A3AB6]">From Transit to</span>
        <br className="hidden md:block" />
        <span className="text-[#0A3AB6]">Warehousing</span>
      </h2>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {FREIGHTS.map((f) => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={`relative pb-3 text-base md:text-lg transition-colors ${
                isActive ? "text-[#D11E2B]" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {f.label}
              <span
                className={`absolute left-0 -bottom-[2px] h-[3px] rounded-full transition-all bg-[#D11E2B] ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Content card (framed, compact) */}
      <div className="mt-8 mx-auto max-w-[1100px] rounded-[24px] border-[10px] border-[#0A3AB6] bg-[#0A3AB6] overflow-hidden">
        <div className="rounded-[18px] bg-[#0A3AB6] p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5">
              <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                <Image
                  key={activeConfig.imageSrc}
                  src={activeConfig.imageSrc}
                  alt={activeConfig.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center text-white px-1 md:px-2 lg:px-1">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                {activeConfig.heading}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed text-sm md:text-[15px]">
                {activeConfig.description}
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-full bg-white text-[#0A3AB6] pl-5 pr-2 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-white/90"
                >
                  <span>Get a Free Quote</span>
                  <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A3AB6] ring-1 ring-inset ring-black/10 transition-colors group-hover:bg-[#D11E2B] group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" strokeLinecap="round" />
                      <path d="M7 7h10v10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


