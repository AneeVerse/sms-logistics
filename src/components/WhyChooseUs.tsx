"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 -mx-3 md:-mx-4 lg:-mx-6 bg-[#082E99]"
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
              We Are Logistics Improving
              <br className="hidden sm:block" />
              Our Skills To Fulfill Delivery
              <br className="hidden sm:block" />
              Of Any Level!
            </h2>
            
            {/* Text and Stats side by side */}
            <div className="mt-5 sm:mt-6 flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-12 items-start">
              <p className="text-white/90 leading-relaxed text-sm sm:text-base flex-1">
                Adipiscing eliAl iquam vulputate tortor area neclue
                com university viverra Suspen disse arfauci bussed
                dolor eget Sed drar urna hiftler Group irepres
                entantive loisticsti for operato vulputate tortor
                area neclue instagram area.
              </p>

              {/* Vertical divider line */}
              <div className="hidden xl:block w-px bg-white/20 self-stretch"></div>

              {/* Stats column */}
              <div className="flex flex-col sm:flex-row xl:flex-col gap-4 sm:gap-8 xl:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-blue-500/30 flex items-center justify-center">
                    <Image 
                      src="/images/why-choose-us/1.png" 
                      alt="Delivered goods" 
                      width={40} 
                      height={40} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">9.5M</div>
                    <div className="text-white/80 text-xs sm:text-sm">Delivered Goods</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-blue-500/30 flex items-center justify-center">
                    <Image 
                      src="/images/why-choose-us/earth.png" 
                      alt="Clients worldwide" 
                      width={40} 
                      height={40} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">15.9M</div>
                    <div className="text-white/80 text-xs sm:text-sm">Clients Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 inline-flex">
              <a href="#about" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-medium hover:bg-gray-100 transition-colors">
                <span className="hidden sm:inline">To Know More About Us</span>
                <span className="sm:hidden">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <path d="M7 17L17 7" strokeLinecap="round" />
                  <path d="M7 7h10v10" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


