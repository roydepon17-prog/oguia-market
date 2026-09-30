import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Maayon, Capiz cacao terroir unique compared to other regions?",
      answer: "Dad's Farm is situated in an ancient volcanic foothill basin at 240m elevation in Maayon, Capiz (11°19′N 122°47′E). The soil has a naturally balanced 6.82 pH volcanic alluvial loam rich in bioavailable potassium, magnesium, and active mycelium humus. Combined with 2,400mm annual monsoon buffering and 40% dappled shade from endemic fruit trees, our beans develop natural notes of sun-dried fig, tobacco husk, and wild raisin without high acidity or bitterness."
    },
    {
      question: "How does O'guia ensure 100% single-estate traceability from tree to bar?",
      answer: "Every batch of beans harvested at Dad's Farm is geo-tagged by parcel quadrant (e.g. Plot A-01, Lot 4). Pods are hand-graded for peak sucrose content (minimum 21° Brix) and fermented in native tiered hardwood sweat-boxes for exactly 144 hours. Each bar packaging wrapper features lot identification, roast drum temperature, and harvest cycle tracking."
    },
    {
      question: "What is the 'Fair-Equity Agroforestry Guarantee'?",
      answer: "Rather than treating local growers as third-party farmgate suppliers, Dad's Farm Agroforestry Corp. operates a cooperative model paying 45% above Fairtrade floor price directly to 84 agrarian reform beneficiary families in Maayon. In addition, 10% of total post-money equity is dedicated to the Farmer Cooperative ESOP, sharing export upside and dividend yields."
    },
    {
      question: "What are the botanical ingredients used in O'guia's fusion bars?",
      answer: "Our Botanical Fusion line highlights indigenous Western Visayan flora, notably the endemic Batwan fruit (Garcinia binucao) which provides signature tart green-plum acidity, locally distilled sugarcane Tubâ rum, highland Arabica and Robusta roasts, and authentic Panay purple yam butter in collaboration with youth artists."
    },
    {
      question: "What is the minimum ticket and structure for the $1.20M Seed Round?",
      answer: "The current $1.20M USD (₱67.2M PHP) round is structured as Convertible Seed Notes / Preferred Equity priced at a $4.8M USD pre-money valuation ($6.0M post-money). The minimum institutional or accredited investor commitment is $50,000 USD, with side-letter information rights, quarterly audited reports, and dedicated single-estate harvest allocation quotas."
    },
    {
      question: "How can luxury hotels, boutique concept stores, or corporate clients order wholesale?",
      answer: "We supply 5-star island resorts across Boracay, El Nido, and Metro Manila with custom minibar discovery flights, guest welcome gifts, and unroasted tablea discs. Sample flight boxes can be requested through our confidential data room portal, dispatched via DHL Express Cold-Chain."
    }
  ];

  return (
    <section className="w-full bg-[#150c08] p-5 sm:p-8 border border-[#332723] my-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="font-epilogue text-xs uppercase tracking-widest text-[#a1d494] font-bold">
            Frequently Answered Inquiries
          </span>
          <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-[#f3ded7] tracking-tight">
            Terroir, Stewardship &amp; Commercial Due Diligence
          </h2>
          <p className="font-epilogue text-xs sm:text-sm text-[#8c9387] max-w-xl">
            Everything you need to know about our regenerative farming, tree-to-bar craftsmanship, and investment architecture.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#241915] border border-[#332723] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#281d19] transition-colors"
                >
                  <span className="font-syne text-sm sm:text-base uppercase font-bold text-[#f3ded7]">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-[#ffb956] text-[20px] shrink-0">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 font-epilogue text-xs sm:text-sm text-[#c2c9bb] leading-relaxed border-t border-[#150c08]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
