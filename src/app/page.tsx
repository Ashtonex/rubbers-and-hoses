"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock, ChevronRight, ShieldCheck } from "lucide-react";
import { HeroSectionWrapper } from "@/components/home/HeroSectionWrapper";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechnicalAuthority } from "@/components/home/TechnicalAuthority";
import { RfqBanner } from "@/components/home/RfqBanner";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { PRODUCTS } from "@/data/catalogue-data";
import { COMPANY_CONFIG } from "@/data/company-config";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section with 5-Second Proposition & Fast Search */}
      <HeroSectionWrapper />

      {/* 2. Major Product Categories Grid (Discovery) */}
      <CategoryGrid />

      {/* 3. Priority Featured Industrial Components (High-Intent Conversion) */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
        {/* Ambient lighting orb behind featured products */}
        <div className="absolute top-1/2 left-1/3 w-[800px] h-[500px] glow-ambient-orb rounded-full blur-[180px] pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 dark:border-white/[0.08] pb-6"
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
                <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2.5 shadow-[0_0_10px_#f59e0b]" />
                High-Criticality Stock Lines
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight mt-1.5">
                Priority Industrial Components
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                Frequently specified items with rapid depot availability across Harare, Bulawayo, and Mutare.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
            >
              <span>View All {PRODUCTS.length} Specifications</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Served (Relevance & Application Context) */}
      <IndustriesSection />

      {/* 5. Technical Expertise & Credibility (Trust) */}
      <TechnicalAuthority />

      {/* 6. Regional Depot & Branch Fulfillment Desk */}
      <section className="py-20 sm:py-28 bg-white dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
        {/* Ambient lighting orb */}
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] glow-sapphire-orb rounded-full blur-[160px] pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-3"
          >
            <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
              <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2.5 shadow-[0_0_10px_#f59e0b]" />
              Regional Logistics Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight">
              Depot Pick-Up &amp; Site Dispatch Corridors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Serving commercial mines, commercial farming estates, sawmills, and manufacturing operations nationwide with scheduled courier dispatch and counter collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_CONFIG.branches.map((branch, idx) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-8 glass-panel glass-panel-hover rounded-3xl space-y-5 relative group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                      {branch.city} Hub
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {branch.name}
                    </h3>
                  </div>
                  {branch.isMainDistributionHub && (
                    <span className="px-3.5 py-1 text-xs font-bold uppercase bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/40 rounded-full shadow-sm">
                      Central Hub
                    </span>
                  )}
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-200 dark:border-white/[0.08]">
                  {branch.addressLines.map((line, i) => (
                    <div key={i} className="flex items-start">
                      {i === 0 && <MapPin className="w-4 h-4 mr-2.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />}
                      {i > 0 && <span className="w-4 mr-2.5 shrink-0" />}
                      <span className={line.startsWith("[") ? "text-amber-600 dark:text-amber-400/80 text-[11px]" : "text-slate-700 dark:text-slate-200 font-medium"}>
                        {line}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] space-y-2 text-xs">
                  <div className="flex items-center text-slate-800 dark:text-slate-200">
                    <Phone className="w-4 h-4 mr-2.5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <span className="font-semibold">{branch.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
                    <Clock className="w-4 h-4 mr-2.5 text-slate-400 shrink-0" />
                    <span>{branch.operatingHours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08]">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Depot Details &amp; Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RFQ Conversion Callout (Conversion) */}
      <RfqBanner />
    </div>
  );
}
