"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, FileText, PhoneCall, Search } from "lucide-react";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { COMPANY_CONFIG } from "@/data/company-config";

interface MobileStickyBarProps {
  onOpenSearch?: () => void;
  customWhatsAppUrl?: string;
}

export function MobileStickyBar({ onOpenSearch, customWhatsAppUrl }: MobileStickyBarProps) {
  const { totalItemCount, setIsDrawerOpen } = useQuoteBasket();
  const whatsappUrl = customWhatsAppUrl || buildGeneralWhatsAppLink("Mobile Quick Enquiry");

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-industrial-950/95 backdrop-blur-md border-t border-slate-200 dark:border-industrial-800 px-3 py-2 shadow-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Sales */}
        <a
          href={`tel:${COMPANY_CONFIG.primaryPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-slate-100 dark:bg-industrial-900 border border-slate-200 dark:border-industrial-750 rounded-xl text-slate-700 dark:text-industrial-200 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Call Trade Desk"
        >
          <PhoneCall className="w-4 h-4 text-slate-600 dark:text-industrial-300" />
          <span className="text-[10px] font-mono mt-0.5 text-slate-700 dark:text-industrial-300 font-semibold">Call Desk</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
          aria-label="WhatsApp Sales"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[10px] font-mono mt-0.5 font-bold">WhatsApp</span>
        </a>

        {/* Search */}
        {onOpenSearch && (
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-slate-100 dark:bg-industrial-900 border border-slate-200 dark:border-industrial-750 rounded-xl text-slate-700 dark:text-industrial-200 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Search Catalogue"
          >
            <Search className="w-4 h-4 text-slate-600 dark:text-industrial-300" />
            <span className="text-[10px] font-mono mt-0.5 text-slate-700 dark:text-industrial-300 font-semibold">Search</span>
          </button>
        )}

        {/* RFQ Basket */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 rounded-xl shadow-sm transition-colors relative cursor-pointer font-bold"
          aria-label={`RFQ Basket with ${totalItemCount} items`}
        >
          <FileText className="w-4 h-4 text-slate-950" />
          <span className="text-[10px] font-mono mt-0.5 font-bold uppercase tracking-wider text-slate-950">
            RFQ ({totalItemCount})
          </span>
          {totalItemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          )}
        </button>
      </div>
    </div>
  );
}
