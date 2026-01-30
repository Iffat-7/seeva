import { UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Authentic Cuisine",
    description: "Traditional Pakistani & Turkish-inspired dishes prepared with desi ghee and premium ingredients",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Situated near Lake City, Raiwind Road — easily accessible with ample parking",
  },
  {
    icon: Clock,
    title: "Open Daily",
    description: "Monday through Sunday, 12:00 PM to Midnight — perfect for lunch, dinner, or late-night dining",
  },
  {
    icon: Star,
    title: "Premium Ambience",
    description: "Elegant family-friendly atmosphere ideal for celebrations, gatherings, and memorable evenings",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Seeva Experience
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-background border border-border card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
