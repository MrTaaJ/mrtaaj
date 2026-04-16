import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "../hooks/useTransition";
// @ts-ignore
import styles from "./Home.module.css";

gsap.registerPlugin();

const TICKER_ITEMS = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "Redux Toolkit",
  "React Query",
  "Firebase",
  "GraphQL",
  "Zustand",
  "Test-Driven Dev",
];

const STATS = [
  { id: "stat1", val: 3, label: "Years of Experience", suffix: "+" },
  { id: "stat2", val: 4, label: "Projects Shipped", suffix: "+" },
  { id: "stat3", val: 10, label: "Technologies Mastered", suffix: "+" },
  { id: "stat4", val: 100, label: "Remote Collaboration", suffix: "%" },
];

export default function Home() {
  const { navigateTo } = useTransition();

  const containerRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        '[data-anim="tag"]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0,
      )
        .fromTo(
          '[data-anim="line"]',
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" },
          0.1,
        )
        .fromTo(
          '[data-anim="desc"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.4,
        )
        .fromTo(
          '[data-anim="actions"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.55,
        )
        .fromTo(
          '[data-anim="terminal"]',
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          0.3,
        );

      gsap.fromTo(
        '[data-anim="stat"]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8,
          ease: "power3.out",
        },
      );

      STATS.forEach(({ val }, i) => {
        const obj = { n: 0 };
        gsap.to(obj, {
          n: val,
          duration: 2,
          delay: 1.2,
          ease: "power2.out",
          onUpdate() {
            if (numRefs.current[i]) {
              numRefs.current[i]!.textContent = String(Math.round(obj.n));
            }
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className={styles.page}>
      <div className={styles.hero}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <div data-anim="tag" className={styles.tag}>
            ⚡ Fullstack Engineer · React · Next.js · TypeScript
          </div>

          <h1 className={styles.heroName}>
            <span className={styles.line}>
              <span data-anim="line">Building</span>
            </span>
            <span className={styles.line}>
              <span data-anim="line">
                <em>interfaces</em>
              </span>
            </span>
            <span className={styles.line}>
              <span data-anim="line">that matter.</span>
            </span>
          </h1>

          <p data-anim="desc" className={styles.heroDesc}>
            I'm Saheed Tajudeen — a fullstack engineer with 3+ years crafting
            pixel-perfect, performant web applications. I speak React, Next.js,
            TypeScript, and Node fluently.
          </p>

          <div data-anim="actions" className={styles.heroActions}>
            <button
              className={styles.btnPrimary}
              onClick={() => navigateTo("/work")}
            >
              View my work
            </button>
            <button
              className={styles.btnGhost}
              onClick={() => navigateTo("/about")}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* RIGHT — Terminal */}
        <div data-anim="terminal" className={styles.heroRight}>
          <div className={styles.terminalCard}>
            <div className={styles.terminalBar}>
              <div className={`${styles.tDot} ${styles.tRed}`} />
              <div className={`${styles.tDot} ${styles.tYellow}`} />
              <div className={`${styles.tDot} ${styles.tGreen}`} />
              <div className={styles.tTitle}>~/saheed/profile.ts</div>
            </div>
            <div className={styles.terminalBody}>
              <div>
                <span className={styles.tComment}>// Engineer profile</span>
              </div>
              <div>
                <span className={styles.tPrompt}>const</span>{" "}
                <span className={styles.tCmd}>dev</span>{" "}
                <span className={styles.tPrompt}>=</span> {"{"}
              </div>
              <div>
                &nbsp;&nbsp;<span className={styles.tKey}>name</span>:{" "}
                <span className={styles.tVal}>"Saheed Tajudeen"</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className={styles.tKey}>role</span>:{" "}
                <span className={styles.tVal}>"Fullstack Eng."</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className={styles.tKey}>stack</span>: [
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.tVal}>"Next.js"</span>,{" "}
                <span className={styles.tVal}>"React"</span>,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.tVal}>"TypeScript"</span>,{" "}
                <span className={styles.tVal}>"Node"</span>,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.tVal}>"TailwindCSS"</span>
              </div>
              <div>&nbsp;&nbsp;],</div>
              <div>
                &nbsp;&nbsp;<span className={styles.tKey}>available</span>:{" "}
                <span className={styles.tOutput}>true</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className={styles.tKey}>location</span>:{" "}
                <span className={styles.tVal}>"Nigeria 🇳🇬"</span>
              </div>
              <div>{"}"}</div>
              <br />
              <div>
                <span className={styles.tPrompt}>$</span>{" "}
                <span className={styles.tCmd}>dev.hire()</span>
              </div>
              <div>
                <span className={styles.tOutput}>
                  → Opening new opportunities...
                </span>
              </div>
              <div>
                <span className={styles.tPrompt}>$</span>{" "}
                <span className={styles.tCursor} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span>✦</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        {STATS.map(({ id, label, suffix }, i) => (
          <div key={id} data-anim="stat" className={styles.statItem}>
            <div className={styles.statNum}>
              <span
                ref={(el) => {
                  numRefs.current[i] = el;
                }}
              >
                0
              </span>
              {suffix}
            </div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
