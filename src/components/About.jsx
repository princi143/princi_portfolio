import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Thread from './Thread';
import { profile } from '../data/socials';
import { exploring } from '../data/skills';
import { prefersReducedMotion } from '../hooks/useLenis';

const statement =
  'I’m a cybersecurity student who likes building things that actually work. From web apps and backend systems to AI, computer vision and hackathon prototypes, I learn by building.';

export default function About() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      // Words come up to full strength as you read down — scroll-scrubbed, not timed.
      gsap.fromTo(
        '.statement .w',
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: '.statement', start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" data-theme="night" className="chapter about" ref={ref}>
      <Thread />
      <div className="wrap about-grid">
        <p className="statement">
          {statement.split(' ').map((word, i) => (
            <span className="w" key={i}>{word} </span>
          ))}
        </p>

        <dl className="facts">
          <div>
            <dt>Studying</dt>
            <dd>{profile.degree}<br />{profile.college}, {profile.period}</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd className="big-num">{profile.cgpa}<span> / 10</span></dd>
          </div>
          <div>
            <dt>Exploring now</dt>
            <dd>{exploring.join(', ')}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
