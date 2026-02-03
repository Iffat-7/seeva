import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    altKey: "gallery.biryani",
    categoryKey: "gallery.cat.rice",
  },
  {
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    altKey: "gallery.seekhKabab",
    categoryKey: "gallery.cat.bbq",
  },
  {
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    altKey: "gallery.naan",
    categoryKey: "gallery.cat.tandoor",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    altKey: "gallery.handi",
    categoryKey: "gallery.cat.handi",
  },
  {
    src: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
    altKey: "gallery.gulabJamun",
    categoryKey: "gallery.cat.desserts",
  },
  {
    src: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&q=80",
    altKey: "gallery.tawaChicken",
    categoryKey: "gallery.cat.tawa",
  },
];

export function GallerySection() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg aspect-square cursor-pointer group",
                "transition-all duration-500 ease-out",
                hoveredIndex === index ? "scale-[1.02] z-10" : "scale-100"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={t(image.altKey)}
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  hoveredIndex === index ? "scale-110" : "scale-100"
                )}
                loading="lazy"
              />
              
              {/* Overlay with steam effect */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent",
                  "flex flex-col justify-end p-4 transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                {/* Steam animation */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-60">
                  <div className="steam-animation">
                    <span className="steam-particle" />
                    <span className="steam-particle delay-100" />
                    <span className="steam-particle delay-200" />
                  </div>
                </div>
                
                <p className="text-primary text-xs uppercase tracking-wider mb-1">
                  {t(image.categoryKey)}
                </p>
                <p className="text-foreground font-serif text-lg">{t(image.altKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steam-animation {
          display: flex;
          gap: 8px;
        }
        .steam-particle {
          display: block;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: steam 2s ease-out infinite;
        }
        .steam-particle.delay-100 {
          animation-delay: 0.3s;
        }
        .steam-particle.delay-200 {
          animation-delay: 0.6s;
        }
        @keyframes steam {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-40px) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
