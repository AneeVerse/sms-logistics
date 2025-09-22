import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Service />
    </div>
  );
}
