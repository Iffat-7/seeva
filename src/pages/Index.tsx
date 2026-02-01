import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { GallerySection } from "@/components/home/GallerySection";
import { EventsSection } from "@/components/home/EventsSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GallerySection />
      <EventsSection />
      <HighlightsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
