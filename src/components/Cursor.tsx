import { useEffect, useRef } from 'react'
import gsap from 'gsap'
// @ts-ignore
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      gsap.to(dotRef.current, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.1 })
      gsap.to(ringRef.current, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const onEnter = () => {
      gsap.to(ringRef.current, { width: 60, height: 60, duration: 0.3 })
    }
    const onLeave = () => {
      gsap.to(ringRef.current, { width: 40, height: 40, duration: 0.3 })
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
