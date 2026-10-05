"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  AlertCircle, 
  Send,
  Building,
  ShieldCheck
} from "lucide-react";
import { COMPANY_CONFIG, REGIONAL_COVERAGE_ZONES } from "@/data/company-config";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function ContactView() {
  const whatsappUrl = buildGeneralWhatsAppLink("General Depot Enquiry");

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
          Depot Network &amp; Emergency Trade Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Depots, Branches &amp; Breakdown Desk
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed">
          Counter collection, scheduled regional freight, and urgent on-call breakdown dispatch across Zimbabwe.
        </p>
      </motion.div>

      {/* Emergency Breakdown Alert Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-7 sm:p-8 glass-panel-glow border-amber-500/40 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border shadow-lg"
      >
        <div className="flex items-start space-x-4">
          <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 shrink-0 mt-0.5">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
              Unscheduled Plant or Mine Breakdown?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-industrial-300 max-w-xl mt-1.5 leading-relaxed">
              Call our dedicated emergency trade line for rapid verification of on-shelf hydraulic assemblies, replacement V-belts, or emergency mechanical fasteners.
            </p>
          </div>
        </div>

        <a
          href={`tel:${COMPANY_CONFIG.emergencyBreakdownPhone}`}
          className="px-7 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs uppercase font-extrabold tracking-wider rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all shrink-0 hover:scale-[1.02]"
        >
          Call: {COMPANY_CONFIG.emergencyBreakdownPhone}
        </a>
      </motion.div>

      {/* 3 Regional Depots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COMPANY_CONFIG.branches.map((branch, idx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6 border border-slate-200 dark:border-white/[0.08] shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
                  {branch.city} Depot
                </span>
                {branch.isMainDistributionHub && (
                  <span className="px-3 py-1 text-xs font-semibold uppercase bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 rounded-full">
                    Central Hub
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {branch.name}
              </h2>

              <div className="space-y-3 pt-3 border-t border-slate-200/80 dark:border-white/5 text-xs">
                <div className="flex items-start text-slate-700 dark:text-industrial-300">
                  <MapPin className="w-4 h-4 mr-3 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    {branch.addressLines.map((line, lIdx) => (
                      <div key={lIdx} className={line.startsWith("[") ? "text-amber-600 dark:text-amber-400/80 text-[11px]" : "text-slate-700 dark:text-industrial-300"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-slate-700 dark:text-industrial-300">
                  <Phone className="w-4 h-4 mr-3 text-amber-500 shrink-0" />
                  <span className="font-medium">{branch.phone}</span>
                </div>

                <div className="flex items-center text-slate-700 dark:text-industrial-300">
                  <MessageSquare className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />
                  <span className="text-emerald-700 dark:text-emerald-300 font-medium">WhatsApp: {branch.whatsapp}</span>
                </div>

                <div className="flex items-center text-slate-700 dark:text-industrial-300">
                  <Mail className="w-4 h-4 mr-3 text-amber-500 shrink-0" />
                  <span>{branch.email}</span>
                </div>

                <div className="flex items-start text-slate-500 dark:text-industrial-400 text-xs pt-2 border-t border-slate-200/80 dark:border-white/5">
                  <Clock className="w-4 h-4 mr-3 text-slate-400 dark:text-industrial-500 shrink-0 mt-0.5" />
                  <span>{branch.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 glass-panel hover:border-emerald-500/40 text-slate-800 dark:text-industrial-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Message {branch.city} Desk</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Regional Freight Corridors */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 glass-panel rounded-3xl space-y-6 border border-slate-200 dark:border-white/[0.08] shadow-sm"
      >
        <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase flex items-center tracking-wide">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3" />
          Nationwide Freight Corridors &amp; Dispatch Schedules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          {REGIONAL_COVERAGE_ZONES.map((zone, idx) => (
            <div key={idx} className="p-5 glass-panel rounded-2xl space-y-2 hover:border-amber-500/30 transition-colors border border-slate-200 dark:border-white/[0.06] shadow-sm">
              <div className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">{zone.region}</div>
              <div className="text-slate-700 dark:text-industrial-300 text-xs">{zone.hubs}</div>
              <div className="text-slate-500 dark:text-industrial-500 text-[11px]">{zone.coverageType}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
