"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface SkillsMarqueeProps {
  className?: string;
}

const skills = [
  { name: "E-COMMERCE", subtitle: "Full Stack Solutions", icon: "🛒" },
  { name: "WEBSOCKET", subtitle: "Real-time Features", icon: "⚡" },
  { name: "AI INTEGRATION", subtitle: "Smart Features", icon: "🤖" },
  { name: "PERFORMANCE", subtitle: "Optimization", icon: "🚀" },
  { name: "MONITORING & ANALYTICS", subtitle: "Infrastructure", icon: "📊" },
  { name: "DESIGN SYSTEM", subtitle: "UI Consistency", icon: "🎨" },
];

const SkillsMarquee = ({ className }: SkillsMarqueeProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden py-4", className)}>
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee */}
      <div className="flex animate-marquee gap-4">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex shrink-0 flex-col rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            style={{ minWidth: "160px" }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">{skill.icon}</span>
              <span className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">
                {skill.name}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              {skill.subtitle}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Step-by-step guide
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Combined Card: CurrentStatus + SkillsMarquee
const CurrentStatusCard = ({ className }: { className?: string }) => {
  const t = useTranslations("Status");
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-gradient-to-b from-slate-50 to-white dark:bg-none dark:bg-slate-900",
        "border border-slate-200 dark:border-slate-700/50",
        className
      )}
    >
      {/* Gradient Glow Effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Top Section: Skills Marquee (Moved from Bottom) */}
      <div className="relative z-10 bg-slate-50/50 dark:bg-transparent pt-16 pb-8">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent" />

        {/* Skills Marquee */}
        <div className="flex animate-marquee gap-3 px-4">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex shrink-0 flex-col rounded-xl border border-slate-700 bg-transparent p-3"
              style={{ minWidth: "140px" }}
            >
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {skill.subtitle}
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Step-by-step guide
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: THE INSIDE SCOOP (Moved from Top) */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <svg
              className="h-6 w-6 text-slate-600 dark:text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              {t("insideScoop")}
            </p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {t("current")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsMarquee, CurrentStatusCard };
export type { SkillsMarqueeProps };
