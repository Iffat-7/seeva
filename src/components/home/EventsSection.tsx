import { Calendar, Music, Utensils, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Live Qawwali Night",
    titleUr: "لائیو قوالی نائٹ",
    date: "Every Friday",
    dateUr: "ہر جمعہ",
    time: "8:00 PM - 11:00 PM",
    description: "Experience the soul-stirring melodies of traditional Sufi music while enjoying our finest cuisine.",
    descriptionUr: "ہمارے بہترین کھانوں سے لطف اندوز ہوتے ہوئے روایتی صوفی موسیقی کی روح پرور دھنوں کا تجربہ کریں۔",
    icon: Music,
    color: "text-purple-400",
  },
  {
    title: "Family BBQ Sunday",
    titleUr: "فیملی بی بی کیو سنڈے",
    date: "Every Sunday",
    dateUr: "ہر اتوار",
    time: "12:00 PM - 4:00 PM",
    description: "Bring your family for our special BBQ brunch featuring live grilling and unlimited sides.",
    descriptionUr: "اپنے خاندان کو ہمارے خصوصی بی بی کیو برنچ کے لیے لائیں جس میں لائیو گرلنگ اور لامحدود سائیڈز شامل ہیں۔",
    icon: Utensils,
    color: "text-orange-400",
  },
  {
    title: "Private Dining Experience",
    titleUr: "پرائیویٹ ڈائننگ",
    date: "By Reservation",
    dateUr: "ریزرویشن سے",
    time: "Flexible timing",
    description: "Book our exclusive private dining room for birthdays, anniversaries, or corporate events.",
    descriptionUr: "سالگرہ، سالگرہ، یا کارپوریٹ تقریبات کے لیے ہمارا خصوصی پرائیویٹ ڈائننگ روم بک کریں۔",
    icon: Users,
    color: "text-primary",
  },
];

export function EventsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">
            {t("events.subtitle")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {t("events.title")}
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border p-6 card-hover relative overflow-hidden"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${event.color}`}>
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {language === "ur" ? event.titleUr : event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  <span>{language === "ur" ? event.dateUr : event.date}</span>
                  <span className="text-border">•</span>
                  <span>{event.time}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed" dir={language === "ur" ? "rtl" : "ltr"}>
                  {language === "ur" ? event.descriptionUr : event.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="gold" asChild>
            <Link to="/reservations">Book for an Event</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
