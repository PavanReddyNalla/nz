import { Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const offers = [
  {
    id: 1,
    title: "Summer Paradise Sale",
    description: "Book tropical getaways and save up to 40% on select destinations",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    title: "European Explorer",
    description: "Multi-city European tours with exclusive hotel upgrades included",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    title: "Luxury Honeymoon Package",
    description: "Romantic escapes to exotic destinations with premium services",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
];

const CountdownTimer = ({ deadline }: { deadline: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex gap-2">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-primary/10 rounded-lg px-2 py-1 min-w-[50px]">
          <span className="text-xl font-bold text-primary">{value.toString().padStart(2, "0")}</span>
          <span className="text-xs text-muted-foreground capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const SpecialOffers = () => {
  return (
    <section className="section bg-background py-20">
      <div className="container-pro">
        <div className="text-center mb-12">
          <span className="badge-ui mb-4">Limited Time Offers</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Exclusive Deals You Can't Miss
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grab these incredible offers before they expire. Your dream vacation awaits!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="card-ui overflow-hidden group hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-accent-secondary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Ends in:</span>
                </div>
                <CountdownTimer deadline={offer.deadline} />
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-accent to-accent-secondary text-white"
                >
                  Claim Offer
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

export default SpecialOffers;
