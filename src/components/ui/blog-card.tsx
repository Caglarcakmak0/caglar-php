"use client";

import { cn } from "@/lib/utils";
import { BlogPost } from "@/data/blog";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const t = useTranslations("Blog");

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-white dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-800",
        "transition-all duration-300",
        "hover:border-neutral-400 dark:hover:border-neutral-600",
        "hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-4xl font-bold text-neutral-300 dark:text-neutral-600">
              {post.title.charAt(0)}
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white line-clamp-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta & CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" />
              {post.readTime} {t("readTime")}
            </span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-neutral-900 dark:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {t("readMore")}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Glowing effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 opacity-50 blur-sm" />
      </div>
    </Link>
  );
}
