import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ProductSection from './components/ProductSection';
import EmptyTrailer from './components/EmptyTrailer';
import ContactFooter from './components/ContactFooter';
import ProductModal from './components/ProductModal';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const handleOpenQuoteModal = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#157e93] selection:text-white">
      {/* Navigation with functional quote & WhatsApp buttons */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal(null)} />

      <main>
        {/* Landing Hero with Logo on the LEFT and functional options on the RIGHT */}
        <LandingHero
          onOpenQuoteModal={() => handleOpenQuoteModal(null)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 1-Scroll Listed Products with functional quote, copy specs & image inspection */}
        <ProductSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenQuoteModalWithProduct={(p) => handleOpenQuoteModal(p)}
        />

        {/* Empty Trailer Section */}
        <EmptyTrailer />
      </main>

      {/* Address & Company Footer */}
      <ContactFooter onOpenQuoteModal={() => handleOpenQuoteModal(null)} />

      {/* Product Image Inspection Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
