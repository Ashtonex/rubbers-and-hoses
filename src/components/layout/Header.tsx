"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  MessageSquare, 
  Search, 
  FileText, 
  Menu, 
  X, 
  ChevronDown, 
  AlertCircle,
  Clock,
  Layers,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company-config";
import { CATEGORIES } from "@/data/catalogue-data";
import { INDUSTRIES } from "@/data/industries-data";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface HeaderProps {
  onOpenSearch: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const { totalItemCount, setIsDrawerOpen } = useQuoteBasket();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const whatsappLink = buildGeneralWhatsAppLink("General Industrial Supply Inquiry");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#07090E]/95 backdrop-blur-2xl shadow-sm dark:shadow-2xl transition-colors duration-300 relative">
      {/* Top Hairline Amber Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent z-50 shadow-[0_0_10px_#f59e0b]" />

      {/* Top Corporate Status Bar */}
      <div className="hidden lg:block border-b border-slate-200 dark:border-white/[0.06] bg-slate-100/90 dark:bg-[#05070B]/95 text-xs text-slate-600 dark:text-slate-400 py-2.5 px-6 lg:px-12 transition-colors duration-300">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-800 dark:text-slate-200 font-semibold">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2.5 shadow-[0_0_8px_#34d399] animate-pulse" />
              Regional Distribution Hubs: Harare • Bulawayo • Mutare
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center text-slate-600 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500 dark:text-amber-400" />
              Trade Desk: 07:30 – 17:00 • 24/7 Breakdown Dispatch On-Call
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              USD &amp; ZiG Statutory Tax Invoicing Compliant
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_CONFIG.emergencyBreakdownPhone}`}
              className="flex items-center font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500 animate-pulse" />
              Emergency: {COMPANY_CONFIG.emergencyBreakdownPhone}
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
              WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3.5 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent dark:from-amber-500/25 dark:via-slate-900 dark:to-black border border-amber-500/40 group-hover:border-amber-400 transition-all rounded-2xl flex items-center justify-center shadow-md dark:shadow-[0_0_20px_rgba(245,158,11,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <Layers className="w-6 h-6 text-amber-500 dark:text-amber-400 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    RUBBER &amp; HOSE
                  </span>
                </div>
                <span className="text-[11px] tracking-wider text-slate-500 dark:text-slate-400 uppercase font-medium">
                  Industrial Conveyance &amp; Drive Systems • Zimbabwe
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Link 
              href="/catalogue" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-xl transition-colors"
            >
              All Products
            </Link>

            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              onMouseLeave={() => setCategoriesDropdownOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-xl transition-colors group"
                aria-expanded={categoriesDropdownOpen}
              >
                Product Divisions
                <ChevronDown className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-amber-500 transition-transform duration-150" />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute top-full left-0 w-84 glass-panel-glow rounded-2xl py-3 mt-1 z-50 shadow-2xl border-amber-500/30">
                  <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-amber-600 dark:text-amber-400 border-b border-slate-200 dark:border-white/[0.08] font-bold">
                    Core Industrial Families
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/catalogue/${cat.slug}`}
                      className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white hover:bg-amber-500/10 border-l-2 border-transparent hover:border-amber-400 transition-all"
                      onClick={() => setCategoriesDropdownOpen(false)}
                    >
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{cat.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">{cat.shortDescription}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-xl transition-colors group"
                aria-expanded={industriesDropdownOpen}
              >
                Industries Served
                <ChevronDown className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-amber-500 transition-transform duration-150" />
              </button>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 glass-panel-glow rounded-2xl py-3 mt-1 z-50 shadow-2xl border-amber-500/30">
                  <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-amber-600 dark:text-amber-400 border-b border-slate-200 dark:border-white/[0.08] font-bold">
                    Sector Solutions
                  </div>
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.id}
                      href={`/industries/${ind.slug}`}
                      className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white hover:bg-amber-500/10 border-l-2 border-transparent hover:border-amber-400 transition-all"
                      onClick={() => setIndustriesDropdownOpen(false)}
                    >
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{ind.name}</div>
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 dark:border-white/[0.08] mt-2 pt-2">
                    <Link 
                      href="/industries" 
                      className="block px-4 py-2 text-xs text-amber-600 dark:text-amber-400 font-bold hover:underline"
                      onClick={() => setIndustriesDropdownOpen(false)}
                    >
                      View All Sector Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/technical-resources" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-xl transition-colors"
            >
              Technical Guides
            </Link>

            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-xl transition-colors"
            >
              Depots &amp; Contact
            </Link>
          </nav>

          {/* Right Action Cluster: Theme Toggle, Search, Basket, RFQ CTA */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle (Light / Dark mode switch) */}
            <ThemeToggle />

            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search industrial products and part codes"
              className="flex items-center px-4 py-2.5 text-sm glass-panel hover:border-amber-500 text-slate-700 dark:text-slate-200 rounded-xl transition-all shadow-sm group"
            >
              <Search className="w-4 h-4 text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform" />
              <span className="hidden xl:inline-block ml-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">Search products, part codes...</span>
              <kbd className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[10px] font-mono bg-slate-100 dark:bg-black/50 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/[0.1] rounded-md">
                Ctrl+K
              </kbd>
            </button>

            {/* RFQ Project Basket Trigger */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label={`View RFQ quote basket (${totalItemCount} items)`}
              className="relative flex items-center px-4 py-2.5 text-sm glass-panel hover:border-amber-500 text-slate-700 dark:text-slate-200 rounded-xl transition-all group"
            >
              <FileText className="w-4 h-4 text-amber-500 dark:text-amber-400 group-hover:scale-108 transition-transform" />
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold">Quote Basket</span>
              {totalItemCount > 0 ? (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full shadow-md">
                  {totalItemCount}
                </span>
              ) : (
                <span className="hidden sm:inline-block ml-1 text-xs text-slate-400 font-medium">(0)</span>
              )}
            </button>

            {/* Direct RFQ Submission Button */}
            <Link
              href="/rfq"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-[1.02]"
            >
              Request Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden p-2.5 text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white glass-panel rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-white/10 glass-panel-glow px-4 pt-4 pb-6 space-y-4">
          <div className="flex items-center justify-between pt-1 pb-3 border-b border-slate-200 dark:border-white/10">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Theme Mode:</span>
            <ThemeToggle />
          </div>

          <div className="pt-1 pb-2 border-b border-slate-200 dark:border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 glass-panel rounded-xl text-sm text-slate-700 dark:text-slate-300"
            >
              <span className="flex items-center">
                <Search className="w-4 h-4 mr-2.5 text-amber-500" />
                Search Part Code / Size...
              </span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase">Search</span>
            </button>
          </div>

          <div className="space-y-1">
            <Link
              href="/catalogue"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-amber-500 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Industrial Products
            </Link>
            
            <div className="px-3 py-1.5 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Product Categories:
            </div>
            <div className="pl-3 space-y-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/catalogue/${cat.slug}`}
                  className="block px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-amber-500 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • {cat.name}
                </Link>
              ))}
            </div>

            <div className="px-3 pt-3 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Industries Served:
            </div>
            <div className="pl-3 space-y-1">
              {INDUSTRIES.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  className="block px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-amber-500 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • {ind.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
              <Link
                href="/technical-resources"
                className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-amber-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technical Guides &amp; Sizing
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-amber-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depots, Branches &amp; Emergency Desk
              </Link>
              <Link
                href="/rfq"
                className="block px-3 py-3 text-center text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Open RFQ Request Engine
              </Link>
            </div>
          </div>

          {/* Quick Contact info on mobile menu */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <div>Emergency Desk: {COMPANY_CONFIG.emergencyBreakdownPhone}</div>
            <div>Harare • Bulawayo • Mutare Depots</div>
          </div>
        </div>
      )}
    </header>
  );
}
