"use client";

import React from "react";
import Link from "next/link";
import { X, Trash2, ArrowRight, FileText, ShoppingBag, Plus, Minus } from "lucide-react";
import { useQuoteBasket } from "@/context/QuoteBasketContext";

export function QuoteBasketDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, updateQuantity, clearBasket, totalItemCount } = useQuoteBasket();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#080B10]/98 backdrop-blur-2xl border-l border-slate-200 dark:border-white/[0.08] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/90 dark:bg-[#06080C] flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl glass-panel border-amber-500/30 flex items-center justify-center text-amber-500">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  RFQ Project Basket
                </h2>
                <p className="text-xs text-amber-600 dark:text-amber-400/90 font-medium">
                  {items.length} item{items.length !== 1 ? "s" : ""} selected for quotation
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-slate-400 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white glass-panel hover:border-amber-500/40 rounded-xl transition-colors cursor-pointer border border-slate-200 dark:border-white/10"
              aria-label="Close RFQ basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-industrial-400 pb-2 border-b border-slate-200 dark:border-white/[0.06]">
                  <span className="font-medium">Selected Components</span>
                  <button
                    type="button"
                    onClick={clearBasket}
                    className="text-red-500 hover:text-red-600 transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3.5">
                  {items.map((item, idx) => (
                    <div 
                      key={`${item.productId}-${item.selectedVariantCode || idx}`}
                      className="p-4 glass-panel rounded-2xl space-y-3 relative group border border-slate-200 dark:border-white/[0.08] shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">
                            {item.selectedVariantCode || "STD-SPEC"}
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                            {item.productName}
                          </div>
                          {item.sizeOrSpec && (
                            <div className="text-xs text-slate-600 dark:text-industrial-300 mt-0.5">
                              Spec: {item.sizeOrSpec}
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.productId, item.selectedVariantCode)}
                          className="text-slate-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer"
                          aria-label={`Remove ${item.productName}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-slate-200 dark:border-white/[0.06]">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-xs text-slate-500 dark:text-industrial-400">Qty:</span>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.productId, e.target.value, item.selectedVariantCode)}
                            className="w-16 px-2.5 py-1 glass-panel text-xs text-slate-900 dark:text-white rounded-lg text-center focus:outline-none focus:border-amber-500 font-bold border border-slate-200 dark:border-white/10"
                          />
                          <span className="text-xs text-slate-500 dark:text-industrial-400">{item.unit || "units"}</span>
                        </div>

                        <Link
                          href={`/catalogue/${item.categorySlug}/${item.productSlug}`}
                          onClick={() => setIsDrawerOpen(false)}
                          className="text-xs text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-semibold"
                        >
                          View Specs →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="py-16 text-center text-slate-500 dark:text-industrial-400 space-y-4">
                <div className="w-16 h-16 rounded-2xl glass-panel border-slate-200 dark:border-white/[0.08] mx-auto flex items-center justify-center text-amber-500">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  Your RFQ Project Basket is Empty
                </div>
                <p className="text-xs text-slate-600 dark:text-industrial-300 max-w-xs mx-auto leading-relaxed">
                  Browse our industrial catalogue and add products, hoses, belts, or conveyor hardware to generate a consolidated quotation.
                </p>
                <div className="pt-2">
                  <Link
                    href="/catalogue"
                    onClick={() => setIsDrawerOpen(false)}
                    className="inline-flex items-center px-5 py-3 text-xs uppercase tracking-wider font-extrabold glass-panel hover:border-amber-500/50 text-slate-900 dark:text-white rounded-xl transition-all border border-slate-200 dark:border-white/10 shadow-sm"
                  >
                    Explore Catalogue Now
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/90 dark:bg-[#06080C] space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-industrial-400">
                <span className="font-medium">Total Items:</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">{totalItemCount} unit(s)</span>
              </div>

              <Link
                href="/rfq"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full flex items-center justify-center py-4 px-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs uppercase tracking-wider font-extrabold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all hover:scale-[1.02]"
              >
                Proceed to Formal RFQ
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-2 text-xs text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white text-center transition-colors cursor-pointer"
              >
                Continue Adding Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
