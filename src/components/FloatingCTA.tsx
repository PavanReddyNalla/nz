import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in planning a New Zealand trip.", "_blank");
  };

  return (
    <>
      {/* Call Button */}
      <Button
        onClick={handleCallClick}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 hover:scale-110 shadow-elevated p-0 md:hidden animate-fade-in transition-transform duration-300"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6 text-secondary" />
      </Button>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 hover:scale-110 shadow-elevated p-0 animate-fade-in transition-transform duration-300"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-6 w-6 text-white animate-bounce-subtle" />
      </Button>
    </>
  );
};

export default FloatingCTA;
