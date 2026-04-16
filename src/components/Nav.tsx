import { useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "../hooks/useTransition";
// @ts-ignore
import styles from "./Nav.module.css";

gsap.registerPlugin();

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
];

export default function Nav() {
  const { navigateTo } = useTransition();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const hasAnimatedIn = useRef(false);

  // One-time entrance animation
  useGSAP(
    () => {
      if (hasAnimatedIn.current) return;
      hasAnimatedIn.current = true;
      gsap.fromTo(
        navRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 },
      );
    },
    { scope: navRef },
  );

  const toggleMenu = useCallback(() => {
    const isOpening = !menuOpen;
    setMenuOpen(isOpening);

    const menu = mobileMenuRef.current;
    const links = menu?.querySelectorAll<HTMLElement>(`.${styles.mobileLink}`);
    const bars = hamburgerRef.current?.querySelectorAll<HTMLSpanElement>(
      `.${styles.bar}`,
    );

    if (isOpening) {
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
      );
      if (links) {
        gsap.fromTo(
          links,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: "power3.out",
            delay: 0.05,
          },
        );
      }
      if (bars) {
        gsap.to(bars[0], {
          rotate: 45,
          y: 7,
          duration: 0.3,
          ease: "power3.inOut",
        });
        gsap.to(bars[1], { opacity: 0, scaleX: 0, duration: 0.2 });
        gsap.to(bars[2], {
          rotate: -45,
          y: -7,
          duration: 0.3,
          ease: "power3.inOut",
        });
      }
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
      if (bars) {
        gsap.to(bars[0], {
          rotate: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.inOut",
        });
        gsap.to(bars[1], { opacity: 1, scaleX: 1, duration: 0.2, delay: 0.1 });
        gsap.to(bars[2], {
          rotate: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.inOut",
        });
      }
    }
  }, [menuOpen]);

  const handleNavClick = (path: string) => {
    if (menuOpen) {
      const menu = mobileMenuRef.current;
      const bars = hamburgerRef.current?.querySelectorAll<HTMLSpanElement>(
        `.${styles.bar}`,
      );
      setMenuOpen(false);
      gsap.to(menu, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
      if (bars) {
        gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.25 });
        gsap.to(bars[1], {
          opacity: 1,
          scaleX: 1,
          duration: 0.15,
          delay: 0.08,
        });
        gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.25 });
      }
    }
    navigateTo(path);
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      {/* Logo */}
      <button className={styles.logo} onClick={() => handleNavClick("/")}>
        <span>mr</span>taaj
      </button>

      {/* Desktop links */}
      <div className={styles.desktopLinks}>
        {LINKS.map(({ label, path }) => (
          <button
            key={path}
            className={`${styles.btn} ${location.pathname === path ? styles.active : ""}`}
            onClick={() => handleNavClick(path)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Desktop status */}
      <div className={styles.status}>
        <div className={styles.statusDot} />
        Available for hire
      </div>

      {/* Hamburger — mobile only */}
      <button
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Mobile dropdown */}
      <div ref={mobileMenuRef} className={styles.mobileMenu}>
        {LINKS.map(({ label, path }, i) => (
          <button
            key={path}
            className={`${styles.mobileLink} ${location.pathname === path ? styles.mobileLinkActive : ""}`}
            onClick={() => handleNavClick(path)}
          >
            <span className={styles.mobileLinkNum}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {label}
          </button>
        ))}
        <div className={styles.mobileStatus}>
          <div className={styles.statusDot} />
          Available for hire
        </div>
      </div>
    </nav>
  );
}
