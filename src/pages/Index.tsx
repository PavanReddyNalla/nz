import Hero from "@/components/Hero";
/* removed direct InquiryForm import because the footer now contains the form */
// import InquiryForm from "@/components/InquiryForm";
import Specialties from "@/components/Specialties";
import FeaturedPackages from "@/components/FeaturedPackages";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import LimitedOffer from "@/components/LimitedOffer";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* InquiryForm removed from here — it's now available from the footer */}
      <Specialties />
      <FeaturedPackages />
      <Testimonials />
      <HowItWorks />
      <LimitedOffer />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;