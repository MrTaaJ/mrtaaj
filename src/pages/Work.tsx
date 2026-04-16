import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// @ts-ignore
import styles from "./Work.module.css";
import { Link } from "react-router-dom";

gsap.registerPlugin();

const PROJECTS = [
  {
    name: "Wamirii NGO Platform",
    desc: "A platform for users and volunteers to share and update information about missing people. Integrated Firebase for real-time auth, data storage, and cross-device updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    href: "https://wamirii.com",
    type: "live",
  },
  {
    name: "Recycle Project",
    desc: "Connecting industries and waste collectors in Ogun State, Nigeria. Features real-time reporting via API integration and efficient data fetching with React Query.",
    tech: ["Next.js", "TypeScript", "React Query", "API Integration"],
    href: "https://recycle.ogwama.com",
    type: "live",
  },
  {
    name: "Varscon Enterprise",
    desc: "Full multi-page business website including landing, product, career, and contact pages. Responsive design with Tailwind CSS and custom styling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "CSS"],
    href: "https://varscon.com",
    type: "live",
  },
  {
    name: "Niyi's Portfolio",
    desc: "Pixel-perfect developer portfolio with smooth animations and transitions. Built with React and SCSS from a precise design specification.",
    tech: ["React", "SCSS", "GSAP", "Animations"],
    href: "https://niyi-adegbesan.netlify.app/",
    type: "live",
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 10L10 2M10 2H4M10 2V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        '[data-anim="label"]',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      ).fromTo(
        '[data-anim="title"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.1,
      );

      gsap.fromTo(
        '[data-anim="card"]',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          delay: 0.35,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className={styles.page}>
      <div className={styles.header}>
        <div>
          <div data-anim="label" className={styles.label}>
            Selected Projects
          </div>
          <h2 data-anim="title" className={styles.title}>
            Featured <em>Work</em>
          </h2>
        </div>
        <div className={styles.count}>0{PROJECTS.length}</div>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <div key={project.name} data-anim="card" className={styles.card}>
            <div className={styles.accentLine} />
            <div className={styles.projectNum}>
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(PROJECTS.length).padStart(2, "0")}
            </div>
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectDesc}>{project.desc}</div>
            <div className={styles.techList}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
            <Link
              className={styles.projectLink}
              to={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.type === "live" ? "View live" : "View repo"}
              <ArrowIcon />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
