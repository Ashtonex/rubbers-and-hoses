"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, FileText, MessageSquare } from "lucide-react";
import { Industry, Product } from "@/types/industrial";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

interface IndustryDetailViewProps {
  industry: Industry;
  matchingProducts: Product[];
}

export function IndustryDetailView({ industry, matchingProducts }: IndustryDetailViewProps) {
  const whatsappUrl = buildGeneralWhatsAppLink(`${industry.name} Supply Solutions`);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative bg-slate-900 dark:bg-industrial-950 border-b border-slate-200 dark:border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-20 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 dark:text-industrial-400 font-medium">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-industrial-600" />
            <Link href="/industries" className="hover:text-amber-400 transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-industrial-600" />
            <span className="text-white font-semibold">{industry.name}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider">
              Sector Engineering Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-white leading-tight tracking-tight">
              {industry.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 dark:text-industrial-300 leading-relaxed">
              {industry.description}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="px-7 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4 mr-2" />
              Request {industry.name} Quote
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 glass-panel hover:border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2 border border-white/10"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sector Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: Challenges & Case Study Solutions */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Critical Operating Demands */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 glass-panel rounded-3xl space-y-4 border border-slate-200 dark:border-white/[0.08] shadow-sm"
          >
            <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase flex items-center tracking-wide">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3" />
              Harsh Operational Factors
            </h2>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-industrial-300">
              {industry.demandingConditions.map((cond, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-500 mr-2.5 font-bold">▶</span>
                  <span className="leading-relaxed">{cond}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technical Solutions & Case Applications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase flex items-center tracking-wide">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3" />
              Application Case Studies
            </h2>

            <div className="space-y-3.5">
              {industry.caseStudyOrApplicationExamples.map((example, idx) => (
                <div key={idx} className="p-6 glass-panel rounded-2xl space-y-2 hover:border-amber-500/30 transition-colors border border-slate-200 dark:border-white/[0.08] shadow-sm">
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    {example.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-industrial-300 leading-relaxed">
                    <strong className="text-slate-500 dark:text-industrial-400 text-xs">Requirement: </strong>
                    {example.requirement}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-900 dark:text-industrial-200 pt-2 border-t border-slate-200/80 dark:border-white/5 leading-relaxed">
                    <strong className="text-emerald-600 dark:text-emerald-400 text-xs">Recommended Engineering Solution: </strong>
                    {example.recommendedSolution}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamically Surfaced Matching Products */}
        <section className="space-y-6 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-2xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight">
                Recommended Components for {industry.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-industrial-400 mt-0.5">
                Heavy-duty hoses, belts, and conveyor items commonly configured for this sector.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>Browse All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {matchingProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
