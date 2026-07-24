import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact - AIPL DreamCity Ludhiana",
  description:
    "Get in touch with the AIPL DreamCity Ludhiana sales advisory. Request a callback, schedule a site visit, or download the project brochure.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AIPL DreamCity Ludhiana",
    description: "Request a callback or schedule a site visit at AIPL DreamCity Ludhiana.",
    url: "/contact",
  },
};

export default ContactPage;
