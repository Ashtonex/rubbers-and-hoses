import React from "react";
import { Metadata } from "next";
import { TechnicalResourcesView } from "@/components/resources/TechnicalResourcesView";

export const metadata: Metadata = {
  title: "Technical Resources & Sizing Guides | Zimbabwe",
  description:
    "Engineering guides for industrial hose selection (STAMPED method), V-belt identification, elastomer chemical compatibility, and procurement FAQs.",
};

export default function TechnicalResourcesPage() {
  return <TechnicalResourcesView />;
}
