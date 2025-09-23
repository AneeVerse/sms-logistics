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
    <section id="our-solution" className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 sm:gap-3 text-blue-600 font-medium justify-center">
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-600 inline-block" />
        <span className="text-gray-600 font-normal text-sm sm:text-base">OUR FREIGHT SOLUTION</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 sm:mt-5 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium leading-tight">
        <span className="text-gray-900">Expertly Managing </span>
        <span className="text-blue-600">Every Step </span>
        <span className="text-gray-900">From Transit to</span>
        <br className="hidden sm:block" />
        <span className="text-blue-600">Warehousing</span>
      </h2>

      {/* Tabs */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center px-4">
        <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 sm:p-2">
          {FREIGHTS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 mx-0.5 sm:mx-1 text-sm sm:text-base font-medium rounded-xl sm:rounded-2xl transition-all duration-300 whitespace-nowrap ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content card (framed, compact) */}
      <div className="mt-6 sm:mt-8 mx-auto max-w-[1100px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border-[6px] sm:border-[8px] md:border-[10px] border-[#0A3AB6] bg-[#0A3AB6] overflow-hidden">
        <div className="rounded-[12px] sm:rounded-[14px] md:rounded-[18px] bg-[#0A3AB6] p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/5">
              <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]">
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                {activeConfig.heading}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed text-sm md:text-[15px]">
                {activeConfig.description}
              </p>

              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="group inline-flex items-center rounded-full bg-white text-[#0A3AB6] pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-white/90"
                >
                  <span>Get a Free Quote</span>
                  <span className="ml-2 sm:ml-3 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#0A3AB6] ring-1 ring-inset ring-black/10 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 sm:h-5 sm:w-5"
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


