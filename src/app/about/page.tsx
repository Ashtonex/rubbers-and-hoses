import React from "react";
import { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About & Capabilities | Industrial Supply Zimbabwe",
  description:
    "Engineering distribution profile, product capabilities, and commercial standards for Rubber & Hose Zimbabwe.",
};

export default function AboutPage() {
  return <AboutView />;
}
