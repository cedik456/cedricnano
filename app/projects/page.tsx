import Image from "next/image";
import { projects } from "../contents/projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className=" container mx-auto py-10 max-w-5xl md:px-0 px-4">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 ">Projects</h1>
      <div className="grid grid-cols-1 gap-8 md:mb-4 mb-0">
        {projects.map((project) => (
          <article
            key={project.title}
            className=" dark:bg-dark/50 rounded-lg group"
          >
            <div className="relative aspect-video  rounded-lg overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 mask-[linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-0.5 left-4 z-10 transition-all duration-300 group-hover:-translate-y-3">
                <h3 className="text-white font-semibold md:text-xl text-lg">
                  {project.title}
                </h3>

                <div className="flex gap-2 flex-wrap mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white border border-white/20 px-2 py-1 rounded-md text-xs md:text-sm flex items-center gap-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-md text-gray-400 mt-2">
                  {project.description}
                </p>

                <div className=" md:mt-2 mt-0 py-3 md:py-0  transition-all duration-300 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="md:px-4 md:py-2 px-3 py-1  items-center rounded-lg bg-white text-black text-sm font-medium shadow-md hover:bg-gray-200 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </div>
  );
}
