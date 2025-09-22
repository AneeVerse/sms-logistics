"use client";

import Image from "next/image";

type Freight = {
  num: string;
  title: string;
  desc: string;
  img: string;
};

const freights: Freight[] = [
  {
    num: "01",
    title: "Truck Freight",
    desc:
      "Pacific hake false trevally queen parrotfish black prickleback moss",
    img: "@transportation/truck1.png",
  },
  {
    num: "02",
    title: "Ship Freight",
    desc:
      "Queen parrotfish black prickleback mosshead warbonnet sweeper.",
    img: "@transportation/ship1.png",
  },
  {
    num: "03",
    title: "Delivery Freight",
    desc:
      "Owens pupfish large eye bream kokanee sprat shrimpfish grunter.",
    img: "@transportation/delivery1.png",
  },
  {
    num: "04",
    title: "Train Freight",
    desc:
      "Blacksmelt sole Razorback sucker manefish. Giant sea bass sailfish",
    img: "@transportation/train1.png",
  },
];

export default function Transportation() {
  return (
    <section
      id="transportation"
      className="relative mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-10 md:gap-12 items-start">
        {/* Left: Heading and copy */}
        <div>
          <div className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
            Services
          </div>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-gray-900 leading-tight">
            Transportation
            <br className="hidden sm:block" />
            Services
          </h2>
          <p className="mt-5 sm:mt-6 text-gray-600 leading-relaxed max-w-2xl text-sm sm:text-base">
            Rockling Devario deep sea bonefish cutthroat trout streamer fish
            kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand
            diver.
          </p>
          <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed max-w-2xl text-sm sm:text-base">
            Pacific hake false trevally queen parrotfish black prickleback
            mosshead warbonnet sweeper! Greenling sleeper. Owens pupfish large
            eye bream kokanee sprat shrimpfish grunter ratfish.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-500 text-emerald-700 hover:bg-emerald-50 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold transition-colors"
            >
              All Services
            </a>
          </div>
        </div>

        {/* Right: Grid of freight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {freights.map((f) => (
            <div key={f.num} className="group">
              {/* <div className="h-40 flex items-end justify-center">
                <Image
                  src={f.img}
                  alt={f.title}
                  width={320}
                  height={140}
                  className="h-36 w-auto object-contain"
                />
              </div> */}
              <div className="mt-2 sm:mt-4 flex items-baseline gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-200">
                  {f.num}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {f.title}
                </h3>
              </div>
              <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed max-w-xs text-sm sm:text-base">
                {f.desc}
              </p>
              <div className="mt-4 sm:mt-6">
                <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7" strokeLinecap="round" />
                    <path d="M7 7h10v10" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


