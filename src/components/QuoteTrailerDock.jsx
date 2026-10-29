import React, { useState } from 'react';
import { ShoppingBag, ChevronUp, ChevronDown, Trash2, Send, MessageSquareQuote, CheckCircle2, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function QuoteTrailerDock({ quoteItems, onUpdateQty, onRemoveItem, onClearQuote, onOpenModal }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const totalQuantity = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  // If quoteItems is empty, show the "Empty Trailer" bar
  if (quoteItems.length === 0) {
    return (
      <aside aria-label="Quotation Tray" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-lg">
        <div className="bg-[#0b2545]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-full shadow-lg border border-teal-500/30 flex items-center justify-between text-xs transition-all hover:bg-[#0b2545]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span className="font-semibold text-teal-300">Quotation Trailer:</span>
            <span className="text-slate-300">0 items selected</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Select items to generate hospital RFQ
          </span>
          <a
            href="#products"
            className="text-[11px] font-bold text-teal-300 hover:text-white underline underline-offset-2"
          >
            Add Products ↑
          </a>
        </div>
      </aside>
    );
  }

  const handleWhatsAppQuote = () => {
    const itemsSummary = quoteItems
      .map(item => `• ${item.name} (${item.quantity} packs/units)`)
      .join('%0A');
    
    const message = `Hello Yarva Surgicals,%0A%0AI would like to request an official wholesale quotation for the following items:%0A${itemsSummary}%0A%0A*Delivery Location:* Pune / Maharashtra%0APlease share availability, batch details, and GST pricing.`;
    
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <aside aria-label="Quotation Tray" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#028090] overflow-hidden transition-all">
        
        {/* Main Dock Bar */}
        <div className="bg-[#0b2545] text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-[#028090] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0b2545]">
                {quoteItems.length}
              </span>
            </div>

            <div>
              <p className="text-xs font-bold text-white flex items-center gap-2 font-['Outfit']">
                <span>Wholesale Quote Trailer</span>
                <span className="bg-teal-900/80 text-teal-300 text-[10px] px-2 py-0.5 rounded-full font-sans">
                  {totalQuantity} units selected
                </span>
              </p>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                Hospital institutional pricing ready to dispatch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span>{isExpanded ? 'Hide' : 'Review'}</span>
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={handleWhatsAppQuote}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp RFQ</span>
            </button>

            <button
              onClick={onOpenModal}
              className="px-3.5 py-1.5 rounded-lg bg-[#028090] hover:bg-[#00a896] text-white text-xs font-bold transition-colors shadow-xs"
            >
              Submit Form
            </button>
          </div>
        </div>

        {/* Expandable Trailer Tray Details */}
        {isExpanded && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 max-h-72 overflow-y-auto space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Selected Product List:</span>
              <button
                onClick={onClearQuote}
                className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" /> Clear Tray
              </button>
            </div>

            <div className="space-y-2">
              {quoteItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-lg object-contain bg-slate-50 border border-slate-100"
                    />
                    <div>
                      <h4 className="font-bold text-[#0b2545]">{item.name}</h4>
                      <p className="text-[11px] text-slate-500">{item.badge}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Qty controls */}
                    <div className="flex items-center border border-slate-300 rounded-md overflow-hidden bg-slate-50">
                      <button
                        onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold text-slate-900 min-w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                      title="Remove product"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 bg-teal-50/70 p-3 rounded-xl border border-teal-100">
              <p className="flex items-center gap-1.5 font-medium text-teal-900">
                <CheckCircle2 className="w-4 h-4 text-[#028090]" />
                Direct dispatch from Pirangut warehouse with tax invoice.
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleWhatsAppQuote}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Confirm on WhatsApp
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </aside>
  );
}
