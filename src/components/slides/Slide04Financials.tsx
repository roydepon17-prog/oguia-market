import React, { useState } from 'react';
import { FINANCIAL_PROJECTIONS, COGS_BREAKDOWN_50G } from '../../data/chocolatesData';

interface Slide04FinancialsProps {
  onRequestModel: () => void;
  onViewSensitivity: () => void;
}

export const Slide04Financials: React.FC<Slide04FinancialsProps> = ({
  onRequestModel,
  onViewSensitivity,
}) => {
  const [highlightedYear, setHighlightedYear] = useState<'fy24' | 'fy25' | 'fy26' | 'fy27'>('fy26');

  return (
    <section id="slide-4" className="w-full flex flex-col gap-6 py-4 sm:py-6">
      {/* Slide Header & Metadata Overlay */}
      <div className="w-full bg-[#150c08] p-4 sm:p-6 border border-[#332723] flex flex-col gap-3 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[#8c9387]">
          <div className="flex flex-wrap items-center gap-2 font-epilogue text-xs uppercase tracking-wider text-[#ffb956]">
            <span className="w-2 h-2 bg-[#ffb956]"></span>
            <span>INVESTOR MEMORANDUM // FINANCIAL ARCHITECTURE &amp; UNIT ECONOMICS</span>
            <span className="text-[#42493e]">/</span>
            <span className="text-[#c2c9bb]">PANAY ISLAND, WESTERN VISAYAS</span>
          </div>

          <div className="flex items-center gap-2 bg-[#281d19] border border-[#332723] px-3 py-1 shadow-[2px_2px_0px_#2d5a27]">
            <span className="material-symbols-outlined text-[16px] text-[#a1d494]">insights</span>
            <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold tracking-widest">
              PROJECTED FY27 EBITDA: $2.62M (32% MARGIN)
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-1">
          <div className="max-w-3xl flex flex-col gap-1">
            <span className="font-epilogue text-xs text-[#a1d494] uppercase tracking-wider font-bold">
              Slide 04 // Scalable Micro-Terroir Model
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#f3ded7] tracking-tight leading-none">
              High-Margin Artisan Scalability &amp; Unit Profitability
            </h2>
          </div>

          <p className="font-epilogue text-xs sm:text-sm text-[#c2c9bb] max-w-xl leading-relaxed">
            Transitioning from boutique estate harvest to industrial-scale solar fermentation, unlocking{' '}
            <span className="text-[#ffb956] font-bold">74% blended gross margins</span> across DTC craft retail, regional luxury hospitality, and global micro-roaster export channels.
          </p>
        </div>
      </div>

      {/* 4-KPI High-Impact Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[3px_3px_0px_#2d5a27]">
          <div className="flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#c2c9bb] font-bold tracking-wider">
              Blended Gross Margin
            </span>
            <span className="material-symbols-outlined text-[#ffb956] text-[20px]">donut_large</span>
          </div>
          <div className="my-3">
            <span className="font-syne text-3xl sm:text-4xl text-[#ffb956] font-extrabold tracking-tight">
              74.2%
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#8c9387] leading-snug">
            DTC online &amp; luxury boutique retail (82%) vs. regional wholesale channels (58%).
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[3px_3px_0px_#2d5a27]">
          <div className="flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#c2c9bb] font-bold tracking-wider">
              Estate CAC to LTV
            </span>
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">all_inclusive</span>
          </div>
          <div className="my-3">
            <span className="font-syne text-3xl sm:text-4xl text-[#a1d494] font-extrabold tracking-tight">
              5.4x
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#8c9387] leading-snug">
            Estimated LTV $248 vs. blended CAC $46 via on-farm agro-tourism and curated gift flights.
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[3px_3px_0px_#2d5a27]">
          <div className="flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#c2c9bb] font-bold tracking-wider">
              Annual Run-Rate (FY26P)
            </span>
            <span className="material-symbols-outlined text-[#ffb4a8] text-[20px]">trending_up</span>
          </div>
          <div className="my-3">
            <span className="font-syne text-3xl sm:text-4xl text-[#f3ded7] font-extrabold tracking-tight">
              $3.60M
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#8c9387] leading-snug">
            Scaling baseline from $480K at 112% CAGR enabled by modular processing pods.
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[3px_3px_0px_#2d5a27]">
          <div className="flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#c2c9bb] font-bold tracking-wider">
              Payback Period / Batch
            </span>
            <span className="material-symbols-outlined text-[#ffb956] text-[20px]">timer</span>
          </div>
          <div className="my-3">
            <span className="font-syne text-3xl sm:text-4xl text-[#ffb956] font-extrabold tracking-tight">
              14 Mos
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#8c9387] leading-snug">
            Low capex solar tunnel kiln modular expansion yielding rapid free cash flow conversion.
          </p>
        </div>
      </div>

      {/* Deep-Dive Split: Unit Cost Anatomy & Pro-Forma Projections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Unit Economics (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a1d494]"></span>
              <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold tracking-widest">
                Direct COGS Stack
              </span>
            </div>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] font-bold">
              The Anatomy of a 50g Bar
            </h3>
            <p className="font-epilogue text-xs text-[#8c9387]">
              Baseline: Signature 70% Dark Chocolate Bar. Suggested Retail:{' '}
              <span className="text-[#ffb956] font-semibold">$8.50 USD</span> (PHP 480).
            </p>
          </div>

          {/* Product Visual Showcase Block */}
          <div className="relative bg-[#241915] p-4 border border-[#332723] flex items-center gap-4 overflow-hidden shadow-[4px_4px_0px_#150c08]">
            <div className="w-24 sm:w-28 h-32 sm:h-36 shrink-0 bg-[#332723] overflow-hidden border border-[#3f322d]">
              <img
                className="w-full h-full object-cover"
                alt="Signature 70% Dark Chocolate Bar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-XyGBKcbnreiob_g80tBiiZh6qzgwOJSAHA-4RvMa71soYNt2sVMNp7sHh36XVAKYHmPql3DfudzE0b2DWuEI2qV9P82rfyv6HHptQavOsYEPrbse-rEFbtguonwpVJeGXFPJh3ld-xLGZXlYvc9Q6RjO_AVEhyRVt8P7aj5hjObw1LYbqmghAP_iPP03WVWgAAwNB1iTgcRbp19ET8zb_A_gWwOzRrjmDFXsKOi8dQTngRtttbG_1g"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-between h-full py-1">
              <div className="flex flex-col">
                <span className="font-epilogue text-[10px] uppercase text-[#ffb956] font-bold">
                  Terroir SKU #70-MYN
                </span>
                <span className="font-syne text-base sm:text-lg text-[#f3ded7] font-bold">
                  O'guia Dark 70%
                </span>
                <span className="font-epilogue text-xs text-[#c2c9bb]">
                  Maayon Forest Reserve Lot 4
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3 pt-2 bg-[#150c08] border border-[#332723] px-3 py-1.5">
                <div>
                  <span className="block font-epilogue text-[10px] uppercase text-[#8c9387]">
                    COGS Total
                  </span>
                  <span className="font-syne text-sm text-[#ffb4a8] font-bold">$2.61</span>
                </div>
                <div className="h-6 w-px bg-[#332723]"></div>
                <div>
                  <span className="block font-epilogue text-[10px] uppercase text-[#8c9387]">
                    Unit Net Margin
                  </span>
                  <span className="font-syne text-sm text-[#a1d494] font-bold">$5.89 (69.3%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown Waterfall */}
          <div className="flex flex-col gap-3 bg-[#241915] p-5 border border-[#332723]">
            <div className="flex items-center justify-between text-[#8c9387] font-epilogue text-[10px] uppercase font-semibold">
              <span>Itemized Production Inputs</span>
              <span>% of SRP ($8.50)</span>
            </div>

            {COGS_BREAKDOWN_50G.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline text-xs font-epilogue">
                  <span className="text-[#f3ded7]">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold" style={{ color: item.color }}>
                      {item.percent}%
                    </span>
                    <span className="font-semibold text-[#f3ded7]">${item.costUsd.toFixed(2)}</span>
                  </div>
                </div>
                <div className="w-full bg-[#150c08] h-2 overflow-hidden border border-[#332723]">
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${item.percent * 3}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Total Summary */}
            <div className="mt-2 pt-3 bg-[#150c08] border border-[#332723] p-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Total Product Cost
                </span>
                <span className="font-syne text-base text-[#f3ded7] font-bold">$2.61 COGS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-epilogue text-[10px] uppercase text-[#a1d494]">
                  Contribution Profit
                </span>
                <span className="font-syne text-base text-[#a1d494] font-bold">$5.89 / Bar</span>
              </div>
            </div>
          </div>

          {/* Fair-Equity Agroforestry Guarantee */}
          <div className="bg-[#2d5a27] p-4 text-[#9dd090] border border-[#3b6934] shadow-[2px_2px_0px_#150c08] flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#a1d494] shrink-0 mt-0.5">
              eco
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-epilogue text-xs uppercase text-[#f3ded7] font-bold">
                Fair-Equity Agroforestry Guarantee
              </span>
              <p className="font-epilogue text-xs text-[#9dd090] leading-relaxed">
                We pay{' '}
                <strong className="text-white underline decoration-[#a1d494]">
                  45% above Fairtrade floor price
                </strong>{' '}
                directly to our cooperative partner families in Maayon, preserving rain-canopy shade coverage while securing superior seed genetics and guaranteed bean supply.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4-Year Scale Projections & Revenue Pillars (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ffb956]"></span>
              <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-widest">
                Multi-Year Forecast &amp; EBITDA Expansion
              </span>
            </div>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] font-bold">
              Commercial Trajectory (FY24 - FY27P)
            </h3>
          </div>

          {/* Year selector tabs for mobile & quick focus */}
          <div className="flex items-center gap-2 bg-[#150c08] p-1 border border-[#332723] self-start">
            <span className="text-[10px] font-epilogue uppercase text-[#8c9387] px-2">Highlight:</span>
            {(['fy24', 'fy25', 'fy26', 'fy27'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setHighlightedYear(year)}
                className={`px-2.5 py-1 text-[11px] font-epilogue uppercase font-bold transition-colors cursor-pointer ${
                  highlightedYear === year
                    ? 'bg-[#3f322d] text-[#ffb956]'
                    : 'text-[#c2c9bb] hover:text-[#f3ded7]'
                }`}
              >
                {year.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tabular Pro-Forma Structure */}
          <div className="w-full overflow-x-auto bg-[#241915] border border-[#332723] shadow-[3px_3px_0px_#2d5a27]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#281d19] text-[#8c9387] font-epilogue text-[11px] uppercase tracking-wider border-b border-[#332723]">
                  <th className="py-3 px-4">Financial Metric</th>
                  <th className={`py-3 px-3 text-center ${highlightedYear === 'fy24' ? 'bg-[#332723] text-white' : ''}`}>
                    FY24 Base
                  </th>
                  <th className={`py-3 px-3 text-center ${highlightedYear === 'fy25' ? 'bg-[#332723] text-white' : ''}`}>
                    FY25 Target
                  </th>
                  <th className={`py-3 px-3 text-center text-[#ffb956] ${highlightedYear === 'fy26' ? 'bg-[#332723]' : ''}`}>
                    FY26 Projected
                  </th>
                  <th className={`py-3 px-4 text-right text-[#a1d494] ${highlightedYear === 'fy27' ? 'bg-[#332723]' : ''}`}>
                    FY27 Expansion
                  </th>
                </tr>
              </thead>
              <tbody className="font-epilogue text-xs divide-y divide-[#150c08]">
                {FINANCIAL_PROJECTIONS.map((row, index) => {
                  const isEbitda = row.metric.includes('EBITDA');
                  return (
                    <tr
                      key={index}
                      className={`transition-colors ${
                        isEbitda
                          ? 'bg-[#332723] hover:bg-[#3f322d]'
                          : index % 2 === 0
                          ? 'bg-[#241915] hover:bg-[#281d19]'
                          : 'bg-[#150c08] hover:bg-[#241915]'
                      }`}
                    >
                      <td className="py-3.5 px-4 font-bold text-[#f3ded7] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-[#ffb956]">
                          {row.icon}
                        </span>
                        <span>{row.metric}</span>
                      </td>
                      <td className={`py-3.5 px-3 text-center font-mono ${highlightedYear === 'fy24' ? 'bg-[#281d19] text-white font-bold' : 'text-[#c2c9bb]'}`}>
                        {row.fy24Base}
                      </td>
                      <td className={`py-3.5 px-3 text-center font-mono ${highlightedYear === 'fy25' ? 'bg-[#281d19] text-white font-bold' : 'text-[#f3ded7]'}`}>
                        {row.fy25Target}
                      </td>
                      <td className={`py-3.5 px-3 text-center font-mono font-bold text-[#ffb956] ${highlightedYear === 'fy26' ? 'bg-[#281d19]' : ''}`}>
                        {row.fy26Projected}
                      </td>
                      <td className={`py-3.5 px-4 text-right font-mono font-bold text-[#a1d494] ${highlightedYear === 'fy27' ? 'bg-[#281d19]' : ''}`}>
                        {row.fy27Expansion}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* 4 Revenue Vertical Stream Cards */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-epilogue text-[11px] uppercase text-[#8c9387] tracking-wider font-semibold">
                Revenue Distribution Architecture
              </span>
              <span className="font-epilogue text-[11px] uppercase text-[#ffb956] font-bold">
                Target Mix FY26
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#241915] p-3.5 border border-[#332723] flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-syne text-xs uppercase text-[#f3ded7] font-bold">
                    Single-Estate Chocolate Bars
                  </span>
                  <span className="bg-[#c78202] text-[#3d2500] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold">
                    48%
                  </span>
                </div>
                <p className="font-epilogue text-[11px] text-[#8c9387]">
                  Direct DTC online subscription boxes, upscale Manila concept stores, and specialty European distributors.
                </p>
              </div>

              <div className="bg-[#241915] p-3.5 border border-[#332723] flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-syne text-xs uppercase text-[#f3ded7] font-bold">
                    Pure Tablea &amp; Wellness
                  </span>
                  <span className="bg-[#2d5a27] text-[#9dd090] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold">
                    22%
                  </span>
                </div>
                <p className="font-epilogue text-[11px] text-[#8c9387]">
                  Traditional pure unroasted cacao discs, ceremonial drinking nibs, and organic functional superfood pantry essentials.
                </p>
              </div>

              <div className="bg-[#241915] p-3.5 border border-[#332723] flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-syne text-xs uppercase text-[#f3ded7] font-bold">
                    Hospitality &amp; Flight Boxes
                  </span>
                  <span className="bg-[#3f322d] text-[#ffb956] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold">
                    18%
                  </span>
                </div>
                <p className="font-epilogue text-[11px] text-[#8c9387]">
                  Curated minibar partnerships with 5-star resorts across Boracay, El Nido, and NAIA duty-free terminals.
                </p>
              </div>

              <div className="bg-[#241915] p-3.5 border border-[#332723] flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-syne text-xs uppercase text-[#f3ded7] font-bold">
                    B2B Fermented Bean Export
                  </span>
                  <span className="bg-[#3f322d] text-[#a1d494] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold">
                    12%
                  </span>
                </div>
                <p className="font-epilogue text-[11px] text-[#8c9387]">
                  Direct export of triple-fermented dry Criollo-hybrid beans to ultra-premium bean-to-bar artisans in Tokyo and San Francisco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Visual Proof & CapEx Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Visual Proof 1 */}
        <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col gap-2.5 shadow-sm">
          <div className="w-full h-40 bg-[#150c08] overflow-hidden border border-[#332723]">
            <img
              className="w-full h-full object-cover"
              alt="Assorted Handcrafted O'guia Chocolate Bars"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2KkGd8DjOcd4E3YWuY5zwPlVQcp0hvODwwXAF8MDggs3k22tdw8DIM7EwiqMfXZIcuWn0gudjvKva_FaGwoeXW3ZD8ArU9SRx2wW0SqcbE_31fC048fD68VSlhUpAhCNWinPLqFVTXeDpKYHny-a-NHASeYfgfLNZRRUifKq-p0Y2AjIzCYZc0d6D6_x11xhSPBX_2At4cdAYLfIF9qV_dMTF4vZBD4NTh7jeNKEl3-0VWFhQGpYM8Q"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold">
              Diverse Flavor Portfolio
            </span>
            <span className="font-epilogue text-[10px] text-[#8c9387]">9 Active SKUs</span>
          </div>
          <p className="font-epilogue text-xs text-[#c2c9bb]">
            Includes Ube Bar, Matcha White, Binukot Milk, and single-origin dark percentages up to 85% cacao solids.
          </p>
        </div>

        {/* CapEx Efficiency */}
        <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#a1d494]">
              <span className="material-symbols-outlined text-[18px]">solar_power</span>
              <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
                CapEx Efficiency
              </span>
            </div>
            <h4 className="font-syne text-base uppercase text-[#f3ded7] font-bold">
              Modular Solar Kilns
            </h4>
            <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
              Each modular fermentary unit costs only $42,000 to commission, processing 50 MT annually with zero grid dependence.
            </p>
          </div>
          <div className="mt-3 p-2.5 bg-[#150c08] border border-[#332723] flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
              CapEx / MT Processed
            </span>
            <span className="font-syne text-sm text-[#a1d494] font-bold">$840 / MT</span>
          </div>
        </div>

        {/* Operating Leverage */}
        <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#ffb956]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
                Breakeven Security
              </span>
            </div>
            <h4 className="font-syne text-base uppercase text-[#f3ded7] font-bold">
              Operating Leverage
            </h4>
            <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
              Current factory throughput requires only 18% capacity utilization to service ongoing operational overhead and farmer commitments.
            </p>
          </div>
          <div className="mt-3 p-2.5 bg-[#150c08] border border-[#332723] flex items-center justify-between">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
              Monthly Breakeven Volume
            </span>
            <span className="font-syne text-sm text-[#ffb956] font-bold">1,850 Bars</span>
          </div>
        </div>
      </div>

      {/* Bottom Audit Dock & Action Bar */}
      <div className="w-full bg-[#150c08] p-5 sm:p-6 border border-[#332723] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_#2d5a27]">
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#a1d494]">folder_special</span>
            <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold tracking-widest">
              Confidential Data Room Access
            </span>
          </div>
          <h3 className="font-syne text-lg sm:text-xl uppercase text-[#f3ded7] font-bold">
            Audited Historicals &amp; 5-Year Pro-Forma Model
          </h3>
          <p className="font-epilogue text-xs text-[#8c9387]">
            Full discounted cash flow (DCF) model, yield sensitivity matrix (drought/monsoon variables), and complete CapEx equipment schedules available for verified institutional parties.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <button
            onClick={onRequestModel}
            type="button"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] px-5 py-3 font-epilogue text-xs uppercase font-bold transition-all shadow-[2px_2px_0px_#000000] cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">table_chart</span>
            <span>Download Model (.xlsx)</span>
          </button>
          <button
            onClick={onViewSensitivity}
            type="button"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#332723] hover:bg-[#3f322d] text-[#f3ded7] px-5 py-3 font-epilogue text-xs uppercase font-semibold transition-colors border border-[#3f322d] cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">analytics</span>
            <span>View Sensitivity</span>
          </button>
        </div>
      </div>
    </section>
  );
};
