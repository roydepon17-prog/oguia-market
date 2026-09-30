export interface ChocolateSKU {
  id: string;
  name: string;
  tagline: string;
  category: 'single-estate' | 'botanical' | 'functional' | 'hospitality';
  categoryLabel: string;
  badge: string;
  cacaoPercentage: string;
  cacaoCultivar: string;
  weight: string;
  srpUsd: number;
  srpPhp: number;
  cogsPhp: number;
  cogsUsd: number;
  grossMargin: number;
  roastProfile: string;
  fermentProfile: string;
  tastingNotes: string[];
  description: string;
  imageUrl: string;
  highlightStat: string;
  accentColor: string;
}

export const CHOCOLATE_SKUS: ChocolateSKU[] = [
  {
    id: 'sku-70-myn',
    name: "O'guia Dark 70%",
    tagline: 'Maayon Forest Reserve Lot 4',
    category: 'single-estate',
    categoryLabel: 'Pillar A • Flagship',
    badge: 'Flagship Origin',
    cacaoPercentage: '70%',
    cacaoCultivar: 'Visayan Criollo Clone 1',
    weight: '50g Snapping Slab',
    srpUsd: 8.50,
    srpPhp: 480,
    cogsPhp: 124,
    cogsUsd: 2.61,
    grossMargin: 74.2,
    roastProfile: '118°C Slow Drum (Gentle Conche)',
    fermentProfile: '6 Days Tiered Sweat-Box',
    tastingNotes: ['Wild Forest Raisin', 'Sun-Dried Fig', 'Tobacco Husk', 'Velvety Buttery Finish'],
    description: 'Unadulterated single-estate beans from Dad\'s Farm. Expresses deep sun-dried raisin, botanical red fruits, and a buttery, heart-healthy finish without added soy lecithin.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMzbt61uzy8SaVpp-UZTUJOUAzboue3UxNa8DG995C7p1zJokdBD9h1O33JN6cCju5RKqg5HoZ2mR6CE8c1xjdTZjYuYtqB0UOesgtkZuBgsLCJrTUI3FAhefE0Fp0GJZ28sOtGYmYTjp4_XkMktvUvC8H8qadj_1N1NYFTWCmXIYYNMmmLmAzwo_Pd2QL7q6goDipedUQYGBEMhrjNQjVPJRnZSWWvi6G0yFYC7EcJ8WXNI5XGQo5LOzjnrablQeFp0',
    highlightStat: '74.2% Gross Margin',
    accentColor: '#a1d494',
  },
  {
    id: 'sku-batwan-rhum',
    name: 'Batwan Rhum & Coffee Infusion',
    tagline: 'Panay Indigenous Forest Botanical',
    category: 'botanical',
    categoryLabel: 'Pillar B • Innovation',
    badge: 'Panay Indigenous',
    cacaoPercentage: '65%',
    cacaoCultivar: 'Trinitario Canopy Ferment',
    weight: '50g Botanical Fusion Bar',
    srpUsd: 9.20,
    srpPhp: 520,
    cogsPhp: 148,
    cogsUsd: 2.85,
    grossMargin: 71.5,
    roastProfile: 'Medium Espresso Roast + Ultrasonic Botanical Infusion',
    fermentProfile: '5 Days Hardwood Box',
    tastingNotes: ['Tart Wild Batwan (Garcinia)', 'Visayan Oak-Aged Rhum', 'Robusta Crunch', 'Caramel Molasses'],
    description: 'Wild forest batwan fruit acidity paired with locally aged Visayan sugar-cane rhum and highland roasted Robusta beans for a tart, oaky, crunch-laden finish.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV5rhlmNAMoxhQXo3CTHEHf23VhB_uZcPCL61kIx7Hjau4D30B31UA3mrTHChsE1v55Rg-9yQqBX0DwdVh2Rytp9N0FvgUWN_NauihRkZ_SsoZNCOd33omJPHKzCkgF7bBDazzRLUwVykUwTEzyT-7ggKzuHR5kD3whddZxMQTIwJqwPr-2w3BRBuAj0kpUHOqVtxAewmE3qYEFsYbxZHfrMVXjqujcqkiBq9nh5HDziUnE_YW4YVEQ41KIVPzOn9nIcs',
    highlightStat: 'Defensible Moat',
    accentColor: '#ffb956',
  },
  {
    id: 'sku-ube-bar',
    name: 'Youth Co-Lab Ube Bar',
    tagline: 'Maayon Youth Artist Collaborative Series',
    category: 'botanical',
    categoryLabel: 'Pillar B • Innovation',
    badge: 'Youth Co-Lab',
    cacaoPercentage: '55% + Cacao Nibs',
    cacaoCultivar: 'Criollo/Trinitario Blend',
    weight: '50g Artisan Bar',
    srpUsd: 9.20,
    srpPhp: 520,
    cogsPhp: 145,
    cogsUsd: 2.80,
    grossMargin: 72.1,
    roastProfile: 'Cold Micro-Conched with Purple Yam Butter',
    fermentProfile: '144h Native Box',
    tastingNotes: ['Real Purple Yam Butter', 'Nutty Roasted Cacao Nibs', 'Creamy Vanilla', 'Floral Honey'],
    description: 'Real purple yam butter fusion with roasted cacao nibs. Packaging features bespoke botanical plates created by local youth artists aged 12–13 from Maayon, with 8% net royalty direct to kids.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1KvUyEGc9uRFfhsG211pmuU9ZY0hC7UEl4adDvQzXfLzroPaM22ERBCiJL3WlZPm_jSiztbIoYjqkewfQDwHyRorro9lRi0p8b2IJmwcsZzlHw8Shh8xavVHNNdPUTZM-bvrouKzrMBgeGm7fOKZW0NobZ9bsnSFXOBjt0_q08KXQhKGIYoePHtHNh1rVDJjjKkR14sj-A2oisj2Xn_-rpi4fLTlySgNQXpH7Rcxtbf8oy6W7L7OVMvMEq0jQIhMOQRE',
    highlightStat: '8% Direct Youth Royalty',
    accentColor: '#ffb4a8',
  },
  {
    id: 'sku-coffee-nib',
    name: 'Dark Coffee Nib Heritage Blend',
    tagline: 'Highland Arabica Roast Crunch inside 65% Dark Bar',
    category: 'single-estate',
    categoryLabel: 'Pillar A • Flagship',
    badge: 'Heritage Blend',
    cacaoPercentage: '65%',
    cacaoCultivar: 'Trinitario Agro-Forest Lot 2',
    weight: '50g Artisan Bar',
    srpUsd: 8.50,
    srpPhp: 480,
    cogsPhp: 130,
    cogsUsd: 2.65,
    grossMargin: 72.9,
    roastProfile: 'Double-Roast Highland Conche',
    fermentProfile: '6 Days Tiered',
    tastingNotes: ['Smoky Arabica Nib Crunch', 'Dark Molasses', 'Black Cherry', 'Cedar Bark'],
    description: 'A deeply aromatic bar pairing single-origin Capiz dark chocolate with coarsely crushed Arabica beans grown on the misty ridges of Western Visayas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1Ml1c5VuLg2Dq6cM8COzIiQaO7BUVY8SAfMDFQhrnnFv_N7CIPe2TaNPHlpUSdXbm6O1cBu66VveLcKVZJ7J5MdTyQEfQmDYxyyLehErSx0tmcTDGSLruy_CcoNhRgJob_-76RKRnInoTyWitAdSVV1uOAfe5C7_sC0H-h6nFGyBVph-EXIEYgIf5J0khjG-BgIK8XfMh92kVPxv7IiYxWAXGl4W7crFWBHrjA0EXcSckJQuipBUVzq9BI1XHQ4A0h50',
    highlightStat: 'Top Re-Order SKU',
    accentColor: '#ffddb5',
  },
  {
    id: 'sku-pure-tablea',
    name: '100% Pure Cacao Tablea Discs',
    tagline: 'Traditional Ceremonial Drinking Cacao & Champorado',
    category: 'functional',
    categoryLabel: 'Pillar C • Functional',
    badge: 'Functional Wellness',
    cacaoPercentage: '100% Pure Cacao',
    cacaoCultivar: 'Pure Heirloom Criollo',
    weight: '200g Roll (8 Traditional Discs)',
    srpUsd: 7.00,
    srpPhp: 390,
    cogsPhp: 115,
    cogsUsd: 2.30,
    grossMargin: 70.5,
    roastProfile: 'Slow Fire Stone Ground (Zero Sugar Added)',
    fermentProfile: 'Natural Traditional Box',
    tastingNotes: ['Velvety Cocoa Fats', 'Deep Roasted Theobroma', 'Earthy Volcanic Notes', 'Zero Bitterness'],
    description: '100% unadulterated roasted cacao discs rich in heart-healthy flavonoids and theobromine. Perfect for authentic Filipino Champorado, hot ceremonial tsokolate, or keto lifestyles.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9JdyXCjpcmjLjAOI77UcGMFmO1yvPbo_Kxxf-RbjAHswzgglOEZGOQgNFGbWuBeQIU7lqM_ldn0Gc2R5sseLWsWkYy6s7TjGsrweieGfRL05R_B3epjYBOe8DbBSqlLLm26wJBO-bMEfXDL1wlTXaOHeCZmGZVpHBmrzu-VyW4OHwZbWh1wP8K1DPqrrmiMZx63rory2Pga52aW7kGeKRpUYKQLdUKgAOMnnQjrofBSLlESoolt88JPA79g9eGQiNrmM',
    highlightStat: '142mg Flavonoids / Disc',
    accentColor: '#a1d494',
  },
  {
    id: 'sku-keto-pumpkin',
    name: 'Keto Sugar-Free Pumpkin Seed Dark',
    tagline: 'Metropolitan Functional Wellness',
    category: 'functional',
    categoryLabel: 'Pillar C • Functional',
    badge: 'Keto Certified',
    cacaoPercentage: '85%',
    cacaoCultivar: 'Maayon Agroforest Criollo',
    weight: '50g Sugar-Free Bar',
    srpUsd: 8.50,
    srpPhp: 480,
    cogsPhp: 135,
    cogsUsd: 2.70,
    grossMargin: 71.8,
    roastProfile: 'Low Glycemic Conche with Roasted Pumpkin Seeds',
    fermentProfile: '144h Temperature Logged',
    tastingNotes: ['Raw Pumpkin Seed Crunch', 'Dark Cocoa Butter', 'Himalayan Pink Salt', 'Zero Cane Sugar'],
    description: 'Specially engineered for metabolic health and clean snacking, utilizing slow-roasted green pumpkin seeds and 85% single-estate dark chocolate with 0.0g added cane sugar.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXfkpxw91CF53C56isdE5FfUHGj5pE5Tz_KjF54bjgUm-1oqyt0uKFuh-Fz9O8AWS0fob0ZnRi-AZhiO34KTFbjjlWXDGYLda-LsrR_v-sVhFdlTAVZBkpbvy6UdXgx7TesEiAS6n7jsIv7laJy6UuFx_d7Qqw4YsTfIf60ozIoZ9Jt0LNL7U0PMoQifVySEUq-213j4TzIzcCg83r8EV3U4ajngOmqLbh_aEvOF4WMKj60IVPW1Q0ZZTOe7063Jgp3w',
    highlightStat: '0.0g Added Sugar',
    accentColor: '#ffb956',
  },
  {
    id: 'sku-curated-flight',
    name: 'Curated 6-Bar Terroir Discovery Box',
    tagline: 'Bespoke Woven Hospitality Casket',
    category: 'hospitality',
    categoryLabel: 'Pillar D • Hospitality & Gift',
    badge: 'B2B / Luxury Retail',
    cacaoPercentage: '60% through 100% Flight',
    cacaoCultivar: 'Multi-Clone Estate Blend',
    weight: '6 x 50g Bars in Bamboo Woven Box',
    srpUsd: 42.00,
    srpPhp: 2400,
    cogsPhp: 790,
    cogsUsd: 14.10,
    grossMargin: 67.1,
    roastProfile: 'Curated Flight: Dark 70%, Batwan, Ube, Tablea, Coffee, Binukot',
    fermentProfile: 'Certified Estate Batches',
    tastingNotes: ['Full Sensory Spectrum', 'Floral to Deep Earth', 'Tart Citrus', 'Rich Velvety Fats'],
    description: 'Pre-curated discovery flight packaged in sustainably hand-woven Panay bamboo sleeves. Designed specifically for boutique hotel minibars in El Nido & Boracay, corporate gifting, and airport travel hubs.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5TBfQGoLTjgGi4fIw-LuoXLoDwDWVV4PmylTJGv6j7xf4NuqNxN8ENcy_RsIB2xWCk2uUIYmUvKvygsA7Q1hfBxVQBr3NweMbjTn8lu8R_7kBaj__Vmb5J-_oRNMFRJdA73DhjuIk2FoCL9WSAZt8i9d-1r1y7dvzTsCCmauqG_vqxxXn-JGSOS9z17OuK19NbEGvNZ7OUTTuYZsacvZJ_iFnpdWerxQPwj8r0SLBpBnVPEv0Q4YXX9Sg95v3FsUR14Y',
    highlightStat: '+48% AOV Surge',
    accentColor: '#a1d494',
  },
  {
    id: 'sku-binukot-milk',
    name: 'Binukot Cane Milk Chocolate',
    tagline: 'Highland Grass-Fed Milk & Muscovado Sugar',
    category: 'single-estate',
    categoryLabel: 'Pillar A • Flagship',
    badge: 'Micro-Batch',
    cacaoPercentage: '48%',
    cacaoCultivar: 'Trinitario Lot 3',
    weight: '50g Snapping Bar',
    srpUsd: 8.50,
    srpPhp: 480,
    cogsPhp: 132,
    cogsUsd: 2.68,
    grossMargin: 72.5,
    roastProfile: 'Low Temp Conche with Pure Evaporated Cane Juice',
    fermentProfile: '5 Days',
    tastingNotes: ['Caramel Fudge', 'Malted Grain', 'Sweet Cream', 'Warm Nutmeg'],
    description: 'Named after the sacred indigenous keepers of Capiz oral epics, this bar combines single-origin cacao with organic Capiz muscovado sugar and rich grass-fed milk for a nostalgic yet refined profile.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaP5Kkd-L9gB6o0wLPF0ybzquiYjjFV0etOTZal22kQXtZ9CVfAXqN0xdXzKVXRAirdUuZIKmcalgiN-67J5voPIJfzUrF4pX3chnM5WCh2gO6TK2aGgJn87zm_KbrhT7xTo32F60Itc3JP1EML9ora4hr5kkf2fEf5brnqhROPxzcj70U1w1I29fx1fRpIWTrsOHT-gOctz8i8GIaTWdeZ-9vulzPQ0ZKElGebKvJk5jycS_2oem85K5fanS7ZIpNUY',
    highlightStat: 'Craft Milk Favorite',
    accentColor: '#ffb956',
  }
];

export interface FinancialMetricRow {
  metric: string;
  icon: string;
  fy24Base: string;
  fy25Target: string;
  fy26Projected: string;
  fy27Expansion: string;
  unit: string;
}

export const FINANCIAL_PROJECTIONS: FinancialMetricRow[] = [
  {
    metric: 'Dry Beans Processed',
    icon: 'scale',
    fy24Base: '14 MT',
    fy25Target: '38 MT',
    fy26Projected: '95 MT',
    fy27Expansion: '220 MT',
    unit: 'Metric Tons'
  },
  {
    metric: 'Gross Revenue',
    icon: 'payments',
    fy24Base: '$480,000',
    fy25Target: '$1,250,000',
    fy26Projected: '$3,600,000',
    fy27Expansion: '$8,200,000',
    unit: 'USD'
  },
  {
    metric: 'Gross Profit (%)',
    icon: 'pie_chart',
    fy24Base: '$336K (70%)',
    fy25Target: '$912K (73%)',
    fy26Projected: '$2.66M (74%)',
    fy27Expansion: '$6.15M (75%)',
    unit: 'USD / %'
  },
  {
    metric: 'Operating Expenses (OPEX)',
    icon: 'tune',
    fy24Base: '$210,000',
    fy25Target: '$480,000',
    fy26Projected: '$1,180,000',
    fy27Expansion: '$2,450,000',
    unit: 'USD'
  },
  {
    metric: 'EBITDA (% Margin)',
    icon: 'star',
    fy24Base: '$86K (18%)',
    fy25Target: '$342K (27%)',
    fy26Projected: '$1.12M (31%)',
    fy27Expansion: '$2.62M (32%)',
    unit: 'USD / %'
  }
];

export const COGS_BREAKDOWN_50G = [
  {
    label: 'Raw Cacao Beans & Organic Muscovado',
    percent: 13.5,
    costUsd: 1.15,
    color: '#a1d494'
  },
  {
    label: 'Processing & Solar Micro-Fermentary Energy',
    percent: 5.6,
    costUsd: 0.48,
    color: '#ffb956'
  },
  {
    label: 'Eco-Luxe Packaging & Botanical Kraft Wraps',
    percent: 6.6,
    costUsd: 0.56,
    color: '#ffb4a8'
  },
  {
    label: 'Direct Agroforestry Labor & QC (Maayon Guild)',
    percent: 5.0,
    costUsd: 0.42,
    color: '#c2c9bb'
  }
];

export const USE_OF_PROCEEDS = [
  {
    percent: 40,
    amountUsd: 480000,
    amountPhp: 'PHP 26.88M',
    title: 'Post-Harvest Solar Infrastructure & Fermentation Pods',
    subtitle: 'Maayon Estate Scaled Fermentary',
    detail: 'Expands bean processing capacity from 14 MT to 120 MT/yr via 4 computerized modular solar drying tunnels, moisture-attenuated fermentation bins, and automated sorting line.',
    color: '#ffb956'
  },
  {
    percent: 25,
    amountUsd: 300000,
    amountPhp: 'PHP 16.80M',
    title: 'Metro Manila Retail Flagship & Airport Travel-Retail',
    subtitle: 'High-Conversion DTC Footprint',
    detail: 'Turnkey architectural buildout of flagship sensory salon in Bonifacio Global City (BGC), plus 3 high-footfall duty-free concessions (NAIA T3, Clark, Cebu-Mactan).',
    color: '#a1d494'
  },
  {
    percent: 15,
    amountUsd: 180000,
    amountPhp: 'PHP 10.08M',
    title: 'International Certifications & Cold-Chain Logistics',
    subtitle: 'USDA Organic, JAS & EU Bio Compliance',
    detail: 'Accreditation audit fees for global organic, Fair Trade, and non-GMO marks; temperature-controlled freight contracts to Tokyo, Singapore, and San Francisco.',
    color: '#ffdad4'
  },
  {
    percent: 12,
    amountUsd: 144000,
    amountPhp: 'PHP 8.06M',
    title: 'Smallholder Cooperative Pool & Canopy Expansion',
    subtitle: 'Panay Regenerative Agroforestry Belt',
    detail: 'Contracting +60 hectares under regenerative intercropping; paying guaranteed 35% above-market wet bean farmgate prices directly to 84 agrarian reform beneficiary families.',
    color: '#2d5a27'
  },
  {
    percent: 8,
    amountUsd: 96000,
    amountPhp: 'PHP 5.38M',
    title: 'R&D Lab, IP Moats & Operating Reserves',
    subtitle: 'Visayan Flavor Botanical Extraction',
    detail: 'Batwan and coconut sugar polyphenol patent applications, flavor optimization micro-roasters, and working capital buffer.',
    color: '#8c9387'
  }
];

export const ROADMAP_PHASES = [
  {
    phase: 'Phase 01',
    period: 'Q3 - Q4 2024',
    title: 'Fermentation Capacity & Metro Pop-Up',
    description: 'Commission automated Solar Pods 01 & 02 in Maayon; bean harvest expands to 35 MT. Execute 3-month holiday tasting kiosk in Rockwell & BGC.',
    targetRunRate: '$720K ARR',
    badgeClass: 'bg-[#ffb956] text-[#462b00]'
  },
  {
    phase: 'Phase 02',
    period: 'Q1 - Q2 2025',
    title: 'Manila Flagship & Luxury Wholesale',
    description: 'Open permanent BGC Experience Salon; onboarding into 35 luxury boutique grocers and 5-star island resorts; file USDA Organic compliance dossier.',
    targetRunRate: '$1.45M ARR',
    badgeClass: 'bg-[#3f322d] text-[#ffb956]'
  },
  {
    phase: 'Phase 03',
    period: 'Q3 - Q4 2025',
    title: 'Direct Tokyo Export & Tunnels 03-04',
    description: 'Commission remaining solar tunnels (75 MT capacity); dispatch maiden 5 MT single-origin batch to Tokyo micro-roasters & Michelin-star pastry houses.',
    targetRunRate: '$2.60M ARR',
    badgeClass: 'bg-[#3f322d] text-[#a1d494]'
  },
  {
    phase: 'Phase 04',
    period: 'Q1 - Q2 2026',
    title: 'Full 120 MT Scale & Series A Prep',
    description: 'Achieve 120 MT annual processing rate; generate $1.12M positive operational EBITDA; launch European distribution arm for Series A global expansion.',
    targetRunRate: '$4.80M ARR (Profitable)',
    badgeClass: 'bg-[#a1d494] text-[#0a3909]'
  }
];
