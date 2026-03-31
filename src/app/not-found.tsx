import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      {/* Broken circuit illustration */}
      <div className="mb-8 text-gray-700 select-none" aria-hidden="true">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left trace */}
          <path d="M0 40 H30 V20 H50" stroke="#374151" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Right trace */}
          <path d="M70 20 H90 V40 H120" stroke="#374151" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Break mark */}
          <path d="M52 24 L58 16 L62 24 L68 16" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Left component (resistor) */}
          <rect x="10" y="34" width="16" height="12" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1.5"/>
          {/* Right component */}
          <circle cx="100" cy="40" r="6" fill="#1f2937" stroke="#374151" strokeWidth="1.5"/>
          {/* Spark dots */}
          <circle cx="58" cy="12" r="1.5" fill="#6366f1" opacity="0.6"/>
          <circle cx="64" cy="28" r="1" fill="#6366f1" opacity="0.4"/>
          <circle cx="54" cy="30" r="1" fill="#6366f1" opacity="0.4"/>
        </svg>
      </div>

      <p className="text-indigo-500 font-mono text-sm tracking-widest uppercase mb-3">
        Error 404
      </p>
      <h1 className="text-5xl font-bold text-gray-50 mb-4">Open Circuit</h1>
      <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
        Looks like this trace is broken. The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-sm font-medium transition-colors duration-200"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
