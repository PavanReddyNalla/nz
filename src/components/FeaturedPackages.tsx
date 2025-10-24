import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import queenstown from "@/assets/queenstown-adventure.jpg";
import mountCook from "@/assets/mount-cook-family.jpg";
import glowworm from "@/assets/glowworm-group.jpg";

const packages = [
  {
    image: queenstown,
    title: "7-Day Romantic Escape",
    subtitle: "Queenstown & Milford Sound",
    description: "Perfect for honeymooners seeking adventure and romance",
  },
  {
    image: mountCook,
    title: "10-Day Family Adventure",
    subtitle: "North & South Island Highlights",
    description: "Kid-friendly activities with stunning natural wonders",
  },
  {
    image: glowworm,
    title: "14-Day Ultimate NZ Tour",
    subtitle: "Complete New Zealand Experience",
    description: "From glowworm caves to glaciers and everything between",
  },
];

const FeaturedPackages = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("inquiry-form");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Popular New Zealand Packages
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Handcrafted itineraries that showcase the best of New Zealand
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "backwards" }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-accent text-sm font-semibold mb-2">{pkg.subtitle}</p>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{pkg.description}</p>
                <Button 
                  onClick={scrollToForm}
                  className="bg-accent hover:bg-accent/90 text-secondary font-semibold"
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
