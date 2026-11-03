import { useState } from 'react';
import Thread from './Thread';
import { profile } from '../data/socials';
import { scrollToId } from '../hooks/useLenis';

const YEAR = new Date().getFullYear();

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" data-theme="signal" className="chapter contact" aria-labelledby="contact-title">
      <Thread end />
      <div className="wrap">
        <h2 id="contact-title" className="display contact-title">Let’s build something that works.</h2>
        <p className="lede">Open to internships, hackathon teams and security or ML projects.</p>

        <a className="email" href={`mailto:${profile.email}`}>{profile.email}</a>

        <div className="actions contact-actions">
          <button type="button" className="btn" onClick={copy} aria-live="polite">
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a className="btn btn-solid" href={profile.resumePath} download={profile.resumeFile}>
            Download résumé <span className="btn-meta">PDF</span>
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <footer className="wrap site-footer">
        <p>Built with curiosity, code and too many browser tabs.</p>
        <p>© {YEAR} {profile.name}</p>
        <a href="#start" onClick={(e) => { e.preventDefault(); scrollToId('start'); }}>Back to start</a>
      </footer>
    </section>
  );
}
