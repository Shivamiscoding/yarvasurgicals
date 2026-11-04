import React from 'react';
import { MapPin, Mail, Phone, ArrowUp, ExternalLink } from 'lucide-react';
import { COMPANY, PRODUCTS } from '../data/products';

export default function ContactFooter({ onOpenEnquiryModal }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <footer id="address" className="bg-[#01325d] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/yarva-logo.png"
                alt="Yarva Surgicals"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-base font-extrabold tracking-tight font-['Outfit']">
                  YARVA <span className="text-teal-300">SURGICALS</span>
                </h3>
                <p className="text-[9px] text-teal-300/80 font-semibold tracking-[0.14em] uppercase">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Surgical &amp; wound care supplies — serving clinics, hospitals, and pharmacies across Maharashtra.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Products
            </h4>
            <ul className="space-y-1.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Catalogue', href: '#products' },
                { label: 'Company Video', href: '#trailer' },
                { label: 'Contact', href: '#address' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-slate-300 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenEnquiryModal}
                  className="text-xs text-teal-300 hover:text-teal-200 font-semibold cursor-pointer transition-colors"
                >
                  Send Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-teal-300 mt-0.5 shrink-0" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {COMPANY.address}
                  <span className="flex items-center gap-1 text-teal-300 text-[10px] font-semibold mt-1 hover:underline">
                    Open in Maps <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                <a href="mailto:yarvasurgical26@gmail.com" className="hover:text-white transition-colors">
                  yarvasurgical26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                <a href="tel:+918265096707" className="hover:text-white transition-colors">
                  +91 8265096707
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
