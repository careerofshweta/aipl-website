import Link from "next/link";

export function SiteLogo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/favicon.png"
        alt="Zavira Realty"
        width={40}
        height={40}
        className="h-10 w-10 rounded-md bg-white/95 object-contain p-1 shadow-md ring-1 ring-white/10"
      />
      {variant === "full" && (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-base font-semibold tracking-wide">
            Zavira <span className="text-gold">Realty</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            AIPL DreamCity · Ludhiana
          </span>
        </span>
      )}
    </Link>
  );
}
