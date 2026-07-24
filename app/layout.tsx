import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site/Footer";
import { ContactPopup } from "@/components/site/ContactPopup";
import { SiteNavbar } from "@/components/site/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aipldreamcity.in"),
  title: {
    default: "AIPL DreamCity Ludhiana - Luxury Township & Premium Plots",
    template: "%s",
  },
  description:
    "Discover AIPL DreamCity Ludhiana - a master-planned luxury township with premium residential plots, villas, commercial spaces and world-class amenities on Chandigarh Road.",
  authors: [{ name: "AIPL DreamCity Ludhiana" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AIPL DreamCity Ludhiana - Luxury Township & Premium Plots",
    description:
      "Discover AIPL DreamCity Ludhiana - a master-planned luxury township with premium residential plots, villas, commercial spaces and world-class amenities on Chandigarh Road.",
    siteName: "AIPL DreamCity Ludhiana",
    type: "website",
    images: ["/assets/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIPL DreamCity Ludhiana - Luxury Township & Premium Plots",
    description:
      "Discover AIPL DreamCity Ludhiana - a master-planned luxury township with premium residential plots, villas, commercial spaces and world-class amenities on Chandigarh Road.",
    images: ["/assets/hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2138",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNavbar />
        <ContactPopup />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
