import React, { useState } from 'react';
import { CHOCOLATE_SKUS, ChocolateSKU } from '../../data/chocolatesData';

interface Slide03CollectionProps {
  onSelectSku: (sku: ChocolateSKU) => void;
  onRequestTastingFlight: () => void;
}

export const Slide03Collection: React.FC<Slide03CollectionProps> = ({
  onSelectSku,
  onRequestTastingFlight,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'single-estate' | 'botanical' | 'functional' | 'hospitality'>('all');

  const filteredSkus = activeFilter === 'all'
    ? CHOCOLATE_SKUS
    : CHOCOLATE_SKUS.filter((sku) => sku.category === activeFilter);

  const handleDownloadSpecSheet = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      encodeURIComponent(
        "O'guia Chocolates - Commercial SKU Spec Sheet & Margin Waterfall\n\n" +
        "SKU ID,Product Name,Category,Cacao %,SRP (USD),SRP (PHP),COGS (PHP),Gross Margin %,Roast Profile,Fermentation\n" +
        CHOCOLATE_SKUS.map(
          (s) =>
            `"${s.id}","${s.name}","${s.category}","${s.cacaoPercentage}","$${s.srpUsd}","₱${s.srpPhp}","₱${s.cogsPhp}","${s.grossMargin}%","${s.roastProfile}","${s.fermentProfile}"`
        ).join("\n")
      );
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "Oguia_Full_SKU_Specification_Sheet.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="slide-3" className="w-full flex flex-col gap-6 py-4 sm:py-6">
      {/* Sub-Header Deck Status / Metadata Strip */}
      <div className="w-full bg-[#150c08] p-3 sm:p-4 border border-[#332723] flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ffb956] animate-pulse"></span>
          <p className="font-epilogue text-[11px] uppercase tracking-widest text-[#c2c9bb]">
            INVESTOR MEMORANDUM // PRODUCT ARCHITECTURE &amp; COMMERCIAL SKU LINEUP • MAAYON, CAPIZ
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-[#241915] border border-[#332723] px-2.5 py-1 font-epilogue text-[10px] uppercase text-[#ffb956] tracking-wider font-bold">
            12+ MARKET-READY SKUS • ZERO COMPROMISE VISAYAN TERROIR
          </span>
          <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
            STAGE: COMMERCIAL EXPANSION
          </span>
        </div>
      </div>

      {/* Slide Header with Live KPI Block */}
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#c78202] text-[#462b00] px-2.5 py-0.5 font-epilogue text-[10px] uppercase tracking-widest font-bold">
              Slide 03 • Portfolio Architecture
            </span>
            <span className="font-epilogue text-[10px] uppercase tracking-widest text-[#8c9387]">
              Tree-To-Bar Margin Defensibility
            </span>
          </div>

          <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#f3ded7] tracking-tight leading-none mt-1">
            Indigenous Botanical Innovation &amp; Multi-Tier Portfolio
          </h2>

          <p className="font-epilogue text-sm sm:text-base text-[#c2c9bb] max-w-4xl">
            From rare single-clone Criollo dark roasts to youth-collaborative ube bars and traditional superfood tablea, engineered for DTC margin defensibility and luxury export placement.
          </p>
        </div>

        {/* Portfolio Health Audit KPI Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#241915] p-5 border border-[#332723] shadow-[4px_4px_0px_#2d5a27]">
          <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
            <span className="font-epilogue text-[11px] uppercase text-[#8c9387] tracking-wider font-bold">
              PORTFOLIO HEALTH AUDIT
            </span>
            <span className="material-symbols-outlined text-[18px] text-[#a1d494]">verified</span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-3">
            <div>
              <div className="font-epilogue text-[10px] uppercase text-[#c2c9bb]">Active SKUs</div>
              <div className="font-syne text-2xl font-bold text-[#ffb956]">12</div>
              <div className="font-epilogue text-[10px] text-[#8c9387]">Formats in Market</div>
            </div>
            <div>
              <div className="font-epilogue text-[10px] uppercase text-[#c2c9bb]">Avg Unit Margin</div>
              <div className="font-syne text-2xl font-bold text-[#a1d494]">69.3%</div>
              <div className="font-epilogue text-[10px] text-[#8c9387]">Blended Contribution</div>
            </div>
            <div>
              <div className="font-epilogue text-[10px] uppercase text-[#c2c9bb]">Provenance Score</div>
              <div className="font-syne text-2xl font-bold text-[#f3ded7]">100%</div>
              <div className="font-epilogue text-[10px] text-[#8c9387]">Maayon Agro-Forest</div>
            </div>
            <div>
              <div className="font-epilogue text-[10px] uppercase text-[#c2c9bb]">Gift Penetration</div>
              <div className="font-syne text-2xl font-bold text-[#ffb956]">+34%</div>
              <div className="font-epilogue text-[10px] text-[#8c9387]">Higher AOV via Flights</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="w-full bg-[#150c08] p-3 border border-[#332723] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 font-epilogue text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#3f322d] text-[#ffb956] shadow-[2px_2px_0px_#2d5a27]'
                : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            All Pillars (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('single-estate')}
            className={`px-3 py-1.5 font-epilogue text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeFilter === 'single-estate'
                ? 'bg-[#3f322d] text-[#ffb956] shadow-[2px_2px_0px_#2d5a27]'
                : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            Pillar A • Single-Estate
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('botanical')}
            className={`px-3 py-1.5 font-epilogue text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeFilter === 'botanical'
                ? 'bg-[#3f322d] text-[#ffb956] shadow-[2px_2px_0px_#2d5a27]'
                : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            Pillar B • Botanical Fusion
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('functional')}
            className={`px-3 py-1.5 font-epilogue text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeFilter === 'functional'
                ? 'bg-[#3f322d] text-[#ffb956] shadow-[2px_2px_0px_#2d5a27]'
                : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            Pillar C • Tablea &amp; Keto
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('hospitality')}
            className={`px-3 py-1.5 font-epilogue text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              activeFilter === 'hospitality'
                ? 'bg-[#3f322d] text-[#ffb956] shadow-[2px_2px_0px_#2d5a27]'
                : 'bg-[#241915] text-[#c2c9bb] hover:text-[#f3ded7]'
            }`}
          >
            Pillar D • Hospitality Flights
          </button>
        </div>

        <div className="flex items-center gap-3 text-[#8c9387] font-epilogue text-xs">
          <span className="hidden sm:inline">Harvest Cycle: Oct 2024 – Mar 2025</span>
          <div className="h-4 w-px bg-[#332723] hidden sm:block"></div>
          <span className="text-[#a1d494] flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-[15px]">eco</span>
            100% Traceable To Parcel 04
          </span>
        </div>
      </div>

      {/* Main 4-Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* PILLAR A: SINGLE-ESTATE */}
        <article className="flex flex-col bg-[#241915] border border-[#332723] shadow-md group hover:border-[#ffb956] transition-all">
          <div className="relative w-full h-72 overflow-hidden bg-[#150c08]">
            <img
              alt="Single-Estate Reserve 70% Dark Chocolate"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARcuqwcP0nCCr8KIwPIC9srfFUc6dt0bXcWqXVUi2hnnaKbow7esn__lt-jI0251XZ2jPM5e21DpihzHLzV8Pd2j6S-go0OtKO5J705wQLvj5s6qiMuSsOIUsdqhQJGDKmGu2V8XmO-9f9gO-JMNSKhIuwHX4V55XoX18lR2nRMrawG2QpQEMmqWM6nHYjHPzxCw9RnCmN4ABue1m8G398Q7thPP-4UcN0AToPaYo0XKI5TTphWPz7OSEI1TVswDX5FFw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#150c08]/90 px-2.5 py-1 backdrop-blur-sm border border-[#332723]">
              <span className="font-epilogue text-[10px] uppercase text-[#ffb956] tracking-widest font-bold">
                PILLAR A • FLAGSHIP
              </span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#2d5a27] text-[#a1d494] px-2.5 py-1 font-epilogue text-[10px] uppercase font-bold tracking-wider shadow-[2px_2px_0px_#000]">
              74% Margin
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Estate Lot 04 • 50g Slab
                </span>
                <span className="font-syne text-lg text-[#ffb956] font-bold">
                  $8.50 <span className="text-[#8c9387] text-xs font-normal">/ ₱480</span>
                </span>
              </div>
              <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold tracking-tight">
                Single-Estate Reserve Bars
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                Micro-batch fermented Criollo-Trinitario hybrids conched over 6 days. Delivers wild forest raisin, sun-dried fig, tobacco husk, and natural buttery mouthfeel without added lecithin.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-epilogue text-[10px] uppercase text-[#8c9387] tracking-wider font-semibold">
                Active Commercial SKUs:
              </span>
              <div className="flex flex-wrap gap-1">
                {['70% Dark Lot 4', '65% Medium Roast', '60% Classic Dark'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      const found = CHOCOLATE_SKUS.find((s) => s.name.includes('70%'));
                      if (found) onSelectSku(found);
                    }}
                    className="bg-[#281d19] border border-[#3f322d] hover:border-[#ffb956] text-[#f3ded7] px-2 py-0.5 font-epilogue text-[10px] uppercase cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase">
                <span>Roast Profile</span>
                <span className="text-[#a1d494] font-bold">118°C Slow Drum</span>
              </div>
              <div className="w-full bg-[#281d19] h-1">
                <div className="bg-[#a1d494] h-1" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase pt-1">
                <span>Fermentation</span>
                <span className="text-[#ffb956] font-bold">Wooden Box • 144h</span>
              </div>
            </div>
          </div>
        </article>

        {/* PILLAR B: VISAYAN BOTANICAL FUSION */}
        <article className="flex flex-col bg-[#241915] border border-[#332723] shadow-md group hover:border-[#ffb956] transition-all">
          <div className="relative w-full h-72 overflow-hidden bg-[#150c08]">
            <img
              alt="Visayan Flora and Youth Artist Collaborative"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-H3DTcvME4lwdMIgSq607rasWzV81OdNk0lPwFTF1B3pP76AWX38Jr0_sU08tZG47KJ3Hr2aqwIN38nNQeL7cneyGiJ8LtnzMFq459hAcs3rNGfaTiCCgVvlIZ_IF4aBOcBtMiVEmuZYOPyyiocSJUfsm71HTgpdszBWbdGxH26P-QFx0RGsxGdBQiXl681b7lBhd2z_8vg9RonSZba7ytR5Q2oWxTgzcpC5nEEpuSFs6yJsyJyfW64qNtU8QaeCR-_g"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#150c08]/90 px-2.5 py-1 backdrop-blur-sm border border-[#332723]">
              <span className="font-epilogue text-[10px] uppercase text-[#ffb956] tracking-widest font-bold">
                PILLAR B • INNOVATION
              </span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#ffb956] text-[#462b00] px-2.5 py-1 font-epilogue text-[10px] uppercase font-bold tracking-wider shadow-[2px_2px_0px_#2d5a27]">
              Defensible Moat
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Panay Botanicals • 50g Slab
                </span>
                <span className="font-syne text-lg text-[#ffb956] font-bold">
                  $9.20 <span className="text-[#8c9387] text-xs font-normal">/ ₱520</span>
                </span>
              </div>
              <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold tracking-tight">
                Visayan Botanical Fusion
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                Hyper-local botanicals infused with aged sugarcane rum and endemic batwan garcinia fruit. Packaging features bespoke botanical plates by local youth artists aged 12–13 from Maayon.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-epilogue text-[10px] uppercase text-[#8c9387] tracking-wider font-semibold">
                Active Commercial SKUs:
              </span>
              <div className="flex flex-wrap gap-1">
                {['Batwan Rhum Infusion', 'Youth Artist Ube Bar', 'Ginger Root Dark', 'Matcha Nibs White'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      const found = CHOCOLATE_SKUS.find((s) => s.name.includes(item.split(' ')[0]));
                      if (found) onSelectSku(found);
                    }}
                    className="bg-[#281d19] border border-[#3f322d] hover:border-[#ffb956] text-[#f3ded7] px-2 py-0.5 font-epilogue text-[10px] uppercase cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase">
                <span>Botanical Extraction</span>
                <span className="text-[#a1d494] font-bold">Cold Ultrasonic</span>
              </div>
              <div className="w-full bg-[#281d19] h-1">
                <div className="bg-[#ffb956] h-1" style={{ width: '92%' }}></div>
              </div>
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase pt-1">
                <span>Community Royalty</span>
                <span className="text-[#ffb956] font-bold">8% Net Direct To Kids</span>
              </div>
            </div>
          </div>
        </article>

        {/* PILLAR C: FUNCTIONAL & HERITAGE TABLEA */}
        <article className="flex flex-col bg-[#241915] border border-[#332723] shadow-md group hover:border-[#ffb956] transition-all">
          <div className="relative w-full h-72 overflow-hidden bg-[#150c08]">
            <img
              alt="Rich Heritage Hot Chocolate Champorado & Tablea"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAxnhKlNgxmdeGZm3FbpRjq2c8wk9KZkoOTEpkJQadBhrNxTD0ata8jXGh1AZJeRuw4vmTzRWsgf13FdF4WF4pq__kJKLmrATSKg0uQtWWSVuy6XrIVuz5HS4hDiGE0Lr0RjVK7K7ixTbJbmoq11u9_JJo6VKuPhRyyS7YXn8x9U7aqY8Ta3nfrw851hReu2R2zaNk3tghhYvf90UTTWHxDciiEfuysinpZE_vCzHNdDWhorqVa88miBn0DiyRpMQyvjk"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#150c08]/90 px-2.5 py-1 backdrop-blur-sm border border-[#332723]">
              <span className="font-epilogue text-[10px] uppercase text-[#ffb956] tracking-widest font-bold">
                PILLAR C • FUNCTIONAL
              </span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#2d5a27] text-[#a1d494] px-2.5 py-1 font-epilogue text-[10px] uppercase font-bold tracking-wider shadow-[2px_2px_0px_#000]">
              High Re-Order Rate
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Longevity Rituals • Discs / Bars
                </span>
                <span className="font-syne text-lg text-[#ffb956] font-bold">
                  $7.00 <span className="text-[#8c9387] text-xs font-normal">/ ₱390</span>
                </span>
              </div>
              <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold tracking-tight">
                Functional &amp; Heritage Tablea
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                100% unadulterated roasted cacao discs rich in heart-healthy flavonoids and theobromine. Paired with certified keto-friendly pumpkin seed bars for health-conscious metropolitan consumers.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-epilogue text-[10px] uppercase text-[#8c9387] tracking-wider font-semibold">
                Active Commercial SKUs:
              </span>
              <div className="flex flex-wrap gap-1">
                {['100% Pure Tablea Discs', 'Keto Sugar-Free Pumpkin', 'Binukot Cane Milk'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      const found = CHOCOLATE_SKUS.find((s) => s.name.includes(item.split(' ')[0]));
                      if (found) onSelectSku(found);
                    }}
                    className="bg-[#281d19] border border-[#3f322d] hover:border-[#ffb956] text-[#f3ded7] px-2 py-0.5 font-epilogue text-[10px] uppercase cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase">
                <span>Flavonoid Density</span>
                <span className="text-[#a1d494] font-bold">142mg / 25g disc</span>
              </div>
              <div className="w-full bg-[#281d19] h-1">
                <div className="bg-[#a1d494] h-1" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase pt-1">
                <span>Sugar Profile</span>
                <span className="text-[#ffb956] font-bold">0.0g Added Cane</span>
              </div>
            </div>
          </div>
        </article>

        {/* PILLAR D: HOSPITALITY & TASTING FLIGHTS */}
        <article className="flex flex-col bg-[#241915] border border-[#332723] shadow-md group hover:border-[#ffb956] transition-all">
          <div className="relative w-full h-72 overflow-hidden bg-[#150c08]">
            <img
              alt="Multi-Bar Tasting Flight inside Woven Native Bamboo Tray"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFXfkpxw91CF53C56isdE5FfUHGj5pE5Tz_KjF54bjgUm-1oqyt0uKFuh-Fz9O8AWS0fob0ZnRi-AZhiO34KTFbjjlWXDGYLda-LsrR_v-sVhFdlTAVZBkpbvy6UdXgx7TesEiAS6n7jsIv7laJy6UuFx_d7Qqw4YsTfIf60ozIoZ9Jt0LNL7U0PMoQifVySEUq-213j4TzIzcCg83r8EV3U4ajngOmqLbh_aEvOF4WMKj60IVPW1Q0ZZTOe7063Jgp3w"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#150c08]/90 px-2.5 py-1 backdrop-blur-sm border border-[#332723]">
              <span className="font-epilogue text-[10px] uppercase text-[#ffb956] tracking-widest font-bold">
                PILLAR D • B2B &amp; GIFT
              </span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#ffb956] text-[#462b00] px-2.5 py-1 font-epilogue text-[10px] uppercase font-bold tracking-wider shadow-[2px_2px_0px_#2d5a27]">
              +48% AOV Surge
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                  Curated Collection Box
                </span>
                <span className="font-syne text-lg text-[#ffb956] font-bold">
                  $42.00 <span className="text-[#8c9387] text-xs font-normal">/ ₱2,400</span>
                </span>
              </div>
              <h3 className="font-syne text-lg uppercase text-[#f3ded7] font-bold tracking-tight">
                Hospitality &amp; Tasting Flights
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
                Pre-curated discovery flights packaged in sustainably woven bamboo sleeves. Designed specifically for boutique hotel minibars in El Nido &amp; Boracay, corporate gifting, and airport travel hubs.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-epilogue text-[10px] uppercase text-[#8c9387] tracking-wider font-semibold">
                Active Commercial SKUs:
              </span>
              <div className="flex flex-wrap gap-1">
                {['6-Bar Terroir Flight', 'Resort Mini-Bar Pack (3x25g)', 'Executive Wood Coffret'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      const found = CHOCOLATE_SKUS.find((s) => s.category === 'hospitality');
                      if (found) onSelectSku(found);
                    }}
                    className="bg-[#281d19] border border-[#3f322d] hover:border-[#ffb956] text-[#f3ded7] px-2 py-0.5 font-epilogue text-[10px] uppercase cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase">
                <span>B2B Contract Margin</span>
                <span className="text-[#a1d494] font-bold">62% Wholesale Net</span>
              </div>
              <div className="w-full bg-[#281d19] h-1">
                <div className="bg-[#a1d494] h-1" style={{ width: '95%' }}></div>
              </div>
              <div className="flex justify-between items-center text-[#8c9387] font-epilogue text-[10px] uppercase pt-1">
                <span>Corporate Repeat Order</span>
                <span className="text-[#ffb956] font-bold">4.2x / Year</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Terroir Sensory Radar & Margin Waterfall Table */}
      <div className="bg-[#150c08] p-5 sm:p-6 border border-[#332723] flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="font-epilogue text-xs uppercase text-[#a1d494] tracking-widest font-bold block">
              Micro-Batch Laboratory Analysis
            </span>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] tracking-tight font-bold">
              Terroir Sensory Radar &amp; Margin Waterfall
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-epilogue text-xs uppercase text-[#8c9387]">
              Target Production 2025: 45,000 Units
            </span>
            <span className="bg-[#2d5a27] text-[#a1d494] font-epilogue text-xs uppercase px-2.5 py-1 font-bold">
              FDA Registered
            </span>
          </div>
        </div>

        <div className="w-full overflow-x-auto border border-[#332723]">
          <div className="min-w-[800px] flex flex-col">
            <div className="grid grid-cols-12 bg-[#332723] px-4 py-2.5 font-epilogue text-[11px] uppercase text-[#8c9387] font-semibold">
              <div className="col-span-3">Product Name • Format</div>
              <div className="col-span-2">Cacao Cultivar</div>
              <div className="col-span-3">Dominant Flavor Profile</div>
              <div className="col-span-2 text-right">Unit COGS / SRP</div>
              <div className="col-span-2 text-right">Gross Margin</div>
            </div>

            <div className="grid grid-cols-12 bg-[#241915] px-4 py-3.5 items-center hover:bg-[#281d19] transition-colors border-b border-[#332723]">
              <div className="col-span-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#ffb956]"></span>
                <div>
                  <div className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                    70% Capiz Dark Reserve
                  </div>
                  <div className="font-epilogue text-[10px] text-[#8c9387]">
                    50g Retail Bar • Lot #4
                  </div>
                </div>
              </div>
              <div className="col-span-2 font-epilogue text-xs text-[#c2c9bb]">
                Visayan Criollo Clone 1
              </div>
              <div className="col-span-3 font-epilogue text-xs text-[#c2c9bb]">
                Black fig, forest honey, roasted nib butter
              </div>
              <div className="col-span-2 text-right font-epilogue text-xs">
                <span className="text-[#8c9387]">₱124 COGS</span> • <span className="text-[#f3ded7] font-bold">₱480 SRP</span>
              </div>
              <div className="col-span-2 text-right font-syne text-base text-[#a1d494] font-bold">
                74.2%
              </div>
            </div>

            <div className="grid grid-cols-12 bg-[#150c08] px-4 py-3.5 items-center hover:bg-[#281d19] transition-colors border-b border-[#332723]">
              <div className="col-span-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#a1d494]"></span>
                <div>
                  <div className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                    Batwan Rhum Infusion
                  </div>
                  <div className="font-epilogue text-[10px] text-[#8c9387]">
                    50g Botanical Fusion Bar
                  </div>
                </div>
              </div>
              <div className="col-span-2 font-epilogue text-xs text-[#c2c9bb]">
                Trinitario Canopy Ferment
              </div>
              <div className="col-span-3 font-epilogue text-xs text-[#c2c9bb]">
                Tart native garcinia, molasses, oak tannin
              </div>
              <div className="col-span-2 text-right font-epilogue text-xs">
                <span className="text-[#8c9387]">₱148 COGS</span> • <span className="text-[#f3ded7] font-bold">₱520 SRP</span>
              </div>
              <div className="col-span-2 text-right font-syne text-base text-[#a1d494] font-bold">
                71.5%
              </div>
            </div>

            <div className="grid grid-cols-12 bg-[#241915] px-4 py-3.5 items-center hover:bg-[#281d19] transition-colors border-b border-[#332723]">
              <div className="col-span-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#ffb4a8]"></span>
                <div>
                  <div className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                    Pure Cacao Tablea Discs
                  </div>
                  <div className="font-epilogue text-[10px] text-[#8c9387]">
                    200g Roll (8 Traditional Discs)
                  </div>
                </div>
              </div>
              <div className="col-span-2 font-epilogue text-xs text-[#c2c9bb]">
                100% Unsweetened Criollo
              </div>
              <div className="col-span-3 font-epilogue text-xs text-[#c2c9bb]">
                Deep roasted theobroma, velvety cocoa fats
              </div>
              <div className="col-span-2 text-right font-epilogue text-xs">
                <span className="text-[#8c9387]">₱115 COGS</span> • <span className="text-[#f3ded7] font-bold">₱390 SRP</span>
              </div>
              <div className="col-span-2 text-right font-syne text-base text-[#a1d494] font-bold">
                70.5%
              </div>
            </div>

            <div className="grid grid-cols-12 bg-[#150c08] px-4 py-3.5 items-center hover:bg-[#281d19] transition-colors">
              <div className="col-span-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#ffddb5]"></span>
                <div>
                  <div className="font-syne text-sm uppercase text-[#f3ded7] font-bold">
                    Curated 6-Bar Discovery Box
                  </div>
                  <div className="font-epilogue text-[10px] text-[#8c9387]">
                    Bespoke Woven Hospitality Casket
                  </div>
                </div>
              </div>
              <div className="col-span-2 font-epilogue text-xs text-[#c2c9bb]">
                Multi-Clone Estate Blend
              </div>
              <div className="col-span-3 font-epilogue text-xs text-[#c2c9bb]">
                Full sensory flight: 60% through 100% + Botanicals
              </div>
              <div className="col-span-2 text-right font-epilogue text-xs">
                <span className="text-[#8c9387]">₱790 COGS</span> • <span className="text-[#f3ded7] font-bold">₱2,400 SRP</span>
              </div>
              <div className="col-span-2 text-right font-syne text-base text-[#a1d494] font-bold">
                67.1%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packaging Integrity & Tasting Flight Action Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-6 bg-[#281d19] p-6 border border-[#332723] flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ffb956]"></span>
              <span className="font-epilogue text-xs uppercase text-[#ffb956] tracking-widest font-bold">
                DEFECT-FREE LUXURY PACKAGING
              </span>
            </div>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] tracking-tight font-bold">
              Engineered for High-Humidity Tropical Resilience
            </h3>
            <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
              Craft chocolate export fails when packaging buckles under tropical heat and maritime moisture. O'guia utilizes multi-layer airtight gold barrier foil wrapped within recycled unbleached kraft stock, sealed with tamper-evident serial bands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-[#150c08] p-3 border border-[#332723]">
              <span className="material-symbols-outlined text-[#a1d494] text-[22px]">verified_user</span>
              <div className="font-syne text-lg text-[#f3ded7] font-bold mt-1">18 Mos</div>
              <div className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                Verified Shelf Stability
              </div>
            </div>
            <div className="bg-[#150c08] p-3 border border-[#332723]">
              <span className="material-symbols-outlined text-[#ffb956] text-[22px]">recycling</span>
              <div className="font-syne text-lg text-[#f3ded7] font-bold mt-1">100%</div>
              <div className="font-epilogue text-[10px] uppercase text-[#8c9387]">
                Biodegradable Outer Kraft
              </div>
            </div>
          </div>
        </div>

        {/* Due Diligence Sampling Callout */}
        <div className="lg:col-span-6 bg-[#332723] p-6 border border-[#3f322d] shadow-[4px_4px_0px_#2d5a27] flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-epilogue text-xs uppercase text-[#a1d494] tracking-widest font-bold">
              DUE DILIGENCE PRODUCT SAMPLING
            </span>
            <h3 className="font-syne text-xl sm:text-2xl uppercase text-[#f3ded7] tracking-tight font-bold">
              Order Accredited Tasting Flight
            </h3>
            <p className="font-epilogue text-xs text-[#c2c9bb] leading-relaxed">
              Accredited institutional investors, export partners, and premium resort hospitality directors are invited to receive our physical 6-bar curated sensory flight with lot certificate analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onRequestTastingFlight}
              type="button"
              className="flex-1 py-3 px-4 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#2d5a27] flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">inventory_2</span>
              <span>Request Tasting Flight Box</span>
            </button>
            <button
              onClick={handleDownloadSpecSheet}
              type="button"
              className="py-3 px-4 bg-[#150c08] hover:bg-[#281d19] text-[#f3ded7] font-epilogue font-semibold text-xs uppercase tracking-wider transition-colors border border-[#3f322d] flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download SKU Spec Sheet (.CSV)</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#8c9387] pt-1">
            <span className="material-symbols-outlined text-[16px] text-[#a1d494]">local_shipping</span>
            <span className="font-epilogue text-[11px] uppercase">
              Global DHL Cold-Chain Express • Delivered within 72h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
