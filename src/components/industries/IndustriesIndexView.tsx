"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Tractor, Factory, Truck, HardHat } from "lucide-react";
import { INDUSTRIES } from "@/data/industries-data";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  mining: <Mountain className="w-5 h-5 text-amber-500" />,
  agriculture: <Tractor className="w-5 h-5 text-amber-500" />,
  manufacturing: <Factory className="w-5 h-5 text-amber-500" />,
  "automotive-transport": <Truck className="w-5 h-5 text-amber-500" />,
  construction: <HardHat className="w-5 h-5 text-amber-500" />,
};

export function IndustriesIndexView() {
  return (
    <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-16 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-slate-200 dark:border-white/[0.08] pb-6 space-y-3"
      >
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mr-2" />
          Sector Application Engineering
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Sectors &amp; Operating Environments
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed">
          Each industrial sector presents distinct mechanical, thermal, and chemical challenges. We stock and configure components built to withstand Zimbabwean operating environments without premature degradation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((ind, idx) => (
          <motion.div
            key={ind.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 dark:border-white/[0.08] shadow-sm"
          >
            <div className="relative h-60 w-full bg-slate-900 dark:bg-industrial-950 overflow-hidden">
              <Image
                src={ind.heroImage}
                alt={ind.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center space-x-3.5">
                <div className="p-3 bg-white/90 dark:bg-industrial-900/90 border border-slate-200 dark:border-white/10 rounded-xl shadow-lg group-hover:border-amber-500/50 transition-colors">
                  {INDUSTRY_ICONS[ind.slug] || <Factory className="w-5 h-5 text-amber-500" />}
                </div>
                <h2 className="text-lg font-bold text-white uppercase tracking-wide">
                  {ind.name}
                </h2>
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300 leading-relaxed">
                {ind.subtitle}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-200/80 dark:border-white/5">
                <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400/90 font-bold">
                  Critical Demands:
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-industrial-400">
                  {ind.demandingConditions.slice(0, 3).map((cond, cIdx) => (
                    <li key={cIdx} className="flex items-start">
                      <span className="text-amber-500 mr-2 font-bold">▶</span>
                      <span className="line-clamp-1">{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/5">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="flex items-center justify-between text-xs font-bold uppercase text-slate-700 dark:text-industrial-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                >
                  <span>Explore Sector Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-500" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
