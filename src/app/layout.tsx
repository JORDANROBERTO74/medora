import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  Inter as V0_Font_Inter,
  Source_Serif_4 as SourceSerif4,
} from "next/font/google";
import { ViewTransition } from "react";
import { ThemeWatcher } from "@/components/theme-watcher";
import { ToastProvider } from "@/components/ui/toast";

// variables consumed by --font-sans / --font-serif in globals.css
const _inter = V0_Font_Inter({ subsets: ["latin"], variable: "--font-inter" });
const _sourceSerif = SourceSerif4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

// Runs before paint so a saved dark theme never flashes light. The medora-theme
// cookie carries the account's saved theme; localStorage mirrors it for the UI.
const themeScript = `
(function () {
  var root = document.documentElement;
  var stored = null;
  var fromCookie = false;
  try {
    var hit = document.cookie.match(/(?:^|;\\s*)medora-theme=([^;]+)/);
    if (hit) {
      stored = decodeURIComponent(hit[1]);
      fromCookie = true;
    } else {
      stored = localStorage.getItem('medora:theme');
    }
  } catch (error) {}

  if (stored !== 'light' && stored !== 'dark' && stored !== 'system') stored = 'system';

  if (fromCookie) {
    try { localStorage.setItem('medora:theme', stored); } catch (error) {}
  }

  var dark = stored === 'dark' || (stored === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
})();
`;

export const metadata: Metadata = {
  title: {
    default: "Medora — Repasa mejor. Decide con confianza.",
    template: "%s · Medora",
  },
  description:
    "Resúmenes clínicos y quizzes breves para tu preparación médica. Cirugía, Ginecología, Medicina Interna y Pediatría, un tema a la vez.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${_inter.variable} ${_sourceSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeWatcher />
        <ToastProvider>
          <ViewTransition>{children}</ViewTransition>
        </ToastProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
