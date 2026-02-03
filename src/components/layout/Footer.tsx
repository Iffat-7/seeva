import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-deep border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-3xl tracking-wider text-gradient-gold">
              SEVVA
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com/sevvarestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/sevvarestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">{t("footer.quickLinks")}</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.menu")}
              </Link>
              <Link to="/reservations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.book")}
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.about")}
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">{t("footer.hours")}</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-sm">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div className="text-muted-foreground">
                  <p>{t("footer.daily")}</p>
                  <p className="text-foreground">12:00 PM – 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <a 
                href="tel:+923151773177" 
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span>+92 315 177 3177</span>
              </a>
              <a 
                href="mailto:buttcaterers786@gmail.com" 
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span>buttcaterers786@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center space-y-3">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sevva Restaurant. {t("footer.rights")}
          </p>
          <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
            Powered by <span className="text-primary font-medium">Effat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
