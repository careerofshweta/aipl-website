"use client";

import { Children, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionCarouselProps = {
  children: React.ReactNode;
  label: string;
  itemClassName?: string;
  autoPlayMs?: number;
  className?: string;
};

export function SectionCarousel({
  children,
  label,
  itemClassName,
  autoPlayMs = 0,
  className,
}: SectionCarouselProps) {
  const slides = Children.toArray(children);
  const [viewportRef, api] = useEmblaCarousel({ align: "start", loop: slides.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || !autoPlayMs || paused) return;
    const timer = window.setInterval(() => api.scrollNext(), autoPlayMs);
    return () => window.clearInterval(timer);
  }, [api, autoPlayMs, paused]);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") api?.scrollPrev();
        if (event.key === "ArrowRight") api?.scrollNext();
      }}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", itemClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label={`Previous ${label} slide`}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-surface/80 text-gold transition hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex max-w-[55vw] items-center justify-center gap-2" aria-label="Slides">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  selectedIndex === index ? "w-7 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label={`Next ${label} slide`}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-surface/80 text-gold transition hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
