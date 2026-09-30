/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Slide01Executive } from './components/slides/Slide01Executive';
import { Slide02Terroir } from './components/slides/Slide02Terroir';
import { Slide03Collection } from './components/slides/Slide03Collection';
import { Slide04Financials } from './components/slides/Slide04Financials';
import { Slide05Investment } from './components/slides/Slide05Investment';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DataRoomModal } from './components/DataRoomModal';
import { SampleFlightModal } from './components/SampleFlightModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CanopyTourModal } from './components/CanopyTourModal';
import { FinancialCalculatorModal } from './components/FinancialCalculatorModal';
import { ChocolateSKU } from './data/chocolatesData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides');

  // Modal states
  const [dataRoomOpen, setDataRoomOpen] = useState(false);
  const [dataRoomScope, setDataRoomScope] = useState('Equity Investment (Seed Round)');
  const [sampleFlightOpen, setSampleFlightOpen] = useState(false);
  const [selectedSku, setSelectedSku] = useState<ChocolateSKU | null>(null);
  const [canopyTourOpen, setCanopyTourOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  // Lead inquiry form on page (for mobile story mode matching screenshot)
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadScope, setLeadScope] = useState('Equity Investment (Seed Round)');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Global toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Keyboard navigation for deck presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentSlide((prev) => Math.min(prev + 1, 5));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSlideChange = (slideNum: number) => {
    setCurrentSlide(slideNum);
    if (viewMode === 'slides') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    showToast('Confidential pitch deck & tasting flight request dispatched.');
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadName('');
      setLeadEmail('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#1b110d] text-[#f3ded7] flex flex-col font-epilogue antialiased selection:bg-[#c78202] selection:text-[#462b00]">
      {/* Top Header */}
      <Header
        currentSlide={currentSlide}
        onSelectSlide={handleSlideChange}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onRequestDeck={() => {
          setDataRoomScope('Equity Investment (Seed Round)');
          setDataRoomOpen(true);
        }}
        onRequestSamples={() => setSampleFlightOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {/* Top Ticker Bar (matches mobile & desktop status strip) */}
        <div className="w-full bg-[#150c08] border-b border-[#332723] px-4 sm:px-6 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a1d494] animate-pulse"></span>
            <span className="font-epilogue text-[11px] uppercase tracking-wider text-[#ffb956] font-semibold">
              Series Seed / Growth Deck
            </span>
            <span className="text-[#42493e] hidden sm:inline">/</span>
            <span className="text-[#c2c9bb] hidden sm:inline">Dad's Farm Agroforestry Corp.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#8c9387] font-mono text-[11px]">
              Panay Highland Terroir (11°19′N 122°47′E)
            </span>
            <button
              onClick={() => setCalculatorOpen(true)}
              className="hidden sm:flex items-center gap-1 bg-[#241915] hover:bg-[#332723] text-[#a1d494] border border-[#332723] px-2 py-0.5 font-epilogue text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">tune</span>
              <span>Pro-Forma Simulator</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          {viewMode === 'slides' ? (
            /* Slide Deck Presentation Mode */
            <div className="py-2">
              {currentSlide === 1 && (
                <Slide01Executive
                  onRequestDeck={() => {
                    setDataRoomScope('Equity Investment (Seed Round)');
                    setDataRoomOpen(true);
                  }}
                  onRequestSamples={() => setSampleFlightOpen(true)}
                  onExploreCollection={() => setCurrentSlide(3)}
                />
              )}

              {currentSlide === 2 && (
                <Slide02Terroir
                  onOrderSampleKit={() => setSampleFlightOpen(true)}
                  onOpenCanopyTour={() => setCanopyTourOpen(true)}
                />
              )}

              {currentSlide === 3 && (
                <Slide03Collection
                  onSelectSku={(sku) => setSelectedSku(sku)}
                  onRequestTastingFlight={() => setSampleFlightOpen(true)}
                />
              )}

              {currentSlide === 4 && (
                <Slide04Financials
                  onRequestModel={() => {
                    setDataRoomScope('Financial Model & DCF Analysis');
                    setDataRoomOpen(true);
                  }}
                  onViewSensitivity={() => setCalculatorOpen(true)}
                />
              )}

              {currentSlide === 5 && (
                <Slide05Investment
                  onRequestDataRoom={() => {
                    setDataRoomScope('Growth Capital & Cap Table Review');
                    setDataRoomOpen(true);
                  }}
                  onScheduleCall={() => {
                    setDataRoomScope('Founder Virtual Call Request');
                    setDataRoomOpen(true);
                  }}
                />
              )}

              {/* Slide Navigation Dock at bottom of each slide */}
              <div className="mt-8 mb-6 p-4 bg-[#150c08] border border-[#332723] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentSlide === 1}
                    onClick={() => handleSlideChange(currentSlide - 1)}
                    className="px-4 py-2 bg-[#241915] hover:bg-[#332723] disabled:opacity-40 text-[#f3ded7] font-epilogue text-xs uppercase font-semibold border border-[#332723] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">west</span>
                    <span>Previous Slide</span>
                  </button>

                  <button
                    disabled={currentSlide === 5}
                    onClick={() => handleSlideChange(currentSlide + 1)}
                    className="px-4 py-2 bg-[#241915] hover:bg-[#332723] disabled:opacity-40 text-[#f3ded7] font-epilogue text-xs uppercase font-semibold border border-[#332723] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Next Slide</span>
                    <span className="material-symbols-outlined text-[16px]">east</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleSlideChange(num)}
                      className={`w-7 h-7 flex items-center justify-center font-syne text-xs font-bold transition-all cursor-pointer ${
                        currentSlide === num
                          ? 'bg-[#ffb956] text-[#462b00] shadow-[2px_2px_0px_#2d5a27]'
                          : 'bg-[#241915] text-[#8c9387] hover:text-[#f3ded7] border border-[#332723]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-[11px] font-epilogue text-[#8c9387] ml-2">
                    (Use ← / → keys)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('scroll')}
                    className="px-3 py-1.5 bg-[#281d19] hover:bg-[#332723] text-[#a1d494] font-epilogue text-xs uppercase font-bold tracking-wider border border-[#3f322d] transition-colors cursor-pointer"
                  >
                    Switch to Long-Form Story Mode
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Long-Form Marketing Website Mode (Stitched Complete Design) */
            <div className="flex flex-col gap-10 py-6">
              <Slide01Executive
                onRequestDeck={() => {
                  setDataRoomScope('Equity Investment (Seed Round)');
                  setDataRoomOpen(true);
                }}
                onRequestSamples={() => setSampleFlightOpen(true)}
                onExploreCollection={() => {
                  const el = document.getElementById('slide-3');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              <Slide02Terroir
                onOrderSampleKit={() => setSampleFlightOpen(true)}
                onOpenCanopyTour={() => setCanopyTourOpen(true)}
              />

              <Slide03Collection
                onSelectSku={(sku) => setSelectedSku(sku)}
                onRequestTastingFlight={() => setSampleFlightOpen(true)}
              />

              <Slide04Financials
                onRequestModel={() => {
                  setDataRoomScope('Financial Model & DCF Analysis');
                  setDataRoomOpen(true);
                }}
                onViewSensitivity={() => setCalculatorOpen(true)}
              />

              <Slide05Investment
                onRequestDataRoom={() => {
                  setDataRoomScope('Growth Capital & Cap Table Review');
                  setDataRoomOpen(true);
                }}
                onScheduleCall={() => {
                  setDataRoomScope('Founder Virtual Call Request');
                  setDataRoomOpen(true);
                }}
              />

              {/* Direct Interactive Lead Form (matches Mobile Screen 6) */}
              <div
                id="tasting-flight-section"
                className="w-full bg-[#150c08] p-6 sm:p-10 border border-[#332723] shadow-md my-4 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-1 max-w-2xl">
                  <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold">
                    Join The Terroir Revolution
                  </span>
                  <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-[#f3ded7] tracking-tight">
                    Request Confidential Deck &amp; Tasting Flight
                  </h2>
                  <p className="font-epilogue text-xs sm:text-sm text-[#c2c9bb]">
                    Accredited investors and distribution partners receive a curated sample flight box of 4 single-origin SKUs shipped directly from Maayon, Capiz.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="flex flex-col gap-3 max-w-xl">
                  <div className="flex flex-col gap-1">
                    <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                      Full Name &amp; Title
                    </label>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Elena Santos, Managing Partner"
                      className="bg-[#241915] border border-[#332723] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                      Work / Fund Email
                    </label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="elena@venturecapital.com"
                      className="bg-[#241915] border border-[#332723] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                      Interest Scope
                    </label>
                    <select
                      value={leadScope}
                      onChange={(e) => setLeadScope(e.target.value)}
                      className="bg-[#241915] border border-[#332723] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                    >
                      <option>Equity Investment (Seed Round $1.2M)</option>
                      <option>Commercial Distribution &amp; Retail</option>
                      <option>Wholesale Cacao Bean Sourcing</option>
                      <option>Bespoke Corporate Hospitality</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-3.5 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#2d5a27] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                    <span>Download Deck &amp; Request Samples</span>
                  </button>

                  {leadSubmitted && (
                    <div className="p-3 bg-[#2d5a27] text-[#9dd090] font-epilogue text-xs text-center border border-[#3b6934] animate-in fade-in">
                      ✓ Thank you. The confidential pitch deck and tasting shipment details have been dispatched to your email.
                    </div>
                  )}
                </form>
              </div>

              {/* Direct Contact & Origin Footprint Panel (matches mobile screen) */}
              <div className="w-full bg-[#241915] p-6 sm:p-8 border border-[#332723] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#332723] text-[#ffb956] flex items-center justify-center border border-[#3f322d]">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-syne text-sm sm:text-base uppercase text-[#f3ded7] font-bold">
                      Dad's Farm HQ &amp; Cacao Estate
                    </h3>
                    <span className="font-epilogue text-xs text-[#8c9387]">
                      Maayon, Capiz, Western Visayas, Philippines
                    </span>
                  </div>
                </div>

                <div className="bg-[#150c08] p-4 border border-[#332723] grid grid-cols-1 sm:grid-cols-3 gap-3 font-epilogue text-xs text-[#c2c9bb]">
                  <div>
                    <span className="text-[#8c9387] uppercase text-[10px] block">Estate Lead</span>
                    <strong className="text-[#f3ded7]">Dad's Farm Agricultural Group</strong>
                  </div>
                  <div>
                    <span className="text-[#8c9387] uppercase text-[10px] block">Direct Line</span>
                    <strong className="text-[#ffb956]">+63 (917) 000-OGUIA</strong>
                  </div>
                  <div>
                    <span className="text-[#8c9387] uppercase text-[10px] block">Web &amp; Inquiries</span>
                    <strong className="text-[#a1d494]">invest@oguiachocolates.com</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Rich FAQ Accordion Section */}
          <FaqSection />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onSelectSlide={handleSlideChange}
        onRequestDeck={() => {
          setDataRoomScope('Equity Investment (Seed Round)');
          setDataRoomOpen(true);
        }}
      />

      {/* Mobile Sticky Bottom Nav Bar */}
      <MobileBottomNav
        currentSlide={currentSlide}
        onSelectSlide={handleSlideChange}
        onRequestPartner={() => {
          setDataRoomScope('Wholesale & Retail Partner Agreement');
          setDataRoomOpen(true);
        }}
      />

      {/* Interactive Modals */}
      <DataRoomModal
        isOpen={dataRoomOpen}
        onClose={() => setDataRoomOpen(false)}
        defaultScope={dataRoomScope}
      />

      <SampleFlightModal
        isOpen={sampleFlightOpen}
        onClose={() => setSampleFlightOpen(false)}
      />

      <ProductDetailModal
        sku={selectedSku}
        onClose={() => setSelectedSku(null)}
        onRequestSample={() => {
          setSelectedSku(null);
          setSampleFlightOpen(true);
        }}
      />

      <CanopyTourModal
        isOpen={canopyTourOpen}
        onClose={() => setCanopyTourOpen(false)}
        onOrderSoilAssay={() => {
          setCanopyTourOpen(false);
          setSampleFlightOpen(true);
        }}
      />

      <FinancialCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onRequestDeck={() => {
          setCalculatorOpen(false);
          setDataRoomOpen(true);
        }}
      />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#ffb956] text-[#462b00] p-4 shadow-2xl flex items-center gap-3 border border-[#c78202] animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-2xl">task_alt</span>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-xs uppercase">Notification</span>
            <span className="font-epilogue text-xs">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
