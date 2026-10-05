import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPressure(bar?: number, psi?: number): string {
  if (bar && psi) {
    return `${bar} bar (${psi} PSI)`;
  }
  if (bar) {
    return `${bar} bar`;
  }
  if (psi) {
    return `${psi} PSI`;
  }
  return "N/A";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
