"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === "en" ? "tr" : "en";
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10"
      onClick={toggleLanguage}
    >
      <span className="sr-only">
        {locale === "en" ? "Türkçe'ye geç" : "Switch to English"}
      </span>
      <span className="text-sm font-medium uppercase">{locale}</span>
    </Button>
  );
}
