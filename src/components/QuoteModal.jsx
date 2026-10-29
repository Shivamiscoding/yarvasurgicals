import React, { useState } from 'react';
import { X, Send, Trash2, FileText, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function QuoteModal({ isOpen, onClose, quoteItems, onUpdateQty, onRemoveItem, onClearQuote }) {
  if (!isOpen) return null;

  const [institution, setInstitution] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Pune');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const totalQuantity = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const list = quoteItems.map(i => `• ${i.name} (${i.quantity} packs)`).join('%0A');
    const msg = `*OFFICIAL WHOLESALE RFQ - YARVA SURGICALS*%0A*Hospital/Clinic:* ${institution || 'Healthcare Provider'}%0A*Contact:* ${contactPerson || 'Procurement Officer'}%0A*Phone:* ${phone || 'N/A'}%0A*City:* ${city}%0A%0A*Products Requested:*%0A${list}%0A%0A*Notes:* ${notes || 'Immediate delivery quotation requested.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <div>
              <h3 className="text-base font-bold font-['Outfit']">Institutional Quotation Tray</h3>
              <p className="text-[11px] text-teal-300">
                {quoteItems.length} product(s) selected • {totalQuantity} total units
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#0b2545] font-['Outfit']">
                RFQ Dispatched to Warehouse Desk
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your quotation request for {totalQuantity} items has been logged. Our dispatch team in Pirangut, Pune will call or WhatsApp you within 2 hours.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Confirm on WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <span>Selected Products for Quote</span>
                  {quoteItems.length > 0 && (
                    <button
                      onClick={onClearQuote}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" /> Clear Tray
                    </button>
                  )}
                </div>

                {quoteItems.length === 0 ? (
                  <div className="p-6 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 text-slate-500 text-xs">
                    Your quote tray is currently empty. Explore products on the page and click "Add to Quote Tray".
                  </div>
                ) : (
                  <div className="space-y-2">
                    {quoteItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-contain rounded bg-white p-1 border border-slate-200"
                          />
                          <div>
                            <h4 className="font-bold text-[#0b2545]">{item.name}</h4>
                            <p className="text-[11px] text-slate-500">{item.badge}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-slate-300 rounded overflow-hidden bg-white">
                            <button
                              onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 py-0.5 text-xs font-bold text-slate-900 min-w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                              className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Institution / Contact form */}
              {quoteItems.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider">
                    Institution & Delivery Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Hospital / Pharmacy / Clinic Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pune City Clinic"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Contact Person / Doctor Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Purchasing In-Charge"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98220 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Delivery City / District
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Special Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need batch test certificate with delivery"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#0b2545] hover:bg-[#07192f] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-teal-400" />
                      <span>Submit RFQ</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Send Directly on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
