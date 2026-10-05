"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Pipette, Waves, Cog, Wrench, Activity, ChevronRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/catalogue-data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Pipette: <Pipette className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  Waves: <Waves className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  Cog: <Cog className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  Layers: <Layers className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  Activity: <Activity className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
};

export function CategoryGrid() {
  return (
    <section className="py-24 bg-white dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      {/* Background Volumetric Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[750px] glow-ambient-orb rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] glow-sapphire-orb rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-14 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 dark:border-white/[0.08] pb-8"
        >
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
              <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2.5 shadow-[0_0_10px_#f59e0b]" />
              Product Architecture &amp; Engineering Divisions
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Industrial Product Families
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Engineered fluid conveyance, bulk materials handling, mechanical power transmission, and heavy abrasion-resistant rubber solutions.
            </p>
          </div>

          <Link
            href="/catalogue"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
          >
            <span>Explore Complete Catalogue ({CATEGORIES.length} Families)</span>
            <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

        {/* 6 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between glass-panel glass-panel-hover rounded-3xl overflow-hidden group relative"
            >
              {/* Image banner preview with rich industrial photography */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={cat.bannerImage}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover brightness-[0.88] contrast-[1.1] group-hover:brightness-100 group-hover:scale-106 transition-all duration-700 ease-out"
                />
                {/* Gradient scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent" />
                
                {/* Top golden hairline */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all duration-300" />

                {/* Subfamily Count Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold rounded-full border border-amber-500/40 shadow-sm">
                  {cat.subcategories.length} Specialized Subfamilies
                </div>

                {/* Category Icon & Title over the image */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center space-x-3.5">
                  <div className="p-3.5 glass-panel rounded-2xl shadow-xl border-amber-500/40 text-amber-500 dark:text-amber-400 group-hover:scale-108 transition-transform">
                    {ICON_MAP[cat.iconName] || <Layers className="w-6 h-6 text-amber-500 dark:text-amber-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {cat.name}
                    </h3>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      Standard &amp; Custom Fabrications
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.shortDescription}
                </p>

                {/* Subcategories list */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center justify-between">
                    <span>Core Manufactured Specifications:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.id}
                        className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.1] rounded-lg font-medium hover:border-amber-400/50 transition-colors"
                      >
                        {sub.name}
                      </span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="px-2.5 py-1.5 text-xs text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg font-bold">
                        +{cat.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <Link
                    href={`/catalogue/${cat.slug}`}
                    className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors py-1"
                  >
                    <span>Browse {cat.name}</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-400 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
