"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Gauge, 
  Settings, 
  Clock, 
  Award, 
  FileCheck2, 
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";
import { BRAND_PARTNERS } from "@/data/catalogue-data";
import { COMPANY_CONFIG } from "@/data/company-config";

export function TechnicalAuthority() {
  return (
    <section className="py-24 bg-white dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      {/* Background Volumetric Lighting Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] glow-ambient-orb rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] glow-sapphire-orb rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
            <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2.5 shadow-[0_0_10px_#f59e0b]" />
            Engineering Standards &amp; Technical Competence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Built Around Engineering Precision,{" "}
            <span className="text-gradient-gold">Not Sales Fluff.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Industrial fluid lines and power transmission systems cannot afford guesswork. We configure every component against pressure thresholds, media chemistry, and dynamic fatigue standards.
          </p>
        </motion.div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-5 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl glass-panel border-amber-500/40 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-md group-hover:scale-108 transition-transform">
              <Gauge className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              Pressure Verification
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Hydraulic assemblies crimped to precise manufacturer ferrule collapse dimensions with standard 4:1 safety factors (10:1 on steam lines).
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
              Hydrostatic Testing Available
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-5 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl glass-panel border-amber-500/40 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-md group-hover:scale-108 transition-transform">
              <Settings className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              Matched Set Tolerances
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Multi-belt drive configurations supplied in precision-matched length batches to eliminate differential slip and premature sheave wear.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
              Zero Differential Slip Guarantee
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-5 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl glass-panel border-amber-500/40 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-md group-hover:scale-108 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              Emergency Breakdown Desk
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Priority mobile dispatch for unscheduled quarry, mine, and industrial plant breakdowns across major Zimbabwean industrial corridors.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
              On-Call 24/7 Response
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="glass-panel glass-panel-hover p-8 rounded-3xl space-y-5 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl glass-panel border-amber-500/40 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-md group-hover:scale-108 transition-transform">
              <FileCheck2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              Statutory Compliance
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Full fiscalized tax invoicing denominated in USD and official RBZ interbank ZiG for streamlined corporate audit compliance.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
              Valid Tax Invoices Guaranteed
            </div>
          </motion.div>
        </div>

        {/* Brand Cross-Reference & Standards Compatibility */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-glow p-8 sm:p-10 rounded-3xl space-y-7 border-amber-500/30"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6">
            <div>
              <div className="text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                Interchangeable Standards &amp; Specification Grades
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Components manufactured to universal dimensional cross-references (SAE, DIN, ISO, BS, SANS).
              </p>
            </div>
            <span className="text-xs text-amber-700 dark:text-amber-300 bg-amber-500/15 px-4 py-2 rounded-full border border-amber-500/40 font-bold self-start sm:self-auto shadow-sm">
              Universal Specification Compatibility
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRAND_PARTNERS.map((brand) => (
              <div 
                key={brand.id}
                className="p-5 glass-panel rounded-2xl text-center space-y-1.5 hover:border-amber-400 transition-all group"
              >
                <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {brand.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {brand.category}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
