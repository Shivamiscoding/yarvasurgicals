import React from 'react';
import { MapPin, ExternalLink, ArrowUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../data/products';

export default function ContactFooter({ onOpenEnquiryModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <footer id="address" className="relative bg-[#01325d] text-white scroll-mt-20 overflow-hidden">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#157e93]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Brand Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/images/yarva-logo.jpg"
                  alt="Yarva Surgicals"
                  className="w-14 h-14 object-contain rounded-2xl bg-white p-1 shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight font-['Outfit']">
                  YARVA <span className="text-[#157e93]">SURGICALS</span>
                </h3>
                <p className="text-[10px] text-[#157e93] font-semibold tracking-[0.15em] uppercase mt-0.5">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Premium surgical instruments and medical consumables — ISO 9001:2015 and ISO 13485:2016 certified manufacturer based in Pune, Maharashtra.
            </p>

            <button
              onClick={onOpenEnquiryModal}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Address Card */}
          <motion.div
            className="p-7 rounded-[24px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#157e93]">
              <MapPin className="w-4 h-4" />
              <span>Company Address</span>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-base text-slate-100 hover:text-teal-300 leading-relaxed font-semibold transition-colors duration-200"
              title="Open in Google Maps"
            >
              {COMPANY.address}
            </a>

            <div className="pt-3 border-t border-white/[0.08]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#157e93] hover:text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {[
              { label: 'Products', href: '#products' },
              { label: 'Showcase', href: '#trailer' },
              { label: 'Contact', href: '#address' },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-white transition-colors duration-200">
                {label}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors ml-2 cursor-pointer group"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
