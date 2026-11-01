import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  Inter as V0_Font_Inter,
  Source_Serif_4 as SourceSerif4,
} from "next/font/google";

// variables consumed by --font-sans / --font-serif in globals.css
const _inter = V0_Font_Inter({ subsets: ["latin"], variable: "--font-inter" });
const _sourceSerif = SourceSerif4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

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
  colorScheme: "light",
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_sourceSerif.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
