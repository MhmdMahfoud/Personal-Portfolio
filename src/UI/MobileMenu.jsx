import React from 'react'
import { RxCross2 } from "react-icons/rx";

function MobileMenu({isMenuOpen,setIsMenuOpen}) {
  return (

    <div className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto " : "h-0 opacity-0 pointer-events-none" } `}>




      <button onClick={()=> setIsMenuOpen(false)} className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer " aria-label='close Menu='> 
      <RxCross2 />
      
      </button>
      <a 
      onClick={()=> setIsMenuOpen(false)}
              href="#home"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Home
            </a>
            <a
            onClick={()=> setIsMenuOpen(false)}
              href="#Projects"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Projects
            </a>
            <a
            onClick={()=> setIsMenuOpen(false)}
              href="#About"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              About
            </a>
            <a
            onClick={()=> setIsMenuOpen(false)}
              href="#Contact"
              className="text-white hover:bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text hover:text-transparent transition-all"
            >
              Contacts
            </a>
    </div>

 
 
  )

}

export default MobileMenu