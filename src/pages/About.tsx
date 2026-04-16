import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm, ValidationError } from "@formspree/react";
// @ts-ignore
import styles from "./About.module.css";

gsap.registerPlugin();

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "TailwindCSS",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "Context API",
  "Firebase",
  "GraphQL",
  "REST APIs",
  "Jest",
  "React Testing Library",
  "Figma",
  "Git",
  "Vercel",
  "Netlify",
];

const EXPERIENCE = [
  {
    company: "Astract Nine Designs",
    role: "Front End Engineer — Intermediate",
    date: "Oct 2023 – Nov 2025 · Remote",
    color: "var(--accent)",
  },
  {
    company: "Volomn",
    role: "Front End Engineer",
    date: "Feb 2023 – Jun 2023 · Remote",
    color: "var(--accent2)",
  },
  {
    company: "Hotel.ng",
    role: "Intern Front End Track",
    date: "Oct 2022 – Dec 2022 · Remote",
    color: "var(--accent3)",
  },
  {
    company: "Your Content Mart",
    role: "Editor / IT Personnel",
    date: "Feb 2022 – Oct 2022 · Remote",
    color: "var(--text-muted)",
  },
];

const EmailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GitHubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [state, handleSubmit] = useForm("mnjljoeq");

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        '[data-anim="label"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0,
      )
        .fromTo(
          '[data-anim="title"]',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.1,
        )
        .fromTo(
          '[data-anim="body"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.25,
        )
        .fromTo(
          '[data-anim="skills"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.4,
        )
        .fromTo(
          '[data-anim="exp"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.55,
        )
        .fromTo(
          '[data-anim="contact"]',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.3,
        );
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className={styles.page}>
      <div className={styles.layout}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <div data-anim="label" className={styles.label}>
            About Me
          </div>
          <h2 data-anim="title" className={styles.title}>
            The <em>engineer</em>
            <br />
            behind the code.
          </h2>

          <p data-anim="body" className={styles.body}>
            I'm <strong>Saheed Tajudeen Olawale</strong>, a fullstack software
            engineer with 3+ years of experience building{" "}
            <strong>user-friendly, pixel-perfect</strong> web applications. My
            expertise lives in <strong>React / Next.js / TypeScript</strong>,
            with a solid backend foundation in <strong>Node.js</strong> and
            modern API patterns.
            <br />
            <br />
            I've worked remotely across diverse international teams, sharpening
            my communication, adaptability, and collaborative problem-solving. I
            believe great software is equal parts engineering and empathy —
            understanding user needs is just as important as writing clean code.
          </p>

          {/* Skills */}
          <div data-anim="skills" className={styles.skillsSection}>
            <h3 className={styles.sectionSubtitle}>Core Stack</h3>
            <div className={styles.skillsList}>
              {SKILLS.map((s) => (
                <span key={s} className={styles.skillPill}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div data-anim="exp" className={styles.expTimeline}>
            <h3 className={styles.sectionSubtitle}>Experience</h3>
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.company} className={styles.expItem}>
                <div className={styles.expDotCol}>
                  <div
                    className={styles.expDot}
                    style={{ background: exp.color }}
                  />
                  {i < EXPERIENCE.length - 1 && (
                    <div className={styles.expLine} />
                  )}
                </div>
                <div>
                  <div className={styles.expCompany}>{exp.company}</div>
                  <div className={styles.expRole}>{exp.role}</div>
                  <div className={styles.expDate}>{exp.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          <div data-anim="contact" className={styles.contactSection}>
            <div className={styles.label} style={{ opacity: 1 }}>
              Contact
            </div>
            <div className={styles.contactBig}>
              Let's build something <em>great</em> together.
            </div>
            <p className={styles.contactSub}>
              I'm open to full-time roles, freelance contracts, and interesting
              collaborations. Drop me a message and I'll get back to you fast.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Let's work together"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className={`${styles.submitBtn} ${state.succeeded ? styles.submitted : ""}`}
              >
                {state.submitting
                  ? "Sending..."
                  : state.succeeded
                    ? "Message sent! ✓"
                    : "Send Message →"}
              </button>
            </form>

            <div className={styles.socialLinks}>
              <a
                className={styles.socialLink}
                href="mailto:saheed.taaj@gmail.com"
              >
                <EmailIcon /> Email
              </a>
              <a
                className={styles.socialLink}
                href="https://linkedin.com/in/mrtaaj001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                className={styles.socialLink}
                href="https://github.com/mrtaaj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
