import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="font-serif text-8xl md:text-9xl text-gradient-gold">404</div>
        <h1 className="font-serif text-2xl md:text-3xl text-foreground">
          Page Not Found
        </h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. 
          Let us guide you back to where the magic happens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="gold" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/menu" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              View Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
