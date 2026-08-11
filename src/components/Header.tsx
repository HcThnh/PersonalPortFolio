import { CodeXml, List, Sun, Moon } from "lucide-react";
import Navigation from "./Navigation";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 left-0 w-full border-b-2 border-[#e5e4e7] dark:border-gray-700 bg-white dark:bg-gray-900 z-50 transition-colors duration-300">
            <div className="flex justify-between items-center py-3 px-4 md:px-10 xl:max-w-6xl xl:mx-auto">
                <CodeXml className="w-8 h-8 text-[#3730a3] dark:text-indigo-400"/>
                
                <Navigation isVisible={isVisible} onClose={() => setIsVisible(false)}/>

                <div className="flex gap-4 items-center">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`relative w-14 h-8 p-1 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-between ${
                            isDark ? "bg-indigo-950 border border-indigo-700" : "bg-indigo-500"
                        }`}
                        aria-label="Toggle Theme"
                    >
                        <Sun className={`w-5 h-5 text-amber-300 transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-100"}`} />
                        <Moon className={`w-5 h-5 text-indigo-200 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-40"}`} />
                        <span
                            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                                isDark ? "translate-x-6" : "translate-x-0"
                            }`}
                        />
                    </button>

                    <List className="w-8 h-8 text-[#3730a3] dark:text-indigo-400 xl:hidden cursor-pointer" 
                    onClick={() => setIsVisible(!isVisible)}/>
                </div>
            </div>
        </header>
    )
}