"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TimezoneCardProps {
  className?: string;
}

const timezones = [
  { code: "GB", name: "UK", flag: "🇬🇧" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "USA", flag: "🇺🇸" },
];

const TimezoneCard = ({ className }: TimezoneCardProps) => {
  const [activeTimezone, setActiveTimezone] = useState("IN");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800",
        "border border-slate-200/50 dark:border-slate-700/50",
        "p-6",
        className
      )}
    >
      {/* Header */}
      <h3 className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
        I&apos;m very flexible with time
        <br />
        zone communications
      </h3>

      {/* Timezone Pills */}
      <div className="flex gap-2">
        {timezones.map((tz) => (
          <button
            key={tz.code}
            onClick={() => setActiveTimezone(tz.code)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
              activeTimezone === tz.code
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/80 text-slate-600 hover:bg-white dark:bg-slate-800 dark:text-slate-300"
            )}
          >
            <span>{tz.flag}</span>
            <span>{tz.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { TimezoneCard };
export type { TimezoneCardProps };
