"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function toggleLanguage() {
    const nextLocale = locale === "en" ? "tr" : "en";
    startTransition(() => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(`${pathname}${hash}` as typeof pathname, {
        locale: nextLocale,
        scroll: false,
      });
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10"
      onClick={toggleLanguage}
      disabled={isPending}
    >
      <span className="sr-only">
        {locale === "en" ? "Türkçe'ye geç" : "Switch to English"}
      </span>
      <span lang="en" className="text-sm font-medium uppercase" aria-hidden="true">{locale}</span>
    </Button>
  );
}
