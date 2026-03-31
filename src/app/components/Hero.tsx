"use client";

import { useState, useEffect } from "react";
import { hero, siteConfig } from "../data/content";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Trigger animation only on client to avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className={`max-w-5xl w-full ${mounted ? "hero-animate" : ""}`}>
        <p className="text-indigo-500 text-sm font-mono tracking-widest uppercase">
          {hero.greeting}
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-gray-50 leading-tight mt-4">
          {hero.name}
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-500 leading-tight mt-2 flex items-center gap-3">
          {hero.tagline}
          <span className="inline-block w-0.5 h-8 sm:h-12 bg-indigo-500 animate-pulse align-middle" />
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mt-6 leading-relaxed">
          {hero.bio}
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={hero.cta.href}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded text-sm font-medium transition-colors duration-200"
          >
            {hero.cta.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded text-sm font-medium transition-colors duration-200"
          >
            {hero.ctaSecondary.label}
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 rounded text-sm font-medium transition-colors duration-200"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
