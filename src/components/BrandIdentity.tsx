const BrandIdentity = () => {
  const taglines = [
    { tagline: "Generations of Heat, Perfected.", emphasis: "Heritage & Mastery" },
    { tagline: "Where Every Dish Meets Its Destiny.", emphasis: "Transformative Power" },
    { tagline: "The Fire Your Kitchen Deserves.", emphasis: "Quality & Authenticity" },
  ];

  const brandVoice = [
    {
      context: "Product Description",
      example: "Not just red. Crimson—the color of Kolhapur's sunsets and the fire that burns in every kitchen where legends are made."
    },
    {
      context: "Social Media",
      example: "That moment when the masala hits the hot oil and your kitchen becomes a temple. Tag someone who understands. 🌶️"
    },
    {
      context: "Customer Service",
      example: "We don't just sell masala—we share a piece of our family's kitchen with yours. How can we help make your next meal unforgettable?"
    }
  ];

  const colors = [
    { name: "Kolhapuri Crimson", class: "bg-kolhapuri", hex: "#8B2E1C" },
    { name: "Turmeric Gold", class: "bg-turmeric", hex: "#E6A82C" },
    { name: "Terracotta", class: "bg-terracotta", hex: "#A45D3B" },
    { name: "Spice Brown", class: "bg-spice", hex: "#5C3D2E" },
    { name: "Warm Ivory", class: "bg-ivory", hex: "#F5EDE4" },
  ];

  return (
    <section id="brand" className="py-24 bg-background pattern-spice">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-terracotta uppercase tracking-widest">
            Brand Identity
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Visual <span className="italic text-kolhapuri">Direction</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete brand system that honors tradition while speaking to modern kitchens worldwide.
          </p>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Color Palette
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {colors.map((color) => (
              <div key={color.name} className="text-center group">
                <div 
                  className={`w-24 h-24 rounded-xl ${color.class} shadow-warm mb-3 transition-transform group-hover:scale-110`}
                />
                <p className="font-medium text-sm text-foreground">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Taglines */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Tagline Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {taglines.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-warm transition-shadow"
              >
                <span className="text-xs font-medium text-terracotta uppercase tracking-wider">
                  {item.emphasis}
                </span>
                <p className="font-display text-2xl font-bold text-foreground mt-4 italic">
                  "{item.tagline}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Personality */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Brand Personality
          </h3>
          <div className="bg-gradient-to-r from-kolhapuri to-terracotta rounded-2xl p-8 md:p-12 text-center">
            <p className="font-display text-2xl md:text-3xl text-cream italic leading-relaxed max-w-3xl mx-auto">
              If LATA MASALE were a person, she would be your favorite aunt—the one who knows 
              every family recipe by heart, shares secrets generously, and whose kitchen always 
              smells like home. Knowledgeable but warm, passionate about tradition, proud of 
              her roots, and happy to teach anyone willing to learn.
            </p>
          </div>
        </div>

        {/* Brand Voice Examples */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Brand Voice Examples
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {brandVoice.map((item, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-xl p-6"
              >
                <span className="inline-block px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground mb-4">
                  {item.context}
                </span>
                <p className="text-foreground italic leading-relaxed">
                  "{item.example}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
