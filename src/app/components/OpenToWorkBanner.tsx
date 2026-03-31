"use client";

import { useState, useEffect } from "react";

export default function OpenToWorkBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const wasDismissed = sessionStorage.getItem("banner-dismissed");
    if (wasDismissed) setDismissed(true);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("banner-dismissed", "1");
  };

  if (!mounted || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-indigo-600/95 backdrop-blur-sm border-b border-indigo-500/50">
      <div className="max-w-5xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <p className="text-white font-medium">
            Actively seeking a{" "}
            <span className="font-bold underline underline-offset-2">
              Summer 2026 Electrical Engineering Co-op
            </span>
            {" "}—{" "}
            <a
              href="#contact"
              className="text-indigo-200 hover:text-white transition-colors"
              onClick={dismiss}
            >
              let&apos;s connect ↓
            </a>
          </p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="text-indigo-200 hover:text-white transition-colors shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
