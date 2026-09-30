import React from 'react';
import { ChocolateSKU } from '../data/chocolatesData';

interface ProductDetailModalProps {
  sku: ChocolateSKU | null;
  onClose: () => void;
  onRequestSample: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  sku,
  onClose,
  onRequestSample,
}) => {
  if (!sku) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#241915] border border-[#3f322d] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-5 shadow-[6px_6px_0px_#2d5a27] relative animate-in fade-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#a1d494]"></span>
            <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold tracking-widest">
              {sku.categoryLabel}
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

        {/* Content Top: Image and Core Details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          <div className="sm:col-span-5 bg-[#150c08] border border-[#332723] overflow-hidden relative aspect-square sm:aspect-auto sm:h-full min-h-[220px]">
            <img
              src={sku.imageUrl}
              alt={sku.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#150c08]/90 font-epilogue text-[10px] uppercase tracking-wider text-[#ffb956] font-bold">
              {sku.badge}
            </span>
            <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#2d5a27] font-epilogue text-[10px] uppercase tracking-wider text-[#a1d494] font-bold">
              {sku.cacaoPercentage}
            </span>
          </div>

          <div className="sm:col-span-7 flex flex-col justify-between gap-3">
            <div>
              <span className="font-epilogue text-[11px] uppercase tracking-wider text-[#ffb956] block">
                {sku.tagline}
              </span>
              <h2 className="font-syne font-bold text-2xl uppercase text-[#f3ded7] tracking-tight leading-tight mt-0.5">
                {sku.name}
              </h2>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-2 leading-relaxed">
                {sku.description}
              </p>
            </div>

            {/* Pricing Matrix */}
            <div className="bg-[#150c08] p-3 border border-[#332723] flex items-center justify-between">
              <div>
                <span className="block font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Suggested Retail Price
                </span>
                <span className="font-syne font-bold text-lg text-[#ffb956]">
                  ${sku.srpUsd.toFixed(2)} USD{' '}
                  <span className="font-epilogue text-xs text-[#c2c9bb] font-normal">
                    (₱{sku.srpPhp} PHP)
                  </span>
                </span>
              </div>
              <div className="text-right">
                <span className="block font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Gross Margin
                </span>
                <span className="font-syne font-bold text-base text-[#a1d494]">
                  {sku.grossMargin}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sensory Tasting Notes */}
        <div className="flex flex-col gap-1.5">
          <span className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
            Sensory Tasting Descriptors
          </span>
          <div className="flex flex-wrap gap-1.5">
            {sku.tastingNotes.map((note, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-[#150c08] border border-[#332723] text-xs font-epilogue text-[#f3ded7]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Production Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-epilogue">
          <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1">
            <span className="text-[10px] uppercase text-[#8c9387] font-semibold">Cacao Genetics</span>
            <span className="text-[#f3ded7] font-semibold">{sku.cacaoCultivar}</span>
            <span className="text-[11px] text-[#c2c9bb]">Certified non-GMO clone, single parcel traceability</span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1">
            <span className="text-[10px] uppercase text-[#8c9387] font-semibold">Roast & Fermentation</span>
            <span className="text-[#ffb956] font-semibold">{sku.roastProfile}</span>
            <span className="text-[11px] text-[#c2c9bb]">{sku.fermentProfile}</span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1">
            <span className="text-[10px] uppercase text-[#8c9387] font-semibold">COGS Unit Anatomy</span>
            <span className="text-[#a1d494] font-semibold">
              ${sku.cogsUsd.toFixed(2)} USD (₱{sku.cogsPhp} PHP)
            </span>
            <span className="text-[11px] text-[#c2c9bb]">Direct farmer premium: 45% above Fairtrade</span>
          </div>

          <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1">
            <span className="text-[10px] uppercase text-[#8c9387] font-semibold">Packaging Specification</span>
            <span className="text-[#f3ded7] font-semibold">18-Month Tropical Barrier Foil</span>
            <span className="text-[11px] text-[#c2c9bb]">100% biodegradable unbleached botanical kraft outer wrap</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#332723]">
          <button
            onClick={() => {
              onClose();
              onRequestSample();
            }}
            className="flex-1 py-3 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#2d5a27] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">takeout_dining</span>
            <span>Include in Tasting Flight Box</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#150c08] hover:bg-[#281d19] text-[#c2c9bb] hover:text-[#f3ded7] font-epilogue font-semibold text-xs uppercase tracking-wider transition-colors border border-[#3f322d] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
