export type AvailabilityStatus = "in_stock" | "made_to_order" | "cut_to_length" | "on_request";

export interface SpecificationRow {
  name: string;
  value: string;
  unit?: string;
  highlight?: boolean;
}

export interface ProductVariant {
  id: string;
  code: string; // Part number or manufacturing code e.g. "R2AT-08" or "SPB-2600"
  nominalSize: string; // e.g. "1/2\" (12.7mm)" or "SPB Section - 2600mm Pitch"
  workingPressureBar?: number;
  workingPressurePsi?: number;
  burstPressureBar?: number;
  minBendRadiusMm?: number;
  weightKgM?: number;
  standardCoilOrLength?: string;
  availability: AvailabilityStatus;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string; // Primary series or SKU e.g. "CRH-R2AT-HYD"
  categorySlug: string;
  subcategorySlug: string;
  shortDescription: string;
  description: string;
  featured?: boolean;
  searchKeywords: string[]; // e.g. ["fan belt", "v-belt", "hydraulic hose", "suction"]
  
  // Technical Operating Conditions
  temperatureRange?: {
    minC: number;
    maxC: number;
    intermittentMaxC?: number;
  };
  workingPressureRangeBar?: string; // e.g. "105 to 415 bar"
  safetyFactor?: string; // e.g. "4:1"
  reinforcement?: string; // e.g. "Two high-tensile steel wire braids"
  tubeMaterial?: string; // e.g. "Oil resistant synthetic rubber (NBR)"
  coverMaterial?: string; // e.g. "Abrasion and ozone resistant synthetic rubber (SBR/NBR)"
  standardsCompliance?: string[]; // e.g. ["EN 853 2SN", "SAE 100 R2AT", "ISO 1436"]
  
  // Applications & Industries
  applications: string[];
  industries: string[]; // Slugs e.g. ["mining", "agriculture", "manufacturing"]
  
  // Data & Specs
  specifications: SpecificationRow[];
  variants: ProductVariant[];
  
  // Visuals & Downloads
  imageUrl: string;
  altText: string;
  datasheetAvailable: boolean;
  datasheetName?: string;
  
  // Relationships
  relatedProductSlugs?: string[];
}

export interface Subcategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  subcategories: Subcategory[];
  bannerImage: string;
  iconName: string;
  featuredApplications: string[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  heroImage: string;
  description: string;
  demandingConditions: string[];
  recommendedCategories: string[];
  recommendedProductSlugs: string[];
  caseStudyOrApplicationExamples: {
    title: string;
    requirement: string;
    recommendedSolution: string;
  }[];
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  note: string; // Clearly notes "Partner/Representative or standard supply grade"
  isVerified: boolean;
}

export interface Branch {
  id: string;
  city: string;
  name: string;
  addressLines: string[];
  phone: string;
  whatsapp: string;
  email: string;
  operatingHours: string;
  isMainDistributionHub?: boolean;
  isVerifiedLocation: boolean; // Flag to denote verification status
}

export interface CompanyConfig {
  companyName: string;
  tagline: string;
  subtagline: string;
  registrationNote: string;
  isVerifiedEntity: boolean; // Explicit flag per factual rule
  primaryWhatsAppNumber: string;
  primaryPhone: string;
  emergencyBreakdownPhone: string;
  salesEmail: string;
  rfqEmail: string;
  headquartersCity: string;
  country: string;
  currencyNote: string;
  branches: Branch[];
}

export interface RFQItem {
  productId: string;
  productSlug: string;
  productName: string;
  categorySlug: string;
  selectedVariantCode?: string;
  sizeOrSpec?: string;
  quantity: string;
  unit: string;
  notes?: string;
}

export interface RFQSubmissionPayload {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  deliveryCityOrRegion: string;
  urgency: "urgent_breakdown" | "standard_quote" | "project_planning" | "tender";
  items: RFQItem[];
  additionalNotes?: string;
  applicationEnvironment?: string;
  honeypot?: string; // Anti-spam trap
}
