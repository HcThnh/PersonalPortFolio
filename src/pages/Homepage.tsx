import Header from "../components/Header";
import { Download } from "lucide-react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import Footer from "../components/Footer";

export default function Homepage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header/>

            <main className="my-8 flex flex-col items-start gap-4 px-4 md:px-10
            xl:max-w-6xl xl:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="m-0 text-3xl font-bold text-gray-900 dark:text-white">
                            Xin chào, tôi là <span className="text-[#3730a3] dark:text-indigo-400">Thịnh</span>
                        </h1>

                        <h2 className="text-left font-semibold text-xl text-gray-700 dark:text-gray-300">
                            Frontend Developer Intern
                        </h2>

                        <p className="text-left text-gray-600 dark:text-gray-400">
                            Tôi là một lập trình viên Frontend đam mê xây dựng giao diện web mượt mà, 
                            tối ưu trải nghiệm người dùng và biến ý tưởng thiết kế thành các sản phẩm 
                            thực tế.
                        </p>

                        <a className="flex items-center gap-3 py-2 px-6 border-2
                        rounded-xl border-[#3730a3] dark:border-indigo-500 font-semibold my-2 cursor-pointer
                        text-[#3730A3] dark:text-indigo-400 transition-all duration-300
                        hover:bg-[#3730A3] dark:hover:bg-indigo-600
                        hover:text-white hover:shadow-lg hover:shadow-[#3730A3]/30 w-fit"
                        href="/Huynh_Canh_Thinh.pdf"
                        download="/Huynh_Canh_Thinh.pdf">
                            CV của tôi <Download/>
                        </a>

                        <p className="text-left font-semibold text-[#3730a3] dark:text-indigo-400">
                            Công nghệ
                        </p>

                        <div className="flex gap-6">
                            <FaReact className="w-6 h-6 text-[#61dafb]" />
                            <FaHtml5 className="w-6 h-6 text-[#e34f26]" />
                            <FaCss3 className="w-6 h-6 text-[#1572b6]" />
                            <SiTailwindcss className="w-6 h-6 text-[#38bdf8]" />
                            <SiJavascript className="w-6 h-6 text-[#f7df1e]" />
                            <SiTypescript className="w-6 h-6 text-[#3178c6]" />
                        </div>
                    </div>

                    <div className="md:flex items-center justify-center hidden">
                        <img src="/avatar.webp" alt="avatar" 
                        className="w-48 xl:w-64 h-48 xl:h-64 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900" 
                        width={128} height={128}
                        loading="lazy"
                        decoding="async"/>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}