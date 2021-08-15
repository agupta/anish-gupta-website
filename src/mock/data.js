import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anish Gupta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Anish Gupta is a ', // e.g: Welcome to my website
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
  paragraphOne:
    "I'm going into my third year as a mathematics undergraduate at the University of Warwick. I have experience in market making, software development, entrepreneurship, and mathematics research. I combine a quantitative mindset with very strong analytical and problem-solving skills (expected 1st, IMC 2021 Second Prize). My variety of experiences have equipped me with confident ability to articulate and communicate complex ideas in simple terms.",
  paragraphTwo:
    "I'm a confident programmer, with deepest knowledge of Python but have used many languages over my life including C++ and JavaScript. I've done a few projects involving machine learning (ML), and I'm quickly and constantly learning more and more.",
  paragraphThree:
    "In my spare time I like to play speed chess and poker online. I'm also a rower in my university's boat club. I've played guitar in jazz concerts and on the streets of Brighton.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    position: 'Trading Intern',
    company: 'Mako Trading',
    companyUrl: 'https://www.mako.com/',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    position: 'Cofounder and CTO',
    company: 'Cede',
    companyUrl: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    position: 'Undergraduate Researcher',
    company: 'Warwick Mathematics Institute',
    companyUrl: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
