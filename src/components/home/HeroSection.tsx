import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant restaurant interior with warm candlelight ambiance"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          {/* Decorative element */}
          <div className="divider-gold mb-8" />
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight">
            Reserve the Moment.
            <br />
            <span className="text-gradient-gold">Experience Sevva.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Immerse yourself in the art of authentic Pakistani cuisine, where tradition meets elegance in every dish.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/reservations">Book a Table</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
