import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/catalogue-data";
import { CatalogueView } from "@/components/catalogue/CatalogueView";
import { COMPANY_CONFIG } from "@/data/company-config";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | Industrial Supplies Zimbabwe`,
    description: category.shortDescription,
    openGraph: {
      title: `${category.name} | ${COMPANY_CONFIG.companyName}`,
      description: category.shortDescription,
      images: [{ url: category.bannerImage }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return <CatalogueView initialCategory={categorySlug} />;
}
