import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SignalField from './SignalField';
import { profile } from '../data/socials';
import { prefersReducedMotion, scrollToId } from '../hooks/useLenis';

const WIDE = 150; // Anybody width axis at rest
const NARROW = 56; // after scrolling: the name squeezes to make room for the photo

export default function Hero() {
  const section = useRef(null);

  useLayoutEffect(() => {
    const el = section.current;
    const name = el.querySelector('.hero-name');
    const probe = el.querySelector('.name-probe');

    // Size the name so the longer line exactly fills the width at full stretch.
    const fit = () => {
      const isWide = window.innerWidth >= 900;
      const inner = el.querySelector('.hero-inner');
      const cs = getComputedStyle(inner);
      const box = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      probe.style.setProperty('--wdth', isWide ? WIDE : 100);
      const w = probe.getBoundingClientRect().width || 1;
      const size = Math.min((box / w) * 100, window.innerHeight * (isWide ? 0.3 : 0.2));
      name.style.setProperty('--name-size', `${Math.floor(size)}px`);
    };
    fit();
    document.fonts?.load('850 100px "Anybody Variable"').then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(probe);
    window.addEventListener('resize', fit);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const reduce = prefersReducedMotion();

      mm.add(
        { wide: '(min-width: 900px)', narrow: '(max-width: 899px)' },
        ({ conditions }) => {
          const { wide } = conditions;
          const rest = wide ? WIDE : 100;

          if (reduce) {
            gsap.set(name, { '--wdth': wide ? 92 : 100 });
            gsap.set('.hero-photo', { clipPath: 'inset(0% 0% 0% 0%)' });
            return undefined;
          }

          // One orchestrated entrance: the name stretches open like a signal locking on.
          const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
          intro
            .fromTo(name, { '--wdth': 50, opacity: 0 }, { '--wdth': rest, opacity: 1, duration: 1.6 })
            .fromTo('.hero-foot > *', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.5)
            .fromTo('.scanline', { scaleY: 0 }, { scaleY: 1, duration: 1.2 }, 0.3);

          if (!wide) {
            gsap.set('.hero-photo', { clipPath: 'inset(0% 0% 0% 0%)' });
            gsap.to(name, {
              '--wdth': 70,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
            });
            return undefined;
          }

          // Scroll: the name compresses, and the photo opens out of the gap it leaves.
          const tl = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: el, start: 'top top', end: '+=120%', scrub: 0.6, pin: true, anticipatePin: 1 },
          });
          tl.fromTo(name, { '--wdth': rest }, { '--wdth': NARROW, immediateRender: false }, 0)
            .fromTo('.hero-photo', { clipPath: 'inset(0% 50% 0% 50%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }, 0.05)
            .fromTo('.hero-photo img', { scale: 1.25 }, { scale: 1 }, 0.05)
            .to('.scanline', { opacity: 0, duration: 0.2 }, 0.3)
            .to('.signal-field', { opacity: 0.35 }, 0)
            .fromTo('.hero-thread', { scaleY: 0 }, { scaleY: 1 }, 0.35);
          return undefined;
        },
      );
    }, el);

    return () => {
      window.removeEventListener('resize', fit);
      ro.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section id="start" data-theme="night" className="hero" ref={section}>
      <SignalField />
      <div className="hero-inner">
        <span className="name-probe" aria-hidden="true">{profile.lastName}</span>
        <h1 className="hero-name">
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </h1>

        <figure className="hero-photo">
          <img src={`${import.meta.env.BASE_URL}images/princi_uav.jpg`} alt="Princi holding a small quadcopter drone on the SVCE campus lawn" width="768" height="1024" fetchPriority="high" />
        </figure>
        <span className="scanline" aria-hidden="true" />

        <div className="hero-foot">
          <p className="hero-lede">
            Cybersecurity student in Bengaluru. I build web apps, backend systems and computer-vision prototypes, and ship them at hackathons.
          </p>
          <div className="actions">
            <a className="btn btn-solid" href={profile.resumePath} download={profile.resumeFile}>
              Download résumé
            </a>
            <a className="btn" href="#work" onClick={(e) => { e.preventDefault(); scrollToId('work'); }}>
              See projects
            </a>
          </div>
        </div>
        <span className="hero-thread" aria-hidden="true" />
      </div>
    </section>
  );
}
