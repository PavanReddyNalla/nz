import { Plane, Hotel, Map, HeadphonesIcon, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Best deals on flights worldwide with flexible booking options and instant confirmation",
    color: "text-primary"
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked luxury hotels and resorts with exclusive rates and premium amenities",
    color: "text-accent"
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your preferences, budget, and timeline",
    color: "text-secondary"
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Smart travel suggestions powered by AI to match your unique travel style",
    color: "text-accent-secondary"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated travel experts whenever you need",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for peace of mind throughout your entire journey",
    color: "text-accent"
  },
];

const Services = () => {
  return (
    <section className="section bg-muted/30 py-20">
      <div className="container-pro">
        <div className="text-center mb-16">
          <span className="badge-ui mb-4">Our Services</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for Perfect Travel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From planning to execution, we handle every detail to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-ui p-8 text-center group hover:shadow-elevated transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
