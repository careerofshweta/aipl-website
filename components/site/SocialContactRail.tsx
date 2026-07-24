import type { ReactNode } from "react";
import { Instagram, Phone } from "lucide-react";
import { SITE_PHONE_HREF } from "./Navbar";

const INSTAGRAM_URL = "https://www.instagram.com/_zavira_realty_/";
const MESSENGER_URL = "https://m.me/61589167168008";
const WHATSAPP_URL =
  "https://wa.me/919915163030?text=Hello%2C%20I%27m%20interested%20in%20AIPL%20DreamCity%20Ludhiana.";

type ContactLinkProps = {
  href: string;
  label: string;
  className: string;
  children: ReactNode;
  external?: boolean;
};

function ContactLink({ href, label, className, children, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 motion-reduce:transform-none sm:h-13 sm:w-13 ${className}`}
    >
      {children}
      <span className="pointer-events-none absolute right-[calc(100%+0.65rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-gold/25 bg-[oklch(0.22_0.032_255_/_0.94)] px-3 py-1.5 text-xs font-semibold tracking-wide text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-visible:-translate-x-1 group-focus-visible:opacity-100 sm:block">
        {label}
      </span>
    </a>
  );
}

export function SocialContactRail() {
  return (
    <nav aria-label="Quick contact" className="fixed bottom-5 right-3 z-40 sm:bottom-8 sm:right-5">
      <div className="flex flex-col gap-2.5">
        <ContactLink
          href={SITE_PHONE_HREF}
          label="Call us"
          className="bg-gradient-to-br from-emerald-400 to-emerald-600"
        >
          <Phone size={22} fill="currentColor" strokeWidth={2.2} />
        </ContactLink>

        <ContactLink
          href={WHATSAPP_URL}
          label="Chat on WhatsApp"
          external
          className="bg-gradient-to-br from-[#35e66f] to-[#18ad50]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d="M12.04 2a9.83 9.83 0 0 0-8.45 14.85L2.2 22l5.27-1.38A9.93 9.93 0 1 0 12.04 2Zm0 17.99a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.13.82.84-3.05-.2-.31A8.07 8.07 0 1 1 12.04 20Zm4.43-6.05c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.28 7.28 0 0 1-1.34-1.67c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.41.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </ContactLink>

        <ContactLink
          href={INSTAGRAM_URL}
          label="Follow on Instagram"
          external
          className="bg-[linear-gradient(135deg,#7137c8_0%,#d92b72_52%,#f6a43b_100%)]"
        >
          <Instagram size={25} strokeWidth={2.2} />
        </ContactLink>

        <ContactLink
          href={MESSENGER_URL}
          label="Message on Messenger"
          external
          className="bg-gradient-to-br from-[#20a8ff] to-[#6656ee]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.46 5.53 3.74 7.23V22l3.42-1.88c.9.26 1.86.41 2.84.41 5.52 0 10-4.15 10-9.26S17.52 2 12 2Zm.99 12.48-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72-5.48 5.82Z" />
          </svg>
        </ContactLink>
      </div>
    </nav>
  );
}
