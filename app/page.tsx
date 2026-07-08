import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Specs from "@/components/sections/Specs";
import ServiceArea from "@/components/sections/ServiceArea";
import Fleet from "@/components/sections/Fleet";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div id="top" className="overflow-hidden bg-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specs />
        <ServiceArea />
        <Fleet />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
