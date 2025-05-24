import { FaReact, FaHtml5, FaCss3Alt, FaGithub  } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostman, SiSwagger, SiFigma } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import {MdStorage } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "C#", icon: <FaCode /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "SQL", icon: <DiMysql className="text-[#00618A]"/>},
  { name: "SSMS", icon: <MdStorage className="text-purple-400" /> },
  { name: "Swagger", icon: <SiSwagger className="text-green-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

export const Skills = () => ( 
  <section className="max-w-5xl mx-auto px-4 py-16 text-white" id="skills">
    <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col items-center space-y-2 p-4 bg-[#1a1a2e] rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="text-4xl">{skill.icon}</div>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);
