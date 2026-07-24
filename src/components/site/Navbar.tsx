import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLogo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SITE_PHONE = "+91 99151 63030";
export const SITE_PHONE_HREF = "tel:+919915163030";

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <SiteLogo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE_PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone size={14} /> Call {SITE_PHONE}
          </a>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE_PHONE_HREF}
            aria-label="Call now"
            className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-primary-foreground shadow-md"
          >
            <Phone size={16} />
          </a>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border/60"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x mx-auto flex max-w-7xl flex-col py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border-b border-border/40 py-3 text-sm font-medium text-foreground/90"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={SITE_PHONE_HREF}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                <Phone size={14} /> Call {SITE_PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
