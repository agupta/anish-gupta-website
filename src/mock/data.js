import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anish Gupta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'The personal website of Anish Gupta, a mathematics undergraduate at the University of Warwick.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Anish Gupta',
  subtitle: 'I study maths at Warwick.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  resume: 'CV_web.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    position: 'Trading Intern',
    company: 'Mako Trading',
    companyUrl: 'https://www.mako.com/',
  },
  {
    id: nanoid(),
    position: 'Cofounder and CTO',
    company: 'Cede',
    companyUrl: '',
  },
  {
    id: nanoid(),
    position: 'Undergraduate Researcher',
    company: 'Warwick Mathematics Institute',
    companyUrl: 'https://warwick.ac.uk/fac/sci/maths/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to get in touch with me?',
  btn: "Let's Chat",
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anishgupta2/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agupta',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/anish.gxpta/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/anishgupta6',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
