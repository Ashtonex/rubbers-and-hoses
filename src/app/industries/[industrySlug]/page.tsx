import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/data/industries-data";
import { PRODUCTS } from "@/data/catalogue-data";
import { IndustryDetailView } from "@/components/industries/IndustryDetailView";
import { COMPANY_CONFIG } from "@/data/company-config";

interface IndustryPageProps {
  params: Promise<{ industrySlug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    industrySlug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { industrySlug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === industrySlug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} Solutions | ${COMPANY_CONFIG.companyName}`,
    description: industry.subtitle,
    openGraph: {
      title: `${industry.name} Industrial Solutions | ${COMPANY_CONFIG.companyName}`,
      description: industry.subtitle,
      images: [{ url: industry.heroImage }],
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { industrySlug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === industrySlug);

  if (!industry) {
    notFound();
  }

  const matchingProducts = PRODUCTS.filter(
    (p) => p.industries.includes(industry.slug) || industry.recommendedProductSlugs.includes(p.slug)
  );

  return (
    <IndustryDetailView
      industry={industry}
      matchingProducts={matchingProducts}
    />
  );
}
