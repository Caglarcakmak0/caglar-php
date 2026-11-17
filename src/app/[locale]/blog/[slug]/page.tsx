import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/data/blog";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { getAllBlogSlugs } from "@/data/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const path = `/${locale}/blog/${post.slug}/`;
  const image = post.featuredImage || "/og.png";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: path,
      languages: {
        en: `/en/blog/${post.slug}/`,
        tr: `/tr/blog/${post.slug}/`,
        "x-default": `/en/blog/${post.slug}/`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: path,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      siteName: "Çağlar Çakmak",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale });
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-background text-foreground flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Post not found
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-white hover:underline"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {t("Blog.backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-background text-foreground">
      {/* Article */}
      <article className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 py-2.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {t("Blog.backToBlog")}
          </Link>

          {/* Header */}
          <header className="mb-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserIcon className="h-4 w-4 m-2" />
                  )}
                </div>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                {post.readTime} {t("Blog.readTime")}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-10 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl prose-pre:rounded-lg prose-pre:bg-neutral-100 prose-pre:text-neutral-800 dark:prose-pre:bg-neutral-900 dark:prose-pre:text-neutral-200 prose-code:before:content-none prose-code:after:content-none prose-blockquote:font-normal prose-blockquote:not-italic prose-table:text-sm prose-th:text-left [&_blockquote_p::before]:content-none [&_blockquote_p::after]:content-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // The page already renders the post title as the only <h1>.
                h1: ({ children }) =>
                  String(children) === post.title ? null : <h2>{children}</h2>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}
