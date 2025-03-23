import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Section - Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Pratikshit Kumar</h2>
          <p className="text-gray-400 text-sm">Fullstack Developer | MERN & Flutter</p>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap gap-4 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-gray-100 transition">About</a></li>
            <li><a href="#projects" className="hover:text-gray-100 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-100 transition">Contact</a></li>
            <li><a href="/PratikshitKumarResume.pdf" className="hover:text-gray-100 transition">Resume</a></li>
          </ul>
        </nav>

        {/* Right Section - Social Media Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/pratikshit19" target="_blank" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pratikshit-kumar-460b6b1b7/" target="_blank" className="hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Kumarprat19" target="_blank" className="hover:text-gray-300 transition">
            <FaTwitter />
          </a>
          <a href="mailto:pratikshit22@gmail.com" className="hover:text-gray-300 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-6 text-sm text-gray-500 text-center border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Pratikshit Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
