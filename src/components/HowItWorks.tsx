import Image from "next/image";

type Step = {
  num: string;
  title: string;
  desc: string;
  src: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Request A Quote",
    desc: "There are many variation sear passages orem",
    src: "/images/how-it-works/1.png",
  },
  {
    num: "02",
    title: "Call Back From Office",
    desc: "There are many variation sear passages orem",
    src: "/images/how-it-works/2.png",
  },
  {
    num: "03",
    title: "Delivery Available",
    desc: "There are many variation sear passages orem",
    src: "/images/how-it-works/3.png",
  },
  {
    num: "04",
    title: "Deliver Shipping",
    desc: "There are many variation sear passages orem",
    src: "/images/how-it-works/4.png",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 -mx-2 sm:-mx-3 md:-mx-4 lg:-mx-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/how-it-works/how-its-work-bg.png')"
      }}
    >
       {/* Blue color overlay (adjust opacity as needed) */}
       <div className="absolute inset-0 bg-[#0A2FB6] opacity-60" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="relative text-center text-white" style={{ zIndex: 10 }}>
          <div className="text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">How It Works</div>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold leading-tight">
            How We Operate Unveiling
            <br className="hidden sm:block" />
            Our Logistics Process
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-10 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8 xl:gap-x-10">
            {steps.map((s, i) => (
              <div key={s.num} className="relative flex flex-col items-center text-center group">
                {/* Circle with icon and number badge */}
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <Image 
                    src={s.src} 
                    alt={s.title} 
                    width={72} 
                    height={72} 
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain flip-icon" 
                  />
                  <span className="absolute top-3 right-0 sm:top-4 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#28C2D5] text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center">
                    {s.num}
                  </span>
                </div>

                {/* Connector arrow to next step (desktop only) */}
                {i < steps.length - 1 && (
                  <svg
                    viewBox="0 0 160 50"
                    className="hidden lg:block absolute top-10 md:top-12 right-[-60px] xl:right-[-70px] w-32 xl:w-40 h-10 xl:h-12 text-white/95"
                    aria-hidden="true"
                  >
                    <path d="M2 32 C 40 4, 120 4, 158 32" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M146 25 l10 7 -10 7" fill="currentColor" />
                  </svg>
                )}

                <h3 className="mt-5 sm:mt-6 text-white text-base sm:text-lg md:text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-[240px] sm:max-w-[260px] text-white/80 text-sm md:text-base leading-relaxed px-2 sm:px-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


