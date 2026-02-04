import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card to-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-turmeric uppercase tracking-widest">
            Join Our Kitchen
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Ready to Bring the <span className="text-kolhapuri">Fire</span> Home?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a Maharashtrian seeking the taste of home or a culinary adventurer 
            ready for authentic heat, Lata Masale is ready to transform your cooking.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="hero" size="xl">
              Shop Our Masalas
            </Button>
            <Button variant="heroOutline" size="xl">
              Wholesale Inquiries
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground">
                Shahupuri, Kolhapur<br />
                Maharashtra 416001, India
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">
                hello@latamasale.com<br />
                orders@latamasale.com
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Phone</h4>
              <p className="text-muted-foreground">
                +91 231 2654 XXX<br />
                Mon-Sat, 9am-6pm IST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kolhapuri to-terracotta flex items-center justify-center">
                <span className="text-cream font-display font-bold text-lg">L</span>
              </div>
              <div>
                <p className="font-display font-bold text-cream">LATA MASALE</p>
                <p className="text-xs text-cream/60">Generations of Heat, Perfected.</p>
              </div>
            </div>

            <p className="text-sm text-cream/60">
              © 2024 Lata Masale. Crafted with ❤️ in Kolhapur.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
