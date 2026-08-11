import { useState, useMemo } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { projectsData } from "../data/ProjectsData"
import { FaGithub } from "react-icons/fa"
import { ExternalLink, Search } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export default function Project() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("Tất cả");

    const allTechnologies = useMemo(() => {
        const techs = projectsData.flatMap(p => p.technologies);
        return ["Tất cả", ...Array.from(new Set(techs))];
    }, []);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = selectedTag === "Tất cả" || project.technologies.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
    }, [searchTerm, selectedTag]);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50 dark:bg-gray-900 transition-colors duration-300">
            <Header/>

            <main className="mb-12 mt-4 flex flex-col items-start gap-6 px-4 md:px-10 xl:max-w-6xl xl:mx-auto w-full flex-grow">
                <div className="font-semibold text-[#3730a3] dark:text-indigo-400 my-2 relative 
                text-xl self-center xl:hidden">
                    Dự án nổi bật
                    <div className="absolute -bottom-1 bg-[#1e1b4b] dark:bg-indigo-500 left-1/4 right-1/4 h-0.5 z-10"></div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-left text-sm md:text-base max-w-2xl leading-relaxed">
                    Dưới đây là một số dự án tiêu biểu tôi đã tham gia phát triển. Qua đó thể hiện khả năng 
                    xây dựng giao diện phân quyền, làm việc với RESTful API, tối ưu hóa hiển thị dữ liệu thời gian thực 
                    và áp dụng các quy trình phát triển phần mềm chuyên nghiệp.
                </p>

                <div className="flex flex-col gap-5 w-full mt-2">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            id="search-project"
                            name="search-project"
                            type="text"
                            placeholder="Tìm kiếm dự án..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#3730a3] dark:focus:border-indigo-500 focus:outline-none transition-colors text-sm bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm dark:placeholder-gray-500"
                        />
                    </div>

                    <div className="w-full">
                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 text-left">
                            Lọc theo công nghệ
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible w-full scrollbar-none">
                            {allTechnologies.map((tech) => {
                                const isActive = selectedTag === tech;
                                return (
                                    <button
                                        key={tech}
                                        onClick={() => setSelectedTag(tech)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                                            isActive
                                                ? "bg-[#3730a3] dark:bg-indigo-600 text-white shadow-sm"
                                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700"
                                        }`}
                                    >
                                        {tech}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {filteredProjects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center w-full py-16 text-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 mt-4">
                        <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-3" />
                        <h4 className="text-base font-bold text-gray-700 dark:text-gray-300">Không tìm thấy dự án nào</h4>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Hãy thử tìm kiếm với từ khóa hoặc tag công nghệ khác.</p>
                    </div>
                ) : (
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={`${searchTerm}-${selectedTag}`}
                    >
                        {filteredProjects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden 
                            hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col h-full 
                            shadow-sm hover:shadow-xl dark:shadow-gray-900/50"
                            variants={cardVariants}
                        >
                            <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-700 group">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute top-3 right-3 bg-[#3730a3] dark:bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                    {project.role}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow text-left">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-[#3730a3] dark:hover:text-indigo-400 transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs text-[#3730a3] dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/50 px-2.5 py-1 rounded-full shrink-0">
                                        {project.date}
                                    </span>
                                </div>

                                <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                                    {project.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                                        Công nghệ sử dụng
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="text-xs bg-slate-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-md font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-5 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-[#3730a3] dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <FaGithub className="w-5 h-5"/> GitHub
                                    </a>
                                    {project.demo && (
                                        <a 
                                            href={project.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-[#3730a3] dark:hover:text-indigo-400 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4"/> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
            </main>

            <Footer/>
        </div>
    )
}