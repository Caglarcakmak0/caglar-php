"use client";

import { cn } from "@/lib/utils";

interface SkillsMarqueeProps {
  className?: string;
}

const skills = [
  { name: "User Onboarding", subtitle: "Flow Design", icon: "👤" },
  { name: "Payment System", subtitle: "Architecture", icon: "💳" },
  { name: "Marketing & Analytics", subtitle: "Infrastructure", icon: "📊" },
  { name: "Design System & UI", subtitle: "Consistency", icon: "🎨" },
  { name: "API Gateway &", subtitle: "Documentation", icon: "📚" },
  { name: "Security", subtitle: "Implementation", icon: "🔐" },
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

const CurrentStatusCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-center overflow-hidden rounded-2xl",
        "bg-white dark:bg-slate-900",
        "border border-slate-200/50 dark:border-slate-700/50",
        "p-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <svg
            className="h-5 w-5 text-slate-700 dark:text-slate-300"
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
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            THE INSIDE SCOOP
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Currently building a SaaS Application
          </p>
        </div>
      </div>
    </div>
  );
};

export { SkillsMarquee, CurrentStatusCard };
export type { SkillsMarqueeProps };
