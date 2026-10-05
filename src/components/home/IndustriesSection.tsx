"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Tractor, Factory, Truck, HardHat, ChevronRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries-data";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  mining: <Mountain className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  agriculture: <Tractor className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  manufacturing: <Factory className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  "automotive-transport": <Truck className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
  construction: <HardHat className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
};

export function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      {/* Ambient background light orbs */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] glow-ambient-orb rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] glow-sapphire-orb rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-14 relative z-10">
        {/* Header */}
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
              Sectors &amp; Application Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineered for Severe Operating Environments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Solutions configured specifically for Zimbabwean geology, Lowveld irrigation demands, high ambient temperatures, and 24/7 continuous plant duty.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
          >
            <span>All Industry Solutions</span>
            <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group relative"
            >
              <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={ind.heroImage}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover brightness-[0.85] contrast-[1.1] group-hover:brightness-95 group-hover:scale-106 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />
                
                <div className="absolute bottom-4 left-5 right-5 flex items-center space-x-3.5">
                  <div className="p-3.5 glass-panel rounded-2xl shadow-xl border-amber-500/40 text-amber-500 dark:text-amber-400 group-hover:scale-108 transition-transform">
                    {INDUSTRY_ICONS[ind.slug] || <Factory className="w-6 h-6 text-amber-500 dark:text-amber-400" />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                    {ind.name}
                  </h3>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {ind.subtitle}
                </p>

                {/* Key Demanding Conditions */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Operating Challenges:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {ind.demandingConditions.slice(0, 2).map((cond, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-500 dark:text-amber-400 mr-2 shrink-0 font-bold">▸</span>
                        <span className="line-clamp-1">{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                  >
                    <span>View {ind.name} Solutions</span>
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
