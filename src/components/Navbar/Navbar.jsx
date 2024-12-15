import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Practice", path: "/" },
  { id: 2, title: "Internships", link: "#" },
  { id: 3, title: "Jobs", link: "#" },
  { id: 4, title: "Compete", link: "#" },
  { id: 5, title: "Mentorship", link: "#" },
  { id: 6, title: "Courses", link: "#" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <h1 className="font-serif font-bold text-2xl text-primary">WEBSITE</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-between items-center ml-16">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path || menu.link}
                  className="inline-block py-2 px-3 hover:text-secondary duration-200"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="primary-btn">Login</button>
            <button className="host-btn">
              <span className="text-orange-500">+</span> Host
            </button>
            <button className="business-btn whitespace-nowrap">For Business</button>
            <button className="search-btn flex items-center justify-center">
              <FiSearch className="text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <IoMdMenu className="text-4xl text-gray-700 cursor-pointer" />
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-start px-6 py-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="w-full">
                <a
                  href={menu.path || menu.link}
                  className="block w-full py-2 px-4 hover:bg-gray-100 duration-200 rounded-md"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="primary-btn w-full">Login</button>
              <button className="host-btn w-full">
                <span className="text-orange-500">+</span> Host
              </button>
              <button className="business-btn w-full whitespace-nowrap">For Business</button>
              <button className="search-btn flex items-center justify-center w-full h-10">
                <FiSearch className="text-white" />
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


