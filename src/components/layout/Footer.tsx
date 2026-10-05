import React from "react";
import Link from "next/link";
import { 
  Layers, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  FileCheck
} from "lucide-react";
import { COMPANY_CONFIG, TECHNICAL_DISCLAIMER, REGIONAL_COVERAGE_ZONES } from "@/data/company-config";
import { CATEGORIES } from "@/data/catalogue-data";
import { INDUSTRIES } from "@/data/industries-data";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = buildGeneralWhatsAppLink();

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#070A10] text-slate-600 dark:text-slate-300 transition-colors duration-300">
      {/* Regional Dispatch Banner */}
      <div className="border-b border-slate-200 dark:border-white/[0.06] bg-slate-200/60 dark:bg-[#090D15]/90 py-8 px-6 lg:px-12 transition-colors duration-300">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REGIONAL_COVERAGE_ZONES.map((zone, idx) => (
            <div key={idx} className="border-l-2 border-amber-500 pl-4">
              <div className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
                {zone.region}
              </div>
              <div className="text-sm text-slate-900 dark:text-white mt-1 font-semibold">{zone.hubs}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{zone.coverageType}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Col 1: Identity & Technical Desk */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3.5 group">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-500/20 via-slate-900 to-black border border-amber-500/40 rounded-xl flex items-center justify-center shadow-lg">
                <Layers className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  RUBBER &amp; HOSE
                </span>
                <span className="text-xs block text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                  Industrial Conveyance &amp; Drive Systems • Zimbabwe
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              Specialist supplier of high-pressure hydraulic hoses, mining slurry lines, industrial PVC tubing, narrow wedge &amp; classical V-belts, conveyor belting, and rapid mechanical couplings for Zimbabwean industry.
            </p>

            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 mr-3 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Trade Desk: {COMPANY_CONFIG.primaryPhone}</span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <MessageSquare className="w-4 h-4 mr-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  WhatsApp Orders: {COMPANY_CONFIG.primaryWhatsAppNumber}
                </a>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 mr-3 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Quotes: {COMPANY_CONFIG.rfqEmail}</span>
              </div>
            </div>

            {/* Factual Disclaimer Card */}
            <div className="mt-4 p-4 glass-panel rounded-2xl text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-start space-x-3">
                <FileCheck className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Demonstration B2B Instance:</span>{" "}
                  All brand equivalencies, branch listings, and inventory metrics are demonstration placeholders pending full corporate verification.
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Product Families */}
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-5 pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              Product Families
            </div>
            <ul className="space-y-3 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/catalogue/${cat.slug}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-400 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/catalogue" 
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-500 font-bold flex items-center"
                >
                  Browse Full Catalogue →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Sectors */}
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-5 pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              Sectors Served
            </div>
            <ul className="space-y-3 text-sm">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link 
                    href={`/industries/${ind.slug}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-400 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/industries" 
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-500 font-bold flex items-center"
                >
                  All Sector Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Technical Resources & Depots */}
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400 mb-5 pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              Technical &amp; Procurement
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/rfq" className="text-slate-900 dark:text-white font-semibold hover:text-amber-500 transition-colors">
                  • Submit Multi-Item RFQ
                </Link>
              </li>
              <li>
                <Link href="/technical-resources" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  • Hose Sizing (STAMPED Guide)
                </Link>
              </li>
              <li>
                <Link href="/technical-resources" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  • V-Belt Profile Cross-Reference
                </Link>
              </li>
              <li>
                <Link href="/technical-resources" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  • Chemical &amp; Rubber Matrix
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  • Regional Depot Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors">
                  • Company &amp; Capabilities Profile
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
              <div className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1.5 font-bold">Commercial Billing</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Tax Invoices provided for all deliveries. Statutory RBZ compliant invoicing in USD and ZiG.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Disclaimer Note */}
        <div className="mt-14 pt-6 border-t border-slate-200 dark:border-white/[0.06] text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Technical Note:</strong> {TECHNICAL_DISCLAIMER}
          </p>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.companyName}. All industrial rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 text-amber-600 dark:text-amber-400 font-medium">
            Industrial Discovery &amp; RFQ Platform • Zimbabwe
          </div>
        </div>
      </div>
    </footer>
  );
}
