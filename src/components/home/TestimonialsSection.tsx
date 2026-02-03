import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    nameKey: "testimonials.1.name",
    textKey: "testimonials.1.text",
    rating: 5,
  },
  {
    nameKey: "testimonials.2.name",
    textKey: "testimonials.2.text",
    rating: 5,
  },
  {
    nameKey: "testimonials.3.name",
    textKey: "testimonials.3.text",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">{t("testimonials.subtitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t("testimonials.title")}
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
                "{t(testimonial.textKey)}"
              </p>

              <p className="font-serif text-foreground">{t(testimonial.nameKey)}</p>
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
            <span className="text-muted-foreground text-sm">{t("testimonials.rating")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
