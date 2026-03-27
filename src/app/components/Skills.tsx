const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "TypeScript", "JavaScript", "MATLAB", "Verilog"],
  },
  {
    category: "Web & Frameworks",
    skills: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Linux", "Docker", "VS Code", "KiCad", "SOLIDWORKS", "Arduino"],
  },
  {
    category: "Concepts",
    skills: ["Data Structures", "Algorithms", "Digital Logic", "Embedded Systems", "Computer Architecture", "Networking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">02.</span>
          Skills
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
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
