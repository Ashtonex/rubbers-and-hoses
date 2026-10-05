import React from "react";
import { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Depots & Contact | Harare, Bulawayo, Mutare",
  description:
    "Industrial supply trade desk, depot pick-up points in Harare, Bulawayo, and Mutare, and 24/7 emergency breakdown support hotline.",
};

export default function ContactPage() {
  return <ContactView />;
}
