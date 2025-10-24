import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop",
    price: "$1,299",
    category: "Romantic Getaway",
    duration: "7 Days"
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    price: "$899",
    category: "Beach Paradise",
    duration: "10 Days"
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop",
    price: "$1,599",
    category: "Luxury & Shopping",
    duration: "5 Days"
  },
  {
    id: 4,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    price: "$1,899",
    category: "Cultural Experience",
    duration: "6 Days"
  },
  {
    id: 5,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop",
    price: "$2,499",
    category: "Luxury Beach Resort",
    duration: "8 Days"
  },
  {
    id: 6,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    price: "$1,799",
    category: "Mountain Adventure",
    duration: "7 Days"
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="section bg-background py-20">
      <div className="container-pro">
        <div className="text-center mb-12">
          <span className="badge-ui mb-4">Popular Destinations</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Where Will You Go Next?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore handpicked destinations curated by our travel experts for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group card-ui overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                  <span>{destination.duration}</span>
                  <span className="text-2xl font-bold text-primary">{destination.price}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-accent to-accent-secondary text-white">
            View All Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
