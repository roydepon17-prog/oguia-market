import React, { useState } from 'react';
import { CHOCOLATE_SKUS } from '../data/chocolatesData';

interface SampleFlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleFlightModal: React.FC<SampleFlightModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedBox, setSelectedBox] = useState<'4-bar' | '6-bar'>('4-bar');
  const [recipientName, setRecipientName] = useState('');
  const [recipientCompany, setRecipientCompany] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingCountry, setShippingCountry] = useState('Philippines');
  const [specialNotes, setSpecialNotes] = useState('');
  const [selectedSkus, setSelectedSkus] = useState<string[]>([
    'sku-70-myn',
    'sku-batwan-rhum',
    'sku-ube-bar',
    'sku-pure-tablea'
  ]);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const toggleSku = (id: string) => {
    const max = selectedBox === '4-bar' ? 4 : 6;
    if (selectedSkus.includes(id)) {
      if (selectedSkus.length > 1) {
        setSelectedSkus(selectedSkus.filter((item) => item !== id));
      }
    } else {
      if (selectedSkus.length < max) {
        setSelectedSkus([...selectedSkus, id]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#241915] border border-[#3f322d] max-w-xl w-full p-6 sm:p-8 flex flex-col gap-4 shadow-[6px_6px_0px_#2d5a27] relative animate-in fade-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb956] text-[20px]">takeout_dining</span>
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-widest">
              Physical Tasting Flight Dispatch
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#8c9387] hover:text-[#f3ded7] p-1 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {!orderComplete ? (
          <>
            <div>
              <h3 className="font-syne font-bold text-xl uppercase text-[#f3ded7] tracking-tight">
                Curated Single-Estate Tasting Flight
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
                Accredited investors, luxury hospitality buyers, and international bean importers receive our signature flight box shipped via DHL Express Cold-Chain directly from Maayon, Capiz.
              </p>
            </div>

            {/* Box type selector */}
            <div className="grid grid-cols-2 gap-2 bg-[#150c08] p-1.5 border border-[#332723]">
              <button
                type="button"
                onClick={() => {
                  setSelectedBox('4-bar');
                  setSelectedSkus(selectedSkus.slice(0, 4));
                }}
                className={`py-2 px-3 text-left transition-colors flex flex-col cursor-pointer ${
                  selectedBox === '4-bar'
                    ? 'bg-[#3f322d] text-[#ffb956]'
                    : 'text-[#8c9387] hover:text-[#f3ded7]'
                }`}
              >
                <span className="font-syne text-xs uppercase font-bold">Standard 4-Bar Flight</span>
                <span className="font-epilogue text-[10px] text-[#c2c9bb]">Accredited Investor Review Box</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedBox('6-bar');
                  if (selectedSkus.length < 6) {
                    const remaining = CHOCOLATE_SKUS.map((s) => s.id).filter(
                      (id) => !selectedSkus.includes(id)
                    );
                    setSelectedSkus([...selectedSkus, ...remaining].slice(0, 6));
                  }
                }}
                className={`py-2 px-3 text-left transition-colors flex flex-col cursor-pointer ${
                  selectedBox === '6-bar'
                    ? 'bg-[#3f322d] text-[#a1d494]'
                    : 'text-[#8c9387] hover:text-[#f3ded7]'
                }`}
              >
                <span className="font-syne text-xs uppercase font-bold">Full 6-Bar Discovery Coffret</span>
                <span className="font-epilogue text-[10px] text-[#c2c9bb]">Hospitality & Wholesale Evaluation</span>
              </button>
            </div>

            {/* SKU Selector Chips */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[11px] font-epilogue uppercase">
                <span className="text-[#8c9387]">
                  Select {selectedBox === '4-bar' ? '4' : '6'} Varietals: ({selectedSkus.length}/
                  {selectedBox === '4-bar' ? '4' : '6'} selected)
                </span>
                <span className="text-[#ffb956]">Handcrafted in Maayon</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-40 overflow-y-auto pr-1">
                {CHOCOLATE_SKUS.map((sku) => {
                  const isChecked = selectedSkus.includes(sku.id);
                  return (
                    <button
                      key={sku.id}
                      type="button"
                      onClick={() => toggleSku(sku.id)}
                      className={`p-2 text-left border text-xs transition-colors flex flex-col justify-between cursor-pointer ${
                        isChecked
                          ? 'border-[#ffb956] bg-[#281d19] text-[#f3ded7]'
                          : 'border-[#332723] bg-[#150c08] text-[#8c9387] hover:border-[#3f322d]'
                      }`}
                    >
                      <span className="font-epilogue font-bold text-[11px] leading-tight truncate">
                        {sku.name}
                      </span>
                      <span className="text-[10px] text-[#a1d494]">{sku.cacaoPercentage}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recipient Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                    Recipient Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Chef Marco Reyes, F&B Director"
                    className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                    Company / Hotel / Fund *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipientCompany}
                    onChange={(e) => setRecipientCompany(e.target.value)}
                    placeholder="e.g. Discovery Shores Boracay"
                    className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="marco@resort.com"
                    className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                    Destination Country *
                  </label>
                  <select
                    value={shippingCountry}
                    onChange={(e) => setShippingCountry(e.target.value)}
                    className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                  >
                    <option>Philippines (Metro Manila / Boracay / Cebu / Davao)</option>
                    <option>Japan (Tokyo / Kyoto)</option>
                    <option>United States (San Francisco / New York / LA)</option>
                    <option>Singapore</option>
                    <option>Hong Kong</option>
                    <option>United Kingdom / European Union</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                  Street Address & Postal Code *
                </label>
                <input
                  type="text"
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Suite 1402, High Street South Corporate Plaza, BGC, Taguig"
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
                  Tasting Objectives & Dietary Preferences (Optional)
                </label>
                <input
                  type="text"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Evaluating 70% Dark & Batwan for minibar menu rollout Q4"
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3 py-2 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                />
              </div>

              <div className="bg-[#150c08] p-2.5 border border-[#332723] flex items-center justify-between text-xs font-epilogue">
                <span className="flex items-center gap-1.5 text-[#8c9387]">
                  <span className="material-symbols-outlined text-[16px] text-[#a1d494]">local_shipping</span>
                  <span>DHL Cold-Chain Express (Complimentary for Verified Partners)</span>
                </span>
                <span className="text-[#a1d494] font-bold uppercase">72H ETA</span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="mt-1 w-full py-3 bg-[#a1d494] hover:bg-[#bcf0ae] text-[#0a3909] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#000000] flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>Queuing Cold-Chain Dispatch...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Confirm Order & Dispatch Tasting Flight</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-6 gap-3 animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-[#2d5a27] text-[#a1d494] flex items-center justify-center shadow-[2px_2px_0px_#150c08]">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <div>
              <span className="font-syne font-bold text-xl uppercase text-[#f3ded7] block">
                Sample Flight Scheduled for Dispatch
              </span>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 max-w-md">
                Your <strong className="text-[#ffb956]">{selectedBox === '4-bar' ? '4-Bar Flight' : '6-Bar Discovery Coffret'}</strong> has been registered for <strong className="text-[#f3ded7]">{recipientName}</strong> ({recipientCompany}).
              </p>
            </div>

            <div className="bg-[#150c08] border border-[#332723] p-3 w-full text-left font-epilogue text-xs flex flex-col gap-1 text-[#c2c9bb]">
              <div className="flex justify-between text-[11px] text-[#8c9387] pb-1 border-b border-[#241915]">
                <span>Tracking Reference</span>
                <span className="font-mono text-[#a1d494]">OGUIA-DHL-PH-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="pt-1 text-[11px]">
                <span>Origin: </span>
                <strong className="text-[#f3ded7]">Dad's Farm HQ, Maayon, Capiz, Western Visayas</strong>
              </div>
              <div className="text-[11px]">
                <span>Destination: </span>
                <strong className="text-[#f3ded7]">{shippingAddress}, {shippingCountry}</strong>
              </div>
              <div className="text-[11px]">
                <span>Included Varietals: </span>
                <span className="text-[#ffb956]">
                  {selectedSkus.map((id) => CHOCOLATE_SKUS.find((s) => s.id === id)?.name).join(' • ')}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-3 px-6 py-2 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue text-xs uppercase font-bold transition-colors cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
