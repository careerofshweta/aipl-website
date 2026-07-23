import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { SiteLogo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-surface/60">
      <div className="container-x mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <SiteLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A landmark integrated township in Ludhiana crafted for elevated living, timeless
              architecture, and long-term value.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Projects</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Luxury Villas</li>
              <li>Residential Plots</li>
              <li>Commercial Spaces</li>
              <li>High Street Retail</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold shrink-0" /> AIPL DreamCity, Chandigarh Road, Ludhiana, Punjab</li>
              <li className="flex gap-2"><Phone size={16} className="text-gold shrink-0" /> +91 98000 00000</li>
              <li className="flex gap-2"><Mail size={16} className="text-gold shrink-0" /> sales@aipldreamcity.in</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AIPL DreamCity Ludhiana. All rights reserved.</p>
          <p>Crafted for luxury living · RERA compliant</p>
        </div>
      </div>
    </footer>
  );
}
