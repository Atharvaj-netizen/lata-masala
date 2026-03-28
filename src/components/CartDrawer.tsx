import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2, X, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const FREE_SHIPPING_THRESHOLD = 500;

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(10, "Valid phone required").max(15),
  address: z.string().trim().min(5, "Address is required").max(500),
  pincode: z.string().trim().min(6, "Valid pincode required").max(6),
});

type CheckoutData = z.infer<typeof checkoutSchema>;

const CartDrawer = () => {
  const { items, updateQuantity, removeItem, totalItems, subtotal, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<CheckoutData>({ name: "", email: "", phone: "", address: "", pincode: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutData, string>>>({});

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  const handleCheckout = () => {
    const result = checkoutSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof CheckoutData, string>> = {};
      result.error.errors.forEach((e) => {
        const field = e.path[0] as keyof CheckoutData;
        fieldErrors[field] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // Placeholder for Razorpay — simulate order placement
    toast.success("Order placed successfully! We'll contact you to confirm.");
    setOrderPlaced(true);
    clearCart();
  };

  const handleField = (field: keyof CheckoutData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const resetDrawer = () => {
    setShowCheckout(false);
    setOrderPlaced(false);
    setFormData({ name: "", email: "", phone: "", address: "", pincode: "" });
    setErrors({});
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={(val) => { setOpen(val); if (!val) { setShowCheckout(false); setOrderPlaced(false); } }}>
      <SheetTrigger asChild>
        <button className="fixed top-4 right-20 md:right-6 z-[60] bg-kolhapuri text-cream w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-turmeric text-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">
            {orderPlaced ? "Order Confirmed!" : showCheckout ? "Checkout" : "Your Cart"}
          </SheetTitle>
        </SheetHeader>

        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your order has been placed. We'll reach out via phone/email to confirm payment and delivery details.
            </p>
            <Button variant="hero" onClick={resetDrawer}>Continue Shopping</Button>
          </div>
        ) : showCheckout ? (
          <div className="flex-1 overflow-y-auto space-y-4 px-1">
            {/* Order Summary */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Order Summary</h4>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm py-1">
                  <span className="text-muted-foreground">{item.product} ({item.size}) ×{item.quantity}</span>
                  <span className="font-medium text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-foreground">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Form */}
            {(["name", "email", "phone", "address", "pincode"] as const).map((field) => (
              <div key={field}>
                <label className="text-sm font-medium text-foreground capitalize mb-1 block">
                  {field === "pincode" ? "Pincode" : field === "name" ? "Full Name" : field === "address" ? "Shipping Address" : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "address" ? (
                  <textarea
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[80px]"
                    value={formData[field]}
                    onChange={(e) => handleField(field, e.target.value)}
                    placeholder="Full shipping address"
                  />
                ) : (
                  <Input
                    value={formData[field]}
                    onChange={(e) => handleField(field, e.target.value)}
                    placeholder={field === "pincode" ? "6-digit pincode" : field === "phone" ? "10-digit phone number" : ""}
                    type={field === "email" ? "email" : field === "phone" || field === "pincode" ? "tel" : "text"}
                  />
                )}
                {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}

            <div className="pt-2 pb-4 space-y-2">
              <Button variant="hero" size="lg" className="w-full" onClick={handleCheckout}>
                Place Order — ₹{subtotal.toLocaleString("en-IN")}
              </Button>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => setShowCheckout(false)}>
                ← Back to Cart
              </Button>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingCart className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-3 px-1">
              {remaining > 0 && (
                <div className="bg-turmeric/10 text-sm text-foreground rounded-lg px-4 py-3 text-center">
                  Add <strong>₹{remaining.toLocaleString("en-IN")}</strong> more for <strong>FREE shipping!</strong>
                </div>
              )}
              {remaining <= 0 && (
                <div className="bg-green-50 text-green-700 text-sm rounded-lg px-4 py-3 text-center font-medium">
                  ✅ You qualify for FREE shipping!
                </div>
              )}
              {items.map((item) => (
                <div key={item.id} className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">{item.product}</p>
                      <p className="text-muted-foreground text-xs">{item.size}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-muted rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-secondary rounded-l-lg transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-secondary rounded-r-lg transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-display font-bold text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-3 px-1">
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <Button variant="hero" size="lg" className="w-full" onClick={() => setShowCheckout(true)}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
