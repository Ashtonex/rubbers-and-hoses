"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Layers, 
  Settings, 
  Clock, 
  FileCheck2, 
  ArrowRight,
  FileText
} from "lucide-react";

export function AboutView() {
  return (
    <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-slate-200 dark:border-white/[0.08] pb-6 space-y-3"
      >
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-[0_0_8px_#f59e0b]" />
          Company &amp; Capabilities Profile
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Engineered for Heavy Duty.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed">
          Supplying heavy-duty fluid transfer hoses, high-torque power transmission belting, industrial rubber sheeting, and conveyor hardware across Zimbabwe.
        </p>
      </motion.div>

      {/* Operational Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-industrial-300 leading-relaxed"
        >
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-900 dark:text-white tracking-tight">
            Practical Engineering Focus
          </h2>
          <p>
            Industrial operations in Zimbabwe face unique environmental challenges: elevated operating ambient temperatures, abrasive quartz and chrome ores, high static suction lifts during dry winter irrigation, and harsh road vibration on transport fleets.
          </p>
          <p>
            We operate on a straightforward commercial philosophy: supply components manufactured to strict international dimensional and material benchmarks (SAE, EN, DIN, ISO) that ensure plant managers, fitters, and operators achieve predictable service life without catastrophic failure.
          </p>
          <p>
            Every product in our catalogue is supported by complete technical parameters: burst-to-working pressure safety ratios, temperature envelopes, elastomeric compatibility matrices, and precision part codes.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel-glow p-8 rounded-3xl space-y-6 border border-slate-200 dark:border-white/[0.08] shadow-lg"
        >
          <h3 className="text-sm font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider border-b border-slate-200 dark:border-white/[0.08] pb-3">
            Procurement Principles
          </h3>
          <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-industrial-300">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-3 font-extrabold text-sm">01.</span>
              <span><strong className="text-slate-900 dark:text-white">Zero Guesswork:</strong> Exact part numbers, pitch lengths, and inside diameters confirmed prior to supply.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-3 font-extrabold text-sm">02.</span>
              <span><strong className="text-slate-900 dark:text-white">Rapid Proformas:</strong> Formal proforma tax invoices generated within 2 hours for verified requisitions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-3 font-extrabold text-sm">03.</span>
              <span><strong className="text-slate-900 dark:text-white">Statutory Compliance:</strong> Fully compliant invoicing in USD and official RBZ interbank ZiG.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-3 font-extrabold text-sm">04.</span>
              <span><strong className="text-slate-900 dark:text-white">Breakdown Priority:</strong> Dedicated emergency desk for unscheduled plant stoppages.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Data Verification Notice */}
      <div className="p-7 glass-panel rounded-3xl text-xs sm:text-sm text-slate-600 dark:text-industrial-400 space-y-2.5 border border-amber-500/20 shadow-sm">
        <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold uppercase text-xs tracking-wider">
          <FileCheck2 className="w-4 h-4" />
          <span>Factual Transparency Notice</span>
        </div>
        <p className="leading-relaxed">
          This digital platform is deployed as a production-grade demonstration instance. Official corporate incorporation records, verified physical street addresses, and distributor agreements will be updated upon final client review. No historical establishment dates or unverified certifications are asserted as factual truth.
        </p>
      </div>

      {/* Action CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-10 glass-panel-glow rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 dark:border-white/[0.08] shadow-lg"
      >
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wide">
            Ready to Request a Supply Quotation?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300">
            Explore our catalogue of industrial hoses, belts, and rubber products.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/catalogue"
            className="px-7 py-3.5 glass-panel hover:border-amber-500/50 text-slate-900 dark:text-white text-xs font-bold uppercase rounded-xl transition-all border border-slate-200 dark:border-white/10 shadow-sm"
          >
            Explore Catalogue
          </Link>
          <Link
            href="/rfq"
            className="px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs font-extrabold uppercase rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all flex items-center hover:scale-[1.02]"
          >
            Submit RFQ
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
