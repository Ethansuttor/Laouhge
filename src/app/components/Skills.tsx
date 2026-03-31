"use client";

import { skillCategories, sectionNumbers } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const headerRef = useScrollReveal<HTMLHeadingElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={headerRef}
          className="reveal text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4"
        >
          <span className="text-indigo-500 font-mono text-xl">
            {sectionNumbers.skills}.
          </span>
          Skills
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 gap-8 reveal-stagger"
        >
          {skillCategories.map(({ category, skills }) => (
            <div
              key={category}
              className="reveal bg-gray-900 border border-gray-800 border-l-2 border-l-indigo-500/30 hover:border-l-indigo-500 rounded-lg p-6 transition-colors duration-300"
            >
              <h3 className="text-gray-50 font-semibold mb-4 text-sm uppercase tracking-widest">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded font-mono border border-gray-700 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
