import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyBookButton } from "@/components/StickyBookButton";
import ChatWidget from "@/components/chat/ChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="min-h-screen pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
      
      <StickyBookButton />
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
