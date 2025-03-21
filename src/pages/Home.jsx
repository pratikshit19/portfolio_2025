import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  return (
    <div className="bg-gradient-home relative h-screen flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F3] overflow-hidden">
      {/* Background Gradient Blobs */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50"></div> */}
      
      {/* Content */}
      {/* <div className="absolute bottom-20 left-0 w-full overflow-hidden">
  <svg viewBox="0 0 1440 320" className="w-full">
    <path fill="#A3C7E8" fillOpacity="0.3" d="M0,224L60,240C120,256,240,288,360,272C480,256,600,192,720,165.3C840,139,960,149,1080,176C1200,203,1320,245,1380,266.7L1440,288V320H0Z"></path>
  </svg>
</div> */}

      

      <motion.h1
        className="text-5xl font-bold text-black relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span className="text-[#57B4BA]">Pratikshit Kumar</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-xl relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I’m a passionate <strong>
          <Typewriter words={["Fullstack Developer", "MERN Stack Expert", "Flutter Developer"]} loop={true} cursor />
        </strong> specializing in building modern, interactive, and scalable applications.
      </motion.p>

      <motion.div
        className="mt-20 space-x-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-[#57B4BA] hover:text-white transition-all cursor-pointer"
        >
          View Projects
        </Link>

        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="px-6 py-3 border border-black text-black rounded-lg hover:text-[#57B4BA] hover:border-[#57B4BA] transition-all cursor-pointer"
        >
          Contact Me
        </Link>
      </motion.div>
      
      {/* Social Media Links */}
      <div className="mt-10 flex space-x-6 text-2xl">
        <a href="https://github.com/pratikshit19" className="text-black hover:text-gray-600 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pratikshit-kumar-460b6b1b7/" className="text-blue-700 hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
        {/* <a href="https://twitter.com/pratikshit19" className="text-blue-400 hover:text-blue-600 transition">
          <FaTwitter />
        </a> */}
      </div>
    </div>
  );
};

export default Home;
