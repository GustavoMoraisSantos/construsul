import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Products from "@/components/Products";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Products />
        <Services />
        <SocialProof />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
