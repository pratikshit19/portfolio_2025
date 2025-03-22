import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Ensure all styles are imported
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
    description: "A Flutter app for searching and viewing movies.",
    github: "https://github.com/yourusername/movie-app",
    demo: "https://your-movie-app.com",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "AI Email Phishing Detector",
    description: "A Chrome extension that detects phishing emails using AI.",
    github: "https://github.com/yourusername/email-phishing-detector",
    demo: "https://your-email-detector.com",
    tech: ["Machine Learning", "Python", "Flask"],
  },
  
];

const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-8 bg-[#FAF9F3]/90 w-full">
      <h2 className="text-4xl font-bold mb-6 text-black">Projects 🚀</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Reduce space for better alignment
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 card for mobile screens
          768: { slidesPerView: 2 }, // 2 cards for tablets
          1024: { slidesPerView: 3 }, // 3 cards for desktops
        }}
        className="w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-all flex flex-col">
              <h3 className="text-2xl font-semibold text-[#261FB3]">{project.title}</h3>

              {/* Content wrapper with flex-grow to keep all cards same height */}
              <div className="flex-grow mt-2 text-gray-600">{project.description}</div>

              {/* Tech Stack Badges */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links at the bottom */}
              <div className="mt-auto pt-4 flex space-x-4 justify-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:text-blue-600">
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
