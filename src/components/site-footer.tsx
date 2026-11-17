"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Çağlar Çakmak
            </h3>
            <p className="text-muted-foreground max-w-md">
              {t("Footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t("Footer.quickLinks")}
            </h4>
            <ul>
              <li>
                <Link
                  href="/#about"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Nav.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Nav.projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t("Footer.connect")}
            </h4>
            <ul>
              <li>
                <a
                  href="https://github.com/Caglarcakmak0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/caglarcakmak0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/Caglar-Cakmak-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Footer.cv")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Çağlar Çakmak. {t("Footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
