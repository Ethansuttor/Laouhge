"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "ethan.suttor@louisville.edu";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request while user doesn't have a Formspree ID
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-indigo-500 font-mono text-sm mb-4 tracking-widest uppercase">
          04. What&apos;s Next?
        </p>
        <h2 className="text-4xl font-bold text-gray-50 mb-6">Get In Touch</h2>
        <p className="text-gray-400 leading-relaxed mb-10">
          I&apos;m currently open to internship opportunities and cool project collaborations.
          Whether you have a question, an idea, or just want to say hi — my inbox is always open!
        </p>

        {status === "success" ? (
          <div className="bg-indigo-500/10 border border-indigo-500/50 rounded-lg p-8 mb-14 text-indigo-400">
            <h3 className="font-bold text-xl mb-2">Message Received!</h3>
            <p className="text-indigo-300/80">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto text-left mb-14 space-y-4"
            // action="https://formspree.io/f/YOUR_FORM_ID"
            // method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-1 ml-1 font-mono">Name</label>
              <input type="text" id="name" required className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-gray-50 focus:outline-none focus:border-indigo-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-1 ml-1 font-mono">Email</label>
              <input type="email" id="email" required className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-gray-50 focus:outline-none focus:border-indigo-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-1 ml-1 font-mono">Message</label>
              <textarea id="message" rows={4} required className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-gray-50 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            <p className="text-gray-600 text-xs text-center mt-3 font-mono">
              (This triggers a simulated success state)
            </p>
          </form>
        )}

        {/* Social links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Ethansuttor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-suttor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:ethan.suttor@louisville.edu"
            aria-label="Email"
            className="text-gray-500 hover:text-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Copy email */}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 mx-auto mb-10 text-gray-500 hover:text-indigo-400 text-xs font-mono transition-colors group"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-indigo-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {EMAIL}
            </>
          )}
        </button>

        <p className="text-gray-600 text-xs font-mono">
          Designed & Built by Ethan Suttor
        </p>
      </motion.div>
    </section>
  );
}
