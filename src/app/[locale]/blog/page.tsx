"use client";

import { BlogHero } from "@/components/ui/blog-hero";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Blog Hero */}
      <div className="pt-20">
        <BlogHero />
      </div>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty state */}
        {blogPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              No posts yet
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Check back soon for new content!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
