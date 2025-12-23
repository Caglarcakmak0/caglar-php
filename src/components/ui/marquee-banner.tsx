"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeItem {
  text: string;
}

interface MarqueeBannerProps {
  className?: string;
  items?: MarqueeItem[];
}

const Star = () => (
  <svg
    fill="#fffff5"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Star</title>
    <path
      d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
      fill="#fffff5"
    />
  </svg>
);

const defaultItems: MarqueeItem[] = [
  { text: "Accessible" },
  { text: "Responsive" },
  { text: "Dynamic" },
  { text: "Scalable" },
  { text: "Search Optimized" },
  { text: "Interactive" },
  { text: "Secure" },
  { text: "Reliable" },
  { text: "Engaging" },
];

const MarqueeBanner = React.forwardRef<HTMLDivElement, MarqueeBannerProps>(
  ({ className, items = defaultItems }, ref) => {
    // Duplicate items for seamless loop
    const allItems = [...items, ...items, ...items, ...items];

    return (
      <div className={cn("relative scale-110", className)} ref={ref}>
        {/* Background layers */}
        <div className="z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0a255b] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8" />

        {/* Main banner */}
        <div className="-rotate-3 z-2 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 will-change-transform lg:py-2">
          <div className="group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] gap-[var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {/* First marquee set */}
            <div className="flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row">
              {allItems.map((item, idx) => (
                <div
                  key={`item-1-${idx}`}
                  className="inline-flex items-center gap-2.5"
                >
                  <span className="text-nowrap font-instrument-serif font-semibold text-gray-50 text-sm uppercase leading-6 tracking-wider md:text-lg lg:text-xl">
                    {item.text}
                  </span>
                  <Star />
                </div>
              ))}
            </div>

            {/* Second marquee set (for seamless loop) */}
            <div className="flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row">
              {allItems.map((item, idx) => (
                <div
                  key={`item-2-${idx}`}
                  className="inline-flex items-center gap-2.5"
                >
                  <span className="text-nowrap font-instrument-serif font-semibold text-gray-50 text-sm uppercase leading-6 tracking-wider md:text-lg lg:text-xl">
                    {item.text}
                  </span>
                  <Star />
                </div>
              ))}
            </div>

            {/* Third marquee set */}
            <div className="flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row">
              {allItems.map((item, idx) => (
                <div
                  key={`item-3-${idx}`}
                  className="inline-flex items-center gap-2.5"
                >
                  <span className="text-nowrap font-instrument-serif font-semibold text-gray-50 text-sm uppercase leading-6 tracking-wider md:text-lg lg:text-xl">
                    {item.text}
                  </span>
                  <Star />
                </div>
              ))}
            </div>

            {/* Fourth marquee set */}
            <div className="flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row">
              {allItems.map((item, idx) => (
                <div
                  key={`item-4-${idx}`}
                  className="inline-flex items-center gap-2.5"
                >
                  <span className="text-nowrap font-instrument-serif font-semibold text-gray-50 text-sm uppercase leading-6 tracking-wider md:text-lg lg:text-xl">
                    {item.text}
                  </span>
                  <Star />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MarqueeBanner.displayName = "MarqueeBanner";

export { MarqueeBanner };
export type { MarqueeItem, MarqueeBannerProps };
