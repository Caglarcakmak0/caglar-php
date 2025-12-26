import { getBlogPostBySlug } from "@/data/blog";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { getAllBlogSlugs } from "@/data/blog";

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
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
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
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
          <div className="prose prose-lg dark:prose-invert prose-neutral max-w-none">
            <div
              className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-8
                         [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h2]:mt-6
                         [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-2 [&>h3]:mt-4
                         [&>p]:mb-4 [&>p]:leading-relaxed
                         [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
                         [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
                         [&>pre]:bg-neutral-100 [&>pre]:dark:bg-neutral-800 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-4
                         [&>code]:bg-neutral-100 [&>code]:dark:bg-neutral-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br>")
                  .replace(
                    /```(\w+)?\n?([\s\S]*?)```/g,
                    "<pre><code>$2</code></pre>"
                  ),
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
