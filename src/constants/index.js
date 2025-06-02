import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  cdao,
  loading,
  sudoku,
  imagify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Team Member",
    company_name: "CDAO Club",
    icon: cdao,
    iconBg: "white",
    date: "Current",
    points: [
      "Contributing to club projects using React.js and modern web technologies",
      "Collaborating with fellow club members on web development initiatives",
      "Learning and implementing best practices in frontend development",
      "Participating in club meetings and technical discussions"
    ],
  },
  {
    title: "More Experiences Loading...",
    company_name: "Future Endeavors",
    icon: loading,
    iconBg: "white",
    date: "Coming Soon",
    points: [
      "Excited to take on new challenges and opportunities",
      "Actively learning and growing as a developer",
      "Open to collaboration and project opportunities"
    ],
  }
];

const projects = [
  {
    name: "Imagify",
    description: "AI-Powered Text to Image Generator that brings ideas to life. Free tool that transforms text descriptions into stunning visuals and unique imagery.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "image-generation",
        color: "pink-text-gradient",
      },
    ],
    image: imagify, 
    source_code_link: "https://github.com/Lovkesh13/imagify",
  },
  {
    name: "Sudoku Solver",
    description: "Web-based Sudoku Solver with a sleek interface. Features puzzle generation, solving using advanced recursion and backtracking algorithms, and clear functionality.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "backtracking",
        color: "blue-text-gradient"
      }
    ],
    image: sudoku, // Add appropriate image path
    source_code_link: "https://github.com/Lovkesh13/Sudoku_solver",
  },
];

export { services, technologies, experiences, projects };