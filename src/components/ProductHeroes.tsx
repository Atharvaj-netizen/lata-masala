import kolhapuriImage from "@/assets/kolhapuri-masala.jpg";
import malvaniImage from "@/assets/malvani-masala.jpg";
import { Button } from "@/components/ui/button";

const ProductHeroes = () => {
  const products = [
    {
      name: "The Fire of the Highlands",
      subtitle: "Kolhapuri Masala",
      tradeName: "Lata's Grandmother's Fire Blend",
      image: kolhapuriImage,
      description: "Bold, layered heat that builds like a symphony. This crimson treasure carries the soul of Kolhapur's warrior kitchens—14+ hand-selected spices, stone-ground to release oils no machine can extract.",
      sensory: "Open the jar and watch the room transform. First, the warm embrace of roasted coriander. Then, the sharp clarity of cumin. Finally, the signature Kolhapuri heat—not aggressive, but confident, complex, with a finish that lingers like a cherished memory.",
      character: ["Fiery & Complex", "14+ Spices", "Deep Crimson"],
      accent: "kolhapuri"
    },
    {
      name: "The Ocean's Breath", 
      subtitle: "Malvani Masala",
      tradeName: "Konkan Coast Magic",
      image: malvaniImage,
      description: "Where the Western Ghats meet the Arabian Sea, a gentler fire was born. Coconut whispers through this golden blend, with kokum's tangy soul and curry leaves that sing of coastal monsoons.",
      sensory: "The aroma is a journey—warm coconut, peppercorn's bite softened by cinnamon's sweetness. On the palate, it's seafood's perfect partner, transforming fish curries into poetry and vegetable dishes into coastal celebrations.",
      character: ["Coastal & Aromatic", "Coconut-Kokum Notes", "Golden Warmth"],
      accent: "terracotta"
    }
  ];

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-terracotta uppercase tracking-widest">
            Product Heroes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Two Legends, <span className="italic text-kolhapuri">One Heritage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Each blend tells a story of place, tradition, and the families who perfected them 
            over generations.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-kolhapuri/20 to-turmeric/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="relative w-full h-[450px] object-cover rounded-2xl shadow-warm"
                  />
                  <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-foreground">{product.tradeName}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="text-sm font-medium text-terracotta uppercase tracking-widest">
                  {product.subtitle}
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  {product.name}
                </h3>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="bg-secondary/50 rounded-xl p-6 mb-6">
                  <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-3">
                    The Sensory Experience
                  </h4>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {product.sensory}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {product.character.map((trait) => (
                    <span 
                      key={trait}
                      className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <Button variant="hero" size="lg">
                  Shop {product.subtitle}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHeroes;
