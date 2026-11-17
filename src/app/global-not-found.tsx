/* eslint-disable @next/next/no-html-link-for-pages -- static 404 must use plain anchors */
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 | Çağlar Çakmak",
  robots: { index: false },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="text-sm tracking-widest text-muted-foreground">404</p>
          <h1 className="text-5xl md:text-7xl">Page not found</h1>
          <nav className="mt-2 flex gap-3">
            <a
              href="/en/"
              className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background"
            >
              Go to homepage
            </a>
          </nav>
        </main>
      </body>
    </html>
  );
}
