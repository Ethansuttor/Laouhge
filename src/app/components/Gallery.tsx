"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Add your own lab photos to /public/gallery/ and list them here.
// Each item: { src, alt, caption, tag }
// ─────────────────────────────────────────────────────────────
const galleryItems = [
  {
    src: "/10-bit counter project/Screenshot 2025-04-23 000236.png",
    alt: "10-bit synchronous up/down counter on Basys3 FPGA",
    caption: "10-bit FPGA Counter — Basys3",
    tag: "FPGA",
  },
  // Add more items below, e.g.:
  // { src: "/gallery/pcb-front.jpg", alt: "PCB front side", caption: "Custom PCB Design", tag: "PCB" },
  // { src: "/gallery/soldering.jpg", alt: "Soldering components", caption: "Hand-soldering SMD parts", tag: "Hardware" },
];

const tags = ["All", ...Array.from(new Set(galleryItems.map((i) => i.tag)))];

export default function Gallery() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeTag === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.tag === activeTag);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-50 mb-4 flex items-center gap-4">
            <span className="text-indigo-500 font-mono text-xl">06.</span>
            Lab Work
            <span className="flex-1 h-px bg-gray-800 ml-4" />
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Physical builds, circuit work, and hardware prototyping.
          </p>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded text-sm font-mono transition-colors duration-200 border ${
                  activeTag === tag
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-transparent border-gray-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.button
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setLightbox(item.src)}
                  className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/50 group bg-gray-900 text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-gray-200 text-xs font-medium">{item.caption}</p>
                    <span className="text-indigo-400 text-xs font-mono">{item.tag}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {galleryItems.length === 0 && (
            <div className="border border-dashed border-gray-800 rounded-lg p-12 text-center text-gray-600 text-sm font-mono">
              Add photos to /public/gallery/ and list them in Gallery.tsx
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                className="object-contain rounded-lg"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-900/80 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
