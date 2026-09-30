import React, { useState } from 'react';

interface FinancialCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDeck: () => void;
}

export const FinancialCalculatorModal: React.FC<FinancialCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestDeck,
}) => {
  const [metricTons, setMetricTons] = useState(95); // Default FY26
  const [dtcPrice, setDtcPrice] = useState(8.50);
  const [wholesaleDiscount, setWholesaleDiscount] = useState(42); // 42% discount (58% wholesale net)
  const [dtcMix, setDtcMix] = useState(65); // 65% DTC vs 35% Wholesale

  if (!isOpen) return null;

  // Calculation formulas:
  // 1 MT of dry beans yields approx 16,000 finished 50g bars (with 70% average cacao solids & butter)
  const barsProduced = Math.round(metricTons * 16000);
  const dtcBars = Math.round(barsProduced * (dtcMix / 100));
  const wholesaleBars = barsProduced - dtcBars;

  const dtcRevenue = dtcBars * dtcPrice;
  const wholesalePrice = dtcPrice * (1 - wholesaleDiscount / 100);
  const wholesaleRevenue = wholesaleBars * wholesalePrice;
  const totalRevenue = dtcRevenue + wholesaleRevenue;

  // Unit COGS: approx $2.61 base with volume efficiencies at scale
  const unitCogs = Math.max(1.95, 2.61 - (metricTons / 250) * 0.55);
  const totalCogs = barsProduced * unitCogs;
  const grossProfit = totalRevenue - totalCogs;
  const grossMargin = (grossProfit / totalRevenue) * 100;

  // OPEX scaling curve:
  const opex = Math.round(210000 + (metricTons / 220) * 2240000);
  const ebitda = grossProfit - opex;
  const ebitdaMargin = (ebitda / totalRevenue) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#241915] border border-[#3f322d] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-5 shadow-[6px_6px_0px_#2d5a27] relative animate-in fade-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb956] text-[20px]">tune</span>
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-widest">
              Interactive Financial Sensitivity &amp; Pro-Forma Engine
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

        <div>
          <h3 className="font-syne font-bold text-xl uppercase text-[#f3ded7] tracking-tight">
            Unit Economics &amp; Scale Sensitivity Simulator
          </h3>
          <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
            Adjust processing volume, retail price points, and channel mix to stress-test EBITDA and cash-generation capacity across agricultural micro-lot cycles.
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#150c08] p-4 border border-[#332723]">
          {/* Slider 1: Metric Tons */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs font-epilogue">
              <span className="text-[#8c9387] uppercase font-semibold">Dry Beans Processed</span>
              <span className="font-mono text-[#ffb956] font-bold">{metricTons} MT / Year</span>
            </div>
            <input
              type="range"
              min={14}
              max={250}
              step={5}
              value={metricTons}
              onChange={(e) => setMetricTons(Number(e.target.value))}
              className="accent-[#ffb956] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c9387]">
              <span>14 MT (FY24)</span>
              <span>95 MT (FY26)</span>
              <span>220 MT (FY27)</span>
            </div>
          </div>

          {/* Slider 2: Retail SRP */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs font-epilogue">
              <span className="text-[#8c9387] uppercase font-semibold">Signature Bar SRP ($USD)</span>
              <span className="font-mono text-[#a1d494] font-bold">${dtcPrice.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={6.50}
              max={12.00}
              step={0.25}
              value={dtcPrice}
              onChange={(e) => setDtcPrice(Number(e.target.value))}
              className="accent-[#a1d494] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c9387]">
              <span>$6.50 (Value)</span>
              <span>$8.50 (Standard)</span>
              <span>$12.00 (Reserve)</span>
            </div>
          </div>

          {/* Slider 3: Channel Mix */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs font-epilogue">
              <span className="text-[#8c9387] uppercase font-semibold">DTC Online vs Wholesale Mix</span>
              <span className="font-mono text-[#f3ded7] font-bold">{dtcMix}% DTC / {100 - dtcMix}% Wholesale</span>
            </div>
            <input
              type="range"
              min={20}
              max={90}
              step={5}
              value={dtcMix}
              onChange={(e) => setDtcMix(Number(e.target.value))}
              className="accent-[#ffb4a8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c9387]">
              <span>20% DTC</span>
              <span>65% Target</span>
              <span>90% DTC</span>
            </div>
          </div>

          {/* Slider 4: Wholesale Discount */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs font-epilogue">
              <span className="text-[#8c9387] uppercase font-semibold">Wholesale Discount Margin</span>
              <span className="font-mono text-[#ffddb5] font-bold">{wholesaleDiscount}% off SRP</span>
            </div>
            <input
              type="range"
              min={25}
              max={55}
              step={1}
              value={wholesaleDiscount}
              onChange={(e) => setWholesaleDiscount(Number(e.target.value))}
              className="accent-[#ffddb5] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8c9387]">
              <span>25% (Boutique)</span>
              <span>42% (Standard)</span>
              <span>55% (Duty-Free)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Output Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#150c08] p-3 border border-[#332723]">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387] block">
              Annual Output
            </span>
            <span className="font-syne text-xl text-[#f3ded7] font-bold">
              {barsProduced.toLocaleString()}
            </span>
            <span className="font-epilogue text-[10px] text-[#c2c9bb] block">50g Bars Produced</span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723]">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387] block">
              Projected Revenue
            </span>
            <span className="font-syne text-xl text-[#ffb956] font-bold">
              ${(totalRevenue / 1000000).toFixed(2)}M
            </span>
            <span className="font-epilogue text-[10px] text-[#c2c9bb] block">Blended Gross Sales</span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723]">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387] block">
              Gross Profit
            </span>
            <span className="font-syne text-xl text-[#a1d494] font-bold">
              ${(grossProfit / 1000000).toFixed(2)}M
            </span>
            <span className="font-epilogue text-[10px] text-[#a1d494] block font-bold">
              {grossMargin.toFixed(1)}% Margin
            </span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723]">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387] block">
              Operating EBITDA
            </span>
            <span className={`font-syne text-xl font-bold ${ebitda >= 0 ? 'text-[#a1d494]' : 'text-[#ffb4a8]'}`}>
              ${(ebitda / 1000000).toFixed(2)}M
            </span>
            <span className="font-epilogue text-[10px] text-[#c2c9bb] block font-bold">
              {ebitdaMargin.toFixed(1)}% EBITDA
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#332723]">
          <button
            onClick={() => {
              onClose();
              onRequestDeck();
            }}
            className="flex-1 py-3 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#2d5a27] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">table_chart</span>
            <span>Download Full DCF Excel Model (.XLSX)</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#150c08] hover:bg-[#281d19] text-[#c2c9bb] hover:text-[#f3ded7] font-epilogue font-semibold text-xs uppercase tracking-wider transition-colors border border-[#3f322d] cursor-pointer"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
