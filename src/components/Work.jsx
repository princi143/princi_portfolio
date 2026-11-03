import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ProjectArt from './ProjectArt';
import CaseStudy from './CaseStudy';
import { projects } from '../data/projects';

export default function Work() {
  const section = useRef(null);
  const [open, setOpen] = useState(null);

  useLayoutEffect(() => {
    const el = section.current;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      // Vertical scroll drives the track sideways: the route keeps moving through the projects.
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const track = el.querySelector('.track');
        const distance = () => track.scrollWidth - window.innerWidth;
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(track, { x: () => -distance() }, 0)
          .fromTo('.route-line', { scaleX: 0 }, { scaleX: 1 }, 0)
          .fromTo('.route-packet', { left: '0%' }, { left: '100%' }, 0);
      });

      mm.add('(max-width: 899px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.route-line', { scaleY: 0 }, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 60%', scrub: true },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" data-theme="paper" className="work" ref={section} aria-labelledby="work-title">
      <div className="route" aria-hidden="true">
        <span className="route-line" />
        <span className="route-packet" />
      </div>

      <div className="track">
        <header className="panel panel-intro">
          <h2 id="work-title" className="display">Things I’ve built</h2>
          <p className="lede">
            Four team builds from 2026 — scheduling, tax data, AI model evaluation and an industrial digital twin. Keep scrolling to move along.
          </p>
        </header>

        {projects.map((p) => (
          <article className="panel project" key={p.id} aria-labelledby={`${p.id}-title`}>
            <div className="project-top">
              <p className="kicker">{p.category}{p.isHackathonBuild ? ', hackathon build' : ''}</p>
              <p className="kicker kicker-year">{p.year}</p>
            </div>

            <h3 id={`${p.id}-title`} className="project-title">{p.title}</h3>
            <p className="project-sub">{p.subtitle}</p>

            <div className="project-body">
              <figure className="project-art"><ProjectArt id={p.id} /></figure>
              <div className="project-text">
                <p>{p.caseStudy.problem}</p>
                <p><strong>My part.</strong> {p.caseStudy.myRole}</p>
                <ul className="tags" aria-label="Built with">
                  {p.technologies.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="actions">
                  <button type="button" className="btn btn-solid" onClick={() => setOpen(p)}>
                    Read case study
                  </button>
                  <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">
                    {p.repoIsProfile ? 'GitHub profile' : 'Code on GitHub'}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CaseStudy project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
