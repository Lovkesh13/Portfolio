import {
  javascript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  docker,
  git,
  bel,
  loading,
  sudoku,
  imagify,
  seatlock,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "Bharat Electronics Limited",
    icon: bel,
    iconBg: "white",
    date: "June 2025 - August 2025",
    points: [
      "Engineered an end-to-end acoustic event detection system for defence surveillance, curating a composite dataset of 8,732+ labeled clips across 10 sound classes from UrbanSound8K and AudioSet to classify 3 security-critical event types (vehicles, aircraft, gunfire).",
      "Implemented an ML pipeline with preprocessing (log-Mel spectrograms) and augmentation (Mixup, SpecAugment), improving model robustness and generalization on noisy real-world audio.",
      "Applied transfer learning strategies, utilizing YAMNet as a feature extractor and fine-tuning AST, achieving about 93% classification accuracy with high recall for critical events."
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
    name: "SeatLock",
    description: "Concurrency-safe seat-booking backend using PostgreSQL row-level locking to eliminate race conditions. Verified 0 double-bookings across 10,000 simultaneous requests at ~590 bookings/sec.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "concurrency",
        color: "blue-text-gradient",
      },
    ],
    image: seatlock,
    source_code_link: "https://github.com/Lovkesh13/SeatLock",
  },
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
    image: sudoku,
    source_code_link: "https://github.com/Lovkesh13/Sudoku_solver",
  },
];

export { technologies, experiences, projects };