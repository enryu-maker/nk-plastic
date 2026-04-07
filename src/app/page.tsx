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
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <WhyChooseSection />
        <SellScrapSection />
      </main>
      <FooterCTA />
    </div>
  );
};

export default Index;
