export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-md gradient-gold text-primary-foreground shadow-md">
        <span className="font-serif text-lg font-bold leading-none">A</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-base font-semibold tracking-wide">
          AIPL <span className="text-gold">DreamCity</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Ludhiana
        </span>
      </span>
    </a>
  );
}
