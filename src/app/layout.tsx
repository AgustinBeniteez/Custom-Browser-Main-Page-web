import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Browser Main Page",
  description: "Transform your browser's new tab into a powerful, personalized dashboard.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Custom Browser Main Page",
    description: "Transform your browser's new tab into a powerful, personalized dashboard.",
    url: "https://custom-browser-main-page.vercel.app/",
    siteName: "Custom Browser Main Page",
    images: [
      {
        url: "/assets/extensionShare.webp",
        width: 1200,
        height: 630,
        alt: "Custom Browser Main Page Preview",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Browser Main Page",
    description: "Transform your browser's new tab into a powerful, personalized dashboard.",
    images: ["/assets/extensionShare.webp"],
  },
};

import { I18nProvider } from "@/i18n/I18nContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
