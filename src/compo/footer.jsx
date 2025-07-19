import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/themecontext";

function Footer() {

    const { isDarkMode } = useTheme()
  return (
    <div
      className={`min-h-[20vh] border-t px-4 py-8 flex flex-col items-center justify-center space-y-4 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gray-950/80 text-white border-gray-700"
          : "bg-gray-50 text-gray-900 border-gray-200"
      }`}
    >
        <p className="text-xl ">Sijan Basnet</p>
     

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex space-x-6"
      >
        <a
          href="https://github.com/dogreed?tab=overview&from=2025-07-01&to=2025-07-17"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sijan-basnet-14b088261/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-700 transition-colors duration-300"
        >
          <FaLinkedinIn size={20} />
        </a>
      </motion.div>

       <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm"
      >
        © {new Date().getFullYear()} Sijan Basnet. All rights reserved.
      </motion.p>
    </div>
  );
}

export default Footer;
