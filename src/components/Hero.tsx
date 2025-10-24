import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, checkIn, travelers });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.coverr.co/videos/coverr-scenic-aerial-view-of-a-tropical-island-5360/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 z-[1]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm backdrop-blur-md border border-white/20">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
          AI-Powered Travel Planning • 24/7 Support
        </div>
        <h1 className="font-heading text-balance text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Discover Your Perfect
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent">
            GlobalEscapes Journey
          </span>
        </h1>
        
        <p className="text-balance text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95 animate-fade-in">
          Luxury travel planning made effortless. Custom vacations, exclusive hotels, seamless flights — all tailored for you.
        </p>
        
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up">
          <form onSubmit={handleSearch} className="glass backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-elevated">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-white/90 rounded-lg px-4 py-3">
                <MapPin className="h-5 w-5 text-primary" />
                <Input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border-0 bg-transparent p-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-3 bg-white/90 rounded-lg px-4 py-3">
                <Calendar className="h-5 w-5 text-primary" />
                <Input
                  type="date"
                  placeholder="Check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-0 bg-transparent p-0 text-foreground focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-3 bg-white/90 rounded-lg px-4 py-3">
                <Users className="h-5 w-5 text-primary" />
                <Input
                  type="number"
                  placeholder="Travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="border-0 bg-transparent p-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-accent to-accent-secondary hover:opacity-90 text-white font-semibold py-6"
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base opacity-95">
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">✓</span>
            <span>2000+ Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">✓</span>
            <span>100k+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xl">★</span>
            <span>4.9/5 Rating · 10k+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
