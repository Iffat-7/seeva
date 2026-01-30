import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import foodImage from "@/assets/food-hero.jpg";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={foodImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-primary text-sm uppercase tracking-widest">Reserve Your Table</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Ready to Experience<br />
            <span className="text-gradient-gold">Seeva?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether it's a family gathering, business dinner, or a romantic evening, 
            we're ready to make your visit unforgettable.
          </p>
          <div className="pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/reservations" className="flex items-center gap-2">
                Book Your Table
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
