import React from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";

function Navba() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
         
          <Logo />
          

          {/* Menu Icon (mobile only) */}
          <div className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono">
            <IoMdMenu />
          </div>

          {/* Desktop Menu (links hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Home
            </a>
            <a
              href="#Projects"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Projects
            </a>
            <a
              href="#About"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              About
            </a>
            <a
              href="#Contact"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navba;
