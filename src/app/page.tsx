"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SellScrapSection from "@/components/SellScrapSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Lovable-style Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 select-none"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(59, 130, 246, 0.05) 100%)"
        }}
      />

      <div className="relative z-10 ">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <WhyChooseSection />
        <SellScrapSection />
        <FooterCTA />
      </div>
    </div>
  );
};

export default Index;
