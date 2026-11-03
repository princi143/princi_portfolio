// One chronological log: education, competitions, workshops and certificates.
// kind: 'school' | 'win' | 'event' | 'cert'
export const log = [
  {
    when: '2013 – 2025',
    kind: 'school',
    title: 'Kendriya Vidyalaya No. 2, Jalahalli East',
    detail: 'Class I–XII. Science exhibitions, and represented the school at the KVS National Sports Meet.',
  },
  {
    when: '2025',
    kind: 'school',
    title: 'Started B.E. CSE (Cybersecurity) at SVCE Bengaluru',
    detail: 'Current CGPA 9.15 / 10.',
  },
  {
    when: '2025 – 26',
    kind: 'win',
    title: 'CodeFury 9.0 — Top 30 of 160+ teams',
    detail: 'National hackathon by IEEE UVCE Computer Society. Prototyped a working solution under a strict sprint deadline.',
  },
  {
    when: '2025 – 26',
    kind: 'win',
    title: '1st place, Idea Expo',
    detail: 'Cyber Security Department, SVCE. Pitched and defended a security architecture live to the department jury.',
  },
  {
    when: '2026',
    kind: 'event',
    title: 'Bharatiya Antariksh Hackathon',
    detail: 'ISRO’s national space-tech hackathon, via Hack2skill. Submitted an idea on planetary data challenges.',
  },
  {
    when: '2026',
    kind: 'event',
    title: 'ISRO Planetary Defence Workshop',
    detail: 'Selected to attend sessions on orbital monitoring and space situational awareness, and met the ISRO Chairman and senior scientists.',
  },
  {
    when: 'Aug 2026',
    kind: 'cert',
    title: 'AI in Cybersecurity Fundamentals',
    detail: 'Wingspan. ML for threat detection, anomaly detection and adversarial ML.',
  },
  {
    when: 'Aug 2026',
    kind: 'cert',
    title: 'Cybersecurity Job Simulation',
    detail: 'Forage. Phishing analysis, email header forensics and remediation planning.',
  },
  {
    when: 'Sep 2026',
    kind: 'cert',
    title: 'Partnering with AI in the Workplace',
    detail: 'Forage. Prompt design, AI-assisted research, test generation and debugging.',
  },
];

export const kindLabel = {
  school: 'Education',
  win: 'Award',
  event: 'Selected',
  cert: 'Certificate',
};
