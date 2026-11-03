import { hops, profile } from '../data/socials';
import { scrollToId } from '../hooks/useLenis';

export default function Header({ active }) {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="site-header">
      <a href="#start" className="mark" onClick={(e) => go(e, 'start')} aria-label="Princi Srivastava, back to start">
        <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
          <path d="M14 46V18h12a9 9 0 0 1 0 18h-12" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="46" cy="44" r="7" fill="var(--accent)" />
        </svg>
      </a>

      <nav aria-label="Sections" className="hop-nav">
        <ol>
          {hops.map((h) => (
            <li key={h.id}>
              <a href={`#${h.id}`} onClick={(e) => go(e, h.id)} aria-current={active === h.id ? 'true' : undefined}>
                <span className="hop-dot" aria-hidden="true" />
                {h.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <a className="btn btn-small" href={profile.resumePath} download={profile.resumeFile}>
        Résumé <span className="btn-meta">PDF</span>
      </a>
    </header>
  );
}
