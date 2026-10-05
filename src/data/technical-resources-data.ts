export interface TechnicalGuide {
  id: string;
  slug: string;
  title: string;
  category: "hoses" | "belts" | "rubber" | "conveyors";
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const TECHNICAL_GUIDES: TechnicalGuide[] = [
  {
    id: "guide-stamped-rule",
    slug: "stamped-rule-industrial-hose-selection",
    title: "The S.T.A.M.P.E.D. Method for Industrial Hose Sizing & Selection",
    category: "hoses",
    readTime: "5 min read",
    summary: "The definitive engineering protocol for specifying replacement hydraulic, suction, and chemical hoses to avoid premature failure and safety hazards.",
    sections: [
      {
        heading: "S — Size (Inner Diameter, Outer Diameter & Length)",
        content: "Undersized hoses increase fluid velocity, causing friction losses, turbulence, system heat buildup, and accelerated tube erosion. Oversized hoses add unnecessary weight, cost, and installation bend radius complications. Always specify nominal Inside Diameter (ID).",
        bulletPoints: [
          "For suction lines: keep fluid velocity between 0.6 m/s and 1.2 m/s.",
          "For pressure lines: keep fluid velocity between 2.0 m/s and 6.0 m/s.",
          "Measure overall length (OAL) accounting for 2% contraction under working pressure."
        ]
      },
      {
        heading: "T — Temperature (Internal Media & Ambient External)",
        content: "Both the internal conveying media and ambient engine bay/sunlight temperatures must be matched against the compound rating. Continuous operation beyond max temperature causes elastomer vulcanization reversal or embrittlement."
      },
      {
        heading: "A — Application (Environment & Routing)",
        content: "Consider mechanical stresses: cyclic flexing, vibration from pump manifolds, external abrasion from rock debris, and UV exposure. Use spiral guards or protective sleeving where hose rubs against chassis."
      },
      {
        heading: "M — Media (Chemical & Abrasive Compatibility)",
        content: "Different elastomeric compounds resist specific fluids. Nitrile (NBR) is suited for hydrocarbons and mineral oils; EPDM excels at high-temperature steam and polar liquids; Natural Gum Rubber handles severe slurry abrasion but degrades in oil."
      },
      {
        heading: "P — Pressure (Working, Surge & Burst Ratings)",
        content: "Ensure the hose working pressure exceeds the maximum relief valve setting, including instantaneous hydraulic hammer spikes. Standard safety factor is 4:1 for general hydraulics and 10:1 for high-temperature steam."
      },
      {
        heading: "E & D — Ends & Delivery",
        content: "Specify the exact fitting threads (BSP 60° cone, JIC 37° flare, ORFS, NPT, or Camlock) and required delivery timeline for scheduled maintenance."
      }
    ]
  },
  {
    id: "guide-vbelt-identification",
    slug: "v-belt-identification-measuring-guide",
    title: "V-Belt Profile Identification & Measuring Guide (Metric Wedge vs Classical)",
    category: "belts",
    readTime: "4 min read",
    summary: "How to accurately measure and cross-reference worn, snapped, or illegible V-belts on crushers, hammer mills, and workshop machinery.",
    sections: [
      {
        heading: "1. Distinguishing Classical vs Narrow Wedge Profiles",
        content: "Classical belts (A, B, C, D) have a 1.6:1 width-to-depth ratio. Narrow Wedge belts (SPZ, SPA, SPB, SPC) have a deeper 1.2:1 cross-section designed to wedge deeper into sheaves for higher friction torque with lower tension stretch."
      },
      {
        heading: "2. Measuring Top Width and Depth",
        content: "Use a vernier calliper across the widest top face of the belt:",
        bulletPoints: [
          "SPZ: 9.7mm top width x 8mm depth",
          "SPA: 12.7mm top width x 10mm depth",
          "SPB: 16.3mm top width x 13mm depth",
          "SPC: 22.0mm top width x 18mm depth",
          "Classical A: 13mm top width x 8mm depth",
          "Classical B: 17mm top width x 11mm depth",
          "Classical C: 22mm top width x 14mm depth"
        ]
      },
      {
        heading: "3. Determining Pitch Length (Lp / Lw) vs Inside Length (Li)",
        content: "Classical belts are traditionally designated by Inside Length in inches (e.g. B68 = B-section with 68 inch inside circumference = 1727mm). Wedge belts (SPB) are always specified by Datum/Pitch Length in millimetres (e.g. SPB 2600 = 2600mm pitch length)."
      }
    ]
  },
  {
    id: "guide-rubber-elastomer-matrix",
    slug: "industrial-rubber-elastomer-compatibility-guide",
    title: "Industrial Elastomer Guide: Natural Rubber vs Nitrile vs Neoprene vs EPDM",
    category: "rubber",
    readTime: "6 min read",
    summary: "Selecting the correct elastomer sheet or lining compound based on chemical exposure, temperature, and physical abrasion.",
    sections: [
      {
        heading: "Natural Rubber (NR / Red Gum)",
        content: "Superior tensile resilience and cut/tear resistance. Outstanding against wet abrasive ore slurry impingement in ball mill discharge chutes. Unsuitable for petroleum, oils, or strong acids."
      },
      {
        heading: "Nitrile Rubber (NBR / Buna-N)",
        content: "The gold standard for petroleum, diesel fuel, hydraulic mineral oils, and grease. Exhibits good tensile strength and low gas permeability. Moderate ozone resistance."
      },
      {
        heading: "Neoprene (CR / Chloroprene)",
        content: "A versatile balance of moderate oil resistance, weather/ozone resistance, and fire self-extinguishing properties. Excellent for marine, mining conveyor drive covers, and outdoor gaskets."
      },
      {
        heading: "EPDM (Ethylene Propylene Diene Monomer)",
        content: "Unrivalled resistance to atmospheric weathering, UV radiation, ozone, hot water, and steam up to 150°C+. Completely incompatible with petroleum-based hydrocarbons."
      }
    ]
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    category: "Quotations & Orders",
    question: "How do I request a formal quotation for our company procurement system?",
    answer: "You can click 'Add to RFQ' on any product to assemble a project bill of materials, or click 'Request a Quote' on any individual product page. Enter your company name, quantities, and operational site. Our sales desk will issue a formal proforma quotation denominated in USD or ZiG (at official RBZ interbank rates) with full banking details and VAT."
  },
  {
    category: "Quotations & Orders",
    question: "Can I order via WhatsApp for emergency breakdowns?",
    answer: "Yes. Every product page features a contextual 'WhatsApp Sales' link that automatically encodes the exact part code and size. Our technical team can verify depot availability and mobilize urgent breakdown dispatch."
  },
  {
    category: "Technical & Assemblies",
    question: "Do you supply pre-crimped hydraulic hose assemblies or bulk hose only?",
    answer: "We supply both bulk coils (50m, 100m) and custom-crimped hose assemblies made to your exact overall length (OAL) and fitting specifications (BSP, JIC, ORFS, metric DIN). Pressure testing and certificate of conformity available on high-criticality orders."
  },
  {
    category: "Belts & Transmission",
    question: "What information is needed to replace a snapped or unlabelled V-belt?",
    answer: "If the marking is worn off, measure the top width of the pulley groove, the depth of the groove, and wrap a tape around the pulley drive path with tension take-up fully retracted to find the pitch length. Alternatively, bring the sample or pulley diameter details to our counter."
  },
  {
    category: "Logistics & Delivery",
    question: "Do you deliver to mining and agricultural sites outside Harare?",
    answer: "Yes. In addition to depot collection across Harare, Bulawayo, and Mutare, we coordinate scheduled logistics runs and commercial courier delivery to major mining corridors (Kwekwe, Gweru, Gwanda, Hwange, Zvishavane) and agricultural farming districts."
  }
];
