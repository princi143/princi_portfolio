import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Smooth scrolling driven by GSAP's ticker so ScrollTrigger and Lenis stay in sync.
export default function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis && lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
