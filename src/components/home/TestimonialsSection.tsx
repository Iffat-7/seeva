import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    rating: 5,
    text: "The best karahi in Lahore! The ambience is perfect for family dinners. Highly recommend the Nawabi Butter Handi.",
  },
  {
    name: "Fatima Malik",
    rating: 5,
    text: "Absolutely stunning restaurant. The Sunday brunch buffet is incredible — over 50 items and everything was delicious.",
  },
  {
    name: "Hassan Ali",
    rating: 5,
    text: "Celebrated my anniversary here. The staff was attentive, the food was exceptional, and the private seating was wonderful.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Guest Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg bg-card border border-border card-hover"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <p className="font-serif text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4.8 out of 5 based on guest reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
