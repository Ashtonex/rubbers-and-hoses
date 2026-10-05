"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  HelpCircle, 
  Layers, 
  Download, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Wrench 
} from "lucide-react";
import { TECHNICAL_GUIDES, GENERAL_FAQS } from "@/data/technical-resources-data";

export function TechnicalResourcesView() {
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
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mr-2" />
          Engineering Reference Library
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Technical Guides &amp; Sizing Protocols
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed">
          Practical application engineering references developed to help maintenance managers, fitters, and procurement teams specify correct replacement hoses, belts, and conveyor components.
        </p>
      </motion.div>

      {/* Technical Guides */}
      <div className="space-y-10">
        <div className="border-b border-slate-200 dark:border-white/[0.08] pb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-900 dark:text-white flex items-center tracking-wide">
            <BookOpen className="w-5 h-5 mr-3 text-amber-500" />
            Selection &amp; Sizing Protocols
          </h2>
          <span className="text-xs text-slate-500 dark:text-industrial-400 font-medium">
            {TECHNICAL_GUIDES.length} Reference Guides
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECHNICAL_GUIDES.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6 border border-slate-200 dark:border-white/[0.08] shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold uppercase rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-slate-500 dark:text-industrial-400 font-medium">{guide.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300 leading-relaxed">
                  {guide.summary}
                </p>

                {/* Section bullet points preview */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-white/5 space-y-3">
                  {guide.sections.slice(0, 3).map((sec, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <div className="font-bold text-amber-600 dark:text-amber-300/90 text-xs">
                        {sec.heading}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-industrial-400 line-clamp-2 mt-1 leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/5">
                <Link
                  href="/rfq"
                  className="w-full py-3 px-4 glass-panel hover:border-amber-500/50 text-slate-800 dark:text-industrial-200 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-bold uppercase rounded-xl transition-all flex items-center justify-between border border-slate-200 dark:border-white/10"
                >
                  <span>Need Sizing Assistance?</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="space-y-8 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            Commercial &amp; Technical Procurement FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-400 leading-relaxed">
            Essential information regarding proforma quotations, currency denomination, breakdown orders, and site freight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GENERAL_FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-7 glass-panel rounded-2xl space-y-3 hover:border-amber-500/30 transition-colors border border-slate-200 dark:border-white/[0.08] shadow-sm"
            >
              <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                {faq.category}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 dark:text-industrial-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Support Callout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-10 glass-panel-glow border-amber-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border shadow-lg"
      >
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">
            Have a Complex Engineering Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300 max-w-xl leading-relaxed">
            Our technical team reviews drawings, chemical media tolerances, and system layouts to ensure safe, compliant installation.
          </p>
        </div>

        <Link
          href="/rfq"
          className="px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs uppercase font-extrabold tracking-wider rounded-xl shadow-lg transition-all shrink-0 hover:scale-[1.02]"
        >
          Submit Technical Query
        </Link>
      </motion.div>
    </div>
  );
}
