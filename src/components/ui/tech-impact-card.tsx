"use client";

import { cn } from "@/lib/utils";
import {
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiGit,
  SiGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface TechImpactCardProps {
  className?: string;
  websiteUrl?: string;
}

const techStack = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
];

const TechImpactCard = ({
  className,
  websiteUrl = "caglarcakmak.site",
}: TechImpactCardProps) => {
  const t = useTranslations("TechStack");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl min-h-[400px] min-[1080px]:min-h-0",
        "bg-white dark:bg-slate-900",
        "border border-slate-200/50 dark:border-slate-700/50",
        className
      )}
    >
      {/* Top Section: Tech Stack */}
      <div className="p-6 mb-20">
        {/* Header */}
        <div className="mb-4">
          <h3 className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            {t("passionate")}
          </h3>
          <h3 className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            {t("technologies")}
          </h3>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />

          {/* First row */}
          <div className="flex animate-marquee gap-3 py-2">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
              >
                <tech.icon className="h-4 w-4" color={tech.color} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second row - reverse direction */}
          <div className="flex animate-marquee-reverse gap-3 py-2">
            {[...techStack.slice(5), ...techStack.slice(5)].map(
              (tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
                >
                  <tech.icon className="h-4 w-4" color={tech.color} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Third row */}
          <div
            className="flex animate-marquee gap-3 py-2"
            style={{ animationDuration: "25s" }}
          >
            {[...techStack.slice(3), ...techStack.slice(3)].map(
              (tech, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
                >
                  <tech.icon className="h-4 w-4" color={tech.color} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section: Browser Mockup */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
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
            "h-32 w-32 rounded-full",
            "bg-indigo-500/30 blur-3xl",
            "transition-all duration-500",
            "group-hover:scale-150 group-hover:bg-indigo-500/40"
          )}
        />

        {/* 3D Perspective Browser Window */}
        <div className="group/browser relative h-48 w-full max-w-[280px] perspective-1000 z-10 transition-transform duration-500 group-hover:-translate-y-4">
          <div
            className={cn(
              "absolute inset-0 flex flex-col overflow-hidden rounded-xl",
              "border border-neutral-200 bg-white shadow-xl",
              "transition-all duration-500 ease-out",
              "group-hover/browser:-translate-y-2 group-hover/browser:rotate-x-6 group-hover/browser:shadow-2xl",
              "dark:border-neutral-800 dark:bg-neutral-900"
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Browser Header */}
            <div
              className={cn(
                "relative z-30 flex h-7 w-full items-center justify-between",
                "border-b border-neutral-200 bg-neutral-50 px-3",
                "dark:border-neutral-800 dark:bg-neutral-900/50"
              )}
            >
              {/* Traffic Lights */}
              <div className="flex gap-x-1.5">
                <div className="size-2 rounded-full bg-[#FF5C5F]" />
                <div className="size-2 rounded-full bg-[#FAC800]" />
                <div className="size-2 rounded-full bg-[#34C759]" />
              </div>

              {/* URL Bar */}
              <div
                className={cn(
                  "flex h-4 w-2/5 items-center justify-center rounded-md px-2",
                  "bg-neutral-200/50 text-[8px] text-neutral-500",
                  "transition-all duration-300",
                  "group-hover/browser:w-3/5 group-hover/browser:bg-white group-hover/browser:shadow-sm",
                  "dark:bg-neutral-800 dark:group-hover/browser:bg-neutral-800"
                )}
              >
                <Lock className="mr-1 size-2 opacity-50" />
                <span className="opacity-0 group-hover/browser:opacity-100 transition-opacity delay-100 duration-500">
                  {websiteUrl}
                </span>
              </div>

              <div className="w-8" />
            </div>

            {/* Browser Content */}
            <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden p-3">
              {/* Grid Background */}
              <div
                className="absolute botot inset-0 h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />

              {/* Content */}
              <div
                className={cn(
                  "relative z-10 flex flex-col items-center gap-2",
                  "transition-transform duration-500",
                  "-translate-y-3 group-hover/browser:-translate-y-2"
                )}
              >
                <div className="text-center">
                  <h3
                    className={cn(
                      "text-base font-bold",
                      "bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-transparent",
                      "dark:from-neutral-100 dark:to-neutral-500",
                      "whitespace-pre-line"
                    )}
                  >
                    {t("websitesImpact")}
                  </h3>
                  <div className="mt-2 h-1 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                  <div className="mt-1 h-1 w-12 mx-auto rounded-full bg-neutral-200 dark:bg-neutral-800" />
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
                    {t("start")}
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
                    {t("details")}
                  </Link>
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={cn(
                  "absolute -bottom-8 left-1/2 h-16 w-16 -translate-x-1/2",
                  "rounded-full bg-indigo-500/20 blur-xl",
                  "transition-all duration-500 group-hover/browser:bg-indigo-500/40"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TechImpactCard };
export type { TechImpactCardProps };
