"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { GlowingBentoCard } from "@/components/ui/glowing-bento-card";

const projects = [
  {
    key: "coach",
    bullets: ["b1", "b2", "b3", "b4", "b5"],
    stack: ["Go", "PostgreSQL", "React", "TypeScript", "iyzico", "pgvector"],
    image: "/project-coach.webp",
  },
  {
    key: "forge",
    bullets: ["b1", "b2"],
    stack: ["Go", "MCP", "Claude Code", "Codex CLI", "git worktrees"],
    image: undefined,
  },
] as const;

export function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
        {t("title")}
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        {t("subtitle")}
      </p>
      <ul className="grid grid-cols-1 gap-4 min-[1080px]:grid-cols-2 min-[1080px]:items-start">
        {projects.map((p) => (
          <GlowingBentoCard key={p.key}>
            <div className="flex h-full flex-col p-6">
              {p.image && (
                <Image
                  src={p.image}
                  alt={t(`${p.key}.name`)}
                  width={500}
                  height={300}
                  className="mb-5 w-full rounded-lg border border-neutral-200 object-cover shadow-md dark:border-neutral-800"
                />
              )}
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-bold text-foreground">
                  {t(`${p.key}.name`)}
                </h3>
                {t(`${p.key}.brand`) && (
                  <span className="text-sm text-muted-foreground">
                    {t(`${p.key}.brand`)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {t(`${p.key}.role`)} · {t(`${p.key}.period`)}
              </p>
              <p className="mt-4 text-sm text-foreground">
                {t(`${p.key}.description`)}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b}>{t(`${p.key}.${b}`)}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </GlowingBentoCard>
        ))}
      </ul>
    </section>
  );
}
