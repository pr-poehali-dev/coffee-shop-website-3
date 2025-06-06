import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ProductPage from "@/components/ProductPage";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    setSelectedProduct(productId);
  };

  const handleBackToGrid = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {selectedProduct ? (
        <ProductPage productId={selectedProduct} onBack={handleBackToGrid} />
      ) : (
        <>
          <HeroSection />
          <ProductGrid onProductClick={handleProductClick} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;
