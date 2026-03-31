import type { Metadata } from "next";
import { siteConfig } from "./data/content";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTopButton from "./components/BackToTopButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "engineering student",
    "portfolio",
    "computer engineering",
    "software engineer",
    "embedded systems",
    siteConfig.name,
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgressBar />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
