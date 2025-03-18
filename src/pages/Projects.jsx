import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Notes App",
    description: "A full-stack notes app using React, Node, Express, and MongoDB.",
    github: "https://github.com/yourusername/notes-app",
    demo: "https://your-notes-app.com",
  },
  {
    title: "Movie Finder App",
    description: "A Flutter app to search and view movies.",
    github: "https://github.com/yourusername/movie-app",
    demo: "https://your-movie-app.com",
  },
];

const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9F3]">
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
            className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 space-x-4">
              <a href={project.github} className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href={project.demo} className="text-green-600 hover:text-green-800">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
