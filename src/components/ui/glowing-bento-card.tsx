"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowingBentoCardProps {
  children: ReactNode;
  className?: string;
  area?: string;
}

const GlowingBentoCard = ({
  children,
  className,
  area,
}: GlowingBentoCardProps) => {
  return (
    <div
      className={cn(
        "min-h-[10rem] min-[1080px]:min-h-0 list-none",
        area,
        className
      )}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export { GlowingBentoCard };
export type { GlowingBentoCardProps };
