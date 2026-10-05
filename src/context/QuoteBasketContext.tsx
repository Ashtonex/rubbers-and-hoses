"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { RFQItem } from "@/types/industrial";

interface QuoteBasketContextType {
  items: RFQItem[];
  addItem: (item: RFQItem) => void;
  removeItem: (productId: string, variantCode?: string) => void;
  updateQuantity: (productId: string, quantity: string, variantCode?: string) => void;
  clearBasket: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  totalItemCount: number;
}

const QuoteBasketContext = createContext<QuoteBasketContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "crh_quote_basket_v1";

export function QuoteBasketProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RFQItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Storage unavailable or parsing error; continue with empty
    }
    setIsHydrated(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Fallback
    }
  }, [items, isHydrated]);

  const addItem = (newItem: RFQItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.productId === newItem.productId && i.selectedVariantCode === newItem.selectedVariantCode
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const currentQty = parseFloat(existing.quantity) || 1;
        const addQty = parseFloat(newItem.quantity) || 1;
        updated[existingIndex] = {
          ...existing,
          quantity: String(currentQty + addQty),
          notes: newItem.notes || existing.notes,
        };
        return updated;
      }
      return [...prev, newItem];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string, variantCode?: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && (variantCode ? i.selectedVariantCode === variantCode : true))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: string, variantCode?: string) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.productId === productId && (variantCode ? i.selectedVariantCode === variantCode : true)) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearBasket = () => {
    setItems([]);
  };

  const totalItemCount = useMemo(() => {
    return items.reduce((sum, item) => sum + (parseFloat(item.quantity) || 1), 0);
  }, [items]);

  return (
    <QuoteBasketContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearBasket,
        isDrawerOpen,
        setIsDrawerOpen,
        totalItemCount,
      }}
    >
      {children}
    </QuoteBasketContext.Provider>
  );
}

export function useQuoteBasket() {
  const context = useContext(QuoteBasketContext);
  if (!context) {
    throw new Error("useQuoteBasket must be used within a QuoteBasketProvider");
  }
  return context;
}
