import React, { useState } from 'react';
import { ShieldCheck, Plus, Check, Eye, MessageCircle, FileText, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductCard({ product, onSelectProduct, onAddToQuote, isInQuote }) {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('highlights');
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToQuote(product, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Yarva Surgicals, I am inquiring about wholesale pricing and availability for "${product.name}" (Qty: ${qty} units/packs). Central Warehouse: ${COMPANY_INFO.address}`
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Product Image Section with Zoom Cue & Status Badges */}
      <div className="relative bg-slate-50 border-b border-slate-100 overflow-hidden aspect-[4/3] flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          onClick={() => onSelectProduct(product)}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
          <span className="px-2.5 py-1 text-[11px] font-bold bg-[#0b2545] text-white rounded-md tracking-wide shadow-xs">
            {product.badge}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/95 text-teal-800 border border-teal-200 rounded-md backdrop-blur-xs">
            {product.category}
          </span>
        </div>

        {/* Instant Preview Hover Button */}
        <button
          onClick={() => onSelectProduct(product)}
          className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-[#028090] text-slate-700 hover:text-white rounded-lg shadow-sm border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-semibold backdrop-blur-xs"
          title="Inspect product & technical specifications"
        >
          <Eye className="w-4 h-4" />
          <span className="hidden sm:inline">Inspect Specs</span>
        </button>
      </div>

      {/* Product Information Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title and Short Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-semibold text-emerald-700 tracking-wide uppercase">
              Hospital Supply Available
            </span>
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="text-lg sm:text-xl font-bold text-[#0b2545] group-hover:text-[#028090] transition-colors cursor-pointer font-['Outfit']"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>
        </div>

        {/* Certifications Pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.certifications.map((cert, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200"
            >
              <ShieldCheck className="w-3 h-3 text-[#028090]" />
              {cert}
            </span>
          ))}
        </div>

        {/* Mini Technical Tabs: Highlights vs Specs */}
        <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/70 space-y-2 text-xs">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-1.5">
            <button
              onClick={() => setActiveTab('highlights')}
              className={`font-semibold pb-0.5 transition-colors ${
                activeTab === 'highlights'
                  ? 'text-[#028090] border-b-2 border-[#028090]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Key Highlights
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`font-semibold pb-0.5 transition-colors ${
                activeTab === 'specs'
                  ? 'text-[#028090] border-b-2 border-[#028090]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Specs
            </button>
          </div>

          {activeTab === 'highlights' ? (
            <ul className="space-y-1.5 pt-1">
              {product.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 text-slate-600 text-[11px] leading-tight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#028090] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-1 pt-1 text-[11px]">
              {Object.entries(product.specs).slice(0, 3).map(([key, value], i) => (
                <div key={i} className="flex justify-between py-0.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500 font-medium">{key}:</span>
                  <span className="text-slate-800 font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Minimum Order / Quantity & Actions */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Wholesale Lot:</span>
            <span className="text-slate-800 font-bold bg-slate-100 px-2 py-0.5 rounded text-[11px]">
              {product.minOrderQty}
            </span>
          </div>

          {/* Interactive Qty Selector & Add to Quote Button */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white shrink-0">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors"
                title="Decrease quantity"
              >
                -
              </button>
              <span className="px-2.5 py-1.5 text-xs font-bold text-slate-800 min-w-8 text-center bg-slate-50">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors"
                title="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold transition-all shadow-xs ${
                justAdded || isInQuote
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0b2545] hover:bg-[#07192f] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added to RFQ</span>
                </>
              ) : isInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In Quote Tray (+{qty})</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Quote Tray</span>
                </>
              )}
            </button>
          </div>

          {/* Direct WhatsApp Quote Button */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast WhatsApp Quote for this item</span>
          </a>

        </div>

      </div>
    </div>
  );
}
