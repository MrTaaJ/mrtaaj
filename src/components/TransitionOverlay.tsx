import { useTransition } from "../hooks/useTransition";
// @ts-ignore
import styles from "./TransitionOverlay.module.css";

export default function TransitionOverlay() {
  const { overlayRef } = useTransition();

  // @ts-ignore
  return <div ref={overlayRef} className={styles.overlay} />;
}
