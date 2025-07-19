import './nav.css';
import { Link, NavLink } from 'react-router-dom';
import {
  SunIcon,
  MoonIcon,
  Bars2Icon,

  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/themecontext.jsx'







const DayNightToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>

      <button
        onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        {isDarkMode ? (
          <SunIcon className="h-4 w-4 text-yellow-500" />
        ) : (
          <MoonIcon className="h-4 w-4 text-gray-700" />
        )}
      </button>
    </>
  )

}


export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();


  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close mobile menu if screen is md or larger
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
   



      <div className={` fixed top-0 w-full z-50 px-6 py-3 flex items-center justify-between relative border-b ${isDarkMode ? "bg-gray-950/80 text-white border-gray-700" : "bg-gray-50/100 border-gray-200"
        } backdrop-blur-md `}>



       <Link to="/">
          <div className="rounded-full bg-green-200 p-3 text-lg font-bold text-green-900 shadow-md">
            SB
          </div>
        </Link> 
       
        {/* Center Nav (Desktop) */}
        <div className="hidden md:flex space-x-8  text-md font-medium">
        

<div className="hidden md:flex space-x-8 text-md font-medium">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "text-green-500"
        : "cursor-pointer focus:text-green-500"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive
        ? "text-green-500"
        : "cursor-pointer focus:text-green-500"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "text-green-500"
        : "cursor-pointer focus:text-green-500"
    }
  >
    Contact Me!
  </NavLink>
</div>

        </div>

        {/* Theme Toggle & Hamburger */}
        <div className="flex justify-center items-center gap-2 relative">
          <DayNightToggle />

          {/* Hamburger Icon (Mobile Only) */}
          <button className="md:hidden relative" onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 " />
            ) : (
              <Bars2Icon className="h-6 w-6 " />
            )}
          </button>


          {/* Floating Menu Card (Mobile Only) */}
          {menuOpen && (
            <div className={`absolute top-12 right-0 w-48  shadow-lg rounded-xl p-4 flex flex-col space-y-3 z-50  ${isDarkMode ? "bg-white  text-gray-700 " : "bg-gray-700  text-white"}`}>
              <Link
                to="/"
                className=" cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className=" cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className=" cursor-pointer"
                onClick={toggleMenu}
              >
                Contact Me!
              </Link>
            </div>
          )}
        </div>
      </div>
   

  );
}

