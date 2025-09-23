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
            <span className="text-gray-600 font-normal text-sm sm:text-base">LOGIX AT YOUR SERVICE</span>
          </div>

          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium leading-tight">
            <span className="text-gray-900">Moving India Forward,</span>{" "}
            <span className="text-blue-600">One Delivery </span>
          
            <span className="text-blue-600">at a Time</span>
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6 md:p-7 grid grid-cols-[auto_1fr] gap-4 sm:gap-5 items-start">
              <div className="text-blue-600 text-base sm:text-lg font-semibold leading-tight">
                01<br />Mission
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To deliver reliable, efficient, and customized logistics solutions, 
                simplifying the way businesses move goods across India.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6 md:p-7 grid grid-cols-[auto_1fr] gap-4 sm:gap-5 items-start">
              <div className="text-blue-600 text-base sm:text-lg font-semibold leading-tight">
                02<br />Vision
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To be India&apos;s premier logistics partner, setting industry benchmarks 
                in service quality, innovation, and trust.
              </p>
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


