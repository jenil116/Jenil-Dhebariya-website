import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <Portfolio />
      <Services />
      <Testimonials />
      <About />
      <Reviews />
      <FinalCTA />
      <Footer />
    </>
  );
}
