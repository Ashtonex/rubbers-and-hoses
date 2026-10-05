"use client";

import React, { useState } from "react";
import { ProductVariant, SpecificationRow } from "@/types/industrial";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { Plus, Check, MessageSquare, ShieldCheck } from "lucide-react";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

interface SpecTableProps {
  productId: string;
  productSlug: string;
  productName: string;
  categorySlug: string;
  variants: ProductVariant[];
  specifications: SpecificationRow[];
}

export function SpecTable({
  productId,
  productSlug,
  productName,
  categorySlug,
  variants,
  specifications,
}: SpecTableProps) {
  const { addItem, items } = useQuoteBasket();
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants[0]?.id || null
  );

  const handleAddVariant = (v: ProductVariant) => {
    addItem({
      productId,
      productSlug,
      productName,
      categorySlug,
      selectedVariantCode: v.code,
      sizeOrSpec: v.nominalSize,
      quantity: "1",
      unit: "unit",
      notes: `Specific part number: ${v.code}`,
    });
  };

  return (
    <div className="space-y-8">
      {/* 1. General Operating & Material Specification Key-Value Grid */}
      {specifications.length > 0 && (
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-[0_0_8px_#f59e0b]" />
            General Engineering Benchmarks
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specifications.map((spec, idx) => (
              <div
                key={idx}
                className="p-5 glass-panel rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-white/[0.08] shadow-sm"
              >
                <div className="text-xs text-slate-500 dark:text-industrial-400 uppercase tracking-wide font-medium mb-1.5">
                  {spec.name}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Dimensional & Variant Selection Table */}
      {variants.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-[0_0_8px_#f59e0b]" />
              Standard Manufactured Sizes &amp; Part Codes ({variants.length} Options)
            </div>
            <div className="text-xs text-slate-500 dark:text-industrial-400">
              Select any part row to pre-fill quote
            </div>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/[0.08]">
            <div className="table-scroll-container">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-industrial-950/90 border-b border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-industrial-300 uppercase text-[11px] tracking-wider font-bold">
                    <th className="py-4 px-5">Part Code</th>
                    <th className="py-4 px-5">Size / Dimensions</th>
                    {variants.some((v) => v.workingPressureBar) && (
                      <th className="py-4 px-5">Working Pressure</th>
                    )}
                    {variants.some((v) => v.burstPressureBar) && (
                      <th className="py-4 px-5">Burst Pressure</th>
                    )}
                    {variants.some((v) => v.minBendRadiusMm) && (
                      <th className="py-4 px-5">Min Bend Radius</th>
                    )}
                    {variants.some((v) => v.standardCoilOrLength) && (
                      <th className="py-4 px-5">Packaging / Roll</th>
                    )}
                    <th className="py-4 px-5">Status</th>
                    <th className="py-4 px-5 text-right">RFQ Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 dark:divide-white/[0.04]">
                  {variants.map((v) => {
                    const isAdded = items.some(
                      (i) => i.productId === productId && i.selectedVariantCode === v.code
                    );

                    const rowWhatsAppUrl = buildProductWhatsAppLink({
                      productName,
                      productCode: productId,
                      variantCode: v.code,
                      sizeOrSpec: v.nominalSize,
                    });

                    return (
                      <tr
                        key={v.id}
                        className={`hover:bg-amber-500/[0.06] transition-colors cursor-pointer ${
                          selectedVariantId === v.id ? "bg-amber-500/[0.08]" : ""
                        }`}
                        onClick={() => setSelectedVariantId(v.id)}
                      >
                        <td className="py-4 px-5 font-bold font-mono text-amber-600 dark:text-amber-400 whitespace-nowrap">
                          {v.code}
                        </td>
                        <td className="py-4 px-5 text-slate-900 dark:text-white font-semibold whitespace-nowrap">
                          {v.nominalSize}
                        </td>
                        {variants.some((item) => item.workingPressureBar) && (
                          <td className="py-4 px-5 text-slate-700 dark:text-industrial-200 whitespace-nowrap font-medium">
                            {v.workingPressureBar ? `${v.workingPressureBar} bar (${v.workingPressurePsi || Math.round(v.workingPressureBar * 14.5)} PSI)` : "—"}
                          </td>
                        )}
                        {variants.some((item) => item.burstPressureBar) && (
                          <td className="py-4 px-5 text-slate-500 dark:text-industrial-400 whitespace-nowrap">
                            {v.burstPressureBar ? `${v.burstPressureBar} bar` : "—"}
                          </td>
                        )}
                        {variants.some((item) => item.minBendRadiusMm) && (
                          <td className="py-4 px-5 text-slate-500 dark:text-industrial-400 whitespace-nowrap">
                            {v.minBendRadiusMm ? `${v.minBendRadiusMm} mm` : "—"}
                          </td>
                        )}
                        {variants.some((item) => item.standardCoilOrLength) && (
                          <td className="py-4 px-5 text-slate-500 dark:text-industrial-400 whitespace-nowrap">
                            {v.standardCoilOrLength || "Standard"}
                          </td>
                        )}
                        <td className="py-4 px-5 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] uppercase font-bold glass-panel text-slate-700 dark:text-industrial-300 border border-slate-200 dark:border-white/[0.08]">
                            {v.availability === "in_stock" ? "Standard Stock" : v.availability === "cut_to_length" ? "Cut to Length" : "On Request"}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end space-x-2">
                            <a
                              href={rowWhatsAppUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 glass-panel hover:border-emerald-500/40 rounded-xl transition-colors border border-slate-200 dark:border-white/10"
                              title="Inquire via WhatsApp"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddVariant(v);
                              }}
                              className={`px-3.5 py-2 text-xs font-bold uppercase rounded-xl transition-all flex items-center cursor-pointer ${
                                isAdded
                                  ? "bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300"
                                  : "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.25)]"
                              }`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5 mr-1" />
                                  Added
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 mr-1" />
                                  RFQ
                                </>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
