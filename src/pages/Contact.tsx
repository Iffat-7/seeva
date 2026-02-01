import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Contact Us
            </h1>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg border border-border p-8 card-hover">
                <h2 className="font-serif text-2xl text-foreground mb-6">Visit Us</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Adda Plot Roundabout, Raiwind Road,<br />
                        opposite GO Pump, near Lake City,<br />
                        Lahore, Punjab 54790, Pakistan
                      </p>
                      <a
                        href="https://maps.google.com/?q=Sevva+Restaurant+Lahore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                      >
                        Get Directions <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Phone / WhatsApp</h3>
                      <a
                        href="tel:+923151773177"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        +92 315 177 3177
                      </a>
                      <p className="text-muted-foreground text-xs mt-1">
                        Available for calls and WhatsApp messages
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Email</h3>
                      <a
                        href="mailto:buttcaterers786@gmail.com"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        buttcaterers786@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday – Sunday
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        12:00 PM – 12:00 AM (Midnight)
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">
                        Hours may vary on public holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Reservation CTA */}
              <div className="bg-muted/30 rounded-lg border border-border p-8 text-center">
                <h3 className="font-serif text-xl text-foreground mb-3">Ready to Book?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Reserve your table online or call us directly
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/reservations">Book Online</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+923151773177">Call Now</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <div className="bg-card rounded-lg border border-border overflow-hidden h-[500px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0547889774825!2d74.21574557634877!3d31.378788674277376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855f77c8e1b7d%3A0x7c8e1b7d77c8e1b7!2sRaiwind%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706644800000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sevva Restaurant Location"
                  className="grayscale contrast-125"
                />
              </div>
              <p className="text-muted-foreground text-xs text-center">
                Located opposite GO Pump, near Lake City entrance
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
