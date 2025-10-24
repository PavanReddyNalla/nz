import { MessageSquare, FileText, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Share Your Travel Plans",
    description: "Tell us your dates, preferences, and dream experiences",
  },
  {
    icon: FileText,
    number: "2",
    title: "Get Personalized Itinerary",
    description: "Receive a detailed plan crafted by our NZ experts in 24 hours",
  },
  {
    icon: Plane,
    number: "3",
    title: "Confirm & Travel Stress-Free",
    description: "We handle all bookings, logistics, and support throughout your trip",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Your dream trip is just 3 simple steps away
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "backwards" }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20" />
              )}
              
              {/* Step Circle */}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-elevated transition-transform duration-300 hover:scale-110">
                <step.icon className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-secondary font-bold flex items-center justify-center text-sm shadow-soft">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
