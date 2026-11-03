import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenis, { prefersReducedMotion } from './hooks/useLenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Stack from './components/Stack';
import Log from './components/Log';
import Contact from './components/Contact';
import { hops } from './data/socials';

gsap.registerPlugin(ScrollTrigger);

// Chapter palettes. The page background morphs between these as you scroll,
// so the whole site reads as one continuous journey instead of stacked blocks.
const themes = {
  night: { '--bg': '#15123F', '--fg': '#F6F5FF', '--muted': '#B3AFE0', '--rule': 'rgba(246,245,255,0.16)', '--accent-ink': '#FF8CC2', '--on-accent': '#15123F' },
  paper: { '--bg': '#DCDDF9', '--fg': '#15123F', '--muted': '#4F4A85', '--rule': 'rgba(21,18,63,0.16)', '--accent-ink': '#B8105F', '--on-accent': '#15123F' },
  signal: { '--bg': '#FF4FA3', '--fg': '#15123F', '--muted': '#3E1A4A', '--rule': 'rgba(21,18,63,0.22)', '--accent-ink': '#15123F', '--on-accent': '#FF4FA3' },
};

export default function App() {
  const root = useRef(null);
  const [active, setActive] = useState('start');
  useLenis();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const ctx = gsap.context(() => {
      const reduce = prefersReducedMotion();
      gsap.utils.toArray('[data-theme]').forEach((section) => {
        const apply = () => {
          gsap.to(html, { ...themes[section.dataset.theme], duration: reduce ? 0 : 0.7, ease: 'power2.out', overwrite: 'auto' });
          const meta = document.querySelector('meta[name="theme-color"]');
          if (meta) meta.setAttribute('content', themes[section.dataset.theme]['--bg']);
        };
        ScrollTrigger.create({
          trigger: section,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: apply,
          onEnterBack: apply,
        });
      });

      hops.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => self.isActive && setActive(id),
        });
      });
    }, root);

    // Fonts change line lengths; re-measure every trigger once they are in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <a className="skip" href="#about">Skip to content</a>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Log />
        <Contact />
      </main>
    </div>
  );
}
