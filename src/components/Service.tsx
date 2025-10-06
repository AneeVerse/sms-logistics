"use client";

import Image from "next/image";

export default function Service() {
  return (
    <section id="services" className="relative mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left: Headline and cards */}
        <div className="order-1 lg:order-1">
          <div className="flex items-center gap-2 sm:gap-3 text-blue-600 font-medium">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-600 inline-block" />
            <span className="text-gray-600 font-normal text-sm sm:text-base">SMS LOGISTICS AT YOUR SERVICE</span>
          </div>

          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium leading-tight">
            <span className="text-gray-900">About</span>{" "}
            <span className="text-blue-600">Us</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            At SMS Logistics, we specialize in providing flexible and reliable transport solutions across India. 
            We are fleet owners and transport contractors, supported by an extensive network of trusted vendors. 
            Our commitment to excellence and reliability has made us a preferred partner for businesses of all sizes across the nation.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5">
                <div className="text-blue-600 text-sm sm:text-base font-semibold mb-2">
                  Mission
                </div>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  To deliver reliable, efficient, and customized logistics solutions, 
                  simplifying the way businesses move goods across India.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5">
                <div className="text-blue-600 text-sm sm:text-base font-semibold mb-2">
                  Vision
                </div>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  To be India&apos;s premier logistics partner, setting industry benchmarks 
                  in service quality, innovation, and trust.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5">
              <h3 className="text-blue-600 font-semibold text-sm sm:text-base mb-3">Why Choose SMS Logistics?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-medium">•</span>
                  <span>Owned Fleet + Market Network</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-medium">•</span>
                  <span>30+ Years Combined Experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-medium">•</span>
                  <span>Pan-India Coverage with 100+ Partners</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-medium">•</span>
                  <span>Customer-Centric Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Truck with blue blocks background */}
        <div className="relative order-2 lg:order-2 flex justify-center lg:justify-start">
          {/* Background blocks positioned behind truck - responsive positioning */}
          <div className="absolute top-4 sm:top-6 md:top-8 right-1 sm:right-2 lg:right-6 xl:right-8 h-[80px] w-[60px] sm:h-[100px] sm:w-[75px] md:h-[120px] md:w-[90px] rounded-xl sm:rounded-2xl bg-[#1E52E4]/80 z-0" />
          <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-10 lg:right-12 xl:right-16 h-[110px] w-[85px] sm:h-[140px] sm:w-[105px] md:h-[170px] md:w-[120px] rounded-xl sm:rounded-2xl bg-[#0832A8] z-0" />

          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-[520px]">
            <Image
              src="/images/service/right-img.png"
              alt="Logistics truck"
              width={700}
              height={540}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


