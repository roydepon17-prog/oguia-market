import React from 'react';

interface MobileBottomNavProps {
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
  onRequestPartner: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentSlide,
  onSelectSlide,
  onRequestPartner,
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#150c08]/95 backdrop-blur-xl border-t border-[#332723] pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_16px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-2 py-1.5 max-w-lg mx-auto">
        <div className="flex items-center justify-around flex-1">
          {/* Story button (Slide 1) */}
          <button
            onClick={() => onSelectSlide(1)}
            className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 transition-colors cursor-pointer ${
              currentSlide === 1 ? 'text-[#ffb956]' : 'text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">history_edu</span>
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider mt-0.5 leading-none">
              Story
            </span>
          </button>

          {/* Batches / Collection button (Slide 3) */}
          <button
            onClick={() => onSelectSlide(3)}
            className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 transition-colors cursor-pointer ${
              currentSlide === 3 ? 'text-[#ffb956]' : 'text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">potted_plant</span>
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider mt-0.5 leading-none">
              Batches
            </span>
          </button>

          {/* Terroir / Forest Ecology (Slide 2) */}
          <button
            onClick={() => onSelectSlide(2)}
            className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 transition-colors cursor-pointer ${
              currentSlide === 2 ? 'text-[#ffb956]' : 'text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider mt-0.5 leading-none">
              Terroir
            </span>
          </button>

          {/* Financials / Economics (Slide 4) */}
          <button
            onClick={() => onSelectSlide(4)}
            className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 transition-colors cursor-pointer ${
              currentSlide === 4 ? 'text-[#ffb956]' : 'text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">finance_mode</span>
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider mt-0.5 leading-none">
              Financials
            </span>
          </button>
        </div>

        {/* Partner Button (Right callout) */}
        <div className="pl-1.5 pr-1 shrink-0">
          <button
            onClick={onRequestPartner}
            className="min-h-[40px] px-3.5 py-1.5 flex items-center justify-center gap-1.5 bg-[#ffb956] text-[#462b00] font-epilogue font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#2d5a27] active:translate-x-0.5 active:translate-y-0.5 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px]">handshake</span>
            <span>Partner</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
