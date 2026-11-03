const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Princi Srivastava',
  firstName: 'Princi',
  lastName: 'Srivastava',
  role: 'Cybersecurity student and software builder',
  location: 'Bengaluru, India',
  college: 'Sri Venkateshwara College of Engineering',
  degree: 'B.E. Computer Science & Engineering (Cybersecurity)',
  period: '2025 – present',
  cgpa: '9.15',
  email: 'princisrivastava1011@gmail.com',
  github: 'https://github.com/princi143',
  linkedin: 'https://www.linkedin.com/in/princi-srivastava-765676358',
  resumePath: `${base}resume/Princi-Srivastava-Resume.pdf`,
  resumeFile: 'Princi-Srivastava-Resume.pdf',
};

// The route the page travels. Ids match section ids.
export const hops = [
  { id: 'start', label: 'Start' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'log', label: 'Log' },
  { id: 'contact', label: 'Contact' },
];
