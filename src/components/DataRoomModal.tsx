import React, { useState } from 'react';

interface DataRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScope?: string;
}

export const DataRoomModal: React.FC<DataRoomModalProps> = ({
  isOpen,
  onClose,
  defaultScope = 'Equity Investment (Seed Round)',
}) => {
  const [fullName, setFullName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState(defaultScope);
  const [ndaAgreed, setNdaAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGeneratingDownload, setIsGeneratingDownload] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ndaAgreed) return;

    setIsGeneratingDownload(true);
    setTimeout(() => {
      setIsGeneratingDownload(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleDownloadModel = () => {
    // Generate simulated CSV/XLSX text
    const csvContent =
      "data:text/csv;charset=utf-8," +
      encodeURIComponent(
        "O'guia Chocolates - 5-Year Pro-Forma Model v2.4\n" +
        "Strictly Confidential - For Accredited Investors Only\n\n" +
        "Metric,FY24 Base,FY25 Target,FY26 Projected,FY27 Expansion\n" +
        "Dry Beans Processed (MT),14,38,95,220\n" +
        "Gross Revenue ($USD),480000,1250000,3600000,8200000\n" +
        "Gross Profit ($USD),336000,912000,2660000,6150000\n" +
        "Gross Margin (%),70%,73%,74%,75%\n" +
        "Operating Expenses ($USD),210000,480000,1180000,2450000\n" +
        "EBITDA ($USD),86000,342000,1120000,2620000\n" +
        "EBITDA Margin (%),18%,27%,31%,32%\n\n" +
        "Seed Round Ask: $1.20M USD (20.0% Preferred Equity)\n" +
        "Pre-Money Valuation: $4.80M USD | Post-Money Valuation: $6.0M USD\n" +
        "Lead Counsel: Romulo Mabanta | Agroforestry Guild: Maayon, Capiz"
      );
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "Oguia_Chocolates_ProForma_Model_v2.4.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#241915] border border-[#3f322d] max-w-lg w-full p-6 sm:p-8 flex flex-col gap-4 shadow-[6px_6px_0px_#2d5a27] relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#332723]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ffb956]"></span>
            <span className="font-epilogue text-xs uppercase text-[#ffb956] font-bold tracking-widest">
              Confidential Investor Data Room
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

        {!submitted ? (
          <>
            <div>
              <h3 className="font-syne font-bold text-xl uppercase text-[#f3ded7] tracking-tight">
                Accredited Investor Verification
              </h3>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 leading-relaxed">
                Access to our audited historicals, 5-year pro-forma DCF model, cap table, and parcel harvest assay logs is strictly governed by mutual bilateral NDA.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                  Full Name & Title *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Elena Santos, Managing Partner"
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue placeholder:text-[#8c9387] focus:outline-none focus:border-[#ffb956]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                  Institution / Family Office *
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. Pacific Impact Ventures / Manila Angel Network"
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue placeholder:text-[#8c9387] focus:outline-none focus:border-[#ffb956]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                  Institutional / Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@pacificventures.com"
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue placeholder:text-[#8c9387] focus:outline-none focus:border-[#ffb956]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-epilogue text-[11px] uppercase tracking-wider text-[#8c9387] font-semibold">
                  Scope of Interest
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="bg-[#150c08] border border-[#3f322d] text-[#f3ded7] px-3.5 py-2.5 text-xs font-epilogue focus:outline-none focus:border-[#ffb956]"
                >
                  <option>Equity Investment (Seed Round $1.2M)</option>
                  <option>Regional Luxury Wholesale & Resort Minibar Partnership</option>
                  <option>Single-Origin Bean Sourcing & Micro-Roaster Export</option>
                  <option>Corporate Gifting & Tasting Flight Program</option>
                </select>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="nda-checkbox"
                  type="checkbox"
                  required
                  checked={ndaAgreed}
                  onChange={(e) => setNdaAgreed(e.target.checked)}
                  className="accent-[#ffb956] w-4 h-4 mt-0.5 cursor-pointer"
                />
                <label htmlFor="nda-checkbox" className="font-epilogue text-[11px] text-[#c2c9bb] cursor-pointer leading-tight">
                  I certify accredited investor or authorized procurement status, and agree to bilaterally execute the standard Dad's Farm NDA.
                </label>
              </div>

              <button
                type="submit"
                disabled={isGeneratingDownload || !ndaAgreed}
                className="mt-2 w-full py-3 bg-[#ffb956] hover:bg-[#f3ded7] text-[#462b00] hover:text-[#1b110d] font-epilogue font-bold text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#2d5a27] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isGeneratingDownload ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>Validating Credentials...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">lock_open</span>
                    <span>Transmit Bilateral NDA & Access Data Room</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4 gap-3 animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-[#2d5a27] text-[#a1d494] flex items-center justify-center rounded-none shadow-[2px_2px_0px_#150c08]">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <div>
              <span className="font-syne font-bold text-xl uppercase text-[#f3ded7] block">
                Access Credentials Dispatched
              </span>
              <p className="font-epilogue text-xs text-[#c2c9bb] mt-1 max-w-sm">
                Thank you, <strong className="text-[#f3ded7]">{fullName}</strong> ({institution}). Your secure DocuSign package and encrypted data room access tokens have been dispatched to <strong className="text-[#a1d494]">{email}</strong>.
              </p>
            </div>

            <div className="w-full bg-[#150c08] p-3 text-left border border-[#332723] flex flex-col gap-2 mt-2">
              <span className="font-epilogue text-[11px] uppercase tracking-wider text-[#ffb956] font-semibold">
                Available Immediate Downloads:
              </span>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={handleDownloadModel}
                  className="flex items-center justify-between p-2 bg-[#281d19] hover:bg-[#332723] text-left text-xs text-[#f3ded7] transition-colors cursor-pointer border border-[#3f322d]"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffb956] text-[18px]">table_chart</span>
                    <span>5-Year Pro-Forma DCF Model (.CSV / .XLSX)</span>
                  </span>
                  <span className="text-[10px] text-[#a1d494] uppercase font-bold">Download</span>
                </button>
                <div className="flex items-center justify-between p-2 bg-[#281d19] text-left text-xs text-[#c2c9bb] border border-[#3f322d]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a1d494] text-[18px]">description</span>
                    <span>Executive Investor Memorandum Pitch Deck (.PDF)</span>
                  </span>
                  <span className="text-[10px] text-[#8c9387] uppercase">Sent via Email</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-3 px-6 py-2 bg-[#332723] hover:bg-[#3f322d] text-[#f3ded7] font-epilogue text-xs uppercase font-semibold transition-colors cursor-pointer"
            >
              Return to Pitch Deck
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
