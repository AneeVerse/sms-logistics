import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import HowItWorks from "@/components/HowItWorks";
import OurSolution from "@/components/OurSolution";
import Transportation from "@/components/Transportation";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPresence from "@/components/GlobalPresence";
import FloatingPoster from "@/components/FloatingPoster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Service />
      <HowItWorks />
      <Transportation />
      <OurSolution />
      <WhyChooseUs />
      <GlobalPresence />
      <FloatingPoster />
      <Footer />
    
    </div>
  );
}
