import { CompanyConfig } from "@/types/industrial";

/**
 * CENTRAL COMPANY CONFIGURATION & DATA LAYER
 *
 * Confirmed Entity Name: RUBBER & HOSE
 */
export const COMPANY_CONFIG: CompanyConfig = {
  companyName: "Rubber & Hose",
  tagline: "Heavy-Duty Fluid Transfer & Power Transmission",
  subtagline: "High-pressure hydraulic hoses, mining slurry lines, narrow wedge V-belts, and conveyor belting engineered for Zimbabwe's demanding operations.",
  registrationNote: "Specialist Industrial Supplier & Technical Distributor — Zimbabwe Operations",
  isVerifiedEntity: false,
  primaryWhatsAppNumber: "+263772000000",
  primaryPhone: "+263242000000",
  emergencyBreakdownPhone: "+263772000001",
  salesEmail: "sales@rubberandhose.co.zw",
  rfqEmail: "quotes@rubberandhose.co.zw",
  headquartersCity: "Harare",
  country: "Zimbabwe",
  currencyNote: "Quotations denominated in USD and ZiG (official RBZ interbank rate). VAT applied per statutory requirements.",
  branches: [
    {
      id: "branch-harare-main",
      city: "Harare",
      name: "Harare Distribution Hub",
      addressLines: [
        "Graniteside Industrial Area",
        "Harare, Zimbabwe",
        "[Physical Street Address Pending Client Confirmation]"
      ],
      phone: "+263 242 700000",
      whatsapp: "+263 772 000 000",
      email: "harare@rubberandhose.co.zw",
      operatingHours: "Mon – Fri: 07:30 – 17:00 | Sat: 08:00 – 12:30",
      isMainDistributionHub: true,
      isVerifiedLocation: false
    },
    {
      id: "branch-bulawayo",
      city: "Bulawayo",
      name: "Bulawayo Sales Desk",
      addressLines: [
        "Belmont Industrial Park",
        "Bulawayo, Zimbabwe",
        "[Physical Street Address Pending Client Confirmation]"
      ],
      phone: "+263 292 600000",
      whatsapp: "+263 772 000 002",
      email: "bulawayo@rubberandhose.co.zw",
      operatingHours: "Mon – Fri: 08:00 – 16:30 | Sat: 08:30 – 12:00",
      isMainDistributionHub: false,
      isVerifiedLocation: false
    },
    {
      id: "branch-mutare",
      city: "Mutare",
      name: "Mutare & Eastern Depot",
      addressLines: [
        "Nyakamete Industrial Area",
        "Mutare, Zimbabwe",
        "[Physical Street Address Pending Client Confirmation]"
      ],
      phone: "+263 202 500000",
      whatsapp: "+263 772 000 003",
      email: "mutare@rubberandhose.co.zw",
      operatingHours: "Mon – Fri: 08:00 – 16:30",
      isMainDistributionHub: false,
      isVerifiedLocation: false
    }
  ]
};

export const REGIONAL_COVERAGE_ZONES = [
  {
    region: "Harare & Mashonaland",
    hubs: "Graniteside, Southerton, Workington, Msasa, Ruwa, Chinhoyi, Bindura",
    coverageType: "Daily depot dispatch & scheduled site delivery"
  },
  {
    region: "Matabeleland & Bulawayo",
    hubs: "Belmont, Donnington, Kelvin, Hwange, Gwanda",
    coverageType: "Regional mining & manufacturing transit"
  },
  {
    region: "Manicaland & Eastern Border",
    hubs: "Nyakamete, Chimanimani timber belt, Middle Sabi, Chipinge",
    coverageType: "Agro-industrial & forestry scheduled runs"
  },
  {
    region: "Midlands & Mining Corridors",
    hubs: "Kwekwe, Gweru, Zvishavane, Shurugwi, Kadoma",
    coverageType: "Heavy mineral extraction & foundry logistics"
  }
];

export const TECHNICAL_DISCLAIMER =
  "Technical specifications, working pressure ratings, burst factors, and chemical compatibility ratings listed herein represent typical manufacturer test benchmarks under controlled laboratory environments (20°C). Operating parameters may vary under extreme cyclic pressure, high-ambient temperature, or aggressive chemical concentrations. Engineering verification recommended prior to critical commissioning.";
