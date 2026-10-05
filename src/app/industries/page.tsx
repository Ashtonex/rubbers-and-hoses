import React from "react";
import { Metadata } from "next";
import { IndustriesIndexView } from "@/components/industries/IndustriesIndexView";

export const metadata: Metadata = {
  title: "Industries & Sectors Served | Zimbabwe Industrial Solutions",
  description:
    "Tailored fluid handling, conveyor systems, and drive belts configured for Zimbabwe's mining, agriculture, manufacturing, automotive, and civil construction sectors.",
};

export default function IndustriesPage() {
  return <IndustriesIndexView />;
}
