import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import TravelTypes from "@/components/TravelTypes";
import TopRoutes from "@/components/TopRoutes";
import HowItWorks from "@/components/HowItWorks";
import Offers from "@/components/Offers";
import Loyalty from "@/components/Loyalty";
import AppDownload from "@/components/AppDownload";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 wave-bg">
        <Hero />
        <FeaturesBar />
        <TravelTypes />
        <TopRoutes />
        <HowItWorks />
        <Offers />
        <Loyalty />
        <AppDownload />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
