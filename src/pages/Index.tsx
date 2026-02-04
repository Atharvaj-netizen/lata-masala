import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductHeroes from "@/components/ProductHeroes";
import BrandIdentity from "@/components/BrandIdentity";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BrandStory />
      <ProductHeroes />
      <BrandIdentity />
      <Contact />
    </div>
  );
};

export default Index;
