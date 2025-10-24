import { Heart, Users, Baby, UsersRound } from "lucide-react";



const specialties = [
  {
    icon: Heart,
    title: "NZ Honeymoon Specialists",
    description: "Romantic escapes & private getaways tailored for newlyweds",
  },
  {
    icon: Users,
    title: "NZ Friends Tour Specialists",
    description: "Adventure & nightlife packages for unforgettable memories",
  },
  {
    icon: Baby,
    title: "NZ Family Tour Specialists",
    description: "Kid-friendly plans & safe travel for all ages",
  },
  {
    icon: UsersRound,
    title: "NZ Group Tour Specialists",
    description: "Large group logistics made easy and stress-free",
  },
];

const Newzealandspecialist = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Why Choose New Zealand Specialist?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          We're not just tour operators — we're New Zealand experts who craft experiences.
        </p>
         <img
              src="images\newzealandtrip.jpg"
              alt="Certificate"
              className="object-contain rounded-lg w-full"
            />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "backwards" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
         <section className="py-8 bg-background">
      <div className="container mx-auto px-4 mt-8">
        <img
          src="/images/traveller.jpg"
          alt="USPs"
          className="object-contain rounded-lg w-full max-w-6xl mx-auto"
        />
      </div>
    </section>
      </div>

    </section>
  );
};

export default Newzealandspecialist;