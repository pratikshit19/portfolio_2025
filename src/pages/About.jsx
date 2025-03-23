import { motion } from "framer-motion";
import laptopBackground from "../assets/laptop_bg.png";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiTensorflow } from "react-icons/si";
import profilePicture from "../assets/pp.jpg";

const About = () => {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 md:px-6 bg-[#FAF9F3] overflow-hidden">

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-4xl md:max-w-5xl bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-lg md:rounded-xl shadow-lg border border-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Animated Image */}
        <motion.img
          src={profilePicture}
          alt="Laptop"
          className="w-40 md:w-60 lg:w-80 mb-4 md:mb-0 md:mr-6 lg:mr-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Right: About Me Text */}
        <div className="text-center md:text-left w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-black">About Me ✨</h2>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            I'm a <span className="font-semibold text-[#261FB3]">Fullstack Developer</span> with expertise in <strong>MERN stack</strong> and <strong>Flutter</strong>.
            I thrive on creating high-performance, scalable web and mobile applications.
          </p>
          <p className="text-base md:text-lg text-gray-700 mt-4">
            Passionate about <strong>AI-driven solutions</strong>, I enjoy exploring <strong>machine learning, automation</strong>, and <strong>open-source contributions</strong>.
          </p>

          {/* Tech Stack Icons */}
          <div className="mt-4 md:mt-6 flex justify-center md:justify-start space-x-3 md:space-x-4 text-2xl md:text-3xl text-gray-600">
            <FaReact className="hover:text-blue-500 transition" />
            <FaNodeJs className="hover:text-green-500 transition" />
            <SiMongodb className="hover:text-green-400 transition" />
            <FaDatabase className="hover:text-orange-500 transition" />
            <SiFlutter className="hover:text-blue-400 transition" />
            <SiTensorflow className="hover:text-yellow-500 transition" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
