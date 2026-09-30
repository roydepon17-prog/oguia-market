import React from 'react';

interface Slide02TerroirProps {
  onOrderSampleKit: () => void;
  onOpenCanopyTour: () => void;
}

export const Slide02Terroir: React.FC<Slide02TerroirProps> = ({
  onOrderSampleKit,
  onOpenCanopyTour,
}) => {
  return (
    <section id="slide-2" className="w-full flex flex-col gap-6 py-4 sm:py-6">
      {/* Top Slide Meta Bar */}
      <div className="w-full bg-[#150c08] p-4 sm:p-6 border border-[#332723] shadow-md flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#2d5a27] text-[#a1d494] font-epilogue text-xs uppercase px-2.5 py-1 font-bold tracking-widest">
              SLIDE 02 // REGENERATIVE TERROIR &amp; BOTANICAL BIODIVERSITY
            </span>
            <span className="text-[#8c9387] text-xs hidden sm:inline">•</span>
            <span className="font-epilogue text-xs tracking-wider uppercase text-[#c2c9bb] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-[#ffb956]">explore</span>
              MAAYON, CAPIZ (11°19′N 122°47′E) · VOLCANIC FOOTHILL BASIN · ELEVATION 240M
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#241915] border border-[#332723] px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-[#ffb956] animate-pulse"></span>
            <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold">
              100% REGENERATIVE AGRO-CANOPY · ZERO SYNTHETICS
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 items-end mt-1">
          <div className="xl:col-span-8 flex flex-col gap-1">
            <span className="font-epilogue text-xs uppercase tracking-widest text-[#a1d494] font-bold">
              TERROIR SOVEREIGNTY &amp; CANOPY ARCHITECTURE
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3ded7] uppercase tracking-tight leading-none">
              THE LIVING CANOPY: UNREPLICABLE MAAYON TERROIR
            </h2>
          </div>
          <div className="xl:col-span-4 bg-[#241915] p-4 border border-[#332723] shadow-[4px_4px_0px_#000000]">
            <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
              Rooted in mineral-dense volcanic soil and shaded beneath endemic fruit and hardwood nurse trees, Dad's Farm cultivates multi-generational Criollo and Trinitario hybrids with innate fungal resistance and intense, terroir-specific sensory complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Terroir Vital Signs (4 Metrics Monolithic Bar) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#281d19] p-4 sm:p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#8c9387] font-semibold">
              SHADE COVERAGE
            </span>
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">forest</span>
          </div>
          <div>
            <span className="font-syne text-3xl sm:text-4xl text-[#ffb956] font-extrabold block leading-none">
              40+ HA
            </span>
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#f3ded7] font-bold mt-1.5 block">
              DEDICATED AGRO-FOREST
            </span>
            <p className="font-epilogue text-[11px] text-[#c2c9bb] mt-1 leading-snug">
              Multi-tier shade polyculture buffering extreme heat &amp; conserving natural groundwater.
            </p>
          </div>
        </div>

        <div className="bg-[#281d19] p-4 sm:p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#8c9387] font-semibold">
              EDAPHIC PROFILE
            </span>
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">landslide</span>
          </div>
          <div>
            <span className="font-syne text-3xl sm:text-4xl text-[#a1d494] font-extrabold block leading-none">
              6.8 pH
            </span>
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#f3ded7] font-bold mt-1.5 block">
              VOLCANIC ALLUVIAL LOAM
            </span>
            <p className="font-epilogue text-[11px] text-[#c2c9bb] mt-1 leading-snug">
              Pristine mineral saturation: natural magnesium, iron, and rich mycelium humus.
            </p>
          </div>
        </div>

        <div className="bg-[#281d19] p-4 sm:p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#8c9387] font-semibold">
              TRACEABILITY LEVEL
            </span>
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">fingerprint</span>
          </div>
          <div>
            <span className="font-syne text-3xl sm:text-4xl text-[#ffb956] font-extrabold block leading-none">
              100%
            </span>
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#f3ded7] font-bold mt-1.5 block">
              QUADRANT PROVENANCE
            </span>
            <p className="font-epilogue text-[11px] text-[#c2c9bb] mt-1 leading-snug">
              Geo-tagged tree coordinates tied directly to micro-ferment batch bar codes.
            </p>
          </div>
        </div>

        <div className="bg-[#281d19] p-4 sm:p-5 border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#8c9387] font-semibold">
              POST-HARVEST REGIME
            </span>
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">thermostat</span>
          </div>
          <div>
            <span className="font-syne text-3xl sm:text-4xl text-[#a1d494] font-extrabold block leading-none">
              144 HR
            </span>
            <span className="font-epilogue text-xs uppercase tracking-wider text-[#f3ded7] font-bold mt-1.5 block">
              CONTROLLED BOX FERMENT
            </span>
            <p className="font-epilogue text-[11px] text-[#c2c9bb] mt-1 leading-snug">
              Cascading native hardwood sweat boxes optimizing organic acetic transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Estate Biomass & Stewardship Record (Bento Visual Grid) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold block">
              PHOTO DOCUMENTATION // FIELD ARCHIVE
            </span>
            <h3 className="font-syne text-xl sm:text-3xl uppercase text-[#f3ded7] font-bold tracking-tight">
              ESTATE BIOMASS &amp; STEWARDSHIP RECORD
            </h3>
          </div>
          <button
            onClick={onOpenCanopyTour}
            className="flex items-center gap-1.5 text-[#a1d494] font-epilogue text-xs uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[17px]">360</span>
            <span>LAUNCH 360° LIVE CANOPY TOUR</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Big Hero Card: Co-Canopy Matrix */}
          <div className="lg:col-span-7 bg-[#241915] border border-[#332723] flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
            <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-[#150c08]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACL3hDvWnNcVQe4bl-wXl3yUAGWxVY3gfYtwC8dSikyDURHdIB6AdMhFJPmEGa1ACss6XWgGA1g6QAPF_H_icfRtg46YuJViJpDn8aGYRhAdb9aLBuBe-Eg0nEyLAoEPtlyXT6CGRST9bnB1Rj5uPizkzUFq2Rw5_ly_6H-Nw7Ct8bFVc05ohT_ELGiF7iMPLU6aeuPxKKCfB5QJ6ylyLGsZ6onjo9vmvgOBGS-LCM5TKU_B2QWdjyvw"
                alt="Plot A-01 Co-canopy matrix"
                className="w-full h-full object-cover filter saturate-110 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#150c08]/90 px-3 py-1 border border-[#332723] shadow-sm">
                <span className="font-epilogue text-[11px] uppercase tracking-widest text-[#ffb956] font-bold">
                  PLOT A-01 // CO-CANOPY MATRIX
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#150c08] via-[#150c08]/80 to-transparent p-4 sm:p-5">
                <span className="font-epilogue text-xs text-[#a1d494] uppercase font-bold tracking-widest block">
                  STEWARDSHIP LEADERSHIP
                </span>
                <p className="font-syne text-lg sm:text-xl uppercase text-[#f3ded7] font-bold tracking-tight">
                  ATTY. ABEB &amp; ESTATE REGENERATION COLLECTIVE
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#241915] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="font-epilogue text-xs text-[#c2c9bb] max-w-xl leading-relaxed">
                Cacao trees thrive under a 40% dappled canopy provided by batwan, native coconut, mahogany, and endemic timber species, protecting topsoil moisture during intense dry spells.
              </p>
              <div className="bg-[#281d19] border border-[#3f322d] px-3 py-1.5 shrink-0 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-[#f3ded7]">
                  CANOPY DENSITY: 88%
                </span>
              </div>
            </div>
          </div>

          {/* Right Side 2-Item Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Micro-Lot Genetics */}
            <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col gap-2.5 shadow-[4px_4px_0px_#000000]">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-xs uppercase tracking-widest text-[#a1d494] font-bold">
                  MICRO-LOT GENETICS
                </span>
                <span className="bg-[#281d19] border border-[#3f322d] px-2 py-0.5 text-xs text-[#ffb956] uppercase font-mono font-bold">
                  BRIX: 23.5°
                </span>
              </div>
              <div className="relative w-full h-[160px] bg-[#150c08] overflow-hidden border border-[#332723]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmmb1FRqaKOKhAMw4VKYHg_eel0zILQmzwOCiAnh1yw3IUvUNyGIbMBu0IKfPTRswV5FrRNE9qbSGKpNFaHonpmQM_4imfoQZjNKlntHkGI2rNxlIDEwrExgfw-Jke3okIHeuhbczuE5in48pqcT1XAONLPvA9g32pfL4nqoGlKd4qSTCk6xf7ac11dcpUr9itw86h7T759ZnRt8oiW3DwKpABy6Ua7OcUtnZca8GkdL8lRm1HQxhWfA"
                  alt="Heirloom Cacao Pods"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="font-epilogue text-[10px] bg-[#150c08]/90 px-2 py-0.5 uppercase tracking-widest text-[#f3ded7] font-bold">
                    TRINITARIO &amp; CRIOLLO HYBRIDS
                  </span>
                </div>
              </div>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                Every morning pods are manually hand-selected based on audible hollow resonance and chromatic pigment shifts, securing peak sucrose concentration for natural wild yeast fermentation.
              </p>
            </div>

            {/* Mycelium Leaf Litter */}
            <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col gap-2.5 shadow-[4px_4px_0px_#000000]">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold">
                  MYCELIUM LEAF LITTER
                </span>
                <span className="bg-[#281d19] border border-[#3f322d] px-2 py-0.5 text-xs text-[#a1d494] uppercase font-mono font-bold">
                  SOIL HUMUS: 12.4%
                </span>
              </div>
              <div className="relative w-full h-[160px] bg-[#150c08] overflow-hidden border border-[#332723]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnMXyh7QBtWiVi7jCO6_DGXljOxpIEveuQIEthWRJlWktqaXjyQih2GvrF6kx4i_o4bUqWwc-q-9Bk9cLlqwYG3ThkwmG2oWqEBweNE-Q8EytXbWZZC2X2p8jtglLKD0kP82detwc400pfnSGJUpTDNj0GCYyLjI8B0oq7fkw4Nhm9jIl5OI9QKydgtSO7Qtrk_C2GIcNeW-eCxZFXyKevKP82C60mFeTJIAO5JA8vVgMb1JBnOjVlIA"
                  alt="Forest Floor Soil"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="font-epilogue text-[10px] bg-[#150c08]/90 px-2 py-0.5 uppercase tracking-widest text-[#f3ded7] font-bold">
                    SELF-FEEDING DETRITUS MATRIX
                  </span>
                </div>
              </div>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                Zero tilling and unmanaged leaf mulch create a dense spongy barrier that prevents moisture runoff, sequesters nitrogen, and nurtures subterranean micro-fauna without synthetic additives.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Detail Micro-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#a1d494] font-bold">
                  PHYSIOLOGY
                </span>
                <span className="font-mono text-[10px] text-[#8c9387]">QUAD-03</span>
              </div>
              <h4 className="font-syne text-base uppercase text-[#f3ded7] font-bold">
                CAULIFLORY CLUSTERS
              </h4>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
                Direct stem flowering on mature moss-encrusted bark allows optimal nutrient flow from older root structures directly to each pod chamber.
              </p>
            </div>
            <div className="mt-3 pt-2 bg-[#150c08] p-2.5 border border-[#332723] flex justify-between items-center text-xs">
              <span className="font-epilogue uppercase text-[#8c9387] text-[10px]">PODS PER TRUNK:</span>
              <span className="font-syne font-bold text-[#ffb956]">32-48 PODS</span>
            </div>
          </div>

          <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#ffb956] font-bold">
                  PRECIPITATION
                </span>
                <span className="font-mono text-[10px] text-[#8c9387]">ANNUAL READ</span>
              </div>
              <h4 className="font-syne text-base uppercase text-[#f3ded7] font-bold">
                2,400MM MONSOON BUFFER
              </h4>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
                Natural Visayan rainfall patterns provide ideal subterranean leaching, sweeping excess minerals into deep root networks while preserving upper topsoil.
              </p>
            </div>
            <div className="mt-3 pt-2 bg-[#150c08] p-2.5 border border-[#332723] flex justify-between items-center text-xs">
              <span className="font-epilogue uppercase text-[#8c9387] text-[10px]">SEASONAL DRY WINDOW:</span>
              <span className="font-syne font-bold text-[#a1d494]">FEB - MAY (PRIME)</span>
            </div>
          </div>

          <div className="bg-[#241915] p-4 border border-[#332723] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#a1d494] font-bold">
                  COMPANION BOTANY
                </span>
                <span className="font-mono text-[10px] text-[#8c9387]">SYMBIOSIS</span>
              </div>
              <h4 className="font-syne text-base uppercase text-[#f3ded7] font-bold">
                BATWAN &amp; NATIVE CITRUS
              </h4>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
                Intercropped endemic Batwan (<span className="italic">Garcinia binucao</span>) imparts signature green-plum acidity and light tart tannin backbones through shared mycorrhizal soil lines.
              </p>
            </div>
            <div className="mt-3 pt-2 bg-[#150c08] p-2.5 border border-[#332723] flex justify-between items-center text-xs">
              <span className="font-epilogue uppercase text-[#8c9387] text-[10px]">POLY-DIVERSITY INDEX:</span>
              <span className="font-syne font-bold text-[#ffb956]">3.8 SHANNON</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specification: Edaphic Chemistry & Post-Harvest Science */}
      <div className="bg-[#241915] p-5 sm:p-6 border border-[#332723] flex flex-col gap-5">
        <div>
          <span className="font-epilogue text-xs uppercase tracking-widest text-[#a1d494] font-bold block">
            TECHNICAL SPECIFICATION
          </span>
          <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] font-bold tracking-tight">
            EDAPHIC CHEMISTRY &amp; POST-HARVEST SCIENCE
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chemical Assay */}
          <div className="bg-[#150c08] p-5 border border-[#332723] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffb956]">analytics</span>
                <h4 className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                  TERROIR CHEMICAL ASSAY
                </h4>
              </div>
              <span className="bg-[#281d19] border border-[#3f322d] px-2 py-0.5 font-mono text-[10px] text-[#ffb956]">
                LAB REF: CAP-2024-T02
              </span>
            </div>
            <p className="font-epilogue text-xs text-[#c2c9bb]">
              Independent mineral spectrometry of topsoil core samples (0–60cm depth) confirming optimum volcanic saturation directly influencing bean lipid and polyphenol compounds.
            </p>

            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between items-center font-epilogue text-[11px] uppercase tracking-wider mb-1">
                  <span className="text-[#f3ded7]">SOIL PH BALANCE (SWEET SPOT 6.5 - 7.0)</span>
                  <span className="font-mono text-[#a1d494] font-bold">6.82 pH</span>
                </div>
                <div className="w-full h-2 bg-[#281d19] overflow-hidden">
                  <div className="h-full bg-[#a1d494]" style={{ width: '82%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center font-epilogue text-[11px] uppercase tracking-wider mb-1">
                  <span className="text-[#f3ded7]">VOLCANIC HUMUS &amp; ORGANIC BIO-MASS</span>
                  <span className="font-mono text-[#ffb956] font-bold">11.6% (OPTIMUM)</span>
                </div>
                <div className="w-full h-2 bg-[#281d19] overflow-hidden">
                  <div className="h-full bg-[#ffb956]" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center font-epilogue text-[11px] uppercase tracking-wider mb-1">
                  <span className="text-[#f3ded7]">MAGNESIUM &amp; POTASSIUM SATURATION (EARTHY NOTES)</span>
                  <span className="font-mono text-[#a1d494] font-bold">480 PPM</span>
                </div>
                <div className="w-full h-2 bg-[#281d19] overflow-hidden">
                  <div className="h-full bg-[#a1d494]" style={{ width: '76%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center font-epilogue text-[11px] uppercase tracking-wider mb-1">
                  <span className="text-[#f3ded7]">LEGUME-BASED BIOLOGICAL NITROGEN</span>
                  <span className="font-mono text-[#ffb956] font-bold">HIGH (NATURAL)</span>
                </div>
                <div className="w-full h-2 bg-[#281d19] overflow-hidden">
                  <div className="h-full bg-[#ffb956]" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-[#241915] p-3 border border-[#332723] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#ffb956] text-[18px] shrink-0 mt-0.5">
                info
              </span>
              <p className="font-epilogue text-[11px] text-[#c2c9bb]">
                The high concentration of exchangeable cations directly prevents astringent over-tanning in bean kernels, delivering the trademark silky mouthfeel of single-estate Maayon bars.
              </p>
            </div>
          </div>

          {/* 144-Hour Fermentation Pipeline */}
          <div className="bg-[#150c08] p-5 border border-[#332723] flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a1d494]">science</span>
                  <h4 className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                    144-HOUR POST-HARVEST PIPELINE
                  </h4>
                </div>
                <span className="bg-[#281d19] border border-[#3f322d] px-2 py-0.5 font-mono text-[10px] text-[#a1d494]">
                  CASCADE PROTOCOL
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="bg-[#241915] p-3 border border-[#332723]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-epilogue text-[10px] font-bold uppercase tracking-widest text-[#ffb956]">
                      PHASE 01: POD OPENING &amp; BRIX GRADING
                    </span>
                    <span className="font-mono text-[10px] text-[#8c9387]">HOURS 0–4</span>
                  </div>
                  <p className="font-epilogue text-xs text-[#c2c9bb]">
                    Pod splitting strictly within 6 hours of tree detachment using blunt wooden mallets to prevent bean bruising. Refractometer test must surpass 21.0° Brix.
                  </p>
                </div>

                <div className="bg-[#241915] p-3 border border-[#332723]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-epilogue text-[10px] font-bold uppercase tracking-widest text-[#a1d494]">
                      PHASE 02: TIERED SWEAT-BOX CASCADE
                    </span>
                    <span className="font-mono text-[10px] text-[#8c9387]">HOURS 5–96</span>
                  </div>
                  <p className="font-epilogue text-xs text-[#c2c9bb]">
                    Beans enter layered native hardwood fermentation boxes lined with banana fronds. Internal mass temperature reaches 48.5°C by hour 48, neutralizing bitter theobromines.
                  </p>
                </div>

                <div className="bg-[#241915] p-3 border border-[#332723]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-epilogue text-[10px] font-bold uppercase tracking-widest text-[#ffb956]">
                      PHASE 03: SLOW SOLAR TUNNEL DESICCATION
                    </span>
                    <span className="font-mono text-[10px] text-[#8c9387]">HOURS 97–144+</span>
                  </div>
                  <p className="font-epilogue text-xs text-[#c2c9bb]">
                    Transferred to elevated bamboo-slatted solar drying tunnels with constant mechanical air turnover. Moisture drops evenly from 55% to 6.8% without case-hardening.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#241915] p-3 border border-[#332723]">
              <span className="font-epilogue text-xs text-[#8c9387] uppercase">STANDARD TARGET:</span>
              <span className="font-syne text-xs uppercase tracking-widest text-[#a1d494] font-bold">
                GRADE AA SPECIFICATION READY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Benchmarking Table */}
      <div className="bg-[#241915] p-5 sm:p-6 border border-[#332723] flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold block">
              COMPETITIVE BENCHMARKING
            </span>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] font-bold tracking-tight">
              INDUSTRIAL MONOCULTURE VS. DAD'S CANOPY
            </h3>
          </div>
          <span className="font-mono text-[10px] text-[#8c9387] uppercase tracking-widest">
            METRIC COMPARISON: 2024–2025
          </span>
        </div>

        <div className="w-full overflow-x-auto border border-[#332723]">
          <table className="w-full text-left bg-[#150c08] border-collapse">
            <thead>
              <tr className="bg-[#281d19] border-b border-[#332723]">
                <th className="p-3.5 font-epilogue text-xs uppercase tracking-wider text-[#f3ded7]">
                  Ecosystem Parameter
                </th>
                <th className="p-3.5 font-epilogue text-xs uppercase tracking-wider text-[#8c9387]">
                  Conventional Bulk Cacao
                </th>
                <th className="p-3.5 font-epilogue text-xs uppercase tracking-wider text-[#ffb956]">
                  O'guia Dad's Farm Model
                </th>
                <th className="p-3.5 font-epilogue text-xs uppercase tracking-wider text-[#a1d494]">
                  Strategic Investor Advantage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#241915] text-xs font-epilogue">
              <tr className="hover:bg-[#241915] transition-colors">
                <td className="p-3.5 font-bold text-[#f3ded7]">Canopy Architecture</td>
                <td className="p-3.5 text-[#8c9387]">Clear-cut monoculture sun-cultivation</td>
                <td className="p-3.5 text-[#ffb956] font-semibold">
                  Multi-tier agroforestry with native nurse trees
                </td>
                <td className="p-3.5 text-[#a1d494]">High climate resilience; zero crop burn</td>
              </tr>
              <tr className="hover:bg-[#241915] transition-colors">
                <td className="p-3.5 font-bold text-[#f3ded7]">Chemical Inputs</td>
                <td className="p-3.5 text-[#8c9387]">High synthetic fertilizer &amp; fungicide loads</td>
                <td className="p-3.5 text-[#ffb956] font-semibold">
                  100% biological compost, biochar &amp; mulch
                </td>
                <td className="p-3.5 text-[#a1d494]">Clean luxury ESG audit; EU-purity compliance</td>
              </tr>
              <tr className="hover:bg-[#241915] transition-colors">
                <td className="p-3.5 font-bold text-[#f3ded7]">Fermentation Precision</td>
                <td className="p-3.5 text-[#8c9387]">Bulk unmonitored plastic tarp piles</td>
                <td className="p-3.5 text-[#ffb956] font-semibold">
                  Hardwood solar micro-kilns with temperature logging
                </td>
                <td className="p-3.5 text-[#a1d494]">3.4x premium wholesale pricing per metric ton</td>
              </tr>
              <tr className="hover:bg-[#241915] transition-colors">
                <td className="p-3.5 font-bold text-[#f3ded7]">Flavor Profile</td>
                <td className="p-3.5 text-[#8c9387]">Flat, high astringency, generic cocoa mass</td>
                <td className="p-3.5 text-[#ffb956] font-semibold">
                  Layered batwan tartness, wild honey, deep earth
                </td>
                <td className="p-3.5 text-[#a1d494]">Multi-award specialty single-estate category</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Due Diligence Callout Box */}
      <div className="bg-[#150c08] p-5 sm:p-6 border border-[#332723] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_#000000]">
        <div className="flex flex-col gap-1 max-w-2xl">
          <span className="font-epilogue text-xs uppercase tracking-widest text-[#ffb956] font-bold">
            DUE DILIGENCE READINESS
          </span>
          <h3 className="font-syne text-lg sm:text-xl uppercase text-[#f3ded7] font-bold tracking-tight">
            VALIDATE THE TERROIR: REQUEST PHYSICAL SOIL &amp; BEAN ASSAY SAMPLES
          </h3>
          <p className="font-epilogue text-xs text-[#c2c9bb]">
            Receive our comprehensive 28-page Terroir Spectrometry Report, heavy metals analysis, and physical unroasted dried bean sample kit dispatched from Maayon, Capiz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
          <button
            onClick={onOrderSampleKit}
            type="button"
            className="px-5 py-3 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#2d5a27] cursor-pointer text-center"
          >
            Order Investor Sample Kit
          </button>
          <button
            onClick={onOpenCanopyTour}
            type="button"
            className="px-5 py-3 bg-[#2d5a27] hover:bg-[#3b6934] text-[#a1d494] hover:text-white font-epilogue font-bold text-xs uppercase tracking-wider transition-colors border border-[#3b6934] cursor-pointer text-center"
          >
            Book 360° Live Canopy Tour
          </button>
        </div>
      </div>
    </section>
  );
};
