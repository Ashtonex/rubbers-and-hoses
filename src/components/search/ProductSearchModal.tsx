"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, CornerDownLeft, Layers, Hash } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/catalogue-data";
import { Product } from "@/types/industrial";

interface ProductSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductSearchModal({ isOpen, onClose }: ProductSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global shortcut to toggle Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // High-performance multi-attribute search indexing
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      // Suggest featured or high-demand products when query is empty
      return PRODUCTS.filter((p) => p.featured).slice(0, 6);
    }

    const tokens = trimmed.split(/\s+/).filter(Boolean);

    return PRODUCTS.filter((product) => {
      // Create searchable haystack
      const variantCodes = product.variants.map((v) => `${v.code} ${v.nominalSize}`).join(" ");
      const specValues = product.specifications.map((s) => `${s.name} ${s.value}`).join(" ");
      const searchableText = `
        ${product.name} 
        ${product.code} 
        ${product.categorySlug} 
        ${product.subcategorySlug} 
        ${product.shortDescription} 
        ${product.searchKeywords.join(" ")} 
        ${product.applications.join(" ")} 
        ${variantCodes} 
        ${specValues}
      `.toLowerCase();

      // Check if all tokens exist in the searchable text
      return tokens.every((token) => searchableText.includes(token));
    }).slice(0, 8);
  }, [query]);

  // Handle arrow key navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      const selected = results[selectedIndex];
      router.push(`/catalogue/${selected.categorySlug}/${selected.slug}`);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-20 flex items-start justify-center">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#090D14] glass-panel-glow border border-slate-200 dark:border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden transition-all"
        role="dialog"
        aria-modal="true"
        aria-label="Search industrial catalogue"
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 dark:border-white/10 flex items-center px-5 py-4 bg-slate-50 dark:bg-industrial-950/80">
          <Search className="w-5 h-5 text-amber-500 shrink-0 mr-3.5" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search part code (e.g. SPB 2600, R2AT-08), name, or application..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white mr-2 cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-[10px] font-mono uppercase bg-slate-200 dark:bg-industrial-900 text-slate-600 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded border border-slate-300 dark:border-white/10 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Popular / Quick Filter Suggestions */}
        <div className="bg-slate-100/60 dark:bg-industrial-950/40 px-5 py-2.5 border-b border-slate-200 dark:border-white/5 flex items-center gap-2 overflow-x-auto text-xs text-slate-500 dark:text-industrial-400 font-mono">
          <span className="text-slate-400 dark:text-industrial-500 shrink-0">Quick Search:</span>
          {["fan belt", "SPB 2600", "layflat", "suction hose", "conveyor belt", "camlock", "rubber sheet"].map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className="px-2.5 py-0.5 bg-white dark:bg-industrial-900/60 hover:bg-amber-500/10 text-slate-700 dark:text-industrial-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-full border border-slate-200 dark:border-white/5 hover:border-amber-500/30 whitespace-nowrap transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-slate-100 dark:divide-white/5 p-2">
          {results.length > 0 ? (
            results.map((product, idx) => {
              const isSelected = idx === selectedIndex;
              const category = CATEGORIES.find((c) => c.slug === product.categorySlug);

              return (
                <Link
                  key={product.id}
                  href={`/catalogue/${product.categorySlug}/${product.slug}`}
                  onClick={onClose}
                  className={`flex items-start justify-between p-3.5 rounded-xl transition-all group ${
                    isSelected ? "bg-amber-500/15 border-l-4 border-amber-500" : "hover:bg-slate-100/80 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="space-y-1.5 pr-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded">
                        {product.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-industrial-400">
                        {category?.name}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-900 dark:text-industrial-100 group-hover:text-amber-600 dark:group-hover:text-white">
                      {product.name}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-industrial-400 line-clamp-1">
                      {product.shortDescription}
                    </p>

                    {/* Matching variants preview */}
                    {product.variants.length > 0 && (
                      <div className="text-[11px] font-mono text-slate-500 dark:text-industrial-500 pt-0.5 flex flex-wrap gap-1">
                        <span>Sizes:</span>
                        {product.variants.slice(0, 4).map((v) => (
                          <span key={v.id} className="bg-slate-100 dark:bg-industrial-950 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/5 text-slate-700 dark:text-industrial-400">
                            {v.code || v.nominalSize}
                          </span>
                        ))}
                        {product.variants.length > 4 && <span>+{product.variants.length - 4} more</span>}
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 self-center">
                    <ArrowRight className={`w-4 h-4 text-slate-400 dark:text-industrial-500 group-hover:text-amber-500 transition-transform ${isSelected ? "translate-x-1 text-amber-500" : ""}`} />
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-500 dark:text-industrial-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-400 dark:text-industrial-600 mb-2" />
              <div className="text-sm font-medium text-slate-800 dark:text-industrial-200">
                No exact catalogue items found for &ldquo;{query}&rdquo;
              </div>
              <p className="text-xs text-slate-500 dark:text-industrial-500 max-w-sm mx-auto leading-relaxed">
                Try alternative terminology (e.g. &ldquo;wedge belt&rdquo; instead of &ldquo;drive belt&rdquo;, or diameter in inches &ldquo;2 inch&rdquo;).
              </p>
              <div className="pt-2">
                <Link
                  href="/rfq"
                  onClick={onClose}
                  className="inline-flex items-center text-xs font-mono text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold"
                >
                  Send a Custom Specification Enquiry →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Info */}
        <div className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-industrial-950/80 px-5 py-3 flex items-center justify-between text-xs text-slate-500 dark:text-industrial-500 font-mono">
          <div className="flex items-center space-x-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-industrial-900 border border-slate-300 dark:border-white/10 rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-industrial-900 border border-slate-300 dark:border-white/10 rounded text-[10px]">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-industrial-900 border border-slate-300 dark:border-white/10 rounded text-[10px]">Enter</kbd> select
            </span>
          </div>
          <div>
            Showing {results.length} result{results.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
