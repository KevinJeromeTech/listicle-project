import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Stack from "../components/Stack";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BackgroundEffects from "../components/BackgroundEffects";
import Capabilities from "../components/Capabilities";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#111111] pt-24 text-white">
      <ScrollProgress />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Capabilities />
      <Services />
      <Solutions />
      <Stack />
      <CaseStudies />
      <Process />
      <ContactSection />
      <Footer />
    </main>
  );
}