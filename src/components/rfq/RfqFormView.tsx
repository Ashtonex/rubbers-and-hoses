"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  Trash2, 
  Plus, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Phone, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";
import { useQuoteBasket } from "@/context/QuoteBasketContext";
import { RFQItem } from "@/types/industrial";
import { COMPANY_CONFIG } from "@/data/company-config";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function RfqFormView() {
  const { items, addItem, removeItem, updateQuantity, clearBasket } = useQuoteBasket();

  // Contact & Company Fields
  const [contactName, setContactName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("Harare Depot");
  const [urgency, setUrgency] = useState<"urgent_breakdown" | "standard_quote" | "project_planning" | "tender">("standard_quote");
  const [applicationEnv, setApplicationEnv] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Custom Item Quick Add form
  const [customName, setCustomName] = useState("");
  const [customSpec, setCustomSpec] = useState("");
  const [customQty, setCustomQty] = useState("1");
  const [isAddingCustom, setIsAddingCustom] = useState(false);

  // Attachment mock state
  const [attachmentName, setAttachmentName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successReference, setSuccessReference] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller PDF or image.");
        return;
      }
      setAttachmentName(file.name);
    }
  };

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    addItem({
      productId: `custom-${Date.now()}`,
      productSlug: "custom-specification",
      productName: customName.trim(),
      categorySlug: "custom",
      selectedVariantCode: "CUSTOM-SPEC",
      sizeOrSpec: customSpec.trim() || "Per customer spec",
      quantity: customQty || "1",
      unit: "unit",
      notes: "Custom sourcing line item",
    });

    setCustomName("");
    setCustomSpec("");
    setCustomQty("1");
    setIsAddingCustom(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (items.length === 0) {
      setErrorMessage("Please include at least one product or custom specification in your RFQ basket before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        contactName,
        companyName,
        email,
        phone,
        whatsapp: whatsapp || undefined,
        deliveryCityOrRegion: deliveryCity,
        urgency,
        items,
        additionalNotes: additionalNotes ? `${additionalNotes}${attachmentName ? ` [Attachment attached: ${attachmentName}]` : ""}` : undefined,
        applicationEnvironment: applicationEnv || undefined,
        honeypot: honeypot || undefined,
      };

      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || "Unable to submit RFQ. Please verify your contact details.");
        setIsSubmitting(false);
        return;
      }

      setSuccessReference(data.reference);
      clearBasket();
    } catch {
      setErrorMessage("Network connection error. Please try again or contact the trade desk via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = buildGeneralWhatsAppLink(
    `Direct RFQ for ${items.length} item(s) from ${companyName || "Client"}`
  );

  return (
    <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-12 space-y-12">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-slate-200 dark:border-white/[0.08] pb-6 space-y-3"
      >
        <div className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-[0_0_8px_#f59e0b]" />
          B2B Commercial Procurement Engine
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Request For Quotation (RFQ)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-industrial-300 max-w-3xl leading-relaxed">
          Submit your project requirements, replacement bill of materials, or technical drawings. Our commercial sales desk evaluates working pressures and stock availability to issue a formal proforma invoice.
        </p>
      </motion.div>

      {/* Main Submission Form & Bill of Materials */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left Column: Bill of Materials & Items (Col 1-7) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl glass-panel border-amber-500/30 flex items-center justify-center text-amber-500">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
                  Quotation Bill of Materials ({items.length} items)
                </h2>
              </div>

              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearBasket}
                  className="text-xs text-red-500 hover:text-red-600 font-semibold transition-colors cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Items List */}
            {items.length > 0 ? (
              <div className="space-y-3.5">
                {items.map((item, idx) => (
                  <div
                    key={`${item.productId}-${item.selectedVariantCode || idx}`}
                    className="p-5 glass-panel rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border border-slate-200 dark:border-white/[0.08] shadow-sm"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">
                        {item.selectedVariantCode || "STD-SPEC"}
                      </span>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.productName}
                      </div>
                      {item.sizeOrSpec && (
                        <div className="text-xs text-slate-600 dark:text-industrial-300">
                          Dimensions: {item.sizeOrSpec}
                        </div>
                      )}
                      {item.notes && (
                        <div className="text-xs text-slate-500 dark:text-industrial-400 italic">
                          Note: {item.notes}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4 border-t sm:border-t-0 border-slate-200 dark:border-white/[0.06] pt-3 sm:pt-0">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-xs text-slate-500 dark:text-industrial-400">Qty:</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.productId, e.target.value, item.selectedVariantCode)}
                          className="w-16 px-2.5 py-1.5 glass-panel text-xs text-slate-900 dark:text-white rounded-lg text-center focus:outline-none focus:border-amber-500 font-bold border border-slate-200 dark:border-white/10"
                        />
                        <span className="text-xs text-slate-500 dark:text-industrial-400">{item.unit || "unit"}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.selectedVariantCode)}
                        className="text-slate-400 hover:text-red-500 p-2 glass-panel rounded-xl transition-colors border border-slate-200 dark:border-white/10 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-slate-500 dark:text-industrial-400 space-y-4 border border-dashed border-slate-300 dark:border-white/10 rounded-2xl p-6">
                <FileText className="w-10 h-10 mx-auto text-slate-400 dark:text-industrial-500" />
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  No standard catalogue items in your basket
                </div>
                <p className="text-xs text-slate-600 dark:text-industrial-300 max-w-sm mx-auto leading-relaxed">
                  Browse products to add specific part codes, or use the option below to enter a custom hose or belt requirement.
                </p>
                <div className="pt-2">
                  <Link
                    href="/catalogue"
                    className="inline-flex items-center text-xs text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold"
                  >
                    Browse Product Catalogue →
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Add Custom Part Form Toggle */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              {isAddingCustom ? (
                <div className="p-5 glass-panel rounded-2xl space-y-4 border border-amber-500/30">
                  <div className="flex items-center justify-between text-xs text-slate-800 dark:text-industrial-300 font-bold uppercase">
                    <span>Add Custom Component / Sourcing Item</span>
                    <button
                      type="button"
                      onClick={() => setIsAddingCustom(false)}
                      className="text-slate-500 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="e.g. 3-inch Slurry Hose, SPB 2800"
                      className="sm:col-span-2 px-4 py-2.5 glass-panel text-xs text-slate-900 dark:text-white rounded-xl focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10"
                    />
                    <input
                      type="number"
                      min="1"
                      value={customQty}
                      onChange={(e) => setCustomQty(e.target.value)}
                      placeholder="Qty"
                      className="px-4 py-2.5 glass-panel text-xs text-slate-900 dark:text-white rounded-xl text-center focus:outline-none focus:border-amber-500 font-bold border border-slate-200 dark:border-white/10"
                    />
                  </div>

                  <input
                    type="text"
                    value={customSpec}
                    onChange={(e) => setCustomSpec(e.target.value)}
                    placeholder="Specific dimensions, pressure rating, or application context"
                    className="w-full px-4 py-2.5 glass-panel text-xs text-slate-900 dark:text-white rounded-xl focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10"
                  />

                  <button
                    type="button"
                    onClick={handleAddCustomItem}
                    className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold uppercase rounded-xl transition-all cursor-pointer"
                  >
                    Add to Quote List
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsAddingCustom(true)}
                  className="inline-flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 mr-1.5" />
                  + Add Custom Specification / Unlisted Item
                </button>
              )}
            </div>
          </div>

          {/* Technical Operating Context & File Upload */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-white/[0.08] shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-white/[0.08] pb-3">
              Application &amp; Drawings
            </h3>

            <div className="space-y-2">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Operating Media &amp; Environment (Optional):
              </label>
              <textarea
                rows={3}
                value={applicationEnv}
                onChange={(e) => setApplicationEnv(e.target.value)}
                placeholder="e.g. 10 bar working pressure, ambient 45°C sun exposure, transferring gold leach slurry with 15% solids..."
                className="w-full glass-panel rounded-xl p-4 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              />
            </div>

            {/* Drawings / PDF Upload */}
            <div className="space-y-2">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Attach Engineering Drawings or Broken Component Photo (Max 10MB PDF/JPG):
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-white/10 hover:border-amber-500 rounded-2xl p-6 text-center cursor-pointer transition-colors glass-panel"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Upload className="w-7 h-7 mx-auto text-slate-400 dark:text-industrial-400 mb-2" />
                {attachmentName ? (
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" />
                    Selected: {attachmentName}
                  </div>
                ) : (
                  <div className="text-xs text-slate-600 dark:text-industrial-300 font-medium">
                    Click to select file or drag drawing here
                  </div>
                )}
                <div className="text-[11px] text-slate-400 dark:text-industrial-400 mt-1">
                  Supported formats: PDF, JPG, PNG, DWG
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Company, Contact & Dispatch (Col 8-12) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 dark:border-white/[0.08]">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase border-b border-slate-200 dark:border-white/[0.08] pb-3">
              Procurement &amp; Contact Details
            </h3>

            {/* Honeypot hidden input for anti-bot spam protection */}
            <input
              type="text"
              name="company_tax_check"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Urgency Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Quotation Urgency Level: *
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setUrgency("urgent_breakdown")}
                  className={`p-3.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    urgency === "urgent_breakdown"
                      ? "bg-red-50 dark:bg-red-950/80 border-red-500 text-red-700 dark:text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.2)]"
                      : "glass-panel border-slate-200 dark:border-white/10 text-slate-600 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span className="block text-[11px] text-red-500 font-bold uppercase">URGENT</span>
                  Breakdown
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("standard_quote")}
                  className={`p-3.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    urgency === "standard_quote"
                      ? "bg-amber-500/15 border-amber-500 text-amber-800 dark:text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      : "glass-panel border-slate-200 dark:border-white/10 text-slate-600 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span className="block text-[11px] text-slate-500 dark:text-industrial-400 font-bold uppercase">STANDARD</span>
                  Standard Quote
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("project_planning")}
                  className={`p-3.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    urgency === "project_planning"
                      ? "bg-amber-500/15 border-amber-500 text-amber-800 dark:text-amber-300"
                      : "glass-panel border-slate-200 dark:border-white/10 text-slate-600 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Planning / Budget
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("tender")}
                  className={`p-3.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    urgency === "tender"
                      ? "bg-amber-500/15 border-amber-500 text-amber-800 dark:text-amber-300"
                      : "glass-panel border-slate-200 dark:border-white/10 text-slate-600 dark:text-industrial-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Formal Tender
                </button>
              </div>
            </div>

            {/* Contact Person Name */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Contact Person Name: *
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Farai Moyo"
                className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              />
            </div>

            {/* Company / Organization Name */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Company / Mining / Farming Name: *
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Great Dyke Platinum Operations Ltd"
                className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Business Email Address: *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="procurement@company.co.zw"
                className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              />
            </div>

            {/* Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                  Phone Number: *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+263 242 ..."
                  className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+263 77 ..."
                  className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-industrial-500 focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
                />
              </div>
            </div>

            {/* Delivery Destination */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-700 dark:text-industrial-300 font-semibold">
                Delivery Site or Depot Pick-up Location: *
              </label>
              <select
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                className="w-full glass-panel rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              >
                <option value="Harare Depot" className="bg-white dark:bg-industrial-950">Harare (Graniteside Hub Collection)</option>
                <option value="Bulawayo Depot" className="bg-white dark:bg-industrial-950">Bulawayo (Belmont Desk Collection)</option>
                <option value="Mutare Depot" className="bg-white dark:bg-industrial-950">Mutare (Nyakamete Depot Collection)</option>
                <option value="Midlands Site Delivery" className="bg-white dark:bg-industrial-950">Midlands Site Delivery (Kwekwe / Gweru)</option>
                <option value="Mining Site Delivery" className="bg-white dark:bg-industrial-950">Direct Mining Site Freight (Hwange, Gwanda, Shurugwi)</option>
                <option value="Agricultural Farm Run" className="bg-white dark:bg-industrial-950">Commercial Farm Delivery (Mashonaland / Lowveld)</option>
              </select>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="p-4 bg-red-50 dark:bg-red-950/80 border border-red-500/80 rounded-2xl text-xs text-red-700 dark:text-red-300 flex items-start space-x-2.5">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>{errorMessage}</div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-xs uppercase tracking-wider font-extrabold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center hover:scale-[1.02] cursor-pointer ${
                isSubmitting
                  ? "bg-slate-300 dark:bg-industrial-800 text-slate-500 dark:text-industrial-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                  Dispatching RFQ to Sales Desk...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Formal Quotation Request
                </>
              )}
            </button>

            {/* Secondary Direct WhatsApp button */}
            <div className="pt-2 border-t border-slate-200 dark:border-white/[0.06] text-center space-y-2.5">
              <span className="text-xs text-slate-500 dark:text-industrial-400 block font-medium">
                Prefer direct messaging with a sales engineer?
              </span>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-4 glass-panel hover:border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-200 dark:border-white/10"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-500" />
                Dispatch via WhatsApp Hotline
              </a>
            </div>
          </div>
        </motion.div>
      </form>

      {/* Success Confirmation Modal */}
      {successReference && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
          <div className="max-w-lg w-full bg-white dark:bg-[#080B10]/98 glass-panel-glow border-emerald-500/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center space-x-3.5 text-emerald-600 dark:text-emerald-400">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold uppercase text-slate-900 dark:text-white tracking-wide">
                  Quotation Request Registered
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                  Reference: {successReference}
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 dark:text-industrial-300 leading-relaxed glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
              <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                What Happens Next:
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2.5 font-bold">1.</span>
                  <span>Our technical desk verifies working pressure ratings, coil lengths, and depot inventory.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2.5 font-bold">2.</span>
                  <span>A formal, itemized proforma invoice will be delivered to <strong>{email}</strong> within 2 business hours.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2.5 font-bold">3.</span>
                  <span>Invoicing available in USD or ZiG (official RBZ interbank rate) with valid statutory VAT.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/catalogue"
                onClick={() => setSuccessReference(null)}
                className="flex-1 py-3.5 px-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider text-center rounded-xl shadow-lg transition-all"
              >
                Return to Catalogue
              </Link>

              <button
                type="button"
                onClick={() => setSuccessReference(null)}
                className="py-3.5 px-5 glass-panel hover:border-slate-400 dark:hover:border-white/20 text-slate-700 dark:text-industrial-200 text-xs font-bold uppercase tracking-wider text-center rounded-xl transition-all cursor-pointer border border-slate-200 dark:border-white/10"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
