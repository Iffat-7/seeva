import { UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HighlightsSection() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: UtensilsCrossed,
      titleKey: "highlights.cuisine.title",
      descKey: "highlights.cuisine.desc",
    },
    {
      icon: MapPin,
      titleKey: "highlights.location.title",
      descKey: "highlights.location.desc",
    },
    {
      icon: Clock,
      titleKey: "highlights.hours.title",
      descKey: "highlights.hours.desc",
    },
    {
      icon: Star,
      titleKey: "highlights.ambiance.title",
      descKey: "highlights.ambiance.desc",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">{t("highlights.subtitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t("highlights.title")}
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
              <h3 className="font-serif text-xl text-foreground mb-3">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
