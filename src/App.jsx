import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import EmptyTrailer from './components/EmptyTrailer';
import TrustCertifications from './components/TrustCertifications';
import AboutCompany from './components/AboutCompany';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import QuoteModal from './components/QuoteModal';
import QuoteTrailerDock from './components/QuoteTrailerDock';

export default function App() {
  const [quoteItems, setQuoteItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Add product to RFQ Quote Tray
  const handleAddToQuote = (product, qty = 1) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          badge: product.badge,
          image: product.image,
          quantity: qty,
        },
      ];
    });
  };

  // Update quantity in tray
  const handleUpdateQty = (productId, newQty) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove product from tray
  const handleRemoveItem = (productId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Clear all items
  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-[#028090] selection:text-white">
      {/* Primary Sticky Header */}
      <Navbar
        quoteCount={quoteItems.length}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main className="flex-1">
        {/* Landing Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 1-Scroll Featured Products Section */}
        <ProductShowcase
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToQuote={handleAddToQuote}
          quoteItems={quoteItems}
        />

        {/* Dedicated Empty Facility & Production Video Trailer Section */}
        <EmptyTrailer />

        {/* Clinical Standards & ISO Certifications */}
        <TrustCertifications />

        {/* About Company & Regional Pirangut Hub */}
        <AboutCompany />

        {/* Contact & RFQ Submission Section with Address */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quote Trailer Dock (Persistent bottom tray) */}
      <QuoteTrailerDock
        quoteItems={quoteItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
        onOpenModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
          isInQuote={quoteItems.some((i) => i.id === selectedProduct.id)}
        />
      )}

      {/* Full Quotation Review Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        quoteItems={quoteItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
      />
    </div>
  );
}
