import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // backdrop-blur-md shadow-md border-b border-gray-200 
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAF9F3] z-50 border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-black">My Portfolio</h1>

        <div className="hidden md:flex space-x-6">
          {["home", "projects", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-[#57B4BA] transition-all text-lg font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <button className=" cursor-pointer md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#FAF9F3] py-4 shadow-lg">
          {["home", "projects", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 py-2 hover:text-[#57B4BA] transition-all text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
