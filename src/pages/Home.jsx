import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import laptopBackground from "../assets/laptop_bg.png";



const Home = () => {
  return (
    <div className="bg-gradient-home relative h-screen flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F3] overflow-hidden">

      {/* Name Heading */}
      
        <motion.h1
          className="text-5xl font-bold text-black relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="text-[#261FB3]">Pratikshit Kumar</span>
        </motion.h1>
      

      {/* Description */}
      
        <motion.p
          className="text-lg text-gray-700 mt-4 max-w-xl relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I’m a passionate Developer specializing in building modern, interactive, and scalable applications in Flutter and MERN Stack.
        </motion.p>
      

      {/* Buttons */}
      
        <motion.div
          className="mt-10 space-x-4 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-[#261FB3] hover:text-white transition-all cursor-pointer"
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
          <a href="https://www.linkedin.com/in/pratikshit-kumar-460b6b1b7/" className="text-blue-500 hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      
    </div>
  );
};

export default Home;
