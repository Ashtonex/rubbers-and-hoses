import { Category, Product } from "@/types/industrial";

export const CATEGORIES: Category[] = [
  {
    id: "cat-rubber-hoses",
    slug: "rubber-hoses",
    name: "Rubber Hoses",
    shortDescription: "High-pressure hydraulic, mining slurry, fuel/oil, steam, and heavy suction & discharge hoses.",
    fullDescription: "Engineered elastomeric hoses manufactured to international specifications (SAE, EN, DIN, ISO). Designed to endure cyclic hydraulic impulses, abrasive mining slurries, high-pressure steam, and corrosive petrochemical transfers across demanding Zimbabwean operational conditions.",
    iconName: "Pipette",
    bannerImage: "/images/rubber-hoses.jpg",
    featuredApplications: ["Mining Slurry Discharge", "Heavy Hydraulic Excavators", "Boiler Steam Lines", "Fuel Depot Loading"],
    subcategories: [
      { id: "sub-hyd-braided", slug: "hydraulic-wire-braided", name: "Hydraulic Wire-Braided Hoses", shortDescription: "SAE 100 R1AT, R2AT (EN 853 1SN/2SN) for medium to high-pressure mineral oils." },
      { id: "sub-hyd-spiral", slug: "hydraulic-multi-spiral", name: "Hydraulic Multi-Spiral Hoses", shortDescription: "4SP & 4SH ultra-high impulse hoses for heavy earthmoving and drills." },
      { id: "sub-mining-slurry", slug: "mining-slurry-material-handling", name: "Slurry & Material Handling Hoses", shortDescription: "Thick natural gum rubber linings engineered for abrasive ore pulp." },
      { id: "sub-industrial-air-water", slug: "air-water-mandrel-built", name: "Industrial Air & Water Hoses", shortDescription: "Rugged fabric-reinforced mandrel-built lines for quarrying and workshops." },
      { id: "sub-steam-hot-water", slug: "steam-hot-water", name: "Steam & High-Temp Radiator", shortDescription: "EPDM wire-reinforced hoses for saturated steam up to 210°C." }
    ]
  },
  {
    id: "cat-pvc-hoses",
    slug: "pvc-hoses",
    name: "PVC Hoses",
    shortDescription: "Rigid-spiral suction hoses, food-grade reinforced tubing, and layflat discharge lines.",
    fullDescription: "Virgin thermoplastic PVC hose assemblies featuring shock-resistant PVC helix or high-tenacity polyester yarn reinforcement. Ideal for agricultural irrigation pumping, construction dewatering, liquid fertilizer transfer, and light chemical dosing.",
    iconName: "Waves",
    bannerImage: "/images/pvc-hoses.jpg",
    featuredApplications: ["Dam & River Irrigation Suction", "Mine Dewatering Layflat", "Fertilizer Transfer", "Factory Air Lines"],
    subcategories: [
      { id: "sub-pvc-green-suction", slug: "heavy-duty-suction", name: "Heavy-Duty PVC Suction Hoses", shortDescription: "Rigid green PVC helix for centrifugal pump suction and tanker unloading." },
      { id: "sub-pvc-layflat", slug: "layflat-discharge", name: "Blue & Red Layflat Hoses", shortDescription: "Co-extruded PVC flat discharge hose for quick deployment in agricultural fields." },
      { id: "sub-pvc-clear-braided", slug: "clear-reinforced-braided", name: "Clear Polyester Braided Tubing", shortDescription: "Transparent non-toxic PVC for visual flow inspection and workshop air." },
      { id: "sub-pvc-drag-hose", slug: "agricultural-drag-hose", name: "Agricultural Drag & Spray Hoses", shortDescription: "UV-stabilized thick-wall hose engineered for center-pivot and orchard spraying." }
    ]
  },
  {
    id: "cat-belts-transmission",
    slug: "belts-power-transmission",
    name: "Belts & Power Transmission",
    shortDescription: "Classical V-belts, high-capacity Wedge belts, timing belts, and multi-rib drive systems.",
    fullDescription: "Precision-engineered power transmission belting manufactured from heat, oil, and static-resistant polychloroprene compounds. Engineered to deliver maximum torque transmission with minimal stretch in hammer mills, jaw crushers, tractor PTOs, and industrial drive trains.",
    iconName: "Cog",
    bannerImage: "/images/belts-transmission.jpg",
    featuredApplications: ["Mining Jaw Crushers & Vibrating Screens", "Agricultural Hammer Mills", "Tractor & Truck Alternators", "Compressor Flywheels"],
    subcategories: [
      { id: "sub-wedge-belts", slug: "narrow-wedge-belts", name: "Narrow Wedge Belts (SPZ, SPA, SPB, SPC)", shortDescription: "High-capacity deep-wedge profile handling up to 3x power of classical belts." },
      { id: "sub-classical-vbelts", slug: "classical-v-belts", name: "Classical V-Belts (A, B, C, D Sections)", shortDescription: "Universal wrapped belts for general machinery, pumps, and agricultural drives." },
      { id: "sub-cogged-belts", slug: "raw-edge-cogged", name: "Raw-Edge Cogged Belts (XPA, XPB, XPC)", shortDescription: "Moulded cogs for high-speed small-pulley applications with high heat dissipation." },
      { id: "sub-timing-belts", slug: "synchronous-timing-belts", name: "Synchronous Timing Belts (HTD, T, AT)", shortDescription: "Positive non-slip toothed belts for automated packaging and synchronized shafts." }
    ]
  },
  {
    id: "cat-rubber-products",
    slug: "rubber-products",
    name: "Rubber Products & Sheeting",
    shortDescription: "Abrasion-resistant sheeting, neoprene, nitrile, insertion rubber, skirtboard, and custom extrusions.",
    fullDescription: "High-grade industrial elastomeric sheeting and fabricated components. Formulated for heavy vibration isolation, chute impact lining, chemical flange gaskets, and conveyor transfer skirt sealing in mining plants and industrial workshops.",
    iconName: "Layers",
    bannerImage: "/images/rubber-products.jpg",
    featuredApplications: ["Chute & Hopper Impact Liners", "Conveyor Skirtboard Sealing", "Petrochemical Flange Gaskets", "Vibration Isolation Mounts"],
    subcategories: [
      { id: "sub-rubber-sheet", slug: "industrial-rubber-sheeting", name: "Commercial & Premium Rubber Sheeting", shortDescription: "Natural rubber (40 & 60 Shore A), SBR, Neoprene, and Nitrile sheets (1mm to 25mm)." },
      { id: "sub-skirtboard", slug: "conveyor-skirtboard-rubber", name: "Conveyor Skirtboard Rubber", shortDescription: "High-tensile abrasion rubber strips for dust containment at conveyor transfer points." },
      { id: "sub-insertion-rubber", slug: "fabric-insertion-sheet", name: "Fabric Insertion Rubber Sheeting", shortDescription: "Cotton and polyester reinforced sheets providing high tensile tear resistance for gaskets." },
      { id: "sub-extruded-profiles", slug: "extruded-profiles-mouldings", name: "Extruded Profiles & Custom Mouldings", shortDescription: "EPDM sponge seals, U-channels, D-fenders, and custom polyurethane buffers." }
    ]
  },
  {
    id: "cat-fittings-accessories",
    slug: "fittings-accessories",
    name: "Fittings & Accessories",
    shortDescription: "Camlock quick-couplers, Bauer couplings, claw couplings, heavy-duty clamps, and hydraulic adapters.",
    fullDescription: "Robust fluid handling hardware manufactured in aluminium, brass, stainless steel 316, and ductile iron. Precision-machined BSP, NPT, and metric threads engineered for zero-leak containment under arduous vibration and pressure conditions.",
    iconName: "Wrench",
    bannerImage: "/images/fittings-accessories.jpg",
    featuredApplications: ["Tanker Camlock Connections", "Mine Slurry Bauer Piping", "Workshop Compressed Air Manifolds", "Hydraulic Cylinder Interconnects"],
    subcategories: [
      { id: "sub-camlock", slug: "camlock-quick-couplings", name: "Camlock Quick-Couplings (Types A-F, DP, DC)", shortDescription: "Aluminium, brass, and stainless steel cam-and-groove connections 1/2\" to 6\"." },
      { id: "sub-bauer-couplers", slug: "bauer-type-lever-couplers", name: "Bauer-Type Quick Lever Couplings", shortDescription: "Galvanized steel ball-and-socket couplings with up to 30° articulation for slurry lines." },
      { id: "sub-heavy-duty-clamps", slug: "heavy-duty-hose-clamps", name: "Bolt Clamps & T-Bolt Clamps", shortDescription: "Single & double bolt clamps in zinc-plated steel and 304 stainless for heavy hoses." },
      { id: "sub-hydraulic-fittings", slug: "hydraulic-crimped-ferrules-tails", name: "Hydraulic Ferrules & Hose Tails", shortDescription: "BSP, JIC, and ORFS crimp fittings engineered for 1SN, 2SN, and multi-spiral hoses." }
    ]
  },
  {
    id: "cat-conveyor-products",
    slug: "conveyor-products",
    name: "Conveyor Products",
    shortDescription: "Textile EP conveyor belting, chevron cleated belts, mechanical fasteners, rollers, and scrapers.",
    fullDescription: "Heavy-duty bulk materials handling belting with multi-ply polyester/polyamide (EP) fabric carcasses and high-abrasion rubber covers (Grade M / Grade N). Designed for moving granite, coal, gold ore, chrome, grain, and timber across Zimbabwean mining and processing facilities.",
    iconName: "Activity",
    bannerImage: "/images/conveyor-products.jpg",
    featuredApplications: ["Quarry Aggregate Conveying", "Underground Ore Extraction", "Grain Silo Elevators", "Sugar Mill Bagasse Transport"],
    subcategories: [
      { id: "sub-ep-belting", slug: "ep-textile-conveyor-belting", name: "EP Fabric Conveyor Belting (EP200 - EP1000)", shortDescription: "Multi-ply standard flat belts with 3:1 to 6:2 cover ratios for high impact." },
      { id: "sub-chevron-belting", slug: "chevron-cleated-belting", name: "Chevron Cleated Conveyor Belts", shortDescription: "V-profile moulded cleats for steep-angle (up to 40°) loose material transport." },
      { id: "sub-mechanical-fasteners", slug: "belt-fasteners-splicing", name: "Mechanical Fasteners & Splicing Kits", shortDescription: "Heavy-duty plate and staple fasteners for rapid field breakdown repairs." },
      { id: "sub-conveyor-hardware", slug: "idlers-rollers-scrapers", name: "Conveyor Idlers, Rollers & Belt Cleaners", shortDescription: "Steel and HDPE troughing rollers, return rollers, and primary polyurethane scrapers." }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // ----------------------------------------------------
  // RUBBER HOSES
  // ----------------------------------------------------
  {
    id: "prod-r2at-hyd",
    slug: "sae-100-r2at-en-853-2sn-hydraulic-hose",
    name: "SAE 100 R2AT / EN 853 2SN Two-Wire Hydraulic Hose",
    code: "CRH-R2AT-2SN",
    categorySlug: "rubber-hoses",
    subcategorySlug: "hydraulic-wire-braided",
    shortDescription: "Two high-tensile wire braid hydraulic hose for medium to high-pressure oil lines in earthmoving machinery and industrial hydraulic power packs.",
    description: "Built for severe operating conditions in Zimbabwean mining, forestry, and heavy manufacturing. Formulated with an oil-resistant synthetic NBR inner tube and an abrasion, weather, and ozone-resistant synthetic rubber outer cover. Fully compliant with SAE 100 R2AT and EN 853 2SN specifications with a 4:1 safety factor.",
    featured: true,
    searchKeywords: ["hydraulic hose", "2 wire hose", "r2at", "2sn", "high pressure hose", "oil hose", "excavator hydraulic hose"],
    temperatureRange: { minC: -40, maxC: 100, intermittentMaxC: 120 },
    workingPressureRangeBar: "105 to 415 bar (1,520 to 6,000 PSI)",
    safetyFactor: "4:1 Working to Burst Pressure",
    reinforcement: "Two braids of high-tensile brass-coated steel wire",
    tubeMaterial: "Hydraulic oil resistant synthetic nitrile rubber (NBR)",
    coverMaterial: "Abrasion, weather, and hydrocarbon resistant synthetic rubber",
    standardsCompliance: ["SAE J517 100 R2AT", "EN 853 2SN", "ISO 1436-1 2SN"],
    applications: [
      "High-pressure hydraulic circuits on front-end loaders and dump trucks",
      "Hydraulic power packs in manufacturing plants and sawmills",
      "Mining drill rigs and underground hydraulic support lines",
      "Agricultural tractor implement hydraulics"
    ],
    industries: ["mining", "construction", "agriculture", "manufacturing"],
    specifications: [
      { name: "Applicable Fluid", value: "Mineral oils, glycols, synthetic esters, water-oil emulsions", highlight: true },
      { name: "Safety Factor", value: "4:1 (Burst pressure is 4x Working pressure)" },
      { name: "Max Operating Temperature", value: "+100°C continuous, +120°C intermittent" },
      { name: "Min Operating Temperature", value: "-40°C" },
      { name: "Available Coil Lengths", value: "50m, 100m, or cut & crimped to specification", highlight: true },
      { name: "Crimping Compatibility", value: "Standard 2SN two-piece and one-piece hydraulic ferrules" }
    ],
    variants: [
      { id: "v-r2at-04", code: "R2AT-04", nominalSize: "1/4\" (6.4mm ID)", workingPressureBar: 400, workingPressurePsi: 5800, burstPressureBar: 1600, minBendRadiusMm: 100, weightKgM: 0.38, availability: "in_stock" },
      { id: "v-r2at-06", code: "R2AT-06", nominalSize: "3/8\" (9.5mm ID)", workingPressureBar: 330, workingPressurePsi: 4780, burstPressureBar: 1320, minBendRadiusMm: 130, weightKgM: 0.54, availability: "in_stock" },
      { id: "v-r2at-08", code: "R2AT-08", nominalSize: "1/2\" (12.7mm ID)", workingPressureBar: 275, workingPressurePsi: 4000, burstPressureBar: 1100, minBendRadiusMm: 180, weightKgM: 0.68, availability: "in_stock" },
      { id: "v-r2at-12", code: "R2AT-12", nominalSize: "3/4\" (19.0mm ID)", workingPressureBar: 215, workingPressurePsi: 3120, burstPressureBar: 860, minBendRadiusMm: 240, weightKgM: 0.95, availability: "in_stock" },
      { id: "v-r2at-16", code: "R2AT-16", nominalSize: "1\" (25.4mm ID)", workingPressureBar: 165, workingPressurePsi: 2400, burstPressureBar: 660, minBendRadiusMm: 300, weightKgM: 1.34, availability: "in_stock" },
      { id: "v-r2at-32", code: "R2AT-32", nominalSize: "2\" (50.8mm ID)", workingPressureBar: 105, workingPressurePsi: 1520, burstPressureBar: 420, minBendRadiusMm: 630, weightKgM: 2.85, availability: "cut_to_length" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    altText: "Two-wire braided high pressure hydraulic hose assembly with crimped fittings",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_R2AT_2SN.pdf",
    relatedProductSlugs: ["hydraulic-crimped-ferrules-tails-bsp-jic", "sae-100-r1at-single-wire-hydraulic-hose"]
  },
  {
    id: "prod-mining-slurry",
    slug: "heavy-duty-mining-slurry-suction-discharge-hose",
    name: "Heavy-Duty Mining Slurry Suction & Discharge Hose",
    code: "CRH-MSDH-40",
    categorySlug: "rubber-hoses",
    subcategorySlug: "mining-slurry-material-handling",
    shortDescription: "Ultra-thick premium natural gum rubber tube hose engineered for highly abrasive ore slurries, tailings, and sand dredging.",
    description: "Designed specifically for harsh African mining operations handling gold, chrome, platinum, and nickel slurries. Features a 6mm to 12mm thick high-purity natural rubber inner lining with exceptional resilience against high-velocity abrasive impingement. Reinforced with multi-ply synthetic cord and a high-tensile carbon steel helix wire for full vacuum suction service without collapse.",
    featured: true,
    searchKeywords: ["slurry hose", "mining hose", "suction and discharge", "tailings hose", "ore slurry", "dredging hose", "abrasion resistant hose"],
    temperatureRange: { minC: -30, maxC: 80 },
    workingPressureRangeBar: "10 bar to 20 bar (150 to 300 PSI)",
    safetyFactor: "3:1 to 4:1",
    reinforcement: "High-tensile synthetic textile plies with embedded steel wire helix and copper anti-static wire",
    tubeMaterial: "40 Shore A ultra-abrasion resistant pure natural gum rubber (Linatex-grade equivalent)",
    coverMaterial: "Ozone, UV, and cut-resistant synthetic SBR blend with cloth impression finish",
    standardsCompliance: ["ISO 8031 (Anti-static)", "AS 2690"],
    applications: [
      "Slurry transfer lines from ball mills to cyclone classifiers",
      "Tailings dam discharge pipelines and decant pumping",
      "Sand dredging and aggregate gravel washing plants",
      "Acidic mineral leach circuit pump suction and discharge"
    ],
    industries: ["mining", "construction"],
    specifications: [
      { name: "Inner Tube Thickness", value: "6.0mm to 12.0mm high-wear natural rubber", highlight: true },
      { name: "Vacuum Rating", value: "-0.9 bar (Full vacuum capability)" },
      { name: "End Terminations", value: "Plain cut ends, built-in beaded ends with split aluminium flanges, or cuffed ends", highlight: true },
      { name: "Anti-Static Protection", value: "Dual continuous embedded copper bonding strands" }
    ],
    variants: [
      { id: "v-msdh-50", code: "MSDH-050", nominalSize: "2\" (50mm ID)", workingPressureBar: 16, burstPressureBar: 48, minBendRadiusMm: 350, weightKgM: 3.4, availability: "in_stock" },
      { id: "v-msdh-75", code: "MSDH-075", nominalSize: "3\" (76mm ID)", workingPressureBar: 16, burstPressureBar: 48, minBendRadiusMm: 500, weightKgM: 5.2, availability: "in_stock" },
      { id: "v-msdh-100", code: "MSDH-100", nominalSize: "4\" (102mm ID)", workingPressureBar: 16, burstPressureBar: 48, minBendRadiusMm: 700, weightKgM: 7.9, availability: "in_stock" },
      { id: "v-msdh-150", code: "MSDH-150", nominalSize: "6\" (152mm ID)", workingPressureBar: 10, burstPressureBar: 35, minBendRadiusMm: 1100, weightKgM: 14.5, availability: "cut_to_length" },
      { id: "v-msdh-200", code: "MSDH-200", nominalSize: "8\" (203mm ID)", workingPressureBar: 10, burstPressureBar: 30, minBendRadiusMm: 1600, weightKgM: 22.0, availability: "made_to_order" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    altText: "Heavy duty mining slurry suction hose with built-in flanges",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Mining_Slurry_Hose.pdf",
    relatedProductSlugs: ["bauer-type-lever-couplings-galvanised", "industrial-rubber-sheeting-natural-sbr"]
  },
  {
    id: "prod-steam-hose",
    slug: "high-temperature-wire-reinforced-steam-hose",
    name: "High-Temperature Wire-Braided Steam Hose (210°C / 18 Bar)",
    code: "CRH-STM-210",
    categorySlug: "rubber-hoses",
    subcategorySlug: "steam-hot-water",
    shortDescription: "Ultra-heavy EPDM steam hose rated for saturated and superheated steam in boiler rooms, tobacco barns, and food processing plants.",
    description: "Engineered specifically to eliminate the lethal risk of steam hose bursts. Built with heat-resistant synthetic EPDM rubber compound that resists hardening and cracking under continuous high-temperature saturated steam. Pin-pricked outer cover permits gas dissipation and prevents cover blistering.",
    featured: false,
    searchKeywords: ["steam hose", "boiler hose", "high temperature hose", "epdm steam", "tobacco barn steam", "food processing steam"],
    temperatureRange: { minC: -40, maxC: 210, intermittentMaxC: 232 },
    workingPressureRangeBar: "18 bar (260 PSI saturated steam)",
    safetyFactor: "10:1 Saturated Steam Safety Factor (180 Bar Burst)",
    reinforcement: "Two braids of high-tensile brass-coated steel wire",
    tubeMaterial: "Heat-resistant extruded black EPDM",
    coverMaterial: "Pin-pricked red/black weather, heat, and ozone resistant EPDM",
    standardsCompliance: ["EN ISO 6134 Type 2 / Class A", "BS 5122"],
    applications: [
      "Industrial boiler steam distribution and condensate return",
      "Tobacco processing and curing steam injection",
      "Food and beverage sterilization and steam cleaning",
      "Chemical plant reactor heating jackets"
    ],
    industries: ["manufacturing", "agriculture"],
    specifications: [
      { name: "Max Steam Temperature", value: "+210°C saturated steam", highlight: true },
      { name: "Safety Factor", value: "10:1 (Required for high-pressure steam safety)" },
      { name: "Cover Treatment", value: "Micro-pinpricked cover to vent trapped vapour" },
      { name: "Clamp Recommendation", value: "Must be fitted with 4-bolt interlocking Boss clamp clamps" }
    ],
    variants: [
      { id: "v-stm-12", code: "STM-050", nominalSize: "1/2\" (12.7mm ID)", workingPressureBar: 18, burstPressureBar: 180, minBendRadiusMm: 130, weightKgM: 0.65, availability: "in_stock" },
      { id: "v-stm-19", code: "STM-075", nominalSize: "3/4\" (19.0mm ID)", workingPressureBar: 18, burstPressureBar: 180, minBendRadiusMm: 190, weightKgM: 0.95, availability: "in_stock" },
      { id: "v-stm-25", code: "STM-100", nominalSize: "1\" (25.4mm ID)", workingPressureBar: 18, burstPressureBar: 180, minBendRadiusMm: 250, weightKgM: 1.45, availability: "in_stock" },
      { id: "v-stm-50", code: "STM-200", nominalSize: "2\" (50.8mm ID)", workingPressureBar: 18, burstPressureBar: 180, minBendRadiusMm: 500, weightKgM: 3.10, availability: "cut_to_length" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    altText: "High temperature wire reinforced steam hose with interlocking clamp fittings",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_EPDM_Steam.pdf",
    relatedProductSlugs: ["heavy-duty-hose-clamps-single-double-bolt"]
  },

  // ----------------------------------------------------
  // PVC HOSES
  // ----------------------------------------------------
  {
    id: "prod-pvc-green-suction",
    slug: "heavy-duty-green-pvc-water-suction-hose",
    name: "Heavy-Duty Green PVC Water & Slurry Suction Hose",
    code: "CRH-PVC-SUC-HD",
    categorySlug: "pvc-hoses",
    subcategorySlug: "heavy-duty-suction",
    shortDescription: "Rigid PVC shock-resistant spiral reinforced hose for agricultural pump suction, dam abstraction, and civil dewatering.",
    description: "The workhorse suction hose for Zimbabwean commercial farming and alluvial gold mining. Features a mirror-smooth bore for low hydraulic friction loss and an exterior corrugated surface with an embedded rigid white PVC helix. Highly flexible, weather-resistant, and capable of operating under full atmospheric vacuum.",
    featured: true,
    searchKeywords: ["pvc suction hose", "green suction", "dam pumping hose", "irrigation suction", "centrifugal pump hose", "dewatering hose"],
    temperatureRange: { minC: -10, maxC: 60 },
    workingPressureRangeBar: "3 to 8 bar depending on diameter",
    safetyFactor: "3:1",
    reinforcement: "Shock-resistant rigid white PVC spiral helix",
    tubeMaterial: "Smooth flexible green PVC compound",
    coverMaterial: "Slightly corrugated green PVC with UV stabilizers",
    standardsCompliance: ["ISO 3994"],
    applications: [
      "Suction lines for tractor PTO pumps and diesel irrigation sets",
      "Pit and sump dewatering in opencast quarries",
      "Liquid fertilizer and agricultural pesticide transport",
      "Waste water and municipal septic tanker suction"
    ],
    industries: ["agriculture", "mining", "construction"],
    specifications: [
      { name: "Vacuum Capability", value: "-0.9 bar (Full suction)", highlight: true },
      { name: "UV Resistance", value: "Compounded for African sub-tropical sun exposure" },
      { name: "Standard Coil Lengths", value: "30 metre coils (custom lengths cut upon request)", highlight: true },
      { name: "Compatible Couplings", value: "Bauer lever couplings, Camlocks, or King combination nipples" }
    ],
    variants: [
      { id: "v-pvc-suc-50", code: "PVCS-050", nominalSize: "2\" (50mm ID)", workingPressureBar: 7.0, minBendRadiusMm: 220, weightKgM: 1.05, standardCoilOrLength: "30m", availability: "in_stock" },
      { id: "v-pvc-suc-75", code: "PVCS-075", nominalSize: "3\" (75mm ID)", workingPressureBar: 5.5, minBendRadiusMm: 330, weightKgM: 1.75, standardCoilOrLength: "30m", availability: "in_stock" },
      { id: "v-pvc-suc-100", code: "PVCS-100", nominalSize: "4\" (100mm ID)", workingPressureBar: 4.5, minBendRadiusMm: 450, weightKgM: 2.65, standardCoilOrLength: "30m", availability: "in_stock" },
      { id: "v-pvc-suc-150", code: "PVCS-150", nominalSize: "6\" (150mm ID)", workingPressureBar: 3.0, minBendRadiusMm: 720, weightKgM: 4.90, standardCoilOrLength: "30m", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    altText: "Heavy duty green PVC suction hose coiled in warehouse",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_PVC_Suction.pdf",
    relatedProductSlugs: ["camlock-quick-couplings-aluminium-brass", "blue-pvc-layflat-water-discharge-hose"]
  },
  {
    id: "prod-pvc-layflat-blue",
    slug: "blue-pvc-layflat-water-discharge-hose",
    name: "Heavy-Duty Blue PVC Layflat Water Discharge Hose",
    code: "CRH-LAY-BLU",
    categorySlug: "pvc-hoses",
    subcategorySlug: "layflat-discharge",
    shortDescription: "Co-extruded continuous polyester-reinforced layflat hose for rapid agricultural flood irrigation and emergency flood dewatering.",
    description: "Compact, lightweight, and engineered for high-volume water distribution. Rolls flat for effortless transport in bakkies and tractors. Produced with high-tensile polyester yarn reinforcement embedded directly inside premium flexible PVC during a single-step continuous extrusion process, eliminating ply separation.",
    featured: true,
    searchKeywords: ["layflat", "lay flat hose", "blue layflat", "discharge hose", "irrigation discharge", "flood pumping hose"],
    temperatureRange: { minC: -10, maxC: 60 },
    workingPressureRangeBar: "4 to 7 bar (60 to 100 PSI)",
    safetyFactor: "3:1",
    reinforcement: "High-tenacity woven circular polyester yarn",
    tubeMaterial: "Flexible blue PVC co-extruded with cover",
    coverMaterial: "Weather-resistant, UV-stabilized blue PVC",
    standardsCompliance: ["ISO 8029"],
    applications: [
      "Overland water transfer from dams to field distribution points",
      "Mine pit emergency flood dewatering",
      "Construction site temporary water discharge lines",
      "Submersible pump discharge in boreholes and river sumps"
    ],
    industries: ["agriculture", "mining", "construction"],
    specifications: [
      { name: "Storage Profile", value: "Rolls flat for high-density storage and transport", highlight: true },
      { name: "Chemical Resistance", value: "Resistant to common agricultural agrochemicals and liquid fertilizers" },
      { name: "Standard Roll Lengths", value: "50m and 100m continuous coils" },
      { name: "Clamp Recommendation", value: "Stainless steel T-bolt clamps or heavy worm-drive clamps" }
    ],
    variants: [
      { id: "v-lay-50", code: "LAY-050", nominalSize: "2\" (50mm ID)", workingPressureBar: 6.0, burstPressureBar: 18, weightKgM: 0.28, standardCoilOrLength: "100m", availability: "in_stock" },
      { id: "v-lay-75", code: "LAY-075", nominalSize: "3\" (75mm ID)", workingPressureBar: 5.0, burstPressureBar: 15, weightKgM: 0.45, standardCoilOrLength: "100m", availability: "in_stock" },
      { id: "v-lay-100", code: "LAY-100", nominalSize: "4\" (100mm ID)", workingPressureBar: 4.5, burstPressureBar: 13.5, weightKgM: 0.65, standardCoilOrLength: "100m", availability: "in_stock" },
      { id: "v-lay-150", code: "LAY-150", nominalSize: "6\" (150mm ID)", workingPressureBar: 4.0, burstPressureBar: 12, weightKgM: 1.15, standardCoilOrLength: "100m", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    altText: "Coils of heavy duty blue layflat discharge hose ready for agricultural irrigation dispatch",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_PVC_Layflat.pdf",
    relatedProductSlugs: ["heavy-duty-green-pvc-water-suction-hose", "camlock-quick-couplings-aluminium-brass"]
  },

  // ----------------------------------------------------
  // BELTS & POWER TRANSMISSION
  // ----------------------------------------------------
  {
    id: "prod-spb-wedge-belts",
    slug: "high-capacity-spb-wedge-v-belts",
    name: "High-Capacity SPB Section Narrow Wedge V-Belts",
    code: "CRH-BELT-SPB",
    categorySlug: "belts-power-transmission",
    subcategorySlug: "narrow-wedge-belts",
    shortDescription: "Heavy-duty narrow wedge belts (16.3mm top width x 13mm depth) delivering up to 300% more power capacity than classical B-section belts.",
    description: "The primary power transmission choice for heavy Zimbabwean industrial machinery: mining vibrating screens, jaw crushers, secondary cone crushers, large irrigation pumps, and sawmill headrigs. Engineered with specially treated low-stretch polyester tension cords encased in a polychloroprene core, wrapped in an abrasion-resistant rubberized fabric jacket.",
    featured: true,
    searchKeywords: ["spb", "spb 2600", "spb belt", "wedge belt", "v-belt", "fan belt", "crusher belt", "drive belt", "spb 2500", "spb 3000"],
    temperatureRange: { minC: -30, maxC: 80, intermittentMaxC: 90 },
    safetyFactor: "High fatigue dynamic resistance",
    reinforcement: "Pre-stretched high-modulus polyester tension cord cords",
    tubeMaterial: "Fibre-loaded polychloroprene (chloroprene) compound",
    coverMaterial: "Bias-cut textile fabric wrap impregnated with oil and heat resistant chloroprene",
    standardsCompliance: ["DIN 7753 Part 1", "ISO 4184", "BS 3790"],
    applications: [
      "Quarry jaw crushers and vibrating aggregate screens",
      "Centrifugal irrigation booster pump drives",
      "Industrial air compressor flywheels",
      "Heavy grain handling elevators and grain hammer mills"
    ],
    industries: ["mining", "manufacturing", "agriculture"],
    specifications: [
      { name: "Belt Section Profile", value: "SPB (16.3mm Top Width x 13.0mm Height, 38° Angle)", highlight: true },
      { name: "Anti-Static Certification", value: "Compliant with ISO 1813 (Static conductive)", highlight: true },
      { name: "Oil & Heat Resistance", value: "Meets DIN standard resistance to industrial oil mist and heat" },
      { name: "Matched Set Tolerances", value: "Precision length matching eliminates multi-belt slip discrepancies" }
    ],
    variants: [
      { id: "v-spb-2000", code: "SPB 2000", nominalSize: "2000mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-2240", code: "SPB 2240", nominalSize: "2240mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-2500", code: "SPB 2500", nominalSize: "2500mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-2600", code: "SPB 2600", nominalSize: "2600mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-2800", code: "SPB 2800", nominalSize: "2800mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-3000", code: "SPB 3000", nominalSize: "3000mm Pitch Length", availability: "in_stock" },
      { id: "v-spb-3550", code: "SPB 3550", nominalSize: "3550mm Pitch Length", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    altText: "SPB wedge v-belts showing precision manufactured grooved drive teeth",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_SPB_Wedge_Belts.pdf",
    relatedProductSlugs: ["classical-wrapped-v-belts-a-b-c-d", "raw-edge-cogged-wedge-belts-xpb"]
  },
  {
    id: "prod-classical-vbelts",
    slug: "classical-wrapped-v-belts-a-b-c-d",
    name: "Classical Wrapped Industrial V-Belts (A, B, C & D Sections)",
    code: "CRH-BELT-CLS",
    categorySlug: "belts-power-transmission",
    subcategorySlug: "classical-v-belts",
    shortDescription: "Universal wrapped V-belts for general machinery, agricultural hammer mills, workshops, and commercial ventilation.",
    description: "The time-tested standard for reliable mechanical power transmission across Zimbabwe. Suitable for all standard ISO and RMA grooved pulleys. Engineered with vulcanized rubber compression base and protective bias-cut fabric wrapper that provides smooth clutching action and resistance against dirt, grit, and moisture.",
    featured: false,
    searchKeywords: ["v-belt", "fan belt", "b section belt", "a section belt", "c section belt", "hammer mill belt", "tractor belt", "alternator belt"],
    temperatureRange: { minC: -30, maxC: 70 },
    safetyFactor: "ISO matched sets",
    reinforcement: "High-tenacity low-stretch polyester cord",
    tubeMaterial: "Compounded natural and synthetic vulcanized rubber",
    coverMaterial: "Polycotton fabric wrap saturated in polychloroprene",
    standardsCompliance: ["DIN 2215", "ISO 4184", "BS 3790"],
    applications: [
      "Agricultural hammer mills and maize shellers",
      "Industrial fans, blowers, and air handling units",
      "Centrifugal water pumps and lathe workshop machine tools",
      "Commercial laundry and food processing equipment"
    ],
    industries: ["agriculture", "manufacturing", "automotive-transport"],
    specifications: [
      { name: "Available Profiles", value: "A (13x8mm), B (17x11mm), C (22x14mm), D (32x19mm)", highlight: true },
      { name: "Length Range", value: "Inside lengths from 400mm (Li) to 9000mm (Li)" },
      { name: "Static Conductivity", value: "Compliant with ISO 1813" }
    ],
    variants: [
      { id: "v-b-54", code: "B54", nominalSize: "B Section - 1410mm Inside (17x11mm)", availability: "in_stock" },
      { id: "v-b-68", code: "B68", nominalSize: "B Section - 1765mm Inside (17x11mm)", availability: "in_stock" },
      { id: "v-b-72", code: "B72", nominalSize: "B Section - 1867mm Inside (17x11mm)", availability: "in_stock" },
      { id: "v-c-96", code: "C96", nominalSize: "C Section - 2500mm Inside (22x14mm)", availability: "in_stock" },
      { id: "v-c-120", code: "C120", nominalSize: "C Section - 3100mm Inside (22x14mm)", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    altText: "Classical wrapped V-belts hanging in industrial storeroom",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Classical_Belts.pdf",
    relatedProductSlugs: ["high-capacity-spb-wedge-v-belts"]
  },

  // ----------------------------------------------------
  // RUBBER PRODUCTS & SHEETING
  // ----------------------------------------------------
  {
    id: "prod-rubber-sheeting-natural",
    slug: "industrial-rubber-sheeting-natural-sbr",
    name: "Heavy-Duty Natural Rubber & SBR Sheeting (40 & 65 Shore A)",
    code: "CRH-RSH-NAT",
    categorySlug: "rubber-products",
    subcategorySlug: "industrial-rubber-sheeting",
    shortDescription: "High-elasticity abrasion-resistant natural rubber and general-purpose SBR sheets for chute lining, gaskets, and buffer pads.",
    description: "Premium vulcanized elastomer sheeting engineered for aggressive wear protection. The 40 Shore A (Red Gum) variant exhibits world-class cut, tear, and tensile resilience against high-velocity wet slurry impingement. The 65 Shore A (Black SBR/Commercial) provides an economical, robust solution for general flange gaskets, workbench covers, and mudflaps.",
    featured: true,
    searchKeywords: ["rubber sheet", "rubber sheeting", "red gum rubber", "chute lining", "flange gasket", "insertion rubber", "sbr rubber"],
    temperatureRange: { minC: -30, maxC: 70 },
    tubeMaterial: "Natural Rubber (NR) or Styrene-Butadiene Rubber (SBR)",
    standardsCompliance: ["ASTM D2000", "DIN 7715"],
    applications: [
      "Quarry and mine chute, cyclone, and hopper impact linings",
      "Full-face and ring gaskets for low to medium-pressure flanges",
      "Heavy equipment vibration dampening and base pads",
      "Industrial bench tops and workshop floor protection"
    ],
    industries: ["mining", "manufacturing", "construction"],
    specifications: [
      { name: "Hardness Range", value: "40 Shore A (Red Gum) or 65 Shore A (Black Commercial)", highlight: true },
      { name: "Tensile Strength", value: "15 MPa (Red Gum) / 5 MPa (Commercial Black)" },
      { name: "Elongation at Break", value: "600% (Red Gum) / 300% (Commercial Black)", highlight: true },
      { name: "Standard Roll Width", value: "1200mm (1.2m) wide rolls" }
    ],
    variants: [
      { id: "v-rsh-3mm", code: "RSH-NAT-03", nominalSize: "3.0mm Thickness x 1.2m Width", standardCoilOrLength: "10m roll or cut per metre", availability: "in_stock" },
      { id: "v-rsh-6mm", code: "RSH-NAT-06", nominalSize: "6.0mm Thickness x 1.2m Width", standardCoilOrLength: "10m roll or cut per metre", availability: "in_stock" },
      { id: "v-rsh-10mm", code: "RSH-NAT-10", nominalSize: "10.0mm Thickness x 1.2m Width", standardCoilOrLength: "10m roll or cut per metre", availability: "in_stock" },
      { id: "v-rsh-12mm", code: "RSH-NAT-12", nominalSize: "12.0mm Thickness x 1.2m Width", standardCoilOrLength: "5m roll or cut per metre", availability: "in_stock" },
      { id: "v-rsh-20mm", code: "RSH-NAT-20", nominalSize: "20.0mm Thickness x 1.2m Width", standardCoilOrLength: "5m roll or cut per metre", availability: "cut_to_length" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    altText: "Rolls of industrial black rubber sheeting stacked in factory warehouse",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Rubber_Sheeting.pdf",
    relatedProductSlugs: ["conveyor-skirtboard-sealing-rubber-strips"]
  },
  {
    id: "prod-skirtboard-rubber",
    slug: "conveyor-skirtboard-sealing-rubber-strips",
    name: "Conveyor Skirtboard Sealing Rubber Strips",
    code: "CRH-SKIRT-60",
    categorySlug: "rubber-products",
    subcategorySlug: "conveyor-skirtboard-rubber",
    shortDescription: "High-tensile rubber skirting designed to create a flexible, durable dust seal along conveyor loading zones and transfer chutes.",
    description: "Prevents material spillage, dust dispersion, and catastrophic belt groove grooving at conveyor transfer chutes. Specially compounded with moderate 60 Shore A hardness to seal tightly against moving conveyor belts without causing premature belt top-cover wear.",
    featured: false,
    searchKeywords: ["skirtboard", "conveyor skirting", "skirt rubber", "transfer chute seal", "dust sealing rubber", "conveyor rubber strip"],
    temperatureRange: { minC: -20, maxC: 75 },
    tubeMaterial: "Abrasion-resistant SBR/NR blend",
    standardsCompliance: ["ISO 34-1"],
    applications: [
      "Conveyor load chute skirting in coal, chrome, and gold mines",
      "Grain terminal transfer chute containment",
      "Crusher feed hopper side seals"
    ],
    industries: ["mining", "manufacturing", "agriculture"],
    specifications: [
      { name: "Hardness", value: "60 ± 5 Shore A (Optimized for belt seal with minimal friction)", highlight: true },
      { name: "Bevelled Edge Option", value: "Available with square edge or 45-degree pre-bevelled edge" },
      { name: "Standard Roll Length", value: "10 metre and 20 metre rolls" }
    ],
    variants: [
      { id: "v-sk-100-10", code: "SK-100-10", nominalSize: "100mm Wide x 10mm Thick", standardCoilOrLength: "20m roll", availability: "in_stock" },
      { id: "v-sk-150-10", code: "SK-150-10", nominalSize: "150mm Wide x 10mm Thick", standardCoilOrLength: "20m roll", availability: "in_stock" },
      { id: "v-sk-150-12", code: "SK-150-12", nominalSize: "150mm Wide x 12mm Thick", standardCoilOrLength: "20m roll", availability: "in_stock" },
      { id: "v-sk-200-12", code: "SK-200-12", nominalSize: "200mm Wide x 12mm Thick", standardCoilOrLength: "20m roll", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    altText: "Black conveyor skirtboard rubber sealing strip installed on chute",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Skirtboard_Rubber.pdf",
    relatedProductSlugs: ["heavy-duty-ep-textile-conveyor-belting"]
  },

  // ----------------------------------------------------
  // FITTINGS & ACCESSORIES
  // ----------------------------------------------------
  {
    id: "prod-camlocks",
    slug: "camlock-quick-couplings-aluminium-brass",
    name: "Camlock Quick Couplings (Types A, B, C, D, E, F, DC, DP)",
    code: "CRH-CAM-ALBR",
    categorySlug: "fittings-accessories",
    subcategorySlug: "camlock-quick-couplings",
    shortDescription: "Precision die-cast aluminium, forged brass, and 316 stainless steel cam-and-groove couplers for fast, tool-free fluid line connection.",
    description: "Industry-standard rapid couplings manufactured in strict compliance with A-A-59326D (Mil-C-27487). Provides leak-tight connection in seconds by closing two locking cam arms. Standard NBR gaskets resist petroleum products, water, and mild industrial chemicals. Viton and EPDM gaskets available upon request.",
    featured: true,
    searchKeywords: ["camlock", "cam and groove", "camlock coupling", "quick coupler", "type c camlock", "type a camlock", "aluminium camlock"],
    workingPressureRangeBar: "Up to 16 bar (230 PSI)",
    safetyFactor: "3:1",
    tubeMaterial: "Aluminium gravity die-cast / Forged Brass / SS316",
    standardsCompliance: ["A-A-59326D", "EN 14420-7"],
    applications: [
      "Fuel tanker and bulk diesel depot loading arms",
      "Agricultural suction and layflat pump connections",
      "Chemical manufacturing IBC tote discharge",
      "Quarry and mine dewatering manifolds"
    ],
    industries: ["mining", "agriculture", "manufacturing", "automotive-transport"],
    specifications: [
      { name: "Available Types", value: "Type A (Male NPT/BSP), B (Female NPT/BSP), C (Female Hose Tail), D (Female Thread), E (Male Shank), F (Male Thread)", highlight: true },
      { name: "Standard Gasket", value: "Nitrile (NBR) fuel and oil resistant" },
      { name: "Operating Pressure", value: "16 bar (1/2\" to 2\"), 10 bar (2.5\" to 4\"), 7 bar (6\")" },
      { name: "Handles & Pins", value: "Stainless steel 304 cam levers with safety locking clips", highlight: true }
    ],
    variants: [
      { id: "v-cam-20-c", code: "CAM-AL-200C", nominalSize: "2\" (50mm) Type C (Female Coupler x Hose Tail)", workingPressureBar: 16, availability: "in_stock" },
      { id: "v-cam-20-e", code: "CAM-AL-200E", nominalSize: "2\" (50mm) Type E (Male Adapter x Hose Tail)", workingPressureBar: 16, availability: "in_stock" },
      { id: "v-cam-30-c", code: "CAM-AL-300C", nominalSize: "3\" (75mm) Type C (Female Coupler x Hose Tail)", workingPressureBar: 10, availability: "in_stock" },
      { id: "v-cam-30-e", code: "CAM-AL-300E", nominalSize: "3\" (75mm) Type E (Male Adapter x Hose Tail)", workingPressureBar: 10, availability: "in_stock" },
      { id: "v-cam-40-c", code: "CAM-AL-400C", nominalSize: "4\" (100mm) Type C (Female Coupler x Hose Tail)", workingPressureBar: 10, availability: "in_stock" },
      { id: "v-cam-40-e", code: "CAM-AL-400E", nominalSize: "4\" (100mm) Type E (Male Adapter x Hose Tail)", workingPressureBar: 10, availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    altText: "Aluminium camlock quick couplings with stainless steel levers",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Camlock_Couplings.pdf",
    relatedProductSlugs: ["heavy-duty-green-pvc-water-suction-hose", "heavy-duty-hose-clamps-single-double-bolt"]
  },
  {
    id: "prod-bauer-couplings",
    slug: "bauer-type-lever-couplings-galvanised",
    name: "Bauer-Type Quick Lever Couplings (Hot-Dip Galvanized)",
    code: "CRH-BAU-GALV",
    categorySlug: "fittings-accessories",
    subcategorySlug: "bauer-type-lever-couplers",
    shortDescription: "Heavy-duty spherical ball-and-socket lever couplings permitting up to 30° articulation angle in rough terrain mining and agricultural pumping.",
    description: "The rugged standard for heavy-duty dewatering, slurry transfer, and irrigation across uneven terrain. The ball-and-socket design allows pipes and hoses to be coupled at up to 30 degrees deflection without leaking or straining the joint. Built from heavy-gauge pressed steel with hot-dip galvanization for outdoor longevity.",
    featured: false,
    searchKeywords: ["bauer coupling", "lever coupling", "slurry coupling", "dewatering fitting", "ball and socket coupling", "galvanised bauer"],
    workingPressureRangeBar: "Up to 12 bar (175 PSI)",
    safetyFactor: "2.5:1",
    tubeMaterial: "Hot-dip galvanized heavy-gauge carbon steel",
    standardsCompliance: ["DIN 28601"],
    applications: [
      "Open-cast mine pit dewatering lines over undulating terrain",
      "Mobile agricultural gun irrigation feed lines",
      "Civil construction emergency sewage bypass"
    ],
    industries: ["mining", "agriculture", "construction"],
    specifications: [
      { name: "Angular Articulation", value: "Allows up to 30° deviation in all directions", highlight: true },
      { name: "Corrosion Protection", value: "Heavy hot-dip galvanized finish resists acidic mine water" },
      { name: "Locking Lever", value: "High-leverage galvanized clamp ring with safety retaining pin" }
    ],
    variants: [
      { id: "v-bau-76", code: "BAU-076", nominalSize: "3\" (76mm) Male & Female Set with Hose Tails", workingPressureBar: 12, availability: "in_stock" },
      { id: "v-bau-102", code: "BAU-102", nominalSize: "4\" (102mm) Male & Female Set with Hose Tails", workingPressureBar: 12, availability: "in_stock" },
      { id: "v-bau-152", code: "BAU-152", nominalSize: "6\" (152mm) Male & Female Set with Hose Tails", workingPressureBar: 10, availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    altText: "Galvanized steel Bauer quick lever couplings",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Bauer_Couplings.pdf",
    relatedProductSlugs: ["heavy-duty-mining-slurry-suction-discharge-hose"]
  },

  // ----------------------------------------------------
  // CONVEYOR PRODUCTS
  // ----------------------------------------------------
  {
    id: "prod-ep-conveyor-belting",
    slug: "heavy-duty-ep-textile-conveyor-belting",
    name: "Heavy-Duty EP Multi-Ply Textile Conveyor Belting (EP400 - EP1000)",
    code: "CRH-CONV-EP",
    categorySlug: "conveyor-products",
    subcategorySlug: "ep-textile-conveyor-belting",
    shortDescription: "High-tensile polyester-warp polyamide-weft (EP) conveyor belting engineered for demanding quarrying, mining, and bulk handling plants.",
    description: "The premier solution for bulk material conveying in Zimbabwean mining and processing plants. The synthetic EP carcass offers low permanent elongation, high impact resistance against falling jagged rock, and superior resistance to rot and moisture. Compounded with Grade M / DIN X high-abrasion rubber covers to maximize operating life under abrasive ore feeds.",
    featured: true,
    searchKeywords: ["conveyor belt", "ep conveyor", "ep400", "ep630", "ep800", "rubber conveyor", "quarry belt", "mining conveyor"],
    temperatureRange: { minC: -20, maxC: 80, intermittentMaxC: 100 },
    reinforcement: "Multiple plies of woven Polyester (Warp) and Polyamide (Weft) synthetic fabric",
    tubeMaterial: "High-resilience rubber skims between plies",
    coverMaterial: "Grade M (DIN X) superior abrasion and gouge-resistant rubber compound",
    standardsCompliance: ["DIN 22102", "ISO 14890", "SANS 1173"],
    applications: [
      "Quarry aggregate and crushed granite conveying",
      "Underground and open-cast gold, chrome, and coal haulage",
      "Cement plant limestone and clinker transfer",
      "Agricultural grain silo and sugar processing transport"
    ],
    industries: ["mining", "manufacturing", "agriculture", "construction"],
    specifications: [
      { name: "Tensile Strengths Available", value: "EP400/3, EP630/4, EP800/4, EP1000/5", highlight: true },
      { name: "Cover Thickness Options", value: "3+1.5mm, 4+2mm, 5+1.5mm, 6+2mm (Top + Bottom)", highlight: true },
      { name: "Carcass Elongation", value: "Low operating stretch (< 1.5% at nominal load)" },
      { name: "Standard Roll Widths", value: "450mm, 600mm, 750mm, 900mm, 1050mm, 1200mm" }
    ],
    variants: [
      { id: "v-ep-400-600", code: "EP400/3-600", nominalSize: "600mm Width - EP400/3 (4+2mm Covers)", weightKgM: 7.8, availability: "cut_to_length" },
      { id: "v-ep-400-750", code: "EP400/3-750", nominalSize: "750mm Width - EP400/3 (4+2mm Covers)", weightKgM: 9.8, availability: "cut_to_length" },
      { id: "v-ep-630-750", code: "EP630/4-750", nominalSize: "750mm Width - EP630/4 (5+2mm Covers)", weightKgM: 11.5, availability: "cut_to_length" },
      { id: "v-ep-630-900", code: "EP630/4-900", nominalSize: "900mm Width - EP630/4 (5+2mm Covers)", weightKgM: 13.8, availability: "cut_to_length" },
      { id: "v-ep-800-1050", code: "EP800/4-1050", nominalSize: "1050mm Width - EP800/4 (6+2mm Covers)", weightKgM: 17.2, availability: "cut_to_length" },
      { id: "v-ep-1000-1200", code: "EP1000/5-1200", nominalSize: "1200mm Width - EP1000/5 (6+2mm Covers)", weightKgM: 21.5, availability: "cut_to_length" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    altText: "Heavy duty industrial conveyor belting moving crushed mineral ore in mining plant",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_EP_Conveyor_Belts.pdf",
    relatedProductSlugs: ["conveyor-skirtboard-sealing-rubber-strips", "mechanical-conveyor-belt-fasteners-alligator-bolt"]
  },
  {
    id: "prod-belt-fasteners",
    slug: "mechanical-conveyor-belt-fasteners-alligator-bolt",
    name: "Mechanical Conveyor Belt Fasteners & Splicing Kits",
    code: "CRH-FAST-BOLT",
    categorySlug: "conveyor-products",
    subcategorySlug: "belt-fasteners-splicing",
    shortDescription: "High-strength bolt solid plate and staple-type mechanical belt fasteners for rapid on-site emergency conveyor splicing without vulcanizing presses.",
    description: "Crucial emergency maintenance hardware for Zimbabwean plant operators. Enables rapid mechanical joining or rip repair of conveyor belts directly on the conveyor structure, reducing catastrophic downtime from hours or days to under 45 minutes. Manufactured in high-tensile steel with corrosion-resistant finishes.",
    featured: false,
    searchKeywords: ["belt fasteners", "alligator fastener", "bolt solid plate", "conveyor splicing", "belt joiner", "belt clips"],
    tubeMaterial: "High-tensile tempered steel / Stainless steel",
    standardsCompliance: ["ISO 1007"],
    applications: [
      "Emergency conveyor belt splicing during breakdown shifts",
      "Longitudinal belt rip repair in mining transfer chutes",
      "High-tension aggregate conveyor belt joining"
    ],
    industries: ["mining", "manufacturing", "construction"],
    specifications: [
      { name: "Fastener Styles", value: "Bolt Solid Plate (#1, #140, #190, #2), Alligator Staple, Rivet Hinged", highlight: true },
      { name: "Tensile Reach", value: "Ratings up to 200 kN/m belt tension" },
      { name: "Installation Tooling", value: "Manual bolt horns, bolt breakers, and template alignment guides available", highlight: true }
    ],
    variants: [
      { id: "v-fst-140", code: "FAST-140", nominalSize: "Size 140 (For belts 5mm to 11mm thick)", availability: "in_stock" },
      { id: "v-fst-190", code: "FAST-190", nominalSize: "Size 190 (For belts 8mm to 14mm thick)", availability: "in_stock" },
      { id: "v-fst-2", code: "FAST-2", nominalSize: "Size 2 (For belts 11mm to 18mm thick)", availability: "in_stock" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    altText: "Mechanical bolt solid plate conveyor belt fasteners installed on belt joint",
    datasheetAvailable: true,
    datasheetName: "CRH_Technical_Data_Belt_Fasteners.pdf",
    relatedProductSlugs: ["heavy-duty-ep-textile-conveyor-belting"]
  }
];

export const BRAND_PARTNERS = [
  { id: "brand-1", name: "Dunlop Industrial Grade Compatible", category: "Conveyor Belting & Hoses", note: "Standard specification grade", isVerified: false },
  { id: "brand-2", name: "Gates Spec Compatible", category: "Power Transmission V-Belts", note: "Interchangeable dimension series", isVerified: false },
  { id: "brand-3", name: "Fenner Profile Equivalent", category: "Narrow Wedge & Classical Belts", note: "Standard industry cross-reference", isVerified: false },
  { id: "brand-4", name: "Manuli Hydraulic Spec Grade", category: "High-Pressure Hydraulic Lines", note: "International standard compliance", isVerified: false },
  { id: "brand-5", name: "Linatex Grade Equivalent", category: "Abrasion Resisting Rubber", note: "High wear slurry lining compound", isVerified: false },
  { id: "brand-6", name: "Flexco Fastener Standard", category: "Mechanical Belt Fasteners", note: "Standard mechanical splicing", isVerified: false }
];
