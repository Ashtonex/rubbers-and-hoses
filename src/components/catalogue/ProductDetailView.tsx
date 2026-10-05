"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  FileText, 
  MessageSquare, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Plus, 
  Truck, 
  Clock, 
  Layers,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { Product, Category } from "@/types/industrial";
import { SpecTable } from "@/components/catalogue/SpecTable";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";
import { COMPANY_CONFIG } from "@/data/company-config";

interface ProductDetailViewProps {
  product: Product;
  category: Category;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, category, relatedProducts }: ProductDetailViewProps) {
  const { addItem, items } = useQuoteBasket();
  const [selectedVariantCode, setSelectedVariantCode] = useState<string>(
    product.variants[0]?.code || product.code
  );
  const [selectedQuantity, setSelectedQuantity] = useState<string>("1");
  const [notes, setNotes] = useState<string>("");
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const selectedVariant = product.variants.find((v) => v.code === selectedVariantCode) || product.variants[0];

  const handleAddToRfq = () => {
    addItem({
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      categorySlug: product.categorySlug,
      selectedVariantCode: selectedVariant?.code || product.code,
      sizeOrSpec: selectedVariant?.nominalSize || "Standard Spec",
      quantity: selectedQuantity || "1",
      unit: "unit",
      notes: notes || undefined,
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
  };

  const whatsappUrl = buildProductWhatsAppLink({
    productName: product.name,
    productCode: product.code,
    variantCode: selectedVariant?.code,
    sizeOrSpec: selectedVariant?.nominalSize,
  });

  return (
    <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-industrial-400 font-medium">
        <Link href="/" className="hover:text-amber-500 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-industrial-600" />
        <Link href="/catalogue" className="hover:text-amber-500 transition-colors">
          Catalogue
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-industrial-600" />
        <Link href={`/catalogue/${category.slug}`} className="hover:text-amber-500 transition-colors">
          {category.name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-industrial-600" />
        <span className="text-slate-900 dark:text-industrial-200 font-semibold truncate max-w-sm">{product.name}</span>
      </nav>

      {/* Main Product Showcase Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left: Product Image & Badges (Col 1-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="relative aspect-square w-full bg-slate-100 dark:bg-industrial-950/80 border border-slate-200 dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl glass-panel group">
            <Image
              src={product.imageUrl}
              alt={product.altText}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Top Amber Hairline */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            {/* Code Badge */}
            <div className="absolute top-5 left-5 glass-panel border-amber-500/40 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-amber-600 dark:text-amber-300 uppercase shadow-lg tracking-wider">
              {product.code}
            </div>

            {/* Standards Compliance Pills */}
            {product.standardsCompliance && (
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {product.standardsCompliance.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold glass-panel text-slate-800 dark:text-white/90 border-slate-200/80 dark:border-white/10 rounded-lg shadow-sm"
                  >
                    {std}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Download Datasheet Placeholder & Guarantee Note */}
          <div className="p-4 sm:p-5 glass-panel rounded-2xl flex items-center justify-between border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {product.datasheetName || "Technical Product Datasheet.pdf"}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-industrial-400">
                  Includes full dimensional tolerances &amp; chemical tables
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert(`Demonstration technical PDF download: ${product.datasheetName || "Datasheet.pdf"} is packaged for production verification.`)}
              className="px-4 py-2 glass-panel hover:border-amber-500/40 text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
            >
              Download PDF
            </button>
          </div>
        </motion.div>

        {/* Right: Technical Summary, Construction & Dominant CTAs (Col 6-12) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              <span>{category.name}</span>
              <span className="text-slate-400 dark:text-industrial-600">•</span>
              <span className="text-slate-500 dark:text-industrial-300">Technical Spec Sheet</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 leading-relaxed pt-1">
              {product.shortDescription}
            </p>
          </div>

          {/* Operating Envelopes Snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-5 sm:p-6 glass-panel rounded-2xl text-xs border border-slate-200 dark:border-white/[0.08] shadow-sm">
            {product.workingPressureRangeBar && (
              <div>
                <span className="text-slate-500 dark:text-industrial-400 block text-[11px] font-medium tracking-wide uppercase">Working Pressure:</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm mt-0.5 block">{product.workingPressureRangeBar}</span>
              </div>
            )}
            {product.temperatureRange && (
              <div>
                <span className="text-slate-500 dark:text-industrial-400 block text-[11px] font-medium tracking-wide uppercase">Operating Temp:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block">
                  {product.temperatureRange.minC}°C to +{product.temperatureRange.maxC}°C
                </span>
              </div>
            )}
            {product.safetyFactor && (
              <div>
                <span className="text-slate-500 dark:text-industrial-400 block text-[11px] font-medium tracking-wide uppercase">Burst Safety Factor:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block">{product.safetyFactor}</span>
              </div>
            )}
            {product.reinforcement && (
              <div className="sm:col-span-2">
                <span className="text-slate-500 dark:text-industrial-400 block text-[11px] font-medium tracking-wide uppercase">Reinforcement:</span>
                <span className="font-semibold text-slate-800 dark:text-industrial-100 truncate block mt-0.5">{product.reinforcement}</span>
              </div>
            )}
            {product.tubeMaterial && (
              <div>
                <span className="text-slate-500 dark:text-industrial-400 block text-[11px] font-medium tracking-wide uppercase">Tube / Core:</span>
                <span className="font-semibold text-slate-800 dark:text-industrial-100 mt-0.5 block">{product.tubeMaterial}</span>
              </div>
            )}
          </div>

          {/* Commercial Conversion Action Card */}
          <div className="p-6 sm:p-8 glass-panel-glow rounded-3xl space-y-5 relative overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-lg">
            <div className="absolute top-0 right-0 w-36 h-[2px] bg-gradient-to-l from-amber-500 to-transparent shadow-[0_0_10px_#f59e0b]" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 dark:border-white/[0.08] pb-4">
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-900 dark:text-white">
                Request Supply Quotation
              </span>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                Quotes denominated in USD &amp; ZiG
              </span>
            </div>

            {/* Quick Sizing & Quantity Input */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                  Select Size / Part Number:
                </label>
                <select
                  value={selectedVariantCode}
                  onChange={(e) => setSelectedVariantCode(e.target.value)}
                  className="w-full glass-panel text-xs text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                >
                  {product.variants.map((v) => (
                    <option key={v.id} value={v.code} className="bg-white dark:bg-industrial-950 text-slate-900 dark:text-white font-mono">
                      {v.code} — {v.nominalSize} {v.workingPressureBar ? `(${v.workingPressureBar} bar)` : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(e.target.value)}
                    className="w-full glass-panel text-xs text-slate-900 dark:text-white rounded-xl px-3 py-3 text-center focus:outline-none focus:border-amber-500 font-bold border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Optional Application Context Note */}
            <div className="space-y-2">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Machine or Application Details (Optional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Komatsu excavator boom line, 100m continuous coil, etc."
                className="w-full glass-panel text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              />
            </div>

            {/* Dominant Primary & Secondary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={handleAddToRfq}
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs uppercase tracking-wider font-extrabold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center hover:scale-[1.02] cursor-pointer"
              >
                {addedSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2 text-slate-950" />
                    Added to RFQ Basket!
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Request Quote for This Product
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 glass-panel hover:border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs uppercase tracking-wider font-bold rounded-xl shadow transition-colors flex items-center justify-center border border-slate-200 dark:border-white/10"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-500" />
                WhatsApp Sales Desk
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-industrial-400 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
              <span className="text-amber-600 dark:text-amber-400 font-medium">✓ Rapid stock availability verification</span>
              <span>✓ Official tax invoice provided (USD / ZiG)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comprehensive Technical Specification & Sizes Table */}
      <section className="pt-8 border-t border-slate-200 dark:border-white/[0.08] space-y-6">
        <div className="border-b border-slate-200 dark:border-white/[0.08] pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight">
            Technical Specifications &amp; Dimensional Variants
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-industrial-400 mt-1">
            Select specific part codes below to add directly into your quotation request or order via WhatsApp.
          </p>
        </div>

        <SpecTable
          productId={product.id}
          productSlug={product.slug}
          productName={product.name}
          categorySlug={product.categorySlug}
          variants={product.variants}
          specifications={product.specifications}
        />
      </section>

      {/* Industrial Applications & Target Sectors */}
      <section className="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-7 glass-panel rounded-2xl space-y-4 border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3" />
            Typical Operating Applications
          </h3>
          <ul className="space-y-3 text-xs text-slate-700 dark:text-industrial-300">
            {product.applications.map((app, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-amber-500 mr-2.5 font-bold">▶</span>
                <span className="leading-relaxed">{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-7 glass-panel rounded-2xl space-y-4 border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3" />
            Full Technical Description &amp; Construction
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300 leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-slate-200 dark:border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase text-slate-900 dark:text-white tracking-tight">
              Related Industrial Components &amp; Fittings
            </h2>
            <Link
              href={`/catalogue/${category.slug}`}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              More in {category.name} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="p-6 glass-panel-hover rounded-2xl flex flex-col justify-between space-y-4 group border border-slate-200 dark:border-white/[0.08] shadow-sm"
              >
                <div>
                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    {rel.code}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mt-1.5">
                    <Link href={`/catalogue/${rel.categorySlug}/${rel.slug}`}>
                      {rel.name}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-industrial-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/catalogue/${rel.categorySlug}/${rel.slug}`}
                  className="text-xs font-semibold uppercase text-slate-600 dark:text-industrial-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/5 transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
