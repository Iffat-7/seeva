import { Layout } from "@/components/layout/Layout";
import chefImage from "@/assets/chef.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              About Sevva
            </h1>
            <div className="divider-gold" />
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Where Tradition Meets <span className="text-gradient-gold">Elegance</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nestled in the heart of Lahore near Lake City, Sevva Restaurant brings together 
                the rich culinary heritage of Pakistan with an atmosphere of refined elegance. 
                Our journey began with a simple vision: to create a space where families and 
                friends could gather over exceptional food, creating memories that last a lifetime.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every dish at Sevva tells a story — from our aromatic karahis cooked to perfection 
                in traditional style, to our signature BBQ platters that showcase the mastery of 
                charcoal grilling. We believe in using only the finest ingredients, including 
                authentic desi ghee and premium meats, to honor the recipes passed down through 
                generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're celebrating a special occasion, hosting a business dinner, or simply 
                enjoying a family meal, Sevva provides the perfect setting. Our warm hospitality 
                and attention to detail ensure that every visit is an experience to remember.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={chefImage}
                  alt="Head Chef at Seeva Restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 max-w-xs">
                <p className="text-primary font-serif text-lg mb-1">Our Head Chef</p>
                <p className="text-muted-foreground text-sm">
                  Bringing over 15 years of culinary expertise to every dish
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-lg border border-border card-hover">
              <h3 className="font-serif text-xl text-foreground mb-4">Authenticity</h3>
              <p className="text-muted-foreground text-sm">
                Traditional recipes prepared with genuine techniques and premium ingredients 
                that honor our culinary heritage.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg border border-border card-hover">
              <h3 className="font-serif text-xl text-foreground mb-4">Hospitality</h3>
              <p className="text-muted-foreground text-sm">
                Every guest is family. We take pride in creating warm, memorable experiences 
                for each person who walks through our doors.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg border border-border card-hover">
              <h3 className="font-serif text-xl text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                From ingredients to presentation to service, we pursue excellence in every 
                detail of your dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              The Perfect Setting
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sevva offers a family-friendly environment that's equally suited for intimate 
              dinners, grand celebrations, and corporate gatherings. Our elegant interiors, 
              comfortable seating options — including private areas — and attentive service 
              create the ideal backdrop for any occasion.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Family Gatherings
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Business Dinners
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Celebrations
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Private Events
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
