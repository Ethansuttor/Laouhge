"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Engineering Co-op",
    company: "Nifco Americans",
    location: "Shelbyville, KY",
    duration: "August 2022 – May 2023",
    responsibilities: [
      "Learned processes directly from design engineers",
      "Designed small parts for machines and conveyors",
      "Updated network database and engineering drawing book",
      "Documented and logged part changes for suppliers",
    ],
  },
  {
    role: "Student Worker",
    company: "Speed Center for Innovation (SCI)",
    location: "Louisville, KY",
    duration: "January 2026 – Present",
    responsibilities: [
      "Help students learn hands-on electronics and hardware prototyping",
      "Assist peers with component selection and debugging for embedded systems and PCB designs",
      "Manage the electronics workstation, providing support on soldering, circuit troubleshooting, and test equipment usage",
    ],
  },
  {
    role: "Peer Mentor",
    company: "Engineering Living and Learning Community (ELLC)",
    location: "Louisville, KY",
    duration: "January 2025 – Present",
    responsibilities: [
      "Assist first-year engineering students with navigating coursework",
      "Offer advice and strategies to help them succeed academically",
      "Hold two events per semester to drive student engagement",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-50 mb-16 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">03.</span>
          Experience
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="relative border-l border-gray-800 ml-3 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-2 border-[3px] border-gray-950 box-content" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-50 flex flex-wrap gap-2 items-center">
                    {exp.role}
                    <span className="text-indigo-500 hidden md:inline">@</span>
                    <span className="text-indigo-400">{exp.company}</span>
                  </h3>
                  <p className="text-gray-500 text-sm font-mono mt-1">{exp.location}</p>
                </div>
                <div className="text-gray-400 font-mono text-sm whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 group">
                    <span className="text-indigo-500 mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
