import { Industry } from "@/types/industrial";

export const INDUSTRIES: Industry[] = [
  {
    id: "ind-mining",
    slug: "mining",
    name: "Mining & Mineral Processing",
    subtitle: "High-abrasion, ultra-high impulse, and heavy-duty conveyor solutions built for Zimbabwe's chrome, gold, coal, and lithium operations.",
    heroImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80",
    description: "Mining sites across Shurugwi, Kwekwe, Gwanda, Hwange, and Mutoko run continuous shifts in dust, acidic slurry, high shock loads, and rocky impact. We engineer and supply heavy-duty slurry suction and discharge lines, multi-spiral hydraulic hoses for underground drills and excavators, Grade M high-wear EP conveyor belting, and rapid mechanical belt splicing systems designed to prevent catastrophic plant downtime.",
    demandingConditions: [
      "Continuous abrasive slurry wear from quartz, chrome, and granite ore",
      "Shock impulse spikes on hydraulic excavators, rock drills, and loaders",
      "Acid mine water, chemical leach reagents, and cyanide-bearing slurries",
      "High-tension bulk ore conveyor transport over uneven mine topographies"
    ],
    recommendedCategories: ["rubber-hoses", "conveyor-products", "fittings-accessories", "rubber-products"],
    recommendedProductSlugs: [
      "heavy-duty-mining-slurry-suction-discharge-hose",
      "heavy-duty-ep-textile-conveyor-belting",
      "high-capacity-spb-wedge-v-belts",
      "industrial-rubber-sheeting-natural-sbr",
      "mechanical-conveyor-belt-fasteners-alligator-bolt"
    ],
    caseStudyOrApplicationExamples: [
      {
        title: "Ball Mill Discharge & Cyclone Feed Circuit",
        requirement: "Severe ore slurry wear causing frequent steel elbow washouts every 3 weeks.",
        recommendedSolution: "Heavy-duty 40 Shore A natural gum rubber slurry hose with built-in aluminium flanges, isolating pump vibration and multiplying service life."
      },
      {
        title: "Primary Jaw Crusher Drive Replacement",
        requirement: "Torsional shock slip burning classical belts on 160 kW motor during rock jam events.",
        recommendedSolution: "Precision matched high-capacity SPB narrow wedge belts providing 3x power rating with minimal operating elongation."
      }
    ]
  },
  {
    id: "ind-agriculture",
    slug: "agriculture",
    name: "Commercial Agriculture & Irrigation",
    subtitle: "Heavy-duty dam suction, center-pivot water lines, tractor PTO belts, and high-volume layflat discharge systems.",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
    description: "Serving commercial farmers across Mashonaland, Midlands, Eastern Highlands, and Lowveld sugar estates. Whether drawing river water during peak winter wheat irrigation, running hammer mills for stockfeed production, or operating boom sprayers with agrochemicals, our range of UV-stabilized PVC suction, heavy blue layflat, and classical wrapped V-belts provides uninterrupted performance throughout planting and harvest.",
    demandingConditions: [
      "Intense solar UV radiation degrading cheap commercial plastics and rubber",
      "High suction vacuum lift from rivers, weirs, and agricultural dams",
      "Liquid fertilizer, herbicide, and pesticide chemical degradation",
      "Heavy cyclic torque on tractor implement PTO shafts and grain mills"
    ],
    recommendedCategories: ["pvc-hoses", "belts-power-transmission", "fittings-accessories"],
    recommendedProductSlugs: [
      "heavy-duty-green-pvc-water-suction-hose",
      "blue-pvc-layflat-water-discharge-hose",
      "classical-wrapped-v-belts-a-b-c-d",
      "camlock-quick-couplings-aluminium-brass"
    ],
    caseStudyOrApplicationExamples: [
      {
        title: "Winter Wheat River Pump Suction",
        requirement: "Hose collapse under 7-metre static suction lift during river drawdown.",
        recommendedSolution: "Heavy-duty rigid PVC spiral suction hose with full vacuum rating and aluminium Camlock quick-connect fittings."
      },
      {
        title: "Estate Hammer Mill Power Transfer",
        requirement: "Belt slippage and burn under heavy, variable moisture maize feeding.",
        recommendedSolution: "Standardized matched B-section classical wrapped V-belts with high-friction chloroprene jacket."
      }
    ]
  },
  {
    id: "ind-manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial Processing",
    subtitle: "High-temperature steam lines, compressed air manifolds, plant conveyor belts, and chemical-grade flange gaskets.",
    heroImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
    description: "From beverage bottling and tobacco processing in Harare and Mutare to foundries and steelworks in Kwekwe and Bulawayo. We provide certified high-pressure hydraulic hose assemblies, saturated steam lines rated up to 210°C, vibration dampening elastomeric pads, and precision timing belts engineered to maintain tight tolerances and prevent expensive factory stops.",
    demandingConditions: [
      "Superheated boiler steam and high-pressure hot condensate cycles",
      "Continuous 24/7 assembly conveyor operation without belt tracking wander",
      "Petroleum, solvent, and oil mist exposure on factory floor machinery",
      "Strict worker safety requirements regarding hose burst containment"
    ],
    recommendedCategories: ["rubber-hoses", "belts-power-transmission", "rubber-products", "fittings-accessories"],
    recommendedProductSlugs: [
      "high-temperature-wire-reinforced-steam-hose",
      "sae-100-r2at-en-853-2sn-hydraulic-hose",
      "high-capacity-spb-wedge-v-belts",
      "industrial-rubber-sheeting-natural-sbr"
    ],
    caseStudyOrApplicationExamples: [
      {
        title: "Tobacco Processing Steam Sterilization",
        requirement: "Hose blistering and dangerous thermal softening on 160°C curing lines.",
        recommendedSolution: "Micro-pinpricked EPDM wire-braided steam hose with 10:1 safety factor and interlocking 4-bolt Boss clamps."
      }
    ]
  },
  {
    id: "ind-automotive-transport",
    slug: "automotive-transport",
    name: "Automotive, Transport & Heavy Fleet",
    subtitle: "Truck brake lines, fuel transfer tanker hoses, heavy vehicle fan belts, and industrial engine couplings.",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    description: "Supplying fleet workshops, cross-border hauliers, and bus operators throughout Zimbabwe. Our catalogue includes diesel fuel transfer hoses, tanker camlock discharge systems, heavy-duty automotive fan belts, and hydraulic tipping cylinder assemblies designed to withstand heavy road vibration, ambient heat, and arduous cross-border routes.",
    demandingConditions: [
      "Extreme under-bonnet ambient temperatures and constant engine vibration",
      "Hydrocarbon fuel, diesel, and oil exposure requiring NBR nitrile compatibility",
      "High shock loads on tipper hydraulic rams during payload discharge",
      "Fast turnaround time needed for breakdown fleet vehicles"
    ],
    recommendedCategories: ["belts-power-transmission", "rubber-hoses", "fittings-accessories"],
    recommendedProductSlugs: [
      "classical-wrapped-v-belts-a-b-c-d",
      "sae-100-r2at-en-853-2sn-hydraulic-hose",
      "camlock-quick-couplings-aluminium-brass"
    ],
    caseStudyOrApplicationExamples: [
      {
        title: "Bulk Diesel Fuel Depot Offloading",
        requirement: "Static charge buildup risks and quick coupling wear during road tanker transfer.",
        recommendedSolution: "Mandrel-built petroleum suction and discharge hose with dual anti-static copper wires and brass Camlock couplings."
      }
    ]
  },
  {
    id: "ind-construction",
    slug: "construction",
    name: "Construction, Quarrying & Civil Engineering",
    subtitle: "Rock drill air lines, mobile crusher belts, concrete vibrator hoses, and aggregate transfer belting.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=80",
    description: "Civil contractors, dam constructors, and commercial quarry operators rely on our rugged fluid handling and power transmission systems. From pneumatic rock drill hoses operating at high cyclical pressures to steep-incline chevron conveyor belts handling sharp granite aggregate, our products are built to endure the harshest civil works environments.",
    demandingConditions: [
      "Sharp jagged granite and quartz aggregate gouging conveyor belting",
      "Pneumatic impulse pulsations on rock drills and jackhammers",
      "Muddy, flooded civil excavation sites requiring rapid dewatering",
      "Constant dragging over abrasive rock surfaces and demolition rubble"
    ],
    recommendedCategories: ["rubber-hoses", "conveyor-products", "fittings-accessories", "pvc-hoses"],
    recommendedProductSlugs: [
      "heavy-duty-ep-textile-conveyor-belting",
      "sae-100-r2at-en-853-2sn-hydraulic-hose",
      "bauer-type-lever-couplings-galvanised",
      "blue-pvc-layflat-water-discharge-hose"
    ],
    caseStudyOrApplicationExamples: [
      {
        title: "Granite Quarry Aggregate Screening",
        requirement: "Conveyor cover gouging and carcass puncture from 75mm sharp granite rock.",
        recommendedSolution: "Heavy-duty EP630 4-ply belt with 5+2mm Grade M high-tensile rubber covers, resisting rip propagation."
      }
    ]
  }
];
