import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'David Martins', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'David Martins Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'David Martins',
  subtitle: "I'm a Full-Stack Web Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.JPG',
  paragraphOne:
    'Motivated Programmer. Engaging demeanor known for working well in deadline-driven environments. Quickly masters new software packages and hardware technologies.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://github.com/DavidMartins00/DavidMartins00/blob/main/David_Martins_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mercearia Sorraia',
    info: 'Website for local gourmet grocery store',
    info2: '',
    url: 'http://www.mrsorraia.com/',
    repo: 'https://github.com/DavidMartins00/mercearia', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mercearia Sorraia',
    info: 'Website for local gourmet grocery store',
    info2: '',
    url: 'http://www.mrsorraia.com/',
    repo: 'https://github.com/DavidMartins00/mercearia', // if no repo, the button will not show up
  },
];

// LANGUAGE DATA
export const languagesData = [
  {
    id: nanoid(),
    name: 'Python',
  },
  {
    id: nanoid(),
    name: 'PHP',
  },
  {
    id: nanoid(),
    name: 'JavaScript',
  },
  {
    id: nanoid(),
    name: 'HTML',
  },
  {
    id: nanoid(),
    name: 'CSS',
  },
  {
    id: nanoid(),
    name: 'POSTMAN',
  },
  {
    id: nanoid(),
    name: 'Git',
  },
  {
    id: nanoid(),
    name: 'GitHub',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dev@dmartins.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-martins-184652203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DavidMartins00',
    },
  ],
};
