import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ur";

interface Translations {
  [key: string]: {
    en: string;
    ur: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", ur: "ہوم" },
  "nav.menu": { en: "Menu", ur: "مینو" },
  "nav.about": { en: "About", ur: "ہمارے بارے میں" },
  "nav.contact": { en: "Contact", ur: "رابطہ" },
  "nav.book": { en: "Book a Table", ur: "ٹیبل بک کریں" },
  
  // Hero
  "hero.title1": { en: "Reserve the Moment.", ur: "لمحے کو محفوظ کریں۔" },
  "hero.title2": { en: "Experience Sevva.", ur: "سیوا کا تجربہ کریں۔" },
  "hero.subtitle": { 
    en: "Immerse yourself in the art of authentic Pakistani cuisine, where tradition meets elegance in every dish.",
    ur: "مستند پاکستانی کھانوں کے فن میں ڈوب جائیں، جہاں ہر پکوان میں روایت اور شائستگی کا سنگم ہے۔"
  },
  "hero.viewMenu": { en: "View Menu", ur: "مینو دیکھیں" },
  
  // Gallery
  "gallery.title": { en: "Culinary Artistry", ur: "پکوانوں کا فن" },
  "gallery.subtitle": { en: "A Visual Journey", ur: "ایک بصری سفر" },
  "gallery.feastTitle": { en: "A Traditional Pakistani Feast", ur: "روایتی پاکستانی دعوت" },
  "gallery.feastAlt": { en: "Elegant dining table with traditional Pakistani dishes including biryani, seekh kabab, handi, naan, and desserts", ur: "بریانی، سیخ کباب، ہانڈی، نان، اور میٹھے سمیت روایتی پاکستانی پکوانوں کے ساتھ خوبصورت کھانے کی میز" },
  "gallery.cat.feast": { en: "The Complete Experience", ur: "مکمل تجربہ" },
  
  // Highlights
  "highlights.title": { en: "The Sevva Experience", ur: "سیوا کا تجربہ" },
  "highlights.subtitle": { en: "Why Choose Us", ur: "ہمیں کیوں منتخب کریں" },
  "highlights.cuisine.title": { en: "Authentic Cuisine", ur: "مستند کھانے" },
  "highlights.cuisine.desc": { en: "Traditional Pakistani & Turkish-inspired dishes prepared with desi ghee and premium ingredients", ur: "دیسی گھی اور اعلیٰ اجزاء سے تیار روایتی پاکستانی اور ترکی سے متاثر پکوان" },
  "highlights.location.title": { en: "Prime Location", ur: "اہم مقام" },
  "highlights.location.desc": { en: "Situated near Lake City, Raiwind Road — easily accessible with ample parking", ur: "لیک سٹی، رائے ونڈ روڈ کے قریب — آسان رسائی اور کافی پارکنگ" },
  "highlights.hours.title": { en: "Open Daily", ur: "روزانہ کھلا" },
  "highlights.hours.desc": { en: "Monday through Sunday, 12:00 PM to Midnight — perfect for lunch, dinner, or late-night dining", ur: "پیر سے اتوار، دوپہر 12 بجے سے آدھی رات تک — لنچ، ڈنر یا رات کے کھانے کے لیے بہترین" },
  "highlights.ambiance.title": { en: "Premium Ambience", ur: "اعلیٰ ماحول" },
  "highlights.ambiance.desc": { en: "Elegant family-friendly atmosphere ideal for celebrations, gatherings, and memorable evenings", ur: "تقریبات، اجتماعات اور یادگار شاموں کے لیے خوبصورت خاندانی ماحول" },
  
  // Testimonials
  "testimonials.title": { en: "What Our Guests Say", ur: "ہمارے مہمان کیا کہتے ہیں" },
  "testimonials.subtitle": { en: "Guest Reviews", ur: "مہمانوں کے جائزے" },
  "testimonials.rating": { en: "4.8 out of 5 based on guest reviews", ur: "مہمانوں کے جائزوں کی بنیاد پر 5 میں سے 4.8" },
  "testimonials.1.name": { en: "Ahmed Khan", ur: "احمد خان" },
  "testimonials.1.text": { en: "The best karahi in Lahore! The ambience is perfect for family dinners. Highly recommend the Nawabi Butter Handi.", ur: "لاہور کی بہترین کڑاہی! ماحول خاندانی کھانوں کے لیے بہترین ہے۔ نوابی بٹر ہانڈی کی سفارش کرتا ہوں۔" },
  "testimonials.2.name": { en: "Fatima Malik", ur: "فاطمہ ملک" },
  "testimonials.2.text": { en: "Absolutely stunning restaurant. The Sunday brunch buffet is incredible — over 50 items and everything was delicious.", ur: "بالکل شاندار ریستوراں۔ اتوار کا برنچ بوفے لاجواب ہے — 50 سے زیادہ اشیاء اور سب کچھ لذیذ تھا۔" },
  "testimonials.3.name": { en: "Hassan Ali", ur: "حسن علی" },
  "testimonials.3.text": { en: "Celebrated my anniversary here. The staff was attentive, the food was exceptional, and the private seating was wonderful.", ur: "یہاں اپنی سالگرہ منائی۔ عملہ توجہ دینے والا تھا، کھانا غیر معمولی تھا، اور پرائیویٹ بیٹھک شاندار تھی۔" },
  
  // CTA
  "cta.reserve": { en: "Reserve Your Table", ur: "اپنا ٹیبل محفوظ کریں" },
  "cta.title": { en: "Ready to Experience", ur: "تجربہ کرنے کے لیے تیار ہیں" },
  "cta.subtitle": { en: "Whether it's a family gathering, business dinner, or a romantic evening, we're ready to make your visit unforgettable.", ur: "چاہے خاندانی اجتماع ہو، کاروباری ڈنر ہو، یا رومانٹک شام، ہم آپ کی ملاقات کو یادگار بنانے کے لیے تیار ہیں۔" },
  "cta.button": { en: "Book Your Table", ur: "اپنا ٹیبل بک کریں" },
  
  // Footer
  "footer.tagline": { en: "Experience the art of fine Pakistani cuisine in an atmosphere of warmth and elegance.", ur: "گرمجوشی اور شائستگی کے ماحول میں عمدہ پاکستانی کھانوں کے فن کا تجربہ کریں۔" },
  "footer.quickLinks": { en: "Quick Links", ur: "فوری لنکس" },
  "footer.hours": { en: "Opening Hours", ur: "کھلنے کے اوقات" },
  "footer.daily": { en: "Monday – Sunday", ur: "پیر – اتوار" },
  "footer.rights": { en: "All rights reserved.", ur: "جملہ حقوق محفوظ ہیں۔" },
  "footer.contact": { en: "Contact Us", ur: "ہم سے رابطہ کریں" },
  "footer.address": { en: "Adda Plot Roundabout, Raiwind Road, near Lake City, Lahore", ur: "ڈیا پلاٹ راؤنڈ اباؤٹ، رائے ونڈ روڈ، لیک سٹی کے قریب، لاہور" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
