import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/themecontext";
import profilePic from "../assets/h.jpg";
import { useState } from "react";
import afn from '../assets/afn.png'
import tjp from '../assets/tjp.png'
import qj from '../assets/qj.png'
import tlp from '../assets/tlp.png'


const educationData = [
  {
    year: "2022-Present",
    title: "Bachelor of Information & Technology",
    place: "Texas  College of Managment & IT",
    description: "Currently Studying",
  },
  {
    year: "2022",
    title: "High School Degree",
    place: "Puspasadan Higher Seconadry  School",
    description: "Great Learning Experience",
  },
];

const experienceData = [
  {
    year: "2025-Present",
    title: "CEO",
    place: "Quick Junction",
    description: "Self Employed. Great Aim Startup",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    place: "Texas College of Managment & IT",
    description: "Contributed to the development of internal tools and Website.",
  },
  {
    year: "2024-2025",
    title: "Full Stack Developer",
    place: "AfterSchool Nepal ",
    description: "Worked as a Freelancer",
  },
];



const projects = [
  {
    title: "AfterSchool Nepal",
    image: afn,
    link: "https://afterschoolnepal.com/default.aspx?aspxerrorpath=/",
  },
  {
    title: "Texas Learning Portal",
    image: tlp,
    link: "https://www.texaslearningportal.com/Default.aspx?aspxerrorpath=/",
  },
  {
    title: "Quick Junction",
    image: qj,
    link: "https://www.quickjunction.com/",
  },
   {
    title: "Texas Job Portal",
    image: tjp,
    link: "https://texasjobportal.com/default.aspx?aspxerrorpath=/",
  },
];

export default function About() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("education");

  const isEducation = activeTab === "education";

  const timelineData = isEducation ? educationData : experienceData;

  return (
    <div className={`min-h-screen px-6 py-20 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">


        <div className="flex-1 text-left space-y-6">
          <h1 className="text-4xl font-bold text-green-600">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-500">
            Hi! I'm Sijan Basnet, a passionate Full Stack developer focused on building clean, efficient, and user-friendly web experiences. I enjoy turning ideas into beautiful, functional websites.
          </p>
        </div>


        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-green-600"
          />
        </motion.div>
      </div>
      <h4 className="m-10 text-center text-2xl font-bold text-green-600">My Journey</h4>
      <div className="flex justify-center mb-8 space-x-4">
        {["education", "experience"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === tab
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>


      <div className="relative border-l-2 border-green-600 pl-6 space-y-10 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {timelineData.map(({ year, title, place, description }, idx) => (
            <motion.div
              key={year + title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >

              <div className="absolute -left-4 top-1.5 w-3 h-3 rounded-full bg-green-600 border-1 border-white dark:border-gray-900"></div>

              <time className="text-green-600 font-semibold ">{year}</time>
              <h3 className="text-xl font-bold mt-1">{title}</h3>
              <p className="italic text-sm text-gray-500 dark:text-gray-400">{place}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-500">{description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-2">
        <h1 className="text-center text-3xl text-green-600 mb-3">Projects</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded border border-green-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}




