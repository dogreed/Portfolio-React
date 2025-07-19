import { useTheme } from "../context/themecontext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center  ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container w-full max-w-3xl text-center space-y-6 "
      >

        <motion.img
          src="../src/assets/dragon.jpg"
          alt="Profile"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 mx-auto rounded-full border-2 border-green-500 shadow-md"
        />


        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-green-600">Sijan Basnet</span>
        </h1>


        <span className="block text-sm uppercase tracking-widest text-green-500">
          <Typewriter
            words={[
              "FullStack Developer",
              "Cyber Security enthusiast ",
              "Clean Code Crafter",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>


        <p className="text-lg  dark:text-gray-500 max-w-xl mx-auto">
          I craft fast, responsive, and accessible websites using technologies
          like React, Tailwind, and .Net. Always focused on New Innovation.
        </p>


        <div className="flex flex-wrap gap-3 mt-4 items-center justify-center m-2">
          {["React", "Tailwind CSS", "Dot Net MVC Core", "MSSQL","Web Framework"].map((skill, idx) => (
            <div
              key={idx}
              className="px-3 py-1 text-sm font-medium  dark:bg-green-700 text-green-200 rounded-full "
            >
              {skill}
            </div>
          ))}
        </div>



        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/about"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            More Info!!!
          </Link>
          <Link
            to="/contact"
            className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
