import MainHeader from "@/components/shared/MainHeader";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <div className="pt-20">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default PricingPage;