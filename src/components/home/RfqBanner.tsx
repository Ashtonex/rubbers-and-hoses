"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, FileText, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company-config";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function RfqBanner() {
  const whatsappUrl = buildGeneralWhatsAppLink("B2B Supply Quote Requirement");

  return (
    <section className="py-24 bg-white dark:bg-[#07090E] relative overflow-hidden transition-colors duration-300">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] glow-ambient-orb rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-glow rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border-amber-500/35 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle gold hairline top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left copy (Col 1-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2.5 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold px-3.5 py-1.5 glass-panel rounded-full border-amber-500/30">
                <span className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b] animate-pulse" />
                <span>Commercial Procurement &amp; Plant Tenders</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Have an Industrial Specification or{" "}
                <span className="text-gradient-gold">Bill of Quantities?</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Upload your engineering schedules, pump station specs, or replacement BOMs. Our trade engineers verify burst pressure envelopes, chemical tolerances, and depot availability before issuing compliant proforma invoices.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex items-center font-semibold p-3 glass-panel rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0" />
                  <span>Itemized Proformas in 2 Hrs</span>
                </div>
                <div className="flex items-center font-semibold p-3 glass-panel rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0" />
                  <span>USD &amp; ZiG Invoicing</span>
                </div>
                <div className="flex items-center font-semibold p-3 glass-panel rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0" />
                  <span>Depot Pick-up &amp; Site Freight</span>
                </div>
              </div>
            </div>

            {/* Right CTAs (Col 9-12) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/rfq"
                  className="w-full flex items-center justify-center py-4 px-7 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-sm uppercase tracking-wider font-extrabold rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Formal RFQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-4 px-7 glass-panel hover:bg-emerald-500/10 hover:border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 text-sm uppercase tracking-wider font-bold rounded-2xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-500" />
                  WhatsApp Sales Desk
                </a>
              </motion.div>

              <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1 font-medium">
                Typical technical response time: &lt; 2 business hours
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
