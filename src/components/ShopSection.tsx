import { Button } from "@/components/ui/button";
import { Flame, Waves, Gift, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918806578950";

const products = [
  {
    name: "Kolhapuri Masala",
    icon: Flame,
    tagline: "Bold, intense heat. Best for mutton, chicken, hearty curries.",
    variants: [
      { size: "100g Pouch", price: 236, mrp: 340, save: 31 },
      { size: "250g Pouch", price: 400, mrp: 500, save: 20, badge: "Bestseller" },
      { size: "500g Jar", price: 660, mrp: 850, save: 22 },
      { size: "1kg Bulk Pack", price: 1199, mrp: 1600, save: 25 },
    ],
  },
  {
    name: "Malvani Masala",
    icon: Waves,
    tagline: "Gentle, aromatic warmth. Best for fish, seafood, coconut-based dishes.",
    variants: [
      { size: "100g Pouch", price: 279, mrp: 340, save: 18, badge: "Customer Favorite" },
      { size: "250g Pouch", price: 499, mrp: 599, save: 17 },
      { size: "500g Jar", price: 859, mrp: 999, save: 14 },
      { size: "1kg Bulk Pack", price: 1550, mrp: 1800, save: 14 },
    ],
  },
];

const openWhatsApp = (productName: string, size: string) => {
  const message = encodeURIComponent(
    `Hi, I want to order: ${productName} ${size}. Please share payment details.`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

const ShopSection = () => {
  return (
    <section id="shop" className="py-24 bg-background pattern-spice">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-sm font-medium text-terracotta uppercase tracking-widest">Shop</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Find Your Fire — <span className="italic text-kolhapuri">Choose Your Masala</span>
          </h2>
        </div>

        {/* Flavor Guide */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-kolhapuri/10 rounded-xl px-5 py-4 flex-1">
            <Flame className="w-5 h-5 text-kolhapuri mt-0.5 shrink-0" />
            <div>
              <p className="font-display font-bold text-foreground text-sm">Kolhapuri Masala</p>
              <p className="text-muted-foreground text-sm">Bold, intense heat. Best for mutton, chicken, hearty curries.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-malvani/10 rounded-xl px-5 py-4 flex-1">
            <Waves className="w-5 h-5 text-malvani mt-0.5 shrink-0" />
            <div>
              <p className="font-display font-bold text-foreground text-sm">Malvani Masala</p>
              <p className="text-muted-foreground text-sm">Gentle, aromatic warmth. Best for fish, seafood, coconut-based dishes.</p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.name} className="bg-card rounded-2xl border border-border overflow-hidden shadow-warm">
              <div className="p-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3 mb-2">
                  <product.icon className="w-6 h-6 text-kolhapuri" />
                  <h3 className="font-display text-2xl font-bold text-foreground">{product.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{product.tagline}</p>
              </div>
              <div className="divide-y divide-border">
                {product.variants.map((v) => (
                  <div key={v.size} className="flex items-center justify-between px-6 py-4 gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-foreground text-sm">{v.size}</span>
                        {v.badge && (
                          <span className="bg-turmeric/20 text-turmeric text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                            {v.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-display text-lg font-bold text-foreground">₹{v.price.toLocaleString("en-IN")}</span>
                        <span className="text-muted-foreground text-sm line-through">₹{v.mrp.toLocaleString("en-IN")}</span>
                        <span className="text-green-600 text-xs font-semibold">Save {v.save}%</span>
                      </div>
                    </div>
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={() => openWhatsApp(product.name, v.size)}
                      className="shrink-0"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Order
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Combo Offer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-gradient-to-r from-kolhapuri/10 via-turmeric/10 to-terracotta/10 rounded-2xl border-2 border-dashed border-turmeric p-8 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-turmeric text-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              Combo Offer
            </div>
            <Gift className="w-10 h-10 text-turmeric mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              The Heritage Sampler — Try Both
            </h3>
            <p className="text-muted-foreground mb-4">
              Kolhapuri Masala (100g) + Malvani Masala (100g)
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-kolhapuri">₹499</span>
              <span className="text-muted-foreground line-through text-lg">₹558</span>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                Save ₹59
              </span>
            </div>
            <Button
              variant="hero"
              size="xl"
              onClick={() => openWhatsApp("The Heritage Sampler", "Kolhapuri 100g + Malvani 100g")}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order Sampler via WhatsApp
            </Button>
          </div>
        </div>

        {/* Call to order */}
        <div className="text-center text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
          <Phone className="w-4 h-4 text-kolhapuri" />
          <span>📞 Or call us at <a href="tel:+918806578950" className="font-semibold text-foreground hover:text-kolhapuri transition-colors">+91 8806578950</a> to place your order. Payment via UPI, Google Pay, or bank transfer.</span>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
