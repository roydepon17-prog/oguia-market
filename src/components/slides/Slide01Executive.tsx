import React from 'react';

interface Slide01ExecutiveProps {
  onRequestDeck: () => void;
  onRequestSamples: () => void;
  onExploreCollection: () => void;
}

export const Slide01Executive: React.FC<Slide01ExecutiveProps> = ({
  onRequestDeck,
  onRequestSamples,
  onExploreCollection,
}) => {
  return (
    <section id="slide-1" className="w-full flex flex-col gap-6 py-4 sm:py-6">
      {/* Top Slide Meta Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-[#241915] p-4 sm:p-6 border border-[#332723] shadow-md">
        <div className="flex flex-col gap-2 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2d5a27] text-[#a1d494] font-epilogue text-xs uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 bg-[#a1d494] rounded-full animate-pulse"></span>
              Investor Memorandum // Seed Expansion Round
            </span>
            <span className="font-epilogue text-xs uppercase text-[#8c9387]">
              Panay Island, Western Visayas
            </span>
            <span className="text-[#8c9387] text-xs font-mono hidden sm:inline">
              • 11°19′N 122°47′E
            </span>
          </div>

          <h1 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#f3ded7] tracking-tight leading-none">
            Tree-to-Bar Single-Estate Cacao &amp; Indigenous Visayan Innovation
          </h1>

          <p className="font-epilogue text-sm sm:text-base text-[#c2c9bb]">
            Scaling the Maayon, Capiz agro-forestry estate into Southeast Asia's premier regenerative craft chocolate exporter.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#281d19] border border-[#3f322d] px-4 py-3 self-start md:self-auto shrink-0 shadow-sm">
          <div className="text-right">
            <span className="block font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
              Target Equity Round
            </span>
            <span className="block font-syne text-xl sm:text-2xl text-[#ffb956] font-bold">
              $1.2M USD
            </span>
          </div>
          <span className="material-symbols-outlined text-[#ffb956] text-2xl ml-1">trending_up</span>
        </div>
      </div>

      {/* Main Asymmetric Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN: Narrative, Metrics, Ask (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
          {/* Core Thesis Statement */}
          <div className="bg-[#332723] p-5 sm:p-6 border border-[#3f322d] shadow-md relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none text-[#f3ded7]">
              <span className="material-symbols-outlined text-[140px]">eco</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#ffb956] text-3xl mt-0.5 shrink-0">
                verified
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="font-epilogue text-xs uppercase text-[#ffb956] tracking-widest font-bold">
                  Market Transformation Thesis
                </span>
                <p className="font-epilogue text-base sm:text-lg text-[#f3ded7] leading-snug">
                  <strong className="text-[#ffb956] font-semibold">O'guia Chocolates by Dad's Farm</strong> captures the{' '}
                  <span className="text-[#a1d494] font-medium">$132B global craft confectionery boom</span> through complete single-origin estate sovereignty, biodiverse endemic flavor profiles (Batwan, wild native Ube, Tubâ Rhum), and full-stack farmer equity from tree canopy to tempered bar.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Key Investment Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#281d19] p-3.5 sm:p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#8c9387] mb-1">
                <span className="font-epilogue text-[10px] uppercase font-semibold">Portfolio</span>
                <span className="material-symbols-outlined text-[16px] text-[#a1d494]">inventory_2</span>
              </div>
              <div className="font-syne text-2xl sm:text-3xl text-[#ffb956] font-bold">12+</div>
              <span className="font-epilogue text-xs text-[#f3ded7] uppercase font-bold mt-1">
                Award-Ready SKUs
              </span>
              <span className="font-epilogue text-[11px] text-[#8c9387] mt-0.5 leading-tight">
                Dark 70%, Batwan, Ube, Sugar-Free
              </span>
            </div>

            <div className="bg-[#281d19] p-3.5 sm:p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#8c9387] mb-1">
                <span className="font-epilogue text-[10px] uppercase font-semibold">Traceability</span>
                <span className="material-symbols-outlined text-[16px] text-[#a1d494]">qr_code_scanner</span>
              </div>
              <div className="font-syne text-2xl sm:text-3xl text-[#a1d494] font-bold">100%</div>
              <span className="font-epilogue text-xs text-[#f3ded7] uppercase font-bold mt-1">
                Single-Estate
              </span>
              <span className="font-epilogue text-[11px] text-[#8c9387] mt-0.5 leading-tight">
                Clonal Criollo/Trinitario verified
              </span>
            </div>

            <div className="bg-[#281d19] p-3.5 sm:p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#8c9387] mb-1">
                <span className="font-epilogue text-[10px] uppercase font-semibold">Scale Multiplier</span>
                <span className="material-symbols-outlined text-[16px] text-[#ffb956]">solar_power</span>
              </div>
              <div className="font-syne text-2xl sm:text-3xl text-[#ffb956] font-bold">3.8x</div>
              <span className="font-epilogue text-xs text-[#f3ded7] uppercase font-bold mt-1">
                Solar Yield Surge
              </span>
              <span className="font-epilogue text-[11px] text-[#8c9387] mt-0.5 leading-tight">
                Modular kiln &amp; conche hub expansion
              </span>
            </div>

            <div className="bg-[#281d19] p-3.5 sm:p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between text-[#8c9387] mb-1">
                <span className="font-epilogue text-[10px] uppercase font-semibold">Profitability</span>
                <span className="material-symbols-outlined text-[16px] text-[#a1d494]">finance_mode</span>
              </div>
              <div className="font-syne text-2xl sm:text-3xl text-[#a1d494] font-bold">74%</div>
              <span className="font-epilogue text-xs text-[#f3ded7] uppercase font-bold mt-1">
                Gross Margin
              </span>
              <span className="font-epilogue text-[11px] text-[#8c9387] mt-0.5 leading-tight">
                DTC online &amp; luxury retail placement
              </span>
            </div>
          </div>

          {/* Terroir & Founder Stewardship Panel */}
          <div className="bg-[#241915] p-4 sm:p-5 border border-[#332723] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-[#2d5a27] text-[#a1d494] flex items-center justify-center font-syne text-lg font-extrabold shrink-0 shadow-[2px_2px_0px_#150c08]">
                OG
              </div>
              <div>
                <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-wider block">
                  Family Stewardship · Atty. Abeb &amp; Dad's Farm Family
                </span>
                <p className="font-epilogue text-xs text-[#c2c9bb] mt-0.5 leading-relaxed">
                  Regenerating 40+ hectares of mineral-dense volcanic soils in Maayon, Capiz under shade-grown tropical canopy with endemic banana, coconut, and hardwood nurse trees.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-[#281d19] border border-[#3f322d] px-3 py-1.5 whitespace-nowrap self-end sm:self-center shrink-0">
              <span className="material-symbols-outlined text-[#a1d494] text-sm">pin_drop</span>
              <span className="font-epilogue text-[11px] uppercase text-[#8c9387] font-semibold">
                Capiz Terroir 01
              </span>
            </div>
          </div>

          {/* Investment Ask Banner */}
          <div className="bg-[#2d5a27] text-[#9dd090] p-4 sm:p-5 border border-[#3b6934] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ffb956] text-2xl mt-0.5 shrink-0">
                diamond
              </span>
              <div>
                <span className="font-epilogue text-[11px] uppercase text-[#ffddb5] tracking-widest font-bold block">
                  Capital Allocation Roadmap
                </span>
                <p className="font-epilogue text-sm text-[#f3ded7] mt-0.5">
                  <strong className="text-white">Seed Expansion: $1.2M USD (PHP 65M)</strong> — Solar Fermentary, Metro Manila Flagship, and USDA Organic / JAS Export Certifications.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 bg-[#150c08] text-[#ffb956] font-epilogue text-xs font-bold uppercase tracking-wider shadow-sm">
                Series Seed
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Showcase & Estate Provenance (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          {/* Hero Photography Card: Founders in Cacao Canopy */}
          <div className="relative bg-[#281d19] border border-[#332723] overflow-hidden group shadow-lg flex-1 min-h-[300px] flex flex-col justify-end">
            <img
              alt="Atty. Abeb and family founder in vibrant cacao orchard under lush tropical canopy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbeqFQe1DRpi_3QDkq2Mn8KSOpeL_zS-JjxgwNKEKP-bt2x5hKCEDNfjOwLsSfRGUS3XTpHOQmQ_OFcOJrQJcJympU2yKVrrqd6OOaw5QuuRTfwKw8lYAv7PuMoczQiAa258t_3ersXgZqCQd-VMuoS8o70N4UL-ohFLpbhYmwoPjppGEjC99v0c9ob5TnACo8IJzHwzjvHZx-H7zLqTaj61JI7e-MI60DGIZKsSG8jAhouiWBH-yb1v5uTeJ0LyI_-1w"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150c08] via-[#150c08]/40 to-transparent"></div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
              <span className="px-3 py-1 bg-[#150c08]/90 font-epilogue text-[11px] uppercase text-[#ffb956] font-bold shadow-sm border border-[#332723]">
                Maayon Terroir Orchard
              </span>
              <span className="px-2.5 py-1 bg-[#2d5a27]/90 text-[#a1d494] font-epilogue text-[11px] uppercase font-bold flex items-center gap-1.5 shadow-sm border border-[#3b6934]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a1d494] animate-pulse"></span>
                Certified Agroforestry
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-4 sm:p-5 flex items-end justify-between gap-3">
              <div>
                <span className="font-syne font-bold text-lg sm:text-xl text-[#f3ded7] uppercase block drop-shadow-md">
                  Dad's Farm Living Canopy
                </span>
                <span className="font-epilogue text-xs text-[#a1d494] uppercase tracking-wider font-semibold">
                  Agro-Ecological Stewardship • Zero Synthetic Inputs
                </span>
              </div>

              {/* Tribal Mask Graphic Emblem Badge */}
              <div className="w-12 h-12 bg-[#150c08] border border-[#3f322d] shadow-md overflow-hidden shrink-0 flex items-center justify-center p-1">
                <img
                  alt="O'guia indigenous emblem"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3u3cY16B_o2NGsGyutsaV08iRw_leNMviZgEaD4zId4m2hFA2TBrrdkZiZNZmNSKu_AgPRE9mx8KR-VH84iXre4NKPO1VZhFkD9ua2vkgjm1K-nFVx5iiGhtK0GSo1pob3ib01RSmchFwItmpvfFenTavJ8_cnL320-e9-zw2zqLmXFaeaJbEt_EU_dGa8fYQ3egfwhlgu_TwtoeO01W8xv_MqFSnJ7EIozl-GanOghXl-ES-kvjBXtQWTTpWjD2QQOo"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Dual Thumbnails: Signature Bar & Full Flight Basket */}
          <div className="grid grid-cols-2 gap-3">
            {/* 70% Dark Chocolate Packaged Bar */}
            <button
              onClick={onExploreCollection}
              className="bg-[#241915] p-2 border border-[#332723] flex flex-col gap-2 group shadow-sm text-left cursor-pointer hover:border-[#ffb956] transition-colors"
            >
              <div className="relative h-32 sm:h-36 overflow-hidden bg-[#150c08]">
                <img
                  alt="O'guia 70% Dark Chocolate artisanal packaged bar surrounded by roasted cacao beans"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWOrF0QHR5t0JrWTIcrOySedToPH1twGbXTPk37O8oReRlGIUr_HeyeYeqojbDGi-vo2hUJavpZfieK9ihw3RDDXeo1YlS999BUJYrEc-o3R9e_QF0vGnpn8kCfgtGNfRAN-Oefx_B5K1XDRnC1-vPFGRL05Bn8xDWXInEhdIbozYGW8oROOedEiCzHfPjcjFinB9tFZr7QlXWZS2bSpPw0hzb2Om8ta6UGLT9DXmSkM9PKz1TGRZh8ZjbMHxY6N7LJn8"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-[#150c08]/90 font-epilogue text-[10px] text-[#ffb956] uppercase font-bold">
                  70% Dark Single-Estate
                </span>
              </div>
              <div className="px-1 py-0.5">
                <span className="font-epilogue text-xs uppercase text-[#f3ded7] font-bold block leading-tight">
                  6-Day Slow Ferment
                </span>
                <span className="font-epilogue text-[11px] text-[#8c9387] block leading-snug">
                  Gentle conche • Wild raisin &amp; citrus
                </span>
              </div>
            </button>

            {/* Full 12-SKU Portfolio Basket */}
            <button
              onClick={onExploreCollection}
              className="bg-[#241915] p-2 border border-[#332723] flex flex-col gap-2 group shadow-sm text-left cursor-pointer hover:border-[#a1d494] transition-colors"
            >
              <div className="relative h-32 sm:h-36 overflow-hidden bg-[#150c08]">
                <img
                  alt="Basket containing complete array of O'guia craft chocolate bars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgaP5Kkd-L9gB6o0wLPF0ybzquiYjjFV0etOTZal22kQXtZ9CVfAXqN0xdXzKVXRAirdUuZIKmcalgiN-67J5voPIJfzUrF4pX3chnM5WCh2gO6TK2aGgJn87zm_KbrhT7xTo32F60Itc3JP1EML9ora4hr5kkf2fEf5brnqhROPxzcj70U1w1I29fx1fRpIWTrsOHT-gOctz8i8GIaTWdeZ-9vulzPQ0ZKElGebKvJk5jycS_2oem85K5fanS7ZIpNUY"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-[#150c08]/90 font-epilogue text-[10px] text-[#a1d494] uppercase font-bold">
                  Complete Collection
                </span>
              </div>
              <div className="px-1 py-0.5">
                <span className="font-epilogue text-xs uppercase text-[#f3ded7] font-bold block leading-tight">
                  Visayan Flavor Flight
                </span>
                <span className="font-epilogue text-[11px] text-[#8c9387] block leading-snug">
                  Batwan, Native Ube, Matcha &amp; Tablea
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action & Pitch Data Bar */}
      <div className="bg-[#150c08] p-4 sm:p-5 border border-[#332723] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#8c9387]">
            <span className="material-symbols-outlined text-[#ffb956] text-base">security</span>
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#c2c9bb] font-semibold">
              Strictly Confidential — Accredited Investors Only
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-[#8c9387] font-epilogue">
            <span>•</span>
            <span>Target Close: Q3 2025</span>
            <span>•</span>
            <span>Legal Counsel: Romulo Mabanta</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={onRequestSamples}
            type="button"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#332723] hover:bg-[#3f322d] text-[#f3ded7] font-epilogue font-bold text-xs uppercase px-4 py-2.5 transition-colors border border-[#3f322d] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffb956]">takeout_dining</span>
            <span>Request 4-Bar Flight Box</span>
          </button>
          <button
            onClick={onRequestDeck}
            type="button"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase px-4 py-2.5 transition-all shadow-[2px_2px_0px_#2d5a27] cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
            <span>Access Data Room (.PDF / .XLSX)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
