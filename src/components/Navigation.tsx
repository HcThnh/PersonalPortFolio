import { useLocation, Link } from "react-router-dom"
import { TabsData } from "../data/TabsData"

interface NavigationProp {
    isVisible: boolean,
    onClose?: () => void,
}

export default function Navigation({ isVisible, onClose }: NavigationProp) {
    const { pathname } = useLocation();

    return (
        <nav className={`absolute top-[100%] right-0 w-full h-[calc(100svh-100%)]
        bg-gray-200/20 dark:bg-gray-900/20 backdrop-blur-md flex justify-start transition-all duration-300
        ease-in-out xl:static xl:w-auto xl:h-auto xl:bg-transparent xl:backdrop-blur-none
        xl:opacity-100 xl:pointer-events-auto
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <ul className={`flex flex-col px-4 items-start w-1/2 
            bg-[#eef2ff]/95 dark:bg-gray-900 border-r border-indigo-100 dark:border-gray-700 h-full
            transition-transform duration-300 ease-in-out
            xl:flex-row xl:items-center xl:w-auto xl:bg-transparent xl:border-r-0
            xl:translate-x-0 xl:gap-8 xl:p-0
            ${isVisible ? "translate-x-0" : "-translate-x-full"}`}>
                {TabsData.map((tab, index) => {
                    const isActive = pathname === tab.path || tab.pathHome;
                    return (
                        <li key={index} className="relative font-semibold text-gray-600 dark:text-gray-300 cursor-pointer 
                        group w-full xl:w-auto">
                            <Link 
                                to={tab.path} 
                                onClick={onClose}
                                className={`block w-full py-3 transition-colors duration-300 
                                group-hover:text-[#6D28D9] dark:group-hover:text-indigo-400
                                ${isActive ? "text-[#3730a3] dark:text-indigo-400" : ""}
                                text-left xl:text-center`}
                            >
                                {tab.title}
                            </Link>
                            
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6D28D9] dark:bg-indigo-400 transition-all 
                            duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"}
                            hidden xl:block`} />
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}