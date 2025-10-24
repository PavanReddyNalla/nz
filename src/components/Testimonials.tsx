import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Our honeymoon in New Zealand was absolutely magical! The team planned everything perfectly — from romantic dinners to adventure activities. We'll cherish these memories forever.",
    trip: "14-Day Honeymoon Package",
  },
  {
    name: "The Patel Family",
    location: "Bangalore",
    rating: 5,
    text: "Traveling with kids can be stressful, but not with New Zealand Specialist! Every detail was thought through. Our children still talk about the glowworm caves and dolphin watching.",
    trip: "10-Day Family Tour",
  },
  {
    name: "Arjun & Friends",
    location: "Delhi",
    rating: 5,
    text: "We wanted adventure and nightlife — we got both! Bungy jumping, skydiving, and amazing bars in Queenstown. This was the trip of a lifetime with my best mates!",
    trip: "7-Day Adventure Tour",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          What Travellers Say About Us
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Trusted by 500+ Indian Travellers to New Zealand
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-sm text-primary mt-1">{testimonial.trip}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
