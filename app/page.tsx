import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapMockup from "@/components/MapMockup";
import PhoneMockups from "@/components/PhoneMockups";
import HowItWorks from "@/components/HowItWorks";
import IdeasGrid from "@/components/IdeasGrid";
import CapexTable from "@/components/CapexTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MapMockup />
        <PhoneMockups />
        <HowItWorks />
        <IdeasGrid />
        <CapexTable />
      </main>
      <Footer />
    </>
  );
}
