import { useLanguage } from "@/contexts/LanguageContext";
import feastImage from "@/assets/feast-table.jpg";

export function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">
            {t("gallery.subtitle")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {t("gallery.title")}
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Single Large Image */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={feastImage}
              alt={t("gallery.feastAlt")}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <div className="text-center">
                <p className="text-primary text-sm uppercase tracking-widest mb-2">
                  {t("gallery.cat.feast")}
                </p>
                <p className="font-serif text-2xl md:text-3xl text-foreground">
                  {t("gallery.feastTitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
