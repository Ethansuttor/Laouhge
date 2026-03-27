const projects = [
  {
    title: "Smart Home Controller",
    description:
      "An ESP32-based IoT system that integrates temperature, motion, and light sensors to automate home appliances. Built a web dashboard with real-time MQTT updates.",
    tags: ["C++", "Arduino", "MQTT", "React", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "CPU Simulator",
    description:
      "A simplified 16-bit RISC CPU simulator implemented in Python, supporting a custom assembly language, basic I/O, and an instruction pipeline visualization.",
    tags: ["Python", "Computer Architecture", "Assembly"],
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — built with Next.js and Tailwind CSS. Designed from scratch with a dark minimal aesthetic and fully responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">03.</span>
          Projects
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <svg
                  className="w-8 h-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="text-gray-500 hover:text-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      aria-label="Live demo"
                      className="text-gray-500 hover:text-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-indigo-400">
                    {tag}
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
