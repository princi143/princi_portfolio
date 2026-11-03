import { useEffect, useRef } from 'react';

const rows = [
  ['problem', 'The problem'],
  ['whatIBuilt', 'What we built'],
  ['howItWorks', 'How it works'],
  ['myRole', 'My part'],
  ['challenges', 'Hardest bit'],
  ['whatILearned', 'What I learned'],
  ['futureImprovements', 'Next'],
];

export default function CaseStudy({ project, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className="case"
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && onClose()}
      aria-labelledby="case-title"
      data-lenis-prevent
    >
      {project && (
        <div className="case-inner">
          <div className="case-head">
            <h2 id="case-title" className="display-sm">{project.title}</h2>
            <button type="button" className="btn btn-small" onClick={onClose} autoFocus>Close</button>
          </div>
          <p className="case-tagline">{project.tagline}</p>
          <dl className="case-rows">
            {rows.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{project.caseStudy[key]}</dd>
              </div>
            ))}
          </dl>
          <a className="btn btn-solid" href={project.github} target="_blank" rel="noopener noreferrer">
            {project.repoIsProfile ? 'Open GitHub profile' : 'Open the repository'}
          </a>
        </div>
      )}
    </dialog>
  );
}
