"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, RotateCcw, FileText, ChevronRight, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { CatalogueFilterSidebar } from "@/components/catalogue/CatalogueFilterSidebar";
import { PRODUCTS, CATEGORIES } from "@/data/catalogue-data";
import { INDUSTRIES } from "@/data/industries-data";

interface CatalogueViewProps {
  initialCategory?: string;
  initialIndustry?: string;
}

export function CatalogueView({ initialCategory = "all", initialIndustry = "all" }: CatalogueViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products by category, industry, and search keywords
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Industry check
      if (selectedIndustry !== "all" && !product.industries.includes(selectedIndustry)) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const variantMatches = product.variants.some(
          (v) => v.code.toLowerCase().includes(query) || v.nominalSize.toLowerCase().includes(query)
        );
        const nameMatches = product.name.toLowerCase().includes(query);
        const codeMatches = product.code.toLowerCase().includes(query);
        const descMatches = product.shortDescription.toLowerCase().includes(query);
        const keywordMatches = product.searchKeywords.some((k) => k.toLowerCase().includes(query));

        if (!nameMatches && !codeMatches && !descMatches && !keywordMatches && !variantMatches) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedIndustry, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedIndustry("all");
    setSearchQuery("");
  };

  const activeCategory = CATEGORIES.find((c) => c.slug === selectedCategory);
  const activeIndustry = INDUSTRIES.find((i) => i.slug === selectedIndustry);

  return (
    <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-amber-500 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
        <span className="text-slate-800 dark:text-slate-200 font-semibold">Catalogue</span>
        {activeCategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
            <span className="text-amber-600 dark:text-amber-400 font-bold">{activeCategory.name}</span>
          </>
        )}
      </nav>

      {/* Catalogue Title & Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 border-b border-slate-200 dark:border-white/[0.08] pb-8"
      >
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
          <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2.5 shadow-[0_0_8px_#f59e0b]" />
          Direct Supply Catalogue
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {activeCategory ? activeCategory.name : "Industrial Product Catalogue"}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
          {activeCategory 
            ? activeCategory.fullDescription
            : "Browse engineered hydraulic hoses, mining slurry lines, PVC suction tubes, narrow wedge V-belts, conveyor belting, and rapid mechanical couplings manufactured to international standards."
          }
        </p>
      </motion.div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-amber-500 dark:text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by part number (e.g. SPB 2600, R2AT), size, or specification..."
            className="w-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white placeholder-slate-400 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center px-4 py-3 glass-panel hover:border-amber-400 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase rounded-xl"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2 text-amber-500 dark:text-amber-400" />
            Filters {(selectedCategory !== "all" || selectedIndustry !== "all") && "(!)"}
          </button>

          {/* Result Count Metric */}
          <div className="px-5 py-3 glass-panel rounded-xl text-xs text-slate-600 dark:text-slate-300 whitespace-nowrap">
            <span className="font-extrabold text-amber-600 dark:text-amber-400">{filteredProducts.length}</span> items catalogued
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar + Product Grid */}
      <div className="flex items-start gap-10">
        {/* Left Filter Sidebar */}
        <CatalogueFilterSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedIndustry={selectedIndustry}
          onSelectIndustry={setSelectedIndustry}
          onResetFilters={handleResetFilters}
          isMobileFilterOpen={isMobileFilterOpen}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
          totalProductsCount={PRODUCTS.length}
        />

        {/* Right Product Grid */}
        <div className="flex-1 space-y-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.4) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            /* Engineered Empty State */
            <div className="py-20 glass-panel border-dashed rounded-3xl text-center p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl glass-panel mx-auto flex items-center justify-center text-slate-400">
                <Search className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No Matching Catalogue Components Found
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  No standard catalogue item matched your combination of filters and search keywords.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 glass-panel hover:border-amber-400 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase rounded-xl transition-colors"
                >
                  Reset Active Filters
                </button>

                <Link
                  href="/rfq"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase rounded-xl shadow transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Request Custom Sourcing RFQ
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
