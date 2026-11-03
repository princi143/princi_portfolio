import Thread from './Thread';
import { log, kindLabel } from '../data/log';

export default function Log() {
  return (
    <section id="log" data-theme="paper" className="chapter" aria-labelledby="log-title">
      <Thread />
      <div className="wrap log-grid">
        <div className="log-aside">
          <h2 id="log-title" className="display">The log so far</h2>
          <p className="lede">School, college, hackathons, ISRO and certificates — in the order they happened.</p>
          <figure className="log-photo">
            <img src={`${import.meta.env.BASE_URL}images/princi_profile.jpg`} alt="Princi speaking at a podium on stage at an IEEE event" width="738" height="1600" loading="lazy" />
            <figcaption>On stage at an IEEE event.</figcaption>
          </figure>
        </div>

        <ol className="log-list">
          {log.map((item) => (
            <li key={item.title} className={`log-item kind-${item.kind}`}>
              <p className="log-when"><time>{item.when}</time></p>
              <div>
                <p className="log-kind"><span className="kind-dot" aria-hidden="true" />{kindLabel[item.kind]}</p>
                <h3 className="log-title">{item.title}</h3>
                <p className="log-detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
