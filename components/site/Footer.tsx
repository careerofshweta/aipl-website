import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { SiteLogo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="light-section relative mt-0 border-t border-border/60 bg-surface/80">
      <div className="container-x mx-auto max-w-7xl py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <SiteLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Zavira Realty — authorised channel partners for AIPL DreamCity Ludhiana. Curated
              residential & commercial plots for discerning investors.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Projects</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Residential Plots</li>
              <li>Commercial Plots</li>
              <li>High Street Retail</li>
              <li>Investment Advisory</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                Shop 11, 1st Floor, Omaxe The Lake Commercial, New Chandigarh – 140901
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+919915163030" className="hover:text-gold">
                  +91 99151 63030
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@zavirarealty.com" className="hover:text-gold">
                  info@zavirarealty.com
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/_zavira_realty_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589167168008"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Zavira Realty. All rights reserved.</p>
          <p>Crafted for luxury living · RERA compliant</p>
        </div>
      </div>
    </footer>
  );
}
