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

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            SMS Logistics is a trusted name in the transport and logistics industry, backed by two generations of 
            expertise and a strong commitment to reliability. With over 15 years of experienced staff, we 
            specialize in providing end-to-end transportation solutions that are fast, efficient, and customer-focused.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            We proudly own a modern fleet and also provide a wide range of vehicles sourced from our 
            certified vendor network to meet diverse customer requirements. Whether it's a full truckload, part 
            load, or specialized cargo, SMS Logistics ensures the seamless movement of goods across India.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Our strength lies in our wide network, strong vendor partnerships, and dedicated team, which 
            enables us to deliver on-time, safe, and cost-effective logistics solutions.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            At SMS Logistics, we believe in more than just moving goods — we believe in "Connecting 
            Direction." Our goal is to connect businesses, markets, and people by providing the right fleet at the 
            right time, every time.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6 md:p-7">
                <div className="text-blue-600 text-base sm:text-lg md:text-xl font-semibold mb-3">
                  Mission
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To deliver reliable, efficient, and customized logistics solutions, 
                  simplifying the way businesses move goods across India.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6 md:p-7">
                <div className="text-blue-600 text-base sm:text-lg md:text-xl font-semibold mb-3">
                  Vision
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To be India&apos;s premier logistics partner, setting industry benchmarks 
                  in service quality, innovation, and trust.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById("why-choose-us");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group inline-flex items-center rounded-lg bg-blue-600 text-white pl-4 sm:pl-5 pr-2 py-2 sm:py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-blue-700"
            >
              <span>Know More</span>
              <span className="ml-2 sm:ml-3 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-blue-600 ring-1 ring-inset ring-black/10 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
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


