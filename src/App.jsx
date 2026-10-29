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
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#157e93] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal(null)} />

      <main>
        {/* Landing Hero: Logo moved slightly up with clickable address underneath, and clean Enquire Now option on right */}
        <LandingHero
          onOpenEnquiryModal={() => handleOpenEnquiryModal(null)}
        />

        {/* 1-Scroll Listed Products */}
        <ProductSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenEnquiryModalWithProduct={(p) => handleOpenEnquiryModal(p)}
        />

        {/* Empty Trailer Section */}
        <EmptyTrailer />
      </main>

      {/* Address & Company Footer */}
      <ContactFooter onOpenEnquiryModal={() => handleOpenEnquiryModal(null)} />

      {/* Product Image Inspection Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Enquiry Popup (Email, Phone Number, Name, Enquiry For) */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct={enquiryProduct}
      />
    </div>
  );
}
