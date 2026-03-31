"use client";

import { about, sectionNumbers } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-gray-200">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function About() {
  const headerRef = useScrollReveal<HTMLHeadingElement>();
  const textRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const photoRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={headerRef}
          className="reveal text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4"
        >
          <span className="text-indigo-500 font-mono text-xl">
            {sectionNumbers.about}.
          </span>
          About Me
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Text */}
          <div
            ref={textRef}
            className="reveal md:col-span-2 space-y-4 text-gray-400 leading-relaxed"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{renderBold(p)}</p>
            ))}
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-indigo-400 mt-2">
              {about.featuredSkills.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-indigo-500">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div
            ref={photoRef}
            className="reveal flex justify-center md:justify-end order-first md:order-last"
          >
            <div className="relative w-48 h-48 group">
              <div className="absolute inset-0 border-2 border-indigo-500 rounded translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200" />
              <div className="relative w-48 h-48 bg-gray-800 rounded flex items-center justify-center text-gray-600 text-sm font-mono select-none">
                your photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
