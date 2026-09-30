import React from 'react';
import { USE_OF_PROCEEDS, ROADMAP_PHASES } from '../../data/chocolatesData';

interface Slide05InvestmentProps {
  onRequestDataRoom: () => void;
  onScheduleCall: () => void;
}

export const Slide05Investment: React.FC<Slide05InvestmentProps> = ({
  onRequestDataRoom,
  onScheduleCall,
}) => {
  return (
    <section id="slide-5" className="w-full flex flex-col gap-6 py-4 sm:py-6">
      {/* Top Meta Bar */}
      <div className="w-full bg-[#150c08] p-4 sm:p-6 border border-[#332723] flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-[#2d5a27] text-[#a1d494] px-2.5 py-1 font-epilogue text-xs uppercase tracking-widest font-bold">
            Slide 05 // Strategic Growth Capital
          </span>
          <span className="text-[#8c9387] font-epilogue text-xs uppercase hidden sm:inline">
            Use of Proceeds &amp; Runway Model
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-epilogue text-xs uppercase">
          <span className="bg-[#241915] border border-[#332723] px-2.5 py-1 text-[#ffb956] font-bold tracking-wider">
            Target: $1.20M USD (₱67.2M PHP)
          </span>
          <span className="bg-[#241915] border border-[#332723] px-2.5 py-1 text-[#c2c9bb]">
            Post-Money: $6.0M USD
          </span>
          <span className="bg-[#281d19] border border-[#3f322d] px-2.5 py-1 text-[#a1d494] font-semibold tracking-wider">
            Convertible Note / Preferred Seed
          </span>
        </div>
      </div>

      {/* Main Slide Title & Live Cap Table Ticker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ffb956]"></span>
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-widest">
              Growth Capital Acceleration
            </span>
          </div>
          <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#f3ded7] leading-tight tracking-tight">
            Catalyzing Southeast Asia's <span className="text-[#ffb956]">Benchmark</span> Tree-to-Bar Brand.
          </h2>
          <p className="font-epilogue text-sm sm:text-base text-[#c2c9bb] max-w-3xl leading-relaxed">
            Deploying $1.2M across modular solar fermentation pods, a high-converting Metro Manila experiential flagship, and USDA Organic/JAS international certification to capture high-margin DTC craft luxury and ultra-premium micro-lot export.
          </p>
        </div>

        {/* Target Round Progress Widget */}
        <div className="lg:col-span-4 bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between pb-2 bg-[#281d19] px-3 py-1.5 border border-[#3f322d]">
            <span className="font-epilogue text-xs uppercase text-[#f3ded7] font-semibold">
              Target Round Close
            </span>
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold">
              Q3 FY2024
            </span>
          </div>

          <div className="py-3 flex flex-col gap-1.5">
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
              Committed / Soft-Circled
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-syne text-2xl sm:text-3xl text-[#a1d494] font-extrabold">
                $420,000
              </span>
              <span className="font-epilogue text-xs text-[#c2c9bb]">/ $1,200,000 (35%)</span>
            </div>
            <div className="w-full bg-[#150c08] h-2 overflow-hidden border border-[#332723] mt-1">
              <div className="bg-[#a1d494] h-full w-[35%]"></div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-[#8c9387] font-epilogue text-xs">
            <span>Lead: Anchor Family Office</span>
            <span className="text-[#a1d494] flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a1d494] animate-pulse"></span>
              Active Term Sheet
            </span>
          </div>
        </div>
      </div>

      {/* 4-Card Investment Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#150c08]">
          <div className="flex items-center justify-between text-[#8c9387] pb-2">
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
              Target Raise
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#ffb956]">monetization_on</span>
          </div>
          <div className="my-2">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f3ded7] block">
              $1.20M
            </span>
            <span className="font-epilogue text-xs text-[#ffb956] uppercase font-bold">
              USD (₱67,200,000 PHP)
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#c2c9bb] pt-2 bg-[#150c08] p-2 border border-[#332723]">
            20.0% Preferred Equity stake via convertible seed notes.
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#150c08]">
          <div className="flex items-center justify-between text-[#8c9387] pb-2">
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
              Runway Duration
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#a1d494]">schedule</span>
          </div>
          <div className="my-2">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f3ded7] block">
              24 Months
            </span>
            <span className="font-epilogue text-xs text-[#a1d494] uppercase font-bold">
              Self-Sustaining Cashflow
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#c2c9bb] pt-2 bg-[#150c08] p-2 border border-[#332723]">
            Projected operational breakeven by Q3 FY2026 at 48 MT throughput.
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#150c08]">
          <div className="flex items-center justify-between text-[#8c9387] pb-2">
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
              Target Return
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#ffddb5]">trending_up</span>
          </div>
          <div className="my-2">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#ffb956] block">
              5.2x MOIC
            </span>
            <span className="font-epilogue text-xs text-[#ffb956] uppercase font-bold">
              38% Target Net IRR
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#c2c9bb] pt-2 bg-[#150c08] p-2 border border-[#332723]">
            Based on 10x EBITDA multiple on FY2028 projected export revenue.
          </p>
        </div>

        <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#150c08]">
          <div className="flex items-center justify-between text-[#8c9387] pb-2">
            <span className="font-epilogue text-[10px] uppercase font-bold tracking-wider">
              Minimum Ticket
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#a1d494]">verified</span>
          </div>
          <div className="my-2">
            <span className="font-syne text-2xl sm:text-3xl font-extrabold text-[#f3ded7] block">
              $50,000
            </span>
            <span className="font-epilogue text-xs text-[#a1d494] uppercase font-bold">
              Accredited / ESG Funds
            </span>
          </div>
          <p className="font-epilogue text-[11px] text-[#c2c9bb] pt-2 bg-[#150c08] p-2 border border-[#332723]">
            Side-letter information rights &amp; harvest allocation quotas.
          </p>
        </div>
      </div>

      {/* Capital Allocation Breakdown (Split Grid: Waterfall + Cap Table) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Use of Proceeds */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb956] text-[20px]">pie_chart</span>
              <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold">
                Use of Proceeds ($1.20M USD)
              </h3>
            </div>
            <span className="font-epilogue text-[10px] uppercase text-[#8c9387] font-semibold">
              Rigorous Deployment Matrix
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {USE_OF_PROCEEDS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#241915] p-4 border border-[#332723] flex flex-col gap-1.5 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 flex items-center justify-center font-syne text-xs font-bold shrink-0"
                      style={{ backgroundColor: item.color, color: '#150c08' }}
                    >
                      {item.percent}%
                    </span>
                    <div>
                      <h4 className="font-syne text-sm uppercase text-[#f3ded7] font-bold leading-tight">
                        {item.title}
                      </h4>
                      <span className="font-epilogue text-[10px] text-[#8c9387]">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="font-syne text-base font-bold text-[#ffb956] sm:text-right shrink-0">
                    ${item.amountUsd.toLocaleString()}{' '}
                    <span className="font-epilogue text-xs text-[#c2c9bb] font-normal block sm:inline">
                      {item.amountPhp}
                    </span>
                  </span>
                </div>

                <p className="font-epilogue text-xs text-[#c2c9bb] pl-0 sm:pl-11 leading-relaxed">
                  {item.detail}
                </p>

                <div className="w-full bg-[#150c08] h-1.5 mt-1 overflow-hidden border border-[#332723]">
                  <div
                    className="h-full"
                    style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cap Table & Governance */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#241915] p-5 border border-[#332723] flex flex-col gap-3 shadow-[4px_4px_0px_#150c08]">
            <div className="flex items-center justify-between">
              <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-wider">
                Leadership &amp; Terroir Stewardship
              </span>
              <span className="bg-[#2d5a27] text-[#a1d494] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold">
                Capiz, PH
              </span>
            </div>

            {/* Split Visual Mosaic */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative bg-[#150c08] border border-[#332723] aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover filter contrast-105"
                  alt="Founders at Maayon Orchard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpirXMSIV8VEiageyS0HYTjm7c87UWW9DR3Lnf2-Cs2XxyO3vYbs8Pk7w_fTPZTXW9TrwNcJ4EjBsMRfLD96qCnaqXhqH9hCiKg_xZEMWXPGAui6JF1p3GNMfDrvcJM_2ZaTwp6Tg9bmm3xB9AuEC0ZaqZmTmcnCwJXwDw9kFKR_Fz6aF7ze07tmww9UJa1rp5iVtMCwRzwzvCCMqTcTBCBDdrUUg57tvBM1YkrIjfK-n6a2_9m-hRhg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#150c08]/85 p-1.5 backdrop-blur-sm">
                  <span className="font-epilogue text-[10px] uppercase text-[#f3ded7] block leading-tight font-semibold">
                    Founders at Maayon
                  </span>
                </div>
              </div>

              <div className="relative bg-[#150c08] border border-[#332723] aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover filter contrast-105"
                  alt="Single-Origin Collection"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5n2WaJHkoXQ_yIDnSaHTCxM2n0h0ApC_agr43Y4fP1bltFXezauMQ-6Obvm0bhTybQw_98dOD-wFrviNMslYKky_D4Xs4QTm4z7rsHnxFWPDCa9UPf81lC5Ku-smYP1yGQQqsaGBZgu0Ns1SnUHqQduwcb1_n4GBSSD76b-1uxC2Up9-KsbMM6WfoldF7ca9b0ueAcxr_uIcguS87xZqYKgsSV3C4pXQaMGxUvRFQpM8JXmEGTGWlw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#150c08]/85 p-1.5 backdrop-blur-sm">
                  <span className="font-epilogue text-[10px] uppercase text-[#ffb956] block leading-tight font-semibold">
                    Single-Origin Collection
                  </span>
                </div>
              </div>
            </div>

            {/* Post-Round Cap Table */}
            <div className="bg-[#150c08] p-3.5 border border-[#332723] flex flex-col gap-2 mt-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#281d19]">
                <span className="font-epilogue text-xs uppercase text-[#f3ded7] font-bold">
                  Post-Money Ownership Structure
                </span>
                <span className="font-mono text-xs uppercase text-[#a1d494] font-bold">
                  $6.0M Post-Val
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1 font-epilogue text-xs">
                <div>
                  <div className="flex items-center justify-between text-[#f3ded7]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#ffb956]"></span> Founders &amp; Family Trust
                    </span>
                    <span className="font-bold">70.0%</span>
                  </div>
                  <div className="w-full bg-[#281d19] h-1.5 mt-1 overflow-hidden">
                    <div className="bg-[#ffb956] h-full w-[70%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[#f3ded7]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#a1d494]"></span> Seed Investors (This Round)
                    </span>
                    <span className="font-bold text-[#a1d494]">20.0%</span>
                  </div>
                  <div className="w-full bg-[#281d19] h-1.5 mt-1 overflow-hidden">
                    <div className="bg-[#a1d494] h-full w-[20%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[#f3ded7]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#8c9387]"></span> Farmer Cooperative ESOP
                    </span>
                    <span className="font-bold text-[#c2c9bb]">10.0%</span>
                  </div>
                  <div className="w-full bg-[#281d19] h-1.5 mt-1 overflow-hidden">
                    <div className="bg-[#8c9387] h-full w-[10%]"></div>
                  </div>
                </div>
              </div>

              <p className="font-epilogue text-[10px] text-[#8c9387] pt-1 leading-snug">
                *Cooperative equity pool directly distributes dividend yield to Capiz grower households, aligning long-term harvest quality and ESG compliance.
              </p>
            </div>
          </div>

          {/* Governance Protection Note */}
          <div className="bg-[#150c08] p-4 border border-[#332723] flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2d5a27] text-[#a1d494] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">shield</span>
            </div>
            <div>
              <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold block">
                Strong Governance Protection
              </span>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-0.5">
                1 Board Seat allocated to Seed Lead syndicate. Quarterly audited financials and annual satellite-monitored carbon &amp; biodiversity audit reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 24-Month Execution Roadmap (Capital Deployment) */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">route</span>
            <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold">
              24-Month Execution Roadmap (Capital Deployment)
            </h3>
          </div>
          <span className="font-epilogue text-xs uppercase text-[#8c9387]">
            Path to $4.8M Run-Rate &amp; Series A
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="bg-[#241915] p-5 border border-[#332723] flex flex-col justify-between shadow-[2px_2px_0px_#150c08] hover:border-[#ffb956] transition-colors"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#281d19]">
                <span className={`px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold ${phase.badgeClass}`}>
                  {phase.period}
                </span>
                <span className="font-epilogue text-xs text-[#8c9387]">{phase.phase}</span>
              </div>

              <div className="my-3 flex flex-col gap-1.5">
                <h4 className="font-syne text-sm uppercase text-[#f3ded7] font-bold leading-snug">
                  {phase.title}
                </h4>
                <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-2 bg-[#150c08] p-2 border border-[#332723] text-[#ffb956] font-epilogue text-xs font-bold">
                Target Run-rate: {phase.targetRunRate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diligence Data Room & Call to Action Module */}
      <div className="bg-[#241915] p-6 sm:p-8 border border-[#332723] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[4px_4px_0px_#2d5a27]">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[#ffb956]">
            <span className="material-symbols-outlined text-[20px]">folder_special</span>
            <span className="font-epilogue text-xs uppercase tracking-wider font-bold">
              Confidential Investor Data Room
            </span>
          </div>
          <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] font-bold">
            Institutional Diligence Materials Ready For Review
          </h3>
          <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
            Complete pro-forma DCF model (5-year quarterly projections), verified soil microbial assays, farmer cooperative supply agreements, and certified Cap Table are accessible under bilateral NDA.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-[#150c08] border border-[#332723] px-2.5 py-1 font-epilogue text-[11px] text-[#c2c9bb]">
              ✓ 5-Year DCF Model (.XLSX)
            </span>
            <span className="bg-[#150c08] border border-[#332723] px-2.5 py-1 font-epilogue text-[11px] text-[#c2c9bb]">
              ✓ Terroir &amp; Polyphenol Assays
            </span>
            <span className="bg-[#150c08] border border-[#332723] px-2.5 py-1 font-epilogue text-[11px] text-[#c2c9bb]">
              ✓ SEC &amp; FDA Registration Dossiers
            </span>
            <span className="bg-[#150c08] border border-[#332723] px-2.5 py-1 font-epilogue text-[11px] text-[#c2c9bb]">
              ✓ Trademark &amp; Botanical IP Filings
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
          <button
            onClick={onRequestDataRoom}
            type="button"
            className="bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase px-6 py-3.5 text-center transition-colors shadow-[4px_4px_0px_#000000] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[20px]">lock_open</span>
            <span>Request Full Data Room</span>
          </button>
          <button
            onClick={onScheduleCall}
            type="button"
            className="bg-[#2d5a27] hover:bg-[#3b6934] text-[#a1d494] hover:text-white font-epilogue font-bold text-xs uppercase px-6 py-3.5 text-center transition-colors border border-[#3b6934] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[20px]">video_call</span>
            <span>Schedule Founder Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};
