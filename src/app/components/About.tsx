export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed">
            <p>
              Hey! I&apos;m a Computer Engineering student at <span className="text-gray-200">Your University</span>,
              currently in my <span className="text-gray-200">3rd year</span>. I love working at the intersection
              of hardware and software — from writing firmware for microcontrollers to building
              full-stack web apps.
            </p>
            <p>
              Outside of class, I spend my time contributing to open-source projects, competing in
              hackathons, and tinkering with electronics. I&apos;m always looking for new problems to
              solve and new things to learn.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-indigo-400 mt-2">
              {["Python", "C/C++", "TypeScript", "React", "Next.js", "Linux"].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-indigo-500">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 group">
              <div className="absolute inset-0 border-2 border-indigo-500 rounded translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200" />
              <div className="relative w-48 h-48 bg-gray-800 rounded flex items-center justify-center text-gray-600 text-sm font-mono">
                your photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
