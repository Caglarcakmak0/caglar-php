import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const title = `${t("title")} | Çağlar Çakmak`;

  return {
    title,
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/blog/`,
      languages: { en: "/en/blog/", tr: "/tr/blog/", "x-default": "/en/blog/" },
    },
    openGraph: {
      title,
      description: t("subtitle"),
      type: "website",
      url: `/${locale}/blog/`,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description: t("subtitle"), images: ["/og.png"] },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
