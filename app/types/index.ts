export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Experience {
  company: string;
  role: string;
  type: "internship" | "freelance" | "school project" | "personal";
  date: string;
  description: string;
}
