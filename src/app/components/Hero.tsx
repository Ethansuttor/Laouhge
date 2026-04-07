"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-500 text-sm font-mono mb-4 tracking-widest uppercase">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-50 leading-tight mb-4">
            Ethan Suttor.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-500 leading-tight mb-6">
            I design circuits that think.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            I&apos;m an Electrical Engineering student at the University of Louisville&apos;s
            Speed School of Engineering, passionate about digital design, embedded systems,
            and hardware prototyping. Seeking my first EE co-op for Summer 2026.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded text-sm font-medium transition-colors duration-200"
          >
            View My Work
          </a>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Resume
          </button>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded text-sm font-medium transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
