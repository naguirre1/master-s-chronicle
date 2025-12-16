import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Skull } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blood/20 mb-6">
          <Skull className="h-10 w-10 text-blood" />
        </div>
        <h1 className="font-display text-6xl text-gold glow-gold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2 font-display">Lost in the Void</p>
        <p className="text-foreground/70 mb-8 font-body max-w-md mx-auto">
          You have wandered into uncharted territory. The path you seek does not exist in this realm.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-primary-foreground font-display rounded-lg transition-colors"
        >
          Return to the Throne Room
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
