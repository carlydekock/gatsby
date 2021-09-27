import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carly | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Carly',
  subtitle: 'I am a Fullstack JavaScript Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'carly-profile.jpg',
  paragraphOne: 'Hi, I’m Carly! I’m a Software Developer with a focus on fullstack JavaScript applications. I have a Bachelors of Science in Mathematics, and come from a background in recruiting and business administration. I’ve always been a people first problem solver and continuous learner, which is a lot of what led me to a career pivot into the tech world.',
  paragraphTwo: 'I’m passionate about solving human problems via technical means, and using technology to make the world more equitable, sustainable, and efficient. I thrive on collaboration and have a deep sense of empathy for others, which continuously guides my approach to designing and building efficient and user-centric applications.',
  paragraphThree: 'I would love to meet you, so feel free to reach out!',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'HikeFinder.png',
    title: 'Hike Finder',
    info: 'Auth0 authenticated RESTful API for users to find and contribute to hiking trail data.',
    info2: '',
    url: 'https://hike-finder.netlify.app/',
    repo: 'https://github.com/carlydekock/hike-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sinkyshipsmaller.png',
    title: 'Sinky Ship Mobile',
    info: 'React Native mobile application for player versus computer click-based gameplay.',
    info2: '',
    url: 'https://github.com/High-Seas-Computer-Company/sinky-ship-v3',
    repo: 'https://github.com/High-Seas-Computer-Company/sinky-ship-v3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sinkyship.png',
    title: 'Sinky Ship',
    info: 'Interactive command line interface game against a computer opponent.',
    info2: '',
    url: 'https://github.com/High-Seas-Computer-Company/sinky-ships',
    repo: 'https://github.com/High-Seas-Computer-Company/sinky-ships', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skill.png',
    title: 'Skills for Devs',
    info: 'Dynamic mobile-first application that allows user to search for free online learning resources.',
    info2: '',
    url: 'https://skills-for-devs.herokuapp.com/',
    repo: 'https://github.com/skills-for-devs/resource-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'seattleadv.png',
    title: 'Choose Your Seattle Adventure',
    info: 'Interactive choose your own adventure game taking the user on a virtual tour of the Seattle area',
    info2: '',
    url: 'https://choose-your-adventure.github.io/final-project/',
    repo: 'https://github.com/choose-your-adventure/final-project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'carly.m.dekock@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/carlymdekock',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/carlydekock/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/carlydekock',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
