"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function FadeIn({ children }: { children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("is-pending")
          element.classList.add("is-visible")
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    element.classList.add("is-pending")
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className="scroll-fade-in">
      {children}
    </div>
  )
}