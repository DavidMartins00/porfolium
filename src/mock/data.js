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
];

// LANGUAGE DATA
export const languagesData = [
  {
    id: nanoid(),
    name: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    id: nanoid(),
    name: 'Flask',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    id: nanoid(),
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: nanoid(),
    name: 'PHP',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    id: nanoid(),
    name: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    id: nanoid(),
    name: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    id: nanoid(),
    name: 'Git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    id: nanoid(),
    name: 'GitHub',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    id: nanoid(),
    name: 'Bootstrap',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    id: nanoid(),
    name: 'C#',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
  },
  {
    id: nanoid(),
    name: 'Laravel',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
  {
    id: nanoid(),
    name: 'MySQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    id: nanoid(),
    name: 'MonogDB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    id: nanoid(),
    name: 'Heroku',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
  },
  {
    id: nanoid(),
    name: 'Figma',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    id: nanoid(),
    name: 'JetBrains',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
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
