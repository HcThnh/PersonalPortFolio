import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

export const skillsData = [
    {name: "HTML", level: 85, 
        icon: <FaHtml5 className="text-orange-600 h-8"/> },
    {name: "CSS", level: 85, 
        icon: <FaCss3 className="text-blue-600 h-8"/> },
    {name: "Javascript", level: 85, 
        icon: <SiJavascript className="text-yellow-500 h-8"/> },
    {name: "React", level: 80, 
        icon: <FaReact className="text-blue-500 h-8"/> },
    {name: "Tailwindcss", level: 80, 
        icon: <SiTailwindcss className="text-blue-500 h-8"/> },
    {name: "Typescript", level: 80, 
        icon: <SiTypescript className="text-blue-500 h-8"/> }
]