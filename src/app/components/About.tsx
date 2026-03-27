"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed">
            <p>
              Hey! I&apos;m an Electrical Engineering student at the <span className="text-gray-200">University of Louisville</span>&apos;s J.B. Speed School of Engineering.
              I am currently pursuing my Bachelor of Science in Electrical Engineering (expected Dec 2027) along with a Master of Engineering (expected May 2029).
            </p>
            <p>
              I have practical engineering experience through my co-op at Nifco Americans and my current role as a Student Worker at the Speed Center for Innovation, where I help students learn hands-on electronics, hardware prototyping, and PCB design. I also serve as an ELLC Peer Mentor, assisting first-year engineering students.
            </p>
            <p>
              Here are a few skills I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-indigo-400 mt-2">
              {["SolidWorks", "VHDL", "Programming", "Logic Design", "Network Analysis", "PCB Design"].map((tech) => (
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
              <div className="relative w-48 h-48 bg-gray-800 rounded flex items-center justify-center text-gray-600 text-sm font-mono overflow-hidden">
                <Image 
                  src="/headshot.jpg"
                  alt="Ethan Suttor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
