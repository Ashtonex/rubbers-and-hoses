import React from "react";
import { Metadata } from "next";
import { RfqFormView } from "@/components/rfq/RfqFormView";

export const metadata: Metadata = {
  title: "Request for Quotation (RFQ) | Industrial Supplies Zimbabwe",
  description:
    "Submit an itemized quotation request for hydraulic hoses, mining slurry lines, V-belts, conveyor belting, and fittings. Fast proforma generation in USD and ZiG.",
};

export default function RfqPage() {
  return <RfqFormView />;
}
