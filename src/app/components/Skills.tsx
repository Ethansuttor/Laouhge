"use client";

import { motion } from "framer-motion";
import { 
  LuCpu, LuNetwork, LuPenTool, LuCuboid, LuTerminal, 
  LuCircuitBoard, LuWrench, LuCable, LuActivity, 
  LuUsers, LuFileText, LuMessageCircle 
} from "react-icons/lu";
import { SiPython, SiCplusplus } from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";

const skillCategories = [
  {
    category: "Hardware & Design",
    skills: [
      { name: "VHDL", icon: <LuCpu /> },
      { name: "Logic Design", icon: <LuNetwork /> },
      { name: "Network Analysis", icon: <LuActivity /> },
      { name: "Nocti CAD", icon: <LuPenTool /> },
      { name: "SolidWorks", icon: <LuCuboid /> },
    ],
  },
  {
    category: "Software & Programming",
    skills: [
      { name: "Computer Prog.", icon: <LuTerminal /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "MATLAB", icon: <TbMathFunction /> },
    ],
  },
  {
    category: "Hands-on Experience",
    skills: [
      { name: "Soldering", icon: <LuWrench /> },
      { name: "Troubleshooting", icon: <LuActivity /> },
      { name: "PCB Design", icon: <LuCircuitBoard /> },
      { name: "Test Equipment", icon: <LuCable /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Peer Mentoring", icon: <LuUsers /> },
      { name: "Documentation", icon: <LuFileText /> },
      { name: "Supplier Comm.", icon: <LuMessageCircle /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
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
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded font-mono border border-gray-700 hover:border-indigo-500/50 hover:text-indigo-300 group transition-all duration-200"
                  >
                    <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
