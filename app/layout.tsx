import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ExperienceLayer } from "../components/experience-layer";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://livcoindonesia.com"),
  title: { default: "LIVCO Indonesia — Pure Coconut, Real Possibilities", template: "%s | LIVCO Indonesia" },
  description: "Mitra bahan baku kelapa Indonesia untuk VCO, RBD Coconut Oil, MCT Oil, dan Coconut Flour.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "LIVCO Indonesia",
    title: "LIVCO Indonesia — Pure Coconut, Real Possibilities",
    description: "Bahan baku kelapa Indonesia untuk industri pangan, personal care, dan nutrisi.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LIVCO Indonesia — Pure coconut. Real possibilities." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "LIVCO Indonesia", url: "https://livcoindonesia.com", email: "hello@livcoindonesia.com", address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" } };
  return <html lang="id"><body className={sans.variable}><a className="skip-link" href="#main-content">Lewati ke konten utama</a><ExperienceLayer /><SiteHeader /><div id="main-content" tabIndex={-1}>{children}</div><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
