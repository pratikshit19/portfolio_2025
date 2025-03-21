import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MERN Notes App",
    description: "A full-stack notes app using React, Node, Express, and MongoDB.",
    github: "https://github.com/yourusername/notes-app",
    demo: "https://your-notes-app.com",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Movie Finder App",
    description: "A Flutter app to search and view movies.",
    github: "https://github.com/yourusername/movie-app",
    demo: "https://your-movie-app.com",
    tech: ["Flutter", "Dart", "Firebase"],
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-projects h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9F3]">
      <motion.h2
        className="text-4xl font-bold mb-6 text-black"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects 🚀
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-all relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#57B4BA]">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>

            {/* Tech Stack Badges */}
            <div className="mt-3 flex space-x-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex space-x-4">
              <a href={project.github} className="flex items-center text-black hover:text-blue-600">
                <FaGithub className="mr-1" /> GitHub
              </a>
              <a href={project.demo} className="flex items-center text-green-600 hover:text-green-800">
                <FaExternalLinkAlt className="mr-1" /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
