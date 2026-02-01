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
  
  // Events
  "events.title": { en: "Special Events", ur: "خصوصی پروگرام" },
  "events.subtitle": { en: "Join us for memorable occasions", ur: "یادگار مواقع کے لیے ہمارے ساتھ شامل ہوں" },
  
  // CTA
  "cta.title": { en: "Ready for an Unforgettable Evening?", ur: "ایک ناقابل فراموش شام کے لیے تیار ہیں؟" },
  "cta.subtitle": { en: "Book your table now and experience the finest Pakistani cuisine.", ur: "ابھی اپنا ٹیبل بک کریں اور بہترین پاکستانی کھانوں کا تجربہ کریں۔" },
  
  // Voice AI
  "voice.title": { en: "Book by Voice", ur: "آواز سے بکنگ" },
  "voice.subtitle": { en: "Talk to our AI assistant", ur: "ہمارے AI اسسٹنٹ سے بات کریں" },
  "voice.start": { en: "Start Voice Booking", ur: "آواز سے بکنگ شروع کریں" },
  "voice.stop": { en: "End Conversation", ur: "گفتگو ختم کریں" },
  
  // Footer
  "footer.tagline": { en: "Experience the art of authentic Pakistani cuisine in an elegant setting.", ur: "ایک شاندار ماحول میں مستند پاکستانی کھانوں کے فن کا تجربہ کریں۔" },
  "footer.quickLinks": { en: "Quick Links", ur: "فوری لنکس" },
  "footer.hours": { en: "Hours", ur: "اوقات" },
  "footer.daily": { en: "Daily", ur: "روزانہ" },
  "footer.rights": { en: "All rights reserved.", ur: "جملہ حقوق محفوظ ہیں۔" },
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
