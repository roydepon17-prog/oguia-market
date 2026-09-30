import React, { useState } from 'react';

interface HeaderProps {
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
  viewMode: 'slides' | 'scroll';
  onToggleViewMode: (mode: 'slides' | 'scroll') => void;
  onRequestDeck: () => void;
  onRequestSamples: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  onSelectSlide,
  viewMode,
  onToggleViewMode,
  onRequestDeck,
  onRequestSamples,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, label: '01 Executive', slug: 'executive-summary' },
    { id: 2, label: '02 Terroir', slug: 'agroforestry-terroir' },
    { id: 3, label: '03 Collection', slug: 'product-roast-matrix' },
    { id: 4, label: '04 Financials', slug: 'unit-economics' },
    { id: 5, label: '05 Investment', slug: 'seed-capital-use' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#150c08]/90 backdrop-blur-xl border-b border-[#332723] shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
      <div className="h-16 w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={() => {
              onSelectSlide(1);
              if (viewMode === 'scroll') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="w-3.5 h-3.5 bg-[#ffb956] shadow-[2px_2px_0px_#2d5a27] group-hover:scale-110 transition-transform"></span>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-xl tracking-wider uppercase text-[#f3ded7] leading-none">
                O'GUIA
              </span>
              <span className="font-epilogue text-[10px] tracking-widest text-[#a1d494] uppercase leading-none mt-0.5 hidden xs:inline">
                Maayon • Capiz
              </span>
            </div>
          </button>

          <div className="h-5 w-px bg-[#3f322d] hidden md:block"></div>

          <div className="hidden md:flex items-center gap-1.5 text-[#8c9387]">
            <span className="material-symbols-outlined text-[16px] text-[#a1d494]">token</span>
            <span className="font-epilogue text-[11px] uppercase tracking-wider text-[#c2c9bb]">
              Dad's Farm Pitch v2.4
            </span>
          </div>
        </div>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentSlide === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSlide(item.id);
                  if (viewMode === 'scroll') {
                    const el = document.getElementById(`slide-${item.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-1.5 font-epilogue text-[13px] font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#3f322d] text-[#ffb956] shadow-[0_1px_0_0_#ffb956]'
                    : 'text-[#c2c9bb] hover:text-[#f3ded7] hover:bg-[#281d19]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* View mode toggle switch */}
          <div className="hidden sm:flex items-center bg-[#241915] p-0.5 border border-[#3f322d]">
            <button
              onClick={() => onToggleViewMode('slides')}
              title="Slide Deck Mode"
              className={`px-2 py-1 text-[11px] font-epilogue uppercase tracking-wider font-semibold transition-colors flex items-center gap-1 ${
                viewMode === 'slides' ? 'bg-[#3f322d] text-[#ffb956]' : 'text-[#8c9387] hover:text-[#f3ded7]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">view_carousel</span>
              <span>Deck</span>
            </button>
            <button
              onClick={() => onToggleViewMode('scroll')}
              title="Long-Form Marketing Story Mode"
              className={`px-2 py-1 text-[11px] font-epilogue uppercase tracking-wider font-semibold transition-colors flex items-center gap-1 ${
                viewMode === 'scroll' ? 'bg-[#3f322d] text-[#a1d494]' : 'text-[#8c9387] hover:text-[#f3ded7]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">feed</span>
              <span>Story</span>
            </button>
          </div>

          {/* Live Deck Status Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#241915] border border-[#332723] px-2.5 py-1">
            <span className="w-2 h-2 rounded-full bg-[#a1d494] animate-pulse"></span>
            <span className="font-epilogue text-[11px] uppercase text-[#c2c9bb] tracking-wider font-semibold">
              Live Deck
            </span>
          </div>

          {/* Primary Request Action Button */}
          <button
            onClick={onRequestDeck}
            type="button"
            className="flex items-center gap-1.5 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase px-3.5 py-2 transition-all shadow-[2px_2px_0px_#2d5a27] active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px]">lock_open</span>
            <span className="hidden sm:inline">Request Confidential Deck</span>
            <span className="sm:hidden">Pitch Deck</span>
          </button>

          {/* Founder Avatar */}
          <button
            onClick={onRequestSamples}
            title="Atty. Abeb & Dad's Farm Stewardship Collective"
            className="w-8 h-8 rounded-full overflow-hidden border border-[#ffb956]/50 hover:scale-105 transition-transform shrink-0"
          >
            <img
              alt="Atty. Abeb"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5AH3xTTOs_Iin62zBuGu5hWWn336maPImJ5FmjV_u0AFmGgUmvWObKlh3JWDVFtEzDGQ7vmEGl4ak2UAtPcPuRw-szTD1jfWh2TBQ--GS5hJXiFNHwe-94kg2rc3O8EZBZZ50cMVwJ3vq4nAN-n6s-9uhSRtLR3OqMqdShaQTy3sIwYvjhIEqKs7VKgrDziPW0NEtkGJY-Ejmk0Xh2JrDBV8BoBDGVznFSO3xn5oHHDdfJtU5kL7HLA"
            />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#c2c9bb] hover:text-[#f3ded7] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#150c08] border-b border-[#332723] px-4 py-3 flex flex-col gap-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#241915]">
            <span className="text-[11px] font-epilogue uppercase text-[#8c9387]">Navigation Sections</span>
            <div className="flex items-center gap-1 bg-[#241915] p-0.5 border border-[#3f322d]">
              <button
                onClick={() => onToggleViewMode('slides')}
                className={`px-2 py-0.5 text-[10px] font-epilogue uppercase ${
                  viewMode === 'slides' ? 'bg-[#ffb956] text-[#462b00] font-bold' : 'text-[#c2c9bb]'
                }`}
              >
                Slides
              </button>
              <button
                onClick={() => onToggleViewMode('scroll')}
                className={`px-2 py-0.5 text-[10px] font-epilogue uppercase ${
                  viewMode === 'scroll' ? 'bg-[#a1d494] text-[#0a3909] font-bold' : 'text-[#c2c9bb]'
                }`}
              >
                Story
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSlide(item.id);
                  setMobileMenuOpen(false);
                  if (viewMode === 'scroll') {
                    const el = document.getElementById(`slide-${item.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-2 text-left font-epilogue text-xs uppercase font-semibold transition-colors ${
                  currentSlide === item.id
                    ? 'bg-[#3f322d] text-[#ffb956]'
                    : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestSamples();
              }}
              className="flex-1 py-2 bg-[#2d5a27] text-[#a1d494] font-epilogue font-semibold text-xs uppercase text-center"
            >
              Order Tasting Box
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDeck();
              }}
              className="flex-1 py-2 bg-[#ffb956] text-[#462b00] font-epilogue font-bold text-xs uppercase text-center"
            >
              Access Data Room
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
