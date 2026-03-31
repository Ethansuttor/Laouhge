// ─────────────────────────────────────────────────────────────
// PERSONAL PORTFOLIO — CONTENT CONFIGURATION
// Edit this file to personalize every section of your site.
// ─────────────────────────────────────────────────────────────

// ── Site-wide ────────────────────────────────────────────────
export const siteConfig = {
  name: "Your Name",
  title: "Your Name | Computer Engineering",
  description:
    "Computer Engineering student passionate about building software, embedded systems, and everything in between.",
  url: "https://yoursite.dev",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
};

// ── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

// ── Section numbers ───────────────────────────────────────────
export const sectionNumbers = {
  about:      "01",
  skills:     "02",
  experience: "03",
  projects:   "04",
  contact:    "05",
};

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  greeting: "Hi, my name is",
  name: "Your Name.",
  tagline: "I build things that work.",
  bio: "I'm a Computer Engineering student passionate about building software, embedded systems, and everything in between. Currently looking for internships and exciting projects to contribute to.",
  cta:          { label: "View My Work",  href: "#projects" },
  ctaSecondary: { label: "Get In Touch",  href: "#contact" },
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "Hey! I'm a Computer Engineering student at **Your University**, currently in my **3rd year**. I love working at the intersection of hardware and software — from writing firmware for microcontrollers to building full-stack web apps.",
    "Outside of class, I spend my time contributing to open-source projects, competing in hackathons, and tinkering with electronics. I'm always looking for new problems to solve and new things to learn.",
  ],
  featuredSkills: ["Python", "C/C++", "TypeScript", "React", "Next.js", "Linux"],
  photoAlt: "Photo of Your Name",
};

// ── Skills ────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "TypeScript", "JavaScript", "MATLAB", "Verilog"],
  },
  {
    category: "Web & Frameworks",
    skills: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Linux", "Docker", "VS Code", "KiCad", "SOLIDWORKS", "Arduino"],
  },
  {
    category: "Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "Digital Logic",
      "Embedded Systems",
      "Computer Architecture",
      "Networking",
    ],
  },
];

// ── Experience / Timeline ─────────────────────────────────────
export type TimelineItem = {
  type: "education" | "work";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Company Name",
    location: "City, Province",
    startDate: "May 2024",
    endDate: "Aug 2024",
    bullets: [
      "Built a firmware OTA update pipeline, reducing deployment time by 40%.",
      "Wrote unit tests achieving 90% code coverage on embedded C modules.",
      "Collaborated with a team of 6 engineers in an Agile sprint environment.",
    ],
    tags: ["C", "Python", "RTOS", "CI/CD"],
  },
  {
    type: "education",
    title: "B.Eng. Computer Engineering",
    organization: "Your University",
    location: "City, Province",
    startDate: "Sep 2022",
    endDate: "May 2026",
    bullets: [
      "GPA: 3.8 / 4.0 — Dean's List, Fall 2022 & Winter 2023.",
      "Relevant coursework: Digital Logic, Embedded Systems, Algorithms, Computer Architecture.",
      "Engineering Design Team — Firmware lead for autonomous robot project.",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Smart Home Controller",
    description:
      "An ESP32-based IoT system that integrates temperature, motion, and light sensors to automate home appliances. Built a real-time web dashboard with MQTT message brokering and live sensor charts.",
    tags: ["C++", "Arduino", "MQTT", "React", "Node.js"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "CPU Simulator",
    description:
      "A simplified 16-bit RISC CPU simulator in Python supporting a custom assembly language, basic I/O, and instruction pipeline visualization.",
    tags: ["Python", "Computer Architecture", "Assembly"],
    github: "#",
    demo: null,
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — built with Next.js and Tailwind CSS. Dark minimal aesthetic, scroll animations, and a single config file for all content.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },
];
