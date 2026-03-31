"use client";

import { timeline, sectionNumbers, type TimelineItem } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function GraduationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2 4-2"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const isEducation = item.type === "education";
  const dotColor = isEducation
    ? "border-indigo-500 text-indigo-400"
    : "border-emerald-500 text-emerald-400";
  const orgColor = isEducation ? "text-indigo-400" : "text-emerald-400";

  return (
    <div
      ref={ref}
      className="reveal-left relative pl-12 pb-12 last:pb-0"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Dot */}
      <div
        className={`absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-950 border-2 ${dotColor} flex items-center justify-center`}
      >
        {isEducation ? <GraduationIcon /> : <BriefcaseIcon />}
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <h3 className="text-gray-50 font-semibold text-base">{item.title}</h3>
        <time className="text-gray-500 text-xs font-mono whitespace-nowrap">
          {item.startDate} – {item.endDate}
        </time>
      </div>

      <p className={`text-sm font-medium mb-1 ${orgColor}`}>
        {item.organization}
      </p>
      <p className="text-gray-600 text-xs mb-3">{item.location}</p>

      <ul className="space-y-1.5">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="text-gray-400 text-sm flex gap-2">
            <span className="text-indigo-500 mt-0.5 shrink-0">▹</span>
            {bullet}
          </li>
        ))}
      </ul>

      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-800 border border-gray-700 text-indigo-300 text-xs font-mono rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={headerRef}
          className="reveal text-3xl font-bold text-gray-50 mb-12 flex items-center gap-4"
        >
          <span className="text-indigo-500 font-mono text-xl">
            {sectionNumbers.experience}.
          </span>
          Experience
          <span className="flex-1 h-px bg-gray-800 ml-4" />
        </h2>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gray-800"
            aria-hidden="true"
          />
          {timeline.map((item, i) => (
            <TimelineEntry
              key={`${item.organization}-${i}`}
              item={item}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
