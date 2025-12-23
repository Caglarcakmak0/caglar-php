"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface BlogHeroProps {
  className?: string;
}

export function BlogHero({ className }: BlogHeroProps) {
  const t = useTranslations("Blog");

  return (
    <section
      className={cn("relative py-16 md:py-24", "overflow-hidden", className)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-transparent dark:from-neutral-950 dark:to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-1.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Fresh Content
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-4">
          {t("title")}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <div className="h-1 w-16 rounded-full bg-neutral-400 dark:bg-neutral-600" />
          <div className="h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
    </section>
  );
}
