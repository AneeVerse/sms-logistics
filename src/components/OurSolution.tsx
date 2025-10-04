"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type ServiceKey = "fleet" | "vendor" | "customized" | "pan-india" | "lcv" | "mcv" | "hcv" | "container" | "specialized";

type ServiceConfig = {
  key: ServiceKey;
  label: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
};

const SERVICES: ServiceConfig[] = [
  {
    key: "fleet",
    label: "Fleet Ownership & Contracting",
    imageSrc: "/images/our-solution/services/Fleet Ownership & Contracting.png",
    imageAlt: "Modern fleet of trucks",
    heading: "Fleet Ownership & Contracting",
    description: "Leverage the strength and dependability of our own modern, well-maintained fleet for hassle-free, end-to-end transport solutions. Our team manages every detail—from pick-up scheduling to delivery tracking—ensuring shipments are handled with utmost care and delivered right on time. With us, you get the consistency, transparency, and quality that only a true fleet owner can provide.",
  },
  {
    key: "vendor",
    label: "Vendor Network Access",
    imageSrc: "/images/our-solution/services/Vendor Network Access.png",
    imageAlt: "Vendor network logistics",
    heading: "Vendor Network Access",
    description: "Unlock a broad spectrum of transport capabilities with our trusted vendor network. We source specialized vehicles and equipment through long-standing partnerships, enabling us to accommodate even the most unique or large-scale logistics requirements. Our network ensures flexibility, expanded coverage, and the right fleet for every project—no matter how complex your needs.",
  },
  {
    key: "customized",
    label: "Customized Logistics",
    imageSrc: "/images/our-solution/services/Customized Logistics.png",
    imageAlt: "Customized logistics solutions",
    heading: "Customized Logistics",
    description: "Every business is unique—and so are their logistics needs. We work closely with you to create customized, cost-efficient transport and distribution solutions tailored precisely to your industry, scale, and operational workflows. Whether it's dedicated supply chains, time-sensitive consignments, or multi-city coordination, we design logistics that truly fit your business.",
  },
  {
    key: "pan-india",
    label: "Pan-India Operations",
    imageSrc: "/images/our-solution/services/Pan-India Operations.png",
    imageAlt: "Pan-India logistics network",
    heading: "Pan-India Operations",
    description: "Experience seamless connectivity to every corner of India. Our widespread operational network spans all major cities, industrial hubs, and emerging markets, delivering uninterrupted logistics support wherever your business takes you. With reliable last-mile connectivity and deep local expertise, your cargo arrives safely—no destination is out of reach.",
  },
 
  {
    key: "container",
    label: "Containerized Cargo Movement",
    imageSrc: "/images/our-solution/services/Containerized Cargo Movement.png",
    imageAlt: "Containerized cargo transport",
    heading: "Containerized Cargo Movement",
    description: "Protect your cargo from weather and theft while maximizing space with our containerized solutions. Ideal for valuable, fragile, or sensitive goods, our container trucks and trailers offer secure, standardized transport—ensuring safe passage from source to destination, no matter the distance or road conditions.",
  },
  {
    key: "specialized",
    label: "Specialized Fleet Sourcing",
    imageSrc: "/images/our-solution/services/Specialized Fleet Sourcing.png",
    imageAlt: "Specialized fleet vehicles",
    heading: "Specialized Fleet Sourcing",
    description: "Need something specific? We extend our services with access to rare and specialized vehicles—including 40ft trailers, pullers, multi-axle carriers, and more—via our vast network. No matter how unique or demanding your consignment, we find and deploy the right transport so you never have to compromise on logistics.",
  },
];

export default function OurSolution() {
  const [active, setActive] = useState<ServiceKey>("fleet");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeConfig = SERVICES.find((s) => s.key === active)!;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServiceSelect = (serviceKey: ServiceKey) => {
    setActive(serviceKey);
    setIsDropdownOpen(false);
  };

  return (
    <section id="our-solution" className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 sm:gap-3 text-blue-600 font-medium justify-center">
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-600 inline-block" />
        <span className="text-gray-600 font-normal text-sm sm:text-base">OUR SERVICES SECTION</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 sm:mt-5 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium leading-tight">
        <span className="text-gray-900">Our Logistics</span>{" "}
        <span className="text-blue-600">Solutions</span>
      </h2>

      {/* Tabs */}
      <div className="mt-8 sm:mt-10 px-4">
        {/* Mobile: Beautiful Custom Dropdown */}
        <div className="block sm:hidden" ref={dropdownRef}>
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                <span className="text-gray-800 font-medium text-sm">{activeConfig.label}</span>
              </div>
              <svg
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                <div className="py-2">
                  {SERVICES.map((service) => (
                    <button
                      key={service.key}
                      type="button"
                      onClick={() => handleServiceSelect(service.key)}
                      className={`w-full text-left px-5 py-3 hover:bg-blue-50 transition-colors duration-150 ${
                        active === service.key ? 'bg-blue-50 border-r-4 border-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-2.5 w-2.5 rounded-full ${
                          active === service.key ? 'bg-blue-600' : 'bg-gray-300'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          active === service.key ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {service.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tablet & Desktop: Grid Layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-3 max-w-6xl mx-auto">
            {SERVICES.map((s) => {
              const isActive = active === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(s.key)}
                  className={`relative px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-medium rounded-xl transition-all duration-300 text-center ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" 
                      : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <span className="block">{s.label}</span>
                </button>
              );
            })}
          </div>
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
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center rounded-full bg-white text-[#0A3AB6] pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-white/90"
                >
                  <span>Contact Us Now</span>
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


