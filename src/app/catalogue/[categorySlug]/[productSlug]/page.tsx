import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/data/catalogue-data";
import { ProductDetailView } from "@/components/catalogue/ProductDetailView";
import { COMPANY_CONFIG } from "@/data/company-config";

interface ProductPageProps {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    categorySlug: product.categorySlug,
    productSlug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = PRODUCTS.find((p) => p.slug === productSlug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const category = CATEGORIES.find((c) => c.slug === product.categorySlug);

  return {
    title: `${product.name} (${product.code}) | Zimbabwe`,
    description: `${product.shortDescription} Available across Harare, Bulawayo, and Mutare with technical support and fast RFQ dispatch.`,
    keywords: [
      ...product.searchKeywords,
      product.code,
      `${product.name} Zimbabwe`,
      `${product.code} Harare`,
      "industrial supplier Zimbabwe"
    ],
    openGraph: {
      title: `${product.name} | ${COMPANY_CONFIG.companyName}`,
      description: product.shortDescription,
      images: [{ url: product.imageUrl, alt: product.altText }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { categorySlug, productSlug } = await params;
  const product = PRODUCTS.find((p) => p.slug === productSlug && p.categorySlug === categorySlug);

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.slug === categorySlug) || {
    id: "unknown",
    slug: categorySlug,
    name: "Catalogue",
    shortDescription: "",
    fullDescription: "",
    subcategories: [],
    bannerImage: "",
    iconName: "Layers",
    featuredApplications: [],
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categorySlug === categorySlug || product.relatedProductSlugs?.includes(p.slug))
  ).slice(0, 3);

  // JSON-LD Product Structured Data for Technical SEO
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.imageUrl,
    description: product.shortDescription,
    sku: product.code,
    mpn: product.code,
    brand: {
      "@type": "Brand",
      name: COMPANY_CONFIG.companyName,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: COMPANY_CONFIG.companyName,
      },
    },
    category: category.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailView
        product={product}
        category={category}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
