import React from 'react';

interface FooterProps {
  onSelectSlide: (slide: number) => void;
  onRequestDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSlide, onRequestDeck }) => {
  return (
    <footer className="w-full bg-[#150c08] border-t border-[#332723] pt-10 pb-16 lg:pb-10 shadow-[0_-1px_12px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col gap-8">
        {/* Top row with quick navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-[#241915]">
          <div className="flex flex-col gap-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#ffb956] shadow-[2px_2px_0px_#2d5a27]"></span>
              <span className="font-syne font-bold text-xl uppercase text-[#f3ded7] tracking-wider">
                O'guia Chocolates
              </span>
            </div>
            <p className="font-epilogue text-xs text-[#c2c9bb] max-w-sm mt-1 leading-relaxed">
              Tree-to-bar single-origin craft chocolate from Dad's Farm in Maayon, Capiz, Western Visayas. Restoring indigenous agroforestry ecosystems through ethical value-add confectionery.
            </p>
            <div className="flex items-center gap-4 text-xs font-epilogue text-[#a1d494] mt-2">
              <span>GPS: 11°19′N 122°47′E</span>
              <span>•</span>
              <span>Elevation: 240M ASL</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#ffb956] font-bold">
              Investor Memorandum
            </span>
            <div className="flex flex-col gap-1.5 font-epilogue text-xs text-[#8c9387]">
              <button
                onClick={() => onSelectSlide(1)}
                className="text-left hover:text-[#f3ded7] transition-colors cursor-pointer"
              >
                01. Executive Summary &amp; Thesis
              </button>
              <button
                onClick={() => onSelectSlide(2)}
                className="text-left hover:text-[#f3ded7] transition-colors cursor-pointer"
              >
                02. Agroforestry Terroir &amp; Canopy
              </button>
              <button
                onClick={() => onSelectSlide(3)}
                className="text-left hover:text-[#f3ded7] transition-colors cursor-pointer"
              >
                03. Product Portfolio &amp; SKUs
              </button>
              <button
                onClick={() => onSelectSlide(4)}
                className="text-left hover:text-[#f3ded7] transition-colors cursor-pointer"
              >
                04. Unit Economics &amp; Pro-Forma
              </button>
              <button
                onClick={() => onSelectSlide(5)}
                className="text-left hover:text-[#f3ded7] transition-colors cursor-pointer"
              >
                05. Growth Capital &amp; Runway
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#a1d494] font-bold">
              Inquiries &amp; Verification
            </span>
            <div className="flex flex-col gap-1 text-xs font-epilogue text-[#c2c9bb]">
              <span className="text-[#8c9387]">Direct Line:</span>
              <span className="font-semibold text-[#ffb956]">+63 (917) 000-OGUIA</span>
              <span className="text-[#8c9387] mt-1">Institutional Relations:</span>
              <span className="font-semibold text-[#a1d494]">invest@oguiachocolates.com</span>
              <button
                onClick={onRequestDeck}
                className="mt-2 text-left text-[#ffb956] hover:underline font-bold uppercase text-[11px]"
              >
                Request Confidential NDA Deck →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-epilogue text-[#8c9387]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-syne font-bold uppercase text-[#f3ded7] tracking-wider">
              O'guia Chocolates
            </span>
            <span>•</span>
            <span className="uppercase text-[#c2c9bb]">Maayon, Capiz, Philippines</span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs uppercase tracking-wider text-[#a1d494] font-semibold">
            <span>Regenerative Agro-Forestry</span>
            <span>·</span>
            <span>Single-Estate</span>
            <span>·</span>
            <span>Tree-To-Bar</span>
          </div>

          <div className="uppercase text-[11px] text-[#c2c9bb] text-center md:text-right">
            © 2025 Dad's Farm Agroforestry Corp. Strictly Confidential.
          </div>
        </div>
      </div>
    </footer>
  );
};
