import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../data/content";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-32 px-6 max-w-4xl mx-auto relative z-10">
      <Link href="/#projects" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors font-mono text-sm">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        cd ..
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6 leading-tight">{project.title}</h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded text-sm font-mono border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
               GitHub
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded text-sm font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/20">
              View Embedded Artifacts
            </a>
          )}
        </div>
      </header>

      {project.image && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-16 border border-gray-800 shadow-2xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
        </div>
      )}

      {project.caseStudy ? (
        <div className="space-y-16">
          {project.caseStudy.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                 <span className="text-indigo-500 mr-3 font-mono text-xl">0{index + 1}.</span> 
                 {section.heading}
              </h2>
              <div className="text-gray-400 leading-relaxed text-lg bg-gray-900/60 p-8 rounded-xl border border-gray-800 shadow-inner">
                {section.content}
              </div>
              {section.image && (
                 <div className="relative w-full h-96 mt-8 rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-gray-950">
                    <Image src={section.image} alt={section.heading} fill className="object-contain" />
                 </div>
              )}
            </section>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 leading-relaxed text-lg bg-gray-900/60 p-8 rounded-xl border border-gray-800 shadow-inner">
           {project.description}
        </div>
      )}
      
      <div className="mt-24 pt-8 border-t border-gray-800 flex justify-center">
        <Link href="/#projects" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded text-sm font-medium transition-colors duration-200">
          Return to All Projects
        </Link>
      </div>
    </main>
  );
}
