import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import EmptyTrailer from './components/EmptyTrailer';
import FacilityStandards from './components/FacilityStandards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#008b99] selection:text-white">
      {/* Editorial Header */}
      <Header />

      <main>
        {/* Full Viewport Clean Landing Hero */}
        <Hero />

        {/* 1-Scroll Listed Products Showcase */}
        <ProductShowcase />

        {/* Cinematic Empty Facility Trailer */}
        <EmptyTrailer />

        {/* Clinical Proof & ISO Standards */}
        <FacilityStandards />

        {/* Central Warehouse & B2B Inquiry */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
