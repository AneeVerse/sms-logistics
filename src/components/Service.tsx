"use client";

import Image from "next/image";

export default function Service() {
  return (
    <section id="services" className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-6 items-center">
        {/* Left: Headline and cards */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 text-[#D11E2B] font-medium">
            <span className="h-3 w-3 rounded-full bg-[#D11E2B] inline-block" />
            <span className="text-black font-normal">LOGIX AT YOUR SERVICE</span>
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight">
            <span className="text-[#0A3AB6]">We Provide</span>{" "}
            <span className="text-[#D11E2B]">End-to-end</span>
            <br />
            <span className="text-[#D11E2B]">Logistics Services</span>{" "}
            <span className="text-[#0A3AB6]">for Timely,</span>
            <br />
            <span className="text-[#0A3AB6]">Secure Delivery.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl bg-[#F5F7FB] p-6 md:p-7 grid grid-cols-[auto_1fr] gap-5 items-start">
              <div className="text-[#D11E2B] text-lg font-semibold">01<br />Vision</div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to lead the global logistics industry by providing
                seamless, reliable, and innovative solutions that not only meet
                but exceed client expectations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-[#F5F7FB] p-6 md:p-7 grid grid-cols-[auto_1fr] gap-5 items-start">
              <div className="text-[#D11E2B] text-lg font-semibold">02<br />Mission</div>
              <p className="text-gray-700 leading-relaxed">
                Efficient supply chain by offering innovative and responsible
                logistics solutions that enhance operational performance, reduce
                costs, and foster growth in a dynamic global market.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Truck with blue blocks background */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-start">
          {/* Background blocks positioned behind truck */}
          <div className="absolute top-8 right-2 lg:right-8 h-[120px] w-[90px] rounded-2xl bg-[#1E52E4]/80 z-0" />
          <div className="absolute top-16 right-10 lg:right-16 h-[170px] w-[120px] rounded-2xl bg-[#0832A8] z-0" />

          <div className="relative z-10">
            <Image
              src="/images/service/right-img.png"
              alt="Logistics truck"
              width={700}
              height={540}
              className="w-full max-w-[480px] lg:max-w-[520px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


