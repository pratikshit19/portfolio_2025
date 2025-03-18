import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F3] overflow-hidden">
      {/* Circular Gradient Blobs */}
      {/* <div className="absolute top-10 left-10 w-500 h-500 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-500 h-500 bg-violet-200 rounded-full blur-3xl opacity-50"></div> */}
      {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-40"></div> */}

      {/* Content */}
      <motion.h1
        className="text-5xl font-bold text-black relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span className="text-black-600">Pratikshit Kumar</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mt-4 max-w-xl relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I’m a passionate <strong>Fullstack Developer</strong> specializing in <strong>MERN Stack</strong> & <strong>Flutter</strong>.
        I love building modern, interactive, scalable applications and help improve productivity when involved in any environment.
      </motion.p>

      <motion.div
        className="mt-6 space-x-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-[#AEEA94] hover:text-black transition-all cursor-pointer"
        >
          View Projects
        </Link>

        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="px-6 py-3 border border-black text-black rounded-lg hover:bg-[#AEEA94] transition-all cursor-pointer"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
