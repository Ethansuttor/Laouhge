export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <p className="text-indigo-500 text-sm font-mono mb-4 tracking-widest uppercase">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-50 leading-tight mb-4">
          Your Name.
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-500 leading-tight mb-6">
          I build things that work.
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
          I&apos;m a Computer Engineering student passionate about building software,
          embedded systems, and everything in between. Currently looking for internships
          and exciting projects to contribute to.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded text-sm font-medium transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded text-sm font-medium transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
