import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductHeroes from "@/components/ProductHeroes";
import ShopSection from "@/components/ShopSection";
import Contact from "@/components/Contact";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <Hero />
      <ProductHeroes />
      <ShopSection />
      <Contact />
    </div>
  );
};

export default Index;
