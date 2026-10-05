"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Plus, 
  MessageSquare, 
  Layers, 
  ShieldCheck, 
  Activity, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Product } from "@/types/industrial";
import { CATEGORIES } from "@/data/catalogue-data";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useQuoteBasket();
  const category = CATEGORIES.find((c) => c.slug === product.categorySlug);

  // Check if already in basket
  const isInBasket = items.some((i) => i.productId === product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      selectedVariantCode: product.variants[0]?.code || product.code,
      sizeOrSpec: product.variants[0]?.nominalSize || "Standard Spec",
      quantity: "1",
      unit: "unit",
      notes: "Quick added from catalogue overview",
    });
  };

  const whatsappUrl = buildProductWhatsAppLink({
    productName: product.name,
    productCode: product.code,
    variantCode: product.variants[0]?.code,
    sizeOrSpec: product.variants[0]?.nominalSize,
  });

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col glass-panel glass-panel-hover rounded-3xl overflow-hidden group relative"
    >
      {/* Top Hairline Amber Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all z-20" />

      {/* Visual Header / Image Area */}
      <div className="relative h-56 w-full bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-white/[0.08]">
        <Image
          src={product.imageUrl}
          alt={product.altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover brightness-[0.92] contrast-[1.08] group-hover:brightness-100 group-hover:scale-106 transition-all duration-500 ease-out"
        />

        {/* Crisp Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/35" />

        {/* Category & Code Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
          <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-white border border-white/20 rounded-lg shadow-md">
            {product.code}
          </span>
          {product.featured && (
            <span className="px-2.5 py-1 text-xs font-extrabold uppercase bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-lg shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-black" />
              Featured
            </span>
          )}
        </div>

        {/* Working pressure indicator overlay if present */}
        {product.workingPressureRangeBar && (
          <div className="absolute bottom-3 right-3 px-3 py-1 text-xs font-bold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/40 rounded-lg shadow-md">
            {product.workingPressureRangeBar}
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
            {category?.name || "Industrial Component"}
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 leading-snug transition-colors">
            <Link 
              href={`/catalogue/${product.categorySlug}/${product.slug}`}
              className="focus:outline-none focus:underline"
            >
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Key Engineering Specifications List */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] space-y-1.5 text-xs">
          {product.reinforcement && (
            <div className="flex items-start text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400 mr-2 shrink-0 font-medium">Reinforcement:</span>
              <span className="truncate text-slate-900 dark:text-white font-medium">{product.reinforcement}</span>
            </div>
          )}
          {product.temperatureRange && (
            <div className="flex items-center text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400 mr-2 shrink-0 font-medium">Temp Envelope:</span>
              <span className="text-slate-900 dark:text-white font-medium">{product.temperatureRange.minC}°C to {product.temperatureRange.maxC}°C</span>
            </div>
          )}
          {product.standardsCompliance && product.standardsCompliance.length > 0 && (
            <div className="flex items-center text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400 mr-2 shrink-0 font-medium">Standard:</span>
              <span className="truncate text-amber-600 dark:text-amber-300 font-semibold">{product.standardsCompliance[0]}</span>
            </div>
          )}
          {product.variants.length > 0 && (
            <div className="flex items-center text-slate-600 dark:text-slate-300 pt-0.5">
              <span className="text-slate-500 dark:text-slate-400 mr-2 shrink-0 font-medium">Available Sizes:</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">
                {product.variants.length} standard options
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons: Quick RFQ + WhatsApp Direct */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-2.5">
          <Link
            href={`/catalogue/${product.categorySlug}/${product.slug}`}
            className="flex-1 py-2.5 px-3.5 glass-panel hover:border-amber-400 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
          </Link>

          <button
            type="button"
            onClick={handleQuickAdd}
            className={`py-2.5 px-4 text-xs font-extrabold uppercase rounded-xl transition-all flex items-center justify-center cursor-pointer ${
              isInBasket
                ? "bg-emerald-600 dark:bg-emerald-950/80 border border-emerald-500 text-white dark:text-emerald-300"
                : "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
            }`}
            title="Add to RFQ Project Basket"
          >
            {isInBasket ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                In RFQ
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 mr-1" />
                RFQ
              </>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 glass-panel hover:border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 rounded-xl transition-colors"
            title="Instant WhatsApp Inquiry"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
