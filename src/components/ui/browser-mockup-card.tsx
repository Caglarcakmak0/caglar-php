"use client";

import { cn } from "@/lib/utils";
import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WebsitesImpactCardProps {
  className?: string;
  websiteUrl?: string;
}

const WebsitesImpactCard = ({
  className,
  websiteUrl = "caglarakman.com",
}: WebsitesImpactCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center p-6 overflow-hidden",
        className
      )}
    >
      {/* Background Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10",
          "blur-3xl opacity-50 transition-opacity duration-500",
          "group-hover:opacity-80"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0",
          "h-40 w-40 rounded-full",
          "bg-indigo-500/30 blur-3xl",
          "transition-all duration-500",
          "group-hover:scale-150 group-hover:bg-indigo-500/40"
        )}
      />

      {/* 3D Perspective Browser Window */}
      <div className="group relative h-60 w-full max-w-[300px] perspective-1000 z-10">
        <div
          className={cn(
            "absolute inset-0 flex flex-col overflow-hidden rounded-xl",
            "border border-neutral-200 bg-white shadow-xl",
            "transition-all duration-500 ease-out",
            "group-hover:-translate-y-4 group-hover:rotate-x-6 group-hover:shadow-2xl",
            "dark:border-neutral-800 dark:bg-neutral-900"
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Browser Header */}
          <div
            className={cn(
              "relative z-30 flex h-8 w-full items-center justify-between",
              "border-b border-neutral-200 bg-neutral-50 px-3",
              "dark:border-neutral-800 dark:bg-neutral-900/50"
            )}
          >
            {/* Traffic Lights */}
            <div className="flex gap-x-1.5">
              <div className="size-2.5 rounded-full bg-[#FF5C5F]" />
              <div className="size-2.5 rounded-full bg-[#FAC800]" />
              <div className="size-2.5 rounded-full bg-[#34C759]" />
            </div>

            {/* URL Bar */}
            <div
              className={cn(
                "flex h-5 w-2/5 items-center justify-center rounded-md px-2",
                "bg-neutral-200/50 text-[8px] text-neutral-500",
                "transition-all duration-300",
                "group-hover:w-3/5 group-hover:bg-white group-hover:shadow-sm",
                "dark:bg-neutral-800 dark:group-hover:bg-neutral-800"
              )}
            >
              <Lock className="mr-1 size-2 opacity-50" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                {websiteUrl}
              </span>
            </div>

            <div className="w-8" />
          </div>

          {/* Browser Content */}
          <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden p-4">
            {/* Grid Background */}
            <div
              className="absolute inset-0 h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Content */}
            <div
              className={cn(
                "relative z-10 flex flex-col items-center gap-3",
                "transition-transform duration-500",
                "-translate-y-4 group-hover:-translate-y-2"
              )}
            >
              <div className="text-center">
                <h3
                  className={cn(
                    "text-lg font-bold",
                    "bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-transparent",
                    "dark:from-neutral-100 dark:to-neutral-500"
                  )}
                >
                  Websites that
                  <br />
                  <span className="text-indigo-500">Impact.</span>
                </h3>
                <div className="mt-2 h-1 w-24 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-1 h-1 w-16 mx-auto rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2 pt-2">
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-1",
                    "bg-neutral-900 text-[10px] font-medium text-white",
                    "shadow-lg shadow-indigo-500/20",
                    "transition-all hover:bg-neutral-800 hover:shadow-indigo-500/40",
                    "dark:bg-white dark:text-black"
                  )}
                >
                  Start
                  <ArrowRight className="size-2.5" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "rounded-full border border-neutral-200 px-3 py-1",
                    "text-[10px] font-medium text-neutral-600",
                    "transition-colors hover:bg-neutral-100",
                    "dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
                  )}
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Bottom Glow */}
            <div
              className={cn(
                "absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2",
                "rounded-full bg-indigo-500/20 blur-xl",
                "transition-all duration-500 group-hover:bg-indigo-500/40"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { WebsitesImpactCard };
export type { WebsitesImpactCardProps };
