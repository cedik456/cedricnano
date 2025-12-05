import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Who's Next?",
    description:
      "A smart job-matching platform that works like a mix of a dating app and a job platform.",
    technologies: [
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "ExpressJs",
      "Expo",
    ],
    githubLink: "https://github.com/cedik456/WhosNext",
    demoLink: "https://demo.com",
    image: "/projects/whosnext-project.jpg",
  },
  {
    title: "Classroom Booking System",
    description:
      "A classroom booking system with real time updates for Bicol University College of Engineering.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Socket.io"],
    githubLink:
      "https://github.com/jamesricarte/booking-system-prototype-simplified",
    demoLink: "https://demo.com",
    image: "/projects/classroombooking-project.png",
  },
  {
    title: "Chapterly",
    description: "A modern book-selling e-commerce website.",
    technologies: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/jamesricarte/Chapterly-Ecommerce",
    demoLink: "https://demo.com",
    image: "/projects/book-selling-website.png",
  },

  {
    title: "CodeFlow AI",
    description:
      "A modern responsive website using the tools react and tailwind",
    technologies: ["React", "Tailwind", "TypeScript"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/codeflowai.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive reference portfolio website for my future and current clients",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio-website.png",
  },
  {
    title: "Expense Tracker",
    description: "A personal finance tracker to manage expenses and income.",
    technologies: ["React", "Firebase"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/expense-tracker.webp",
  },
];
