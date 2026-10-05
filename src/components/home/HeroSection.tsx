"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  PhoneCall, 
  Truck, 
  FileCheck, 
  ChevronRight, 
  Zap, 
  Gauge 
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company-config";

interface HeroSectionProps {
  onOpenSearch: () => void;
}

export function HeroSection({ onOpenSearch }: HeroSectionProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <section className="relative bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] overflow-hidden min-h-[720px] flex items-center transition-colors duration-300">
      {/* Cinematic Layered Background Image with Controlled Luminance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Heavy Industrial Engineering and Conveyor Hydraulics"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter opacity-40 dark:opacity-75 dark:brightness-[0.58] dark:contrast-[1.12]"
        />
        {/* Light & Dark Adaptive Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/50 dark:from-[#07090E] dark:via-[#07090E]/90 dark:to-[#07090E]/60 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/70 dark:from-[#07090E] dark:via-transparent dark:to-[#07090E]/70 transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-full h-full bg-radial-at-tr from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Atmospheric Light Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] glow-ambient-orb rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] glow-sapphire-orb rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-14 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Content (Col 1-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status Pill with Gold Border & Live Indicator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 glass-panel rounded-full text-xs border-amber-500/40 shadow-sm dark:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
              <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-xs">
                Authoritative Industrial Supplier
              </span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-slate-700 dark:text-slate-200 font-medium">Zimbabwe Trade Depots</span>
            </motion.div>

            {/* Headline & Value Proposition */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] transition-colors duration-300">
                Precision Fluid Conveyance &amp;{" "}
                <span className="text-gradient-gold drop-shadow-sm">
                  Power Transmission.
                </span>
              </h1>
              <p className="text-base sm:text-lg xl:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl transition-colors duration-300">
                Supplying Zimbabwe&apos;s mining, commercial agriculture, and manufacturing sectors with certified high-pressure hydraulic hose assemblies, abrasive slurry lines, precision V-belts, and heavy-duty conveyor belting.
              </p>
            </div>

            {/* Enterprise Procurement Search Console */}
            <div className="pt-1 max-w-2xl">
              <form 
                onSubmit={handleSearchSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 glass-panel-glow rounded-2xl shadow-xl transition-all hover:border-amber-400/60"
              >
                <div className="flex items-center flex-1 px-4 py-3 text-slate-400">
                  <Search className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mr-3.5" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={onOpenSearch}
                    placeholder="Search by part code (e.g. SPB 2600, 2SN-08, Camlock) or dimension..."
                    className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <span>Search Specs</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </form>

              {/* Quick Spec Tags */}
              <div className="pt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Quick Access:</span>
                {[
                  { name: "SPB 2600 Wedge Belts", slug: "belts-power-transmission" },
                  { name: "2SN Hydraulic Hoses", slug: "rubber-hoses" },
                  { name: "EP400 Conveyor Belting", slug: "conveyor-products" },
                  { name: "Camlock Couplings", slug: "fittings-accessories" },
                  { name: "Slurry Discharge", slug: "rubber-hoses" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/catalogue/${item.slug}`}
                    className="px-3 py-1.5 glass-panel hover:border-amber-400 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white rounded-lg transition-all text-xs font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Executive CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/rfq"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center"
                >
                  Request a Formal Quotation
                  <ArrowRight className="w-4 h-4 ml-2.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/catalogue"
                  className="px-8 py-4 glass-panel hover:border-amber-400/50 text-slate-800 dark:text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center"
                >
                  Browse Full Catalogue
                </Link>
              </motion.div>

              <a
                href={`tel:${COMPANY_CONFIG.emergencyBreakdownPhone}`}
                className="hidden xl:flex items-center px-5 py-4 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                <span>Emergency: {COMPANY_CONFIG.emergencyBreakdownPhone}</span>
              </a>
            </div>

            {/* Executive Key Metrics Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 glass-panel rounded-2xl">
                <div className="text-xl sm:text-2xl font-extrabold text-gradient-gold">450 BAR</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Max Pressure Rating</div>
              </div>
              <div className="p-4 glass-panel rounded-2xl">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">2 HOURS</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Proforma Dispatch</div>
              </div>
              <div className="p-4 glass-panel rounded-2xl">
                <div className="text-xl sm:text-2xl font-extrabold text-gradient-gold">1,200+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Stock Specifications</div>
              </div>
              <div className="p-4 glass-panel rounded-2xl">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">3 DEPOTS</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Harare, Byo, Mutare</div>
              </div>
            </div>
          </motion.div>

          {/* Division Showcase & Visual Core Cards (Col 8-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 space-y-5 relative border-amber-500/30">
              <div className="border-b border-slate-200 dark:border-white/[0.08] pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                    Executive Trade Desk
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                    Core Product Divisions
                  </h2>
                </div>
                <div className="px-3.5 py-1 bg-emerald-500/15 border border-emerald-500/40 rounded-full text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_#10b981] animate-pulse" />
                  Live Stock
                </div>
              </div>

              {/* 4 Rich Visual Division Showcase Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Hydraulic & Rubber Hoses */}
                <Link
                  href="/catalogue/rubber-hoses"
                  className="relative h-44 rounded-2xl overflow-hidden glass-panel hover:border-amber-400 group flex flex-col justify-end p-4 transition-all duration-300"
                >
                  <Image
                    src="/images/rubber-hoses.jpg"
                    alt="Hydraulic & Rubber Hoses"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-[0.75] contrast-[1.1] group-hover:scale-108 group-hover:brightness-90 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">
                    Up to 450 Bar
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Hydraulic &amp; Rubber Hoses
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      Wire-braid, spiral, slurry &amp; steam lines
                    </div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* 2. Power Transmission Belts */}
                <Link
                  href="/catalogue/belts-power-transmission"
                  className="relative h-44 rounded-2xl overflow-hidden glass-panel hover:border-amber-400 group flex flex-col justify-end p-4 transition-all duration-300"
                >
                  <Image
                    src="/images/belts-transmission.jpg"
                    alt="Power Transmission Belts"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-[0.75] contrast-[1.1] group-hover:scale-108 group-hover:brightness-90 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">
                    Matched Sets
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Transmission Belts
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      SPB wedge, classical wrapped &amp; timing
                    </div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* 3. Heavy Conveyor Belting */}
                <Link
                  href="/catalogue/conveyor-products"
                  className="relative h-44 rounded-2xl overflow-hidden glass-panel hover:border-amber-400 group flex flex-col justify-end p-4 transition-all duration-300"
                >
                  <Image
                    src="/images/conveyor-products.jpg"
                    alt="Heavy Conveyor Belting"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-[0.75] contrast-[1.1] group-hover:scale-108 group-hover:brightness-90 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">
                    Grade M Cover
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Conveyor Belting
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      Multi-ply EP, wear covers &amp; splices
                    </div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* 4. Fittings & Quick Couplings */}
                <Link
                  href="/catalogue/fittings-accessories"
                  className="relative h-44 rounded-2xl overflow-hidden glass-panel hover:border-amber-400 group flex flex-col justify-end p-4 transition-all duration-300"
                >
                  <Image
                    src="/images/fittings-accessories.jpg"
                    alt="Fittings & Quick Couplings"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-[0.75] contrast-[1.1] group-hover:scale-108 group-hover:brightness-90 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-black">
                    Precision Machined
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Fittings &amp; Couplings
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      Camlock, Bauer &amp; high-pressure adaptors
                    </div>
                    <div className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Enterprise Assurance Matrix */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-3 gap-2 text-center text-xs text-slate-700 dark:text-slate-300">
                <div className="p-2.5 glass-panel rounded-xl">
                  <Truck className="w-4 h-4 mx-auto text-amber-500 dark:text-amber-400 mb-1" />
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Same-Day Freight</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Nationwide Depots</div>
                </div>
                <div className="p-2.5 glass-panel rounded-xl">
                  <ShieldCheck className="w-4 h-4 mx-auto text-emerald-500 dark:text-emerald-400 mb-1" />
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Factory Tested</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">4:1 Safety Factor</div>
                </div>
                <div className="p-2.5 glass-panel rounded-xl">
                  <FileCheck className="w-4 h-4 mx-auto text-amber-500 dark:text-amber-400 mb-1" />
                  <div className="font-bold text-slate-900 dark:text-white text-[11px]">Statutory Tax</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">USD &amp; ZiG Accepted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
