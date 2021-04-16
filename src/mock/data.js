import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carly | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
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
  paragraphOne: 'Hi, I’m Carly. I’m a Software Developer with a focus on fullstack JavaScript applications. I have a Bachelors of Science in Mathematics, and come from a recent background in recruiting and business administration. I’ve always been a people first problem solver and continuous learner, which led me to a career pivot into the tech world. I’m excited about the opportunity to apply my analytical and problem solving skills towards building software and other technology tools.',
  paragraphTwo: 'I’m passionate about increasing accessibility of technology for all. Specifically building inclusive and engaging resources for learning and development for all ages. I thrive on collaboration and have a deep sense of empathy for others. This continuously guides my approach to designing and building efficient and user-centric applications.',
  paragraphThree: 'I’m looking for a role that will provide me with opportunities to learn and refine my skills, as well as collaborate with others at all levels of the organization.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sinkyship.png',
    title: 'Sinky Ship',
    info: 'Interactive command line interface game against a computer opponent.',
    info2: '',
    url: '',
    repo: 'https://github.com/High-Seas-Computer-Company/sinky-ships', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skill.png',
    title: 'Skills for Devs',
    info: 'Dynamic mobile-first application that allows user to search for free online learning resources.',
    info2: '',
    url: 'https://www.skillfinder.dev/',
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
  email: 'carly@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
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
