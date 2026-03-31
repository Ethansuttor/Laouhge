"use client";

import { projects, sectionNumbers, type Project } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal mb-10 bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-indigo-500/40 transition-colors duration-300 group"
    >
      {/* Browser chrome decoration */}
      <div className="flex items-center gap-1.5 mb-6">
        <span className="w-3 h-3 rounded-full bg-gray-700" />
        <span className="w-3 h-3 rounded-full bg-gray-700" />
        <span className="w-3 h-3 rounded-full bg-gray-700" />
        <span className="ml-3 flex-1 max-w-xs h-5 bg-gray-800 rounded text-gray-600 text-xs font-mono flex items-center px-3 select-none">
          featured project
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-indigo-500 text-xs font-mono uppercase tracking-widest mb-2">
            Featured Project
          </p>
          <h3 className="text-gray-50 font-bold text-2xl mb-4 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 border border-gray-700 text-indigo-300 text-sm font-mono rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-50 transition-colors"
            >
              <GitHubIcon />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                aria-label="Live demo"
                className="text-gray-500 hover:text-gray-50 transition-colors"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="reveal bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <div className="flex gap-3">
          <a href={project.github} aria-label="GitHub" className="text-gray-500 hover:text-gray-50 transition-colors">
            <GitHubIcon />
          </a>
          {project.demo && (
            <a href={project.demo} aria-label="Live demo" className="text-gray-500 hover:text-gray-50 transition-colors">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-gray-50 font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-indigo-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal<HTMLHeadingElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={headerRef}
          className="reveal text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4"
        >
          <span className="text-indigo-500 font-mono text-xl">
            {sectionNumbers.projects}.
          </span>
          Projects
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        {featured && <FeaturedCard project={featured} />}

        <div
          ref={gridRef}
          className="reveal grid md:grid-cols-2 gap-6 reveal-stagger"
        >
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
