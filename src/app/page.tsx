import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import HowItWorks from "@/components/HowItWorks";
import OurSolution from "@/components/OurSolution";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPresence from "@/components/GlobalPresence";
import FloatingPoster from "@/components/FloatingPoster";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FloatingActionButton from "@/components/FloatingActionButton";

export default function Home() {
  return (
    <div className="font-sans min-h-screen overflow-x-hidden">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-white overflow-x-hidden max-w-full">
        <Service />
        <HowItWorks />
        <OurSolution />
        <WhyChooseUs />
        <Contact />
        <GlobalPresence />
        <FloatingPoster />
        <Footer />
      </div>
      <FloatingActionButton />
    </div>
  );
}
