"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

function SunIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className={`relative inline-flex items-center h-8 w-15 px-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
        isDark 
          ? "bg-slate-800 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
          : "bg-slate-200 border border-slate-300 shadow-inner"
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Background icon hints */}
      <span className="absolute left-1.5 text-amber-500 text-xs flex items-center justify-center pointer-events-none">
        <SunIcon className="w-3.5 h-3.5" />
      </span>
      <span className="absolute right-1.5 text-slate-400 dark:text-amber-400 text-xs flex items-center justify-center pointer-events-none">
        <MoonIcon className="w-3.5 h-3.5" />
      </span>

      {/* Sliding Knob */}
      <span
        className={`inline-block w-6 h-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center z-10 ${
          isDark 
            ? "translate-x-7 bg-gradient-to-br from-amber-400 to-amber-600 text-black" 
            : "translate-x-0 bg-white text-amber-600"
        }`}
      >
        {isDark ? (
          <MoonIcon className="w-3 h-3 text-black" />
        ) : (
          <SunIcon className="w-3.5 h-3.5 text-amber-600" />
        )}
      </span>
    </button>
  );
}
