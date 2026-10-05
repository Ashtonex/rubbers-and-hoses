"use client";

import React from "react";
import { Filter, X, Check, RotateCcw } from "lucide-react";
import { CATEGORIES } from "@/data/catalogue-data";
import { INDUSTRIES } from "@/data/industries-data";

interface CatalogueFilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedIndustry: string;
  onSelectIndustry: (ind: string) => void;
  onResetFilters: () => void;
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (open: boolean) => void;
  totalProductsCount: number;
}

export function CatalogueFilterSidebar({
  selectedCategory,
  onSelectCategory,
  selectedIndustry,
  onSelectIndustry,
  onResetFilters,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  totalProductsCount,
}: CatalogueFilterSidebarProps) {
  const hasActiveFilters = selectedCategory !== "all" || selectedIndustry !== "all";

  const content = (
    <div className="space-y-6">
      {/* Header / Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white">
          <Filter className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          <span>Technical Filters</span>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
          Product Family
        </div>
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => onSelectCategory("all")}
            className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors flex items-center justify-between ${
              selectedCategory === "all"
                ? "bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>All Families</span>
            <span className="text-[11px] opacity-80">{totalProductsCount}</span>
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? "bg-amber-500/15 border-l-2 border-amber-500 text-amber-700 dark:text-amber-300 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="truncate pr-2">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
          Target Sector / Industry
        </div>
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => onSelectIndustry("all")}
            className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between ${
              selectedIndustry === "all"
                ? "bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>All Sectors</span>
          </button>

          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => onSelectIndustry(ind.slug)}
              className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between ${
                selectedIndustry === ind.slug
                  ? "bg-amber-500/15 border-l-2 border-amber-500 text-amber-700 dark:text-amber-300 font-bold"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="truncate pr-2">{ind.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Engineering Support Help Card */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] p-4 rounded-2xl glass-panel space-y-2 border">
        <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
          Unsure of Exact Dimensions?
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Send a photo of your sample, worn hose, or machine nameplate to our technical desk via WhatsApp for rapid specification matching.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 glass-panel rounded-2xl p-5 shadow-lg self-start sticky top-28">
        {content}
      </aside>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xs glass-panel h-full p-5 overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Filter Catalogue</span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {content}

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs uppercase font-extrabold rounded-xl shadow-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
