import { Flame, Waves, Gift } from "lucide-react";

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

const OrderInfo = () => (
  <div className="px-6 py-5 bg-muted/50 space-y-1.5 text-sm">
    <p className="text-foreground">
      📞 To order, call or WhatsApp:{" "}
      <a href="tel:+918806578950" className="font-bold text-kolhapuri hover:underline">+91 8806578950</a>
    </p>
    <p className="text-muted-foreground">💳 Payment: Google Pay / PhonePe / UPI</p>
  </div>
);

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
                  <div key={v.size} className="px-6 py-4">
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
                ))}
              </div>
              {/* Order info below each product */}
              <OrderInfo />
            </div>
          ))}
        </div>

        {/* Combo Offer */}
        <div className="max-w-2xl mx-auto">
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
            <p className="text-foreground text-sm">
              📞 To order, call or WhatsApp:{" "}
              <a href="tel:+918806578950" className="font-bold text-kolhapuri hover:underline">+91 8806578950</a>
            </p>
            <p className="text-muted-foreground text-sm mt-1">💳 Payment: Google Pay / PhonePe / UPI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
