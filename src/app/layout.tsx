import type { Metadata } from "next";
import "./globals.css";
import { QuoteBasketProvider } from "@/context/QuoteBasketContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ClientAppShell } from "@/components/layout/ClientAppShell";
import { COMPANY_CONFIG } from "@/data/company-config";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_CONFIG.companyName} | Industrial Hose, Rubber & Power Transmission Zimbabwe`,
    template: `%s | ${COMPANY_CONFIG.companyName}`,
  },
  description:
    "Supplying heavy-duty hydraulic hoses, mining slurry lines, PVC suction hoses, SPB wedge belts, classical V-belts, conveyor belting, and camlock fittings across Zimbabwe (Harare, Bulawayo, Mutare).",
  keywords: [
    "industrial hoses Zimbabwe",
    "rubber hoses Zimbabwe",
    "hydraulic hoses Harare",
    "V belts Zimbabwe",
    "fan belts Zimbabwe",
    "SPB 2600 Zimbabwe",
    "conveyor belts Zimbabwe",
    "rubber products Zimbabwe",
    "mining slurry hose Zimbabwe",
    "PVC suction hose Harare",
    "camlock couplings Zimbabwe",
    "industrial hose Mutare",
    "V belts Bulawayo"
  ],
  authors: [{ name: COMPANY_CONFIG.companyName }],
  creator: COMPANY_CONFIG.companyName,
  publisher: COMPANY_CONFIG.companyName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://rubberandhose.co.zw",
    siteName: COMPANY_CONFIG.companyName,
    title: `${COMPANY_CONFIG.companyName} | Industrial Hose, Rubber & Power Transmission`,
    description:
      "Precision engineered fluid transfer, conveyor belting, and mechanical drive systems built for Zimbabwe's mining, agriculture, and manufacturing sectors.",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_CONFIG.companyName} Industrial Supplies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_CONFIG.companyName} | Industrial Hose & Rubber Zimbabwe`,
    description:
      "Heavy-duty hydraulic hoses, V-belts, conveyor belting, and industrial fittings for mining, farming, and manufacturing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_CONFIG.companyName,
    alternateName: "Rubber & Hose Zimbabwe",
    url: "https://rubberandhose.co.zw",
    logo: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=200&q=80",
    description: COMPANY_CONFIG.subtagline,
    telephone: COMPANY_CONFIG.primaryPhone,
    email: COMPANY_CONFIG.salesEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_CONFIG.headquartersCity,
      addressCountry: "ZW",
    },
    areaServed: ["ZW"],
    knowsAbout: [
      "Industrial Rubber Hoses",
      "Hydraulic Hose Assemblies",
      "Power Transmission V-Belts",
      "Conveyor Belting",
      "Mining Slurry Lines",
      "Camlock Couplings"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('rubber_hose_theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-[#07090E] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <QuoteBasketProvider>
            <ClientAppShell>
              {children}
            </ClientAppShell>
          </QuoteBasketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
