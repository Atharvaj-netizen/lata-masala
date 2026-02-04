import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kolhapuri to-terracotta flex items-center justify-center">
            <span className="text-cream font-display font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground tracking-tight">
              LATA MASALE
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Since 1985
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#story" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Story
          </a>
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#brand" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Brand Identity
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="hero" size="sm">
          Order Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
