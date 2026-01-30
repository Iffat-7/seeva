import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export function StickyBookButton() {
  const location = useLocation();
  
  // Don't show on reservations page
  if (location.pathname === "/reservations") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
      <Button 
        variant="gold" 
        size="lg" 
        asChild
        className="shadow-[0_8px_30px_-4px_hsl(38,65%,50%,0.4)] hover:shadow-[0_12px_40px_-4px_hsl(38,65%,50%,0.5)]"
      >
        <Link to="/reservations" className="flex items-center gap-2">
          <CalendarCheck size={20} />
          <span className="hidden sm:inline">Book Now</span>
        </Link>
      </Button>
    </div>
  );
}
