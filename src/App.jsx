import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ProductSection from './components/ProductSection';
import EmptyTrailer from './components/EmptyTrailer';
import ContactFooter from './components/ContactFooter';
import ProductModal from './components/ProductModal';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  const handleOpenEnquiryModal = (product = null) => {
    setEnquiryProduct(product);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Navigation */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal(null)} />

      <main>
        {/* Hero Section with floating objects animation */}
        <LandingHero
          onOpenEnquiryModal={() => handleOpenEnquiryModal(null)}
        />

        {/* Product Catalog */}
        <ProductSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenEnquiryModalWithProduct={(p) => handleOpenEnquiryModal(p)}
        />

        {/* Video Showcase */}
        <EmptyTrailer />
      </main>

      {/* Footer */}
      <ContactFooter onOpenEnquiryModal={() => handleOpenEnquiryModal(null)} />

      {/* Product Image Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Enquiry Form Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct={enquiryProduct}
      />
    </div>
  );
}
