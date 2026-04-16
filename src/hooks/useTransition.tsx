import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const PAGE_ORDER = ['/', '/work', '/about']

interface TransitionContextType {
  overlayRef: React.RefObject<HTMLDivElement | null>
  navigateTo: (path: string) => void
  isAnimating: boolean
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = useCallback(
    (targetPath: string) => {
      if (targetPath === location.pathname || isAnimating) return

      const fromIndex = PAGE_ORDER.indexOf(location.pathname)
      const toIndex = PAGE_ORDER.indexOf(targetPath)
      const direction = toIndex > fromIndex ? 1 : -1

      setIsAnimating(true)

      const el = overlayRef.current
      if (!el) return

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      })

      tl.set(el, { x: direction > 0 ? '-100%' : '100%', display: 'block' })
        .to(el, { x: '0%', duration: 0.45, ease: 'power3.inOut' })
        .call(() => {
          navigate(targetPath)
          window.scrollTo(0, 0)
        })
        .to(el, {
          x: direction > 0 ? '100%' : '-100%',
          duration: 0.45,
          ease: 'power3.inOut',
        })
        .set(el, { display: 'none' })
    },
    [location.pathname, isAnimating, navigate]
  )

  return (
    <TransitionContext.Provider value={{ overlayRef, navigateTo, isAnimating }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider')
  return ctx
}
