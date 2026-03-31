import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";

export const metadata: Metadata = {
  title: "Ethan Suttor | Electrical EE Portfolio",
  description: "Personal portfolio of Ethan Suttor — EE student at the University of Louisville, specializing in digital design, embedded systems, and hardware prototyping.",
  openGraph: {
    title: "Ethan Suttor | Electrical Engineering",
    description: "Portfolio of Ethan Suttor, an EE student and hardware prototyper.",
    url: "https://ethansuttor.com",
    siteName: "Ethan Suttor Portfolio",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 800,
        alt: "Ethan Suttor - Electrical Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Suttor | EE Portfolio",
    description: "Portfolio of Ethan Suttor, an EE student and hardware prototyper.",
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
