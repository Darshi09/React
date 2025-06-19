import React, { useState } from "react";

const Navbar = ({bool,setbool}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [boolean, setBoolean] = useState(false);

  return (
  //  <nav className="bg-white dark:bg-gray-800 shadow">
<nav className={`${boolean ? 'bg-black-900 text-white shadow-white' : 'bg-white text-gray-800 shadow-md'} dark:bg-gray-800 dark:text-white shadow-md dark:shadow-white`}>
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo Section */}
      <span className="text-2xl font-bold text-purple-700 dark:text-white">
        Unique
      </span>

      {/* Toggle Button (Mobile) */}
      <div className="md:hidden">
        <button
          className="text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links + Theme Buttons */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <a
            href="#"
            className="text-purple-700 dark:text-purple-500 hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            Contact
          </a>
        </div>

        {/* Theme Buttons */}
        <div className="flex space-x-2">
          {boolean?(
            <button
          onClick={()=>{
            setbool(false)
            setBoolean(!boolean)
          }}
           className="px-3 py-1 rounded-md bg-yellow-300 text-gray-800 font-semibold shadow hover:bg-yellow-400">
            Day
          </button>
          ):(
             <button
          onClick={()=>{
            setbool(true)
            setBoolean(!boolean)
          }}
           className="px-3 py-1 rounded-md bg-gray-900 text-white font-semibold shadow hover:bg-gray-700">
            Night
          </button>
          )}
         
        </div>
        
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
