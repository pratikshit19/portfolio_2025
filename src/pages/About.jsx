import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9F3] overflow-hidden">
        {/* <div className="absolute top-10 left-10 w-500 h-500 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-500 h-500 bg-pink-200 rounded-full blur-3xl opacity-50"></div> */}
      <motion.div
        className="max-w-2xl bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-black">About Me ✨</h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          I'm a passionate Fullstack Developer specialized in **MERN stack** and **Flutter**.
          I love building efficient and scalable web applications.  
        </p>
        <p className="text-lg text-gray-700 mt-4 text-center">
          In my free time, I contribute to **open source**, explore **new technologies**, and work on **AI-driven applications**.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
