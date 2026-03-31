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
export type CaseStudySection = {
  heading: string;
  content: string;
  image?: string;
};

export type Project = {
  title: string;
  slug?: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  image?: string;
  featured: boolean;
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    title: "10-bit Synchronous Up/Down Counter",
    slug: "10-bit-counter",
    description: "Designed and implemented entirely in VHDL, deployed on the Basys3 FPGA board. The counter dynamically responds to user input, changing its value between 0 and 1000 based on onboard switches and buttons.",
    tags: ["VHDL", "FPGA", "Logic Design", "Basys3"],
    github: "https://github.com/Ethansuttor",
    demo: "/10-bit%20counter%20project/Suttor%20510-511%20final%20project%20.pdf",
    image: "/10-bit%20counter%20project/Screenshot%202025-04-23%20000236.png",
    featured: true,
    caseStudy: [
      {
        heading: "Project Overview",
        content: "This project involved designing and simulating a 10-bit synchronous up/down counter entirely in VHDL, implementing logic on the Basys3 FPGA platform. The overarching goal was to deepen understanding of sequential logic and state management while managing real physical button inputs (debouncing)."
      },
      {
        heading: "System Architecture",
        content: "The system reads from onboard Basys3 switches to establish counting bounds (0 to 1000). A primary clock divider module scales down the 100MHz onboard clock for human-readable counting delays, and a debouncer circuit ensures that manual button presses correctly increment or decrement the state without ghost inputs."
      },
      {
        heading: "Challenges & Learnings",
        content: "Managing clock domains and resolving race conditions during synchronous updates was the primary challenge. Writing testbenches before deploying to the physical board proved crucial in isolating logic errors from hardware mapping issues."
      }
    ]
  },
  {
    title: "Smart Home Controller",
    slug: "smart-home-controller",
    description:
      "An ESP32-based IoT system that integrates temperature, motion, and light sensors to automate home appliances. Built a real-time web dashboard with MQTT message brokering and live sensor charts.",
    tags: ["C++", "Arduino", "MQTT", "React", "Node.js"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "CPU Simulator",
    slug: "cpu-simulator",
    description:
      "A simplified 16-bit RISC CPU simulator in Python supporting a custom assembly language, basic I/O, and instruction pipeline visualization.",
    tags: ["Python", "Computer Architecture", "Assembly"],
    github: "#",
    demo: null,
    featured: false,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "This very site — built with Next.js and Tailwind CSS. Dark minimal aesthetic, scroll animations, and a single config file for all content.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

