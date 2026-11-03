import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../hooks/useLenis';

// The signal line that runs down the left edge of every section.
// Its tip (the packet) stays level with the reader as the page scrolls,
// and each finished section leaves a solid hop node behind.
export default function Thread({ end = false }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const el = ref.current;
    const section = el.parentElement;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 60%', end: end ? 'bottom bottom' : 'bottom 60%', scrub: true },
        defaults: { ease: 'none' },
      });
      tl.fromTo('.thread-line', { scaleY: 0 }, { scaleY: 1 }, 0)
        .fromTo('.thread-packet', { top: '0%' }, { top: '100%' }, 0);
    }, el);
    return () => ctx.revert();
  }, [end]);

  return (
    <div className={`thread${end ? ' thread-end' : ''}`} ref={ref} aria-hidden="true">
      <span className="thread-track" />
      <span className="thread-line" />
      <span className="thread-packet" />
    </div>
  );
}
