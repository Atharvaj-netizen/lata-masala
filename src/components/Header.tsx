import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              Since 2010
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={scrollToProducts} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </button>
          <button 
            onClick={scrollToContact} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button variant="hero" size="sm" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
          Order Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
