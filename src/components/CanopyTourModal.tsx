import React, { useState } from 'react';

interface CanopyTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSoilAssay: () => void;
}

export const CanopyTourModal: React.FC<CanopyTourModalProps> = ({
  isOpen,
  onClose,
  onOrderSoilAssay,
}) => {
  const [activeLayer, setActiveLayer] = useState<'canopy' | 'understory' | 'floor' | 'subsoil'>('canopy');

  if (!isOpen) return null;

  const layers = [
    {
      id: 'canopy',
      title: '01. Overstory Rain Canopy',
      subtitle: 'Height: 18m – 30m',
      density: '88% Coverage',
      species: 'Endemic Batwan (Garcinia binucao), Hardwood Mahogany, Coconut, Bamboo',
      benefit: 'Filters harsh equatorial UV, dampens monsoon downpours, and maintains 76% relative micro-humidity year-round.',
      icon: 'forest'
    },
    {
      id: 'understory',
      title: '02. Cacao Crop Understory',
      subtitle: 'Height: 3m – 7m',
      density: '1,100 Trees / Hectare',
      species: 'Ancestral Criollo & Trinitario hybrids with cauliflory direct-stem flowering',
      benefit: 'Deep volcanic mineral absorption, shielded from heavy winds, and naturally pollinated by native midges.',
      icon: 'potted_plant'
    },
    {
      id: 'floor',
      title: '03. Mycelium Leaf Litter Layer',
      subtitle: 'Depth: 5cm – 12cm',
      density: '12.4% Organic Humus',
      species: 'Decaying cacao pod husks, composted banana leaves, indigenous biochar',
      benefit: 'Acts as a natural sponge storing 2,400mm rainfall; zero synthetic fertilizers or chemical weed sprays used.',
      icon: 'compost'
    },
    {
      id: 'subsoil',
      title: '04. Volcanic Alluvial Subsoil',
      subtitle: 'Depth: 0cm – 60cm Core',
      density: '6.82 pH Balanced',
      species: 'Magnesium & potassium-rich volcanic loam with active symbiotic mycorrhizae',
      benefit: 'High cation exchange capacity prevents kernel bitterness and delivers silky theobroma mouthfeel.',
      icon: 'landslide'
    }
  ];

  const currentLayerData = layers.find((l) => l.id === activeLayer)!;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#241915] border border-[#3f322d] max-w-3xl w-full p-6 sm:p-8 flex flex-col gap-5 shadow-[6px_6px_0px_#2d5a27] relative animate-in fade-in zoom-in-95 duration-200 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a1d494] text-[20px]">explore</span>
            <span className="font-epilogue text-xs uppercase text-[#a1d494] font-bold tracking-widest">
              360° Living Canopy Virtual Field Tour
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

        {/* Location Breadcrumb */}
        <div className="bg-[#150c08] p-3 border border-[#332723] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffb956] animate-pulse"></span>
            <span className="font-epilogue text-xs text-[#f3ded7] font-semibold">
              Dad's Farm HQ & Agroforestry Parcel A-01
            </span>
            <span className="text-[#8c9387] text-xs">• 11°19′N 122°47′E</span>
          </div>
          <span className="font-mono text-xs text-[#a1d494]">Elevation: 240m Above Sea Level</span>
        </div>

        {/* Hero Visual Field Frame */}
        <div className="relative w-full h-64 sm:h-80 bg-[#150c08] border border-[#332723] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACL3hDvWnNcVQe4bl-wXl3yUAGWxVY3gfYtwC8dSikyDURHdIB6AdMhFJPmEGa1ACss6XWgGA1g6QAPF_H_icfRtg46YuJViJpDn8aGYRhAdb9aLBuBe-Eg0nEyLAoEPtlyXT6CGRST9bnB1Rj5uPizkzUFq2Rw5_ly_6H-Nw7Ct8bFVc05ohT_ELGiF7iMPLU6aeuPxKKCfB5QJ6ylyLGsZ6onjo9vmvgOBGS-LCM5TKU_B2QWdjyvw"
            alt="Maayon Capiz Canopy"
            className="w-full h-full object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#150c08] via-transparent to-black/30 pointer-events-none"></div>

          {/* Interactive Layer Pills on Media */}
          <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
            {layers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveLayer(l.id as any)}
                className={`px-2.5 py-1 text-xs font-epilogue uppercase font-bold tracking-wider transition-all cursor-pointer ${
                  activeLayer === l.id
                    ? 'bg-[#ffb956] text-[#462b00] shadow-[2px_2px_0px_#2d5a27]'
                    : 'bg-[#150c08]/85 text-[#f3ded7] hover:bg-[#281d19]'
                }`}
              >
                {l.id}
              </button>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <span className="font-epilogue text-[10px] uppercase tracking-wider text-[#a1d494] font-bold block">
                Inspecting Agro-Ecological Strata
              </span>
              <span className="font-syne font-bold text-lg text-[#f3ded7] uppercase">
                {currentLayerData.title}
              </span>
            </div>
            <span className="px-2 py-0.5 bg-[#2d5a27] text-[#a1d494] font-mono text-xs font-bold">
              {currentLayerData.density}
            </span>
          </div>
        </div>

        {/* Layer Deep Dive Information */}
        <div className="bg-[#150c08] p-4 border border-[#332723] flex flex-col gap-2 font-epilogue">
          <div className="flex items-center justify-between pb-2 border-b border-[#241915]">
            <span className="text-xs text-[#ffb956] uppercase font-bold tracking-wider">
              {currentLayerData.subtitle}
            </span>
            <span className="text-xs text-[#8c9387]">Maayon Agro-Ecosystem Diagnostic</span>
          </div>
          <div className="text-xs text-[#f3ded7]">
            <strong className="text-[#c2c9bb] block text-[11px] uppercase">Predominant Flora & Symbiosis:</strong>
            {currentLayerData.species}
          </div>
          <div className="text-xs text-[#c2c9bb] mt-1 leading-relaxed">
            <strong className="text-[#a1d494] block text-[11px] uppercase">Sensory & Soil Benefit:</strong>
            {currentLayerData.benefit}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#332723]">
          <button
            onClick={() => {
              onClose();
              onOrderSoilAssay();
            }}
            className="flex-1 py-3 bg-[#a1d494] hover:bg-[#bcf0ae] text-[#0a3909] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#000000] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">science</span>
            <span>Request Physical Soil & Bean Assay Sample Kit</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#150c08] hover:bg-[#281d19] text-[#c2c9bb] hover:text-[#f3ded7] font-epilogue font-semibold text-xs uppercase tracking-wider transition-colors border border-[#3f322d] cursor-pointer"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
};
