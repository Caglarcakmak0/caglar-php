"use client";

import { cn } from "@/lib/utils";
import {
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
} from "@icons-pack/react-simple-icons";

interface TechStackCardProps {
  className?: string;
}

const techStack = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

const TechStackCard = ({ className }: TechStackCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-white dark:bg-slate-900",
        "border border-slate-200/50 dark:border-slate-700/50",
        "p-6",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
          Passionate about cutting-edge
        </h3>
        <h3 className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
          technologies
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
          {[...techStack.slice(5), ...techStack.slice(5)].map((tech, index) => (
            <div
              key={`row2-${index}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
            >
              <tech.icon className="h-4 w-4" color={tech.color} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Third row */}
        <div
          className="flex animate-marquee gap-3 py-2"
          style={{ animationDuration: "25s" }}
        >
          {[...techStack.slice(3), ...techStack.slice(3)].map((tech, index) => (
            <div
              key={`row3-${index}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
            >
              <tech.icon className="h-4 w-4" color={tech.color} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TechStackCard };
export type { TechStackCardProps };
