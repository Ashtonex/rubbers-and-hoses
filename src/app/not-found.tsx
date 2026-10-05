"use client";

import React from "react";
import Link from "next/link";
import { Search, ArrowRight, Home, FileText } from "lucide-react";
import { CATEGORIES } from "@/data/catalogue-data";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center space-y-8">
      {/* Hazard Status Indicator */}
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs text-amber-300">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="font-bold uppercase tracking-wider">
          Error 404 • Specification Not Found
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.1]">
          Component or Page Unavailable
        </h1>
        <p className="text-xs sm:text-base text-industrial-400 max-w-lg mx-auto leading-relaxed">
          The requested product code, category URL, or technical document could not be located in our active catalogue database.
        </p>
      </div>

      {/* Suggested Categories Quick Access */}
      <div className="glass-panel rounded-3xl p-7 text-left space-y-4 max-w-xl mx-auto border border-white/[0.08]">
        <div className="text-xs uppercase tracking-wider text-amber-400 font-bold border-b border-white/5 pb-2.5">
          Browse Active Product Families:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalogue/${cat.slug}`}
              className="p-3.5 glass-panel-hover rounded-xl text-industrial-200 hover:text-white flex items-center justify-between border border-white/5"
            >
              <span className="font-semibold">{cat.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          ))}
        </div>
      </div>

      {/* Recovery CTAs */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3.5 glass-panel hover:border-white/20 text-industrial-100 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center"
        >
          <Home className="w-4 h-4 mr-2 text-industrial-400" />
          Return to Homepage
        </Link>

        <Link
          href="/catalogue"
          className="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center"
        >
          <Search className="w-4 h-4 mr-2" />
          Search Active Catalogue
        </Link>

        <Link
          href="/rfq"
          className="px-6 py-3.5 glass-panel hover:border-white/20 text-industrial-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center"
        >
          <FileText className="w-4 h-4 mr-2 text-industrial-400" />
          Submit Custom RFQ
        </Link>
      </div>
    </div>
  );
}
