import React from "react";
import { Metadata } from "next";
import { CatalogueView } from "@/components/catalogue/CatalogueView";
import { COMPANY_CONFIG } from "@/data/company-config";

export const metadata: Metadata = {
  title: "Industrial Product Catalogue | Hoses, Belts & Rubber Zimbabwe",
  description:
    "Complete technical catalogue of hydraulic hoses, mining slurry lines, PVC suction tubes, SPB wedge belts, conveyor belting, and camlock couplings for Zimbabwean industry.",
  keywords: [
    "industrial hoses Zimbabwe",
    "hydraulic hose suppliers Harare",
    "V belts Bulawayo",
    "conveyor belting Mutare",
    "mining slurry hoses Zimbabwe"
  ],
};

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; industry?: string }>;
}) {
  const params = await searchParams;
  return (
    <CatalogueView
      initialCategory={params.category || "all"}
      initialIndustry={params.industry || "all"}
    />
  );
}
