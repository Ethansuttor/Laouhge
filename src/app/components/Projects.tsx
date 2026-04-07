"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/content";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-50 mb-20 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">04.</span>
          Featured Projects
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.title} className="relative grid py-8 md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 group bg-gray-900 shadow-2xl ${isEven ? 'md:order-1' : 'md:order-2'} order-2 mt-6 md:mt-0`}>
                  <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none" />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-sm">
                      No Image Available
                    </div>
                  )}
                  {/* Subtle vignette/border ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none z-20" />
                </div>

                {/* Project Text Container */}
                <div className={`relative ${isEven ? 'md:order-2 md:-ml-12 md:text-right' : 'md:order-1 md:-mr-12 md:text-left'} order-1 z-30`}>
                  <p className="text-indigo-400 font-mono text-sm mb-3 font-semibold tracking-wide uppercase">{project.slug ? "Case Study" : "Featured Project"}</p>
                  <h3 className="text-3xl font-bold text-gray-50 mb-6 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className={`bg-gray-900/95 backdrop-blur-sm border border-gray-800 p-8 rounded-xl text-gray-400 text-sm leading-relaxed mb-6 shadow-2xl relative ${isEven ? 'md:text-right text-left' : 'md:text-left text-left'}`}>
                    {project.description}
                  </div>

                  <ul className={`flex flex-wrap gap-3 font-mono text-xs text-indigo-300 mb-8 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="px-3 py-1.5 bg-indigo-500/5 rounded border border-indigo-500/10">{tag}</li>
                    ))}
                  </ul>

                  <div className={`flex gap-6 items-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:-translate-y-1 duration-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                      </a>
                    )}
                    {project.slug && (
                      <Link href={`/projects/${project.slug}`} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded text-sm font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/20 transform hover:-translate-y-1">
                        Read Case Study
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
