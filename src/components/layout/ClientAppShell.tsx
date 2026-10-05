"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";
import { ProductSearchModal } from "@/components/search/ProductSearchModal";
import { QuoteBasketDrawer } from "@/components/rfq/QuoteBasketDrawer";

export function ClientAppShell({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>

      <Footer />

      <MobileStickyBar onOpenSearch={() => setIsSearchOpen(true)} />
      <ProductSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <QuoteBasketDrawer />
    </>
  );
}
