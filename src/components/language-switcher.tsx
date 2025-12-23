"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLanguage() {
    const nextLocale = locale === "en" ? "tr" : "en";
    // Remove current locale prefix and add the new one
    const pathWithoutLocale = pathname.replace(/^\/(en|tr)/, "");
    router.push(`/${nextLocale}${pathWithoutLocale}`);
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
