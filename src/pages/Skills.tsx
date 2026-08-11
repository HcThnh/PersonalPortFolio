import Header from "../components/Header"
import Footer from "../components/Footer"
import SkillBar from "../components/SkillBar"
import { skillsData } from "../data/SkillsData"
import { ProfileData } from "../data/ProfileData"
import { User, Ear, Lightbulb } from "lucide-react";
import { motion } from "framer-motion"

export default function Skills() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header/>

            <main className="mb-8 mt-2 flex flex-col items-start gap-4 px-4 md:px-10
            xl:max-w-6xl xl:mx-auto">
                <section className="flex flex-col items-center w-full my-2 gap-4">
                    <div className="font-semibold text-[#3730a3] dark:text-indigo-400 my-2 relative
                    text-xl xl:hidden">
                        Kỹ năng của tôi

                        <div className="absolute -bottom-1 bg-[#1e1b4b] dark:bg-indigo-500 left-1/4 right-1/4 h-0.5
                        z-10">
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-8
                    justify-between flex-col xl:grid-cols-3">
                        {skillsData.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} icon={skill.icon}/>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col w-full my-2 gap-4">
                    <p className="text-[#3730a3] dark:text-indigo-400 font-semibold text-xl text-left">
                        Kỹ năng mềm
                    </p>

                    <div className="flex justify-between w-full
                    xl:grid xl:grid-cols-3 gap-x-4">
                        {ProfileData.softSkills.map((skill, index) => (
                            <div 
                            className={`flex ${index === 1 ? "xl:justify-center" : index === 2 ? "xl:justify-end" : "justify-start"}
                            justify-between`} 
                            key={index}>
                                {index === 0 ? (
                                    <div className="flex items-center gap-4">
                                        <User className="bg-[#3730a3] dark:bg-indigo-700 text-white rounded-full p-2" size={48}/>
                                        <p className="text-left hidden xl:block text-gray-700 dark:text-gray-300">{skill}</p>
                                    </div>
                                ) : index === 1 ? (
                                    <div className="flex items-center gap-4">
                                        <Ear className="bg-[#3730a3] dark:bg-indigo-700 text-white rounded-full p-2" size={48}/>
                                        <p className="text-left hidden xl:block text-gray-700 dark:text-gray-300">{skill}</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <Lightbulb className="bg-[#3730a3] dark:bg-indigo-700 text-white rounded-full p-2" size={48}/>
                                        <p className="text-left hidden xl:block text-gray-700 dark:text-gray-300">{skill}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <ul className="flex flex-col gap-1 list-disc px-4 xl:hidden">
                        {ProfileData.softSkills.map((skill, index) => (
                            <li key={index}
                            className="w-full text-left text-gray-700 dark:text-gray-300">{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className="flex flex-col gap-4 w-full my-2 ">
                    <p className="text-[#3730a3] dark:text-indigo-400 font-semibold text-xl text-left">Ngoại ngữ</p>

                    <div className="w-full">
                        <div className="grid grid-cols-[1fr_8fr_1fr] gap-x-3 items-center mb-1">
                            <span className="text-lg font-medium text-gray-700 dark:text-gray-300 text-left">Toeic: </span>

                            <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full origin-left"
                                style={{ width: `${(Number(ProfileData.toeic) / 990) * 100}%`}}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                />
                            </div>

                            <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 text-right">
                                {ProfileData.toeic}
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}