"use client";

import React, { useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProductSearchModal } from "@/components/search/ProductSearchModal";

export function HeroSectionWrapper() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenSearch={() => setIsSearchOpen(true)} />
      <ProductSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
