import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ProductSection from './components/ProductSection';
import EmptyTrailer from './components/EmptyTrailer';
import ContactFooter from './components/ContactFooter';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#157e93] selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Landing Hero with Big Central Logo */}
        <LandingHero />

        {/* 1-Scroll Listed Products */}
        <ProductSection onSelectProduct={(p) => setSelectedProduct(p)} />

        {/* Empty Trailer Section */}
        <EmptyTrailer />
      </main>

      {/* Address & Company Footer */}
      <ContactFooter />

      {/* Product Image Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
