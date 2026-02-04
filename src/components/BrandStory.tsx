import heritageImage from "@/assets/heritage-grinding.jpg";

const BrandStory = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-background to-secondary/30 pattern-spice">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heritageImage} 
                alt="Traditional spice grinding" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-warm max-w-xs border border-border">
              <p className="font-display text-4xl font-bold text-kolhapuri mb-2">1985</p>
              <p className="text-sm text-muted-foreground">
                The year Lata began sharing her grandmother's fire with the world
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm font-medium text-terracotta uppercase tracking-widest">
              Our Origin Story
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Born in a <span className="text-kolhapuri">Kolhapuri Kitchen</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-display text-2xl text-foreground italic">"In 1985,</span> Lata 
                Deshmukh stood in her mother-in-law's kitchen in Kolhapur, grinding spices on the 
                same stone slab that had seasoned three generations of family feasts.
              </p>
              
              <p>
                What began as wedding gifts of hand-ground masala for newlywed cousins became 
                whispered requests from neighbors, then orders from across Maharashtra. Lata 
                never changed the recipe—she didn't need to. The blend her grandmother perfected 
                in the 1940s was already complete: fourteen spices, stone-ground with patience, 
                mixed with intuition that cannot be taught.
              </p>

              <p>
                Today, her children and grandchildren carry forward this sacred tradition. 
                Every jar of Lata Masale still begins the same way it did forty years ago—with 
                hands that know the weight of tradition and spices sourced directly from the 
                farmers who grew them for Lata's grandmother.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-4 border-turmeric">
              <p className="font-display text-xl italic text-foreground">
                "A masala without soul is just powder. We grind love into every batch."
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">
                — Lata Deshmukh, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
