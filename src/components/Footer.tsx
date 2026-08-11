import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SocialData } from "../data/SocialData";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[#e5e4e7] dark:border-gray-700 bg-white dark:bg-gray-900 py-4 w-full transition-colors duration-300">
            <div className="mx-auto flex flex-col justify-between items-start gap-4 px-4
            xl:max-w-6xl xl:mx-auto md:grid md:grid-cols-2 md:px-10">    
                <div className="flex flex-col items-center md:items-start md:justify-start md:h-full">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        <span>© {currentYear}</span>
                        <span className="text-[#3730a3] dark:text-indigo-400">Thịnh</span>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-3 md:items-end md:h-full">
                    <div className="flex gap-3">
                        {SocialData.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                className={`w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 items-start md:items-end">
                        <motion.a 
                            href="mailto:thinh.huynhhctbk22@hcmut.edu.vn" 
                            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 hover:text-[#3730a3] dark:hover:text-indigo-400 hover:border-indigo-100 hover:shadow-sm transition-all"
                            whileHover={{ scale: 1.00 }}
                        >
                            <Mail className="w-3.5 h-3.5 text-[#3730a3] dark:text-indigo-400" />
                            <span>thinh.huynhhctbk22@hcmut.edu.vn</span>
                        </motion.a>

                        <motion.div
                            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 hover:text-[#3730a3] dark:hover:text-indigo-400 hover:border-indigo-100 hover:shadow-sm transition-all"
                            whileHover={{ scale: 1.00 }}
                        >
                            <Phone className="w-3.5 h-3.5 text-[#3730a3] dark:text-indigo-400" />
                            <span>0918107087</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}