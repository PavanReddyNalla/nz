import { Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LimitedOffer = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("inquiry-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-accent via-accent/90 to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce-subtle">
            <Clock className="h-5 w-5 text-secondary animate-pulse" />
            <span className="text-secondary font-semibold">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary animate-fade-in">
            Book Now & Get a FREE Skydiving Voucher
          </h2>
          <p className="text-xl text-secondary/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Experience the thrill of jumping over Queenstown — on us! 🪂
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg"
              onClick={scrollToForm}
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 shadow-elevated"
            >
              <Gift className="mr-2 h-5 w-5" />
              Claim Your Free Bonus Now
            </Button>
          </div>
          
          <p className="text-secondary/80 text-sm">
            ⏰ Limited seats available — Offer ends soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;
