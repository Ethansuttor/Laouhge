"use client";

import { motion } from "framer-motion";

const extracurriculars = [
  { group: "Sigma Chi Fraternity", title: "Tribune Chair (Interacted with Alumni)" },
  { group: "Speed School Student Council", title: "Director of Society Relations" },
  { group: "Institute of Electrical and Electronic Engineers (IEEE)", title: "Executive Officer - Encouraged teamwork and developed performance expectations" },
  { group: "Raise Red", title: "2x Participant ($1,500+ raised)" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4">
          <span className="text-indigo-500 font-mono text-xl">02.</span>
          Education
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Degree Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 rounded-l" />
            <h3 className="text-2xl font-bold text-gray-50 mb-2 group-hover:text-indigo-400 transition-colors">
              University of Louisville
            </h3>
            <p className="text-indigo-400 font-mono text-sm mb-6">J.B. Speed School of Engineering</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-200 font-medium">B.S. in Electrical Engineering</h4>
                <p className="text-gray-500 text-sm font-mono mt-1">Expected December 2027</p>
              </div>
              
              <div>
                <h4 className="text-gray-200 font-medium">M.Eng. in Electrical Engineering</h4>
                <p className="text-gray-500 text-sm font-mono mt-1">Expected May 2029</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <span className="text-gray-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">GPA: <span className="text-indigo-400 font-bold">3.00 / 4.00</span></span>
              </div>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="pt-2">
            <h3 className="text-xl font-bold text-gray-200 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              Leadership & Involvement
            </h3>
            <ul className="space-y-6">
              {extracurriculars.map((activity, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <span className="text-indigo-500 mt-1">▹</span>
                  <div>
                    <span className="block text-gray-200 font-medium group-hover:text-indigo-300 transition-colors">{activity.group}</span>
                    <span className="block text-gray-500 text-sm mt-1 leading-relaxed">{activity.title}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            <p className="text-gray-400 font-mono text-xs mt-8 italic border-l-2 border-indigo-500/50 pl-3">
              * Works 15 hours per week alongside full-time coursework
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
