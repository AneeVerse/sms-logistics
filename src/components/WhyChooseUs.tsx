"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#082E99] overflow-x-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left: Large illustrative image */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image
              src="/images/why-choose-us/why-choose-us1.jpg"
              alt="Cargo port overview"
              width={900}
              height={650}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right: Content block */}
          <div className="text-white flex flex-col justify-center">
            <div className="text-white/80 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">Why Choose Us</div>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-semibold leading-tight">
              Experience, Reliability, and 
              <br className="hidden sm:block" />
              Nationwide Reach That&apos;s Our 
             
              Promise
            </h2>
            
            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-2xl bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Image 
                    src="/images/why-choose-us/1.png" 
                    alt="Years of experience" 
                    width={56} 
                    height={56} 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">30+</div>
                  <div className="text-white/90 text-sm sm:text-base font-medium">Years Combined</div>
                  <div className="text-white/70 text-xs leading-relaxed mt-1">Delivering excellence in logistics and transport services.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-2xl bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Image 
                    src="/images/why-choose-us/earth.png" 
                    alt="Network operations" 
                    width={56} 
                    height={56} 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">100+</div>
                  <div className="text-white/90 text-sm sm:text-base font-medium">Network Partners</div>
                  <div className="text-white/70 text-xs leading-relaxed mt-1">Extensive logistics network covering all major cities across India.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 inline-flex">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-medium hover:bg-gray-100 transition-colors"
              >
                <span>Contact Us Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <path d="M7 17L17 7" strokeLinecap="round" />
                  <path d="M7 7h10v10" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


