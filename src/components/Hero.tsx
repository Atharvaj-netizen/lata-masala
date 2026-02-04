import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turmeric/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-turmeric animate-pulse" />
            <span className="text-sm font-medium text-turmeric">
              Authentic Maharashtrian Masalas
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6 animate-slide-up">
            Generations of Heat,{" "}
            <span className="italic text-turmeric">Perfected.</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From the fiery highlands of Kolhapur to the aromatic coasts of Malvan, 
            every spoonful carries family tradition and uncompromised authenticity.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" onClick={scrollToProducts}>
              Discover Our Masalas
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="border-cream/50 text-cream hover:bg-cream hover:text-foreground"
              onClick={scrollToContact}
            >
              Shop Now
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-cream/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-turmeric">14+</p>
              <p className="text-xs text-cream/60 uppercase tracking-wider">Premium Spices</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-turmeric">15</p>
              <p className="text-xs text-cream/60 uppercase tracking-wider">Years Heritage</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-turmeric">100%</p>
              <p className="text-xs text-cream/60 uppercase tracking-wider">Natural</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
