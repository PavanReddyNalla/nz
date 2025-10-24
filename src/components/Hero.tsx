import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nz.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("inquiry-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          New Zealand Gold Specialists: Your Journey, 
Polished to Perfection. <br />
          <span className="text-accent">with the Experts</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in">
          Honeymoon, Family, Friends & Group Tours — tailor-made just for you.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            size="lg"
            onClick={handleCallClick}
            className="bg-accent hover:bg-accent/90 text-secondary font-semibold text-lg px-8 py-6 shadow-elevated"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToForm}
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get Free Itinerary
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-95">
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">✓</span>
            <span>Certified NZ Specialist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">✓</span>
            <span>500+ Happy Travellers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">★</span>
            <span>4.9 Rated(Authorized New Zealand Tourism Partner )</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
