import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, Calendar, Mars, MapPinHouse, GraduationCap, Briefcase } from "lucide-react";
import { ProfileData } from "../data/ProfileData";

export default function Profile() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header/>

            <div className="flex flex-col items-center py-6 w-full bg-[#3730a3] dark:bg-indigo-900
            rounded-b-3xl gap-4 xl:hidden">
                <h1 className="text-white text-3xl font-semibold">Hồ sơ</h1>

                <img src="/avatar.webp" alt="avatar" 
                className="w-32 h-32 rounded-full ring-4 ring-indigo-300/40"
                width={256} height={256}
                loading="lazy"
                decoding="async"/>

                <p className="text-white text-xl font-semibold">Huỳnh Cảnh Thịnh</p>
            </div>

            <main className="mb-8 mt-2 xl:mt-8 gap-4
            xl:max-w-6xl xl:mx-auto grid grid-cols-1 xl:grid-cols-[2fr_3fr]">
                <div className="flex flex-col items-start gap-4 px-4 xl:px-10">
                    <section className="flex gap-4 py-6 w-full border-b-2 border-gray-200 dark:border-gray-700">
                        <Mail className="w-6 h-6 text-[#3730a3] dark:text-indigo-400"/>

                        <div className="flex flex-col items-start gap-1">
                            <p className="text-gray-500 dark:text-gray-400">Email</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{ProfileData.email}</p>
                        </div>
                    </section>

                    <section className="flex gap-4 py-6 w-full border-b-2 border-gray-200 dark:border-gray-700">
                        <Phone className="w-6 h-6 text-[#3730a3] dark:text-indigo-400"/>

                        <div className="flex flex-col items-start gap-1">
                            <p className="text-gray-500 dark:text-gray-400">Số điện thoại</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{ProfileData.phoneNumber}</p>
                        </div>
                    </section>

                    <section className="flex gap-4 py-6 w-full border-b-2 border-gray-200 dark:border-gray-700">
                        <Calendar className="w-6 h-6 text-[#3730a3] dark:text-indigo-400"/>

                        <div className="flex flex-col items-start gap-1">
                            <p className="text-gray-500 dark:text-gray-400">Ngày sinh</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{ProfileData.dob}</p>
                        </div>
                    </section>

                    <section className="flex gap-4 py-6 w-full border-b-2 border-gray-200 dark:border-gray-700">
                        <Mars className="w-6 h-6 text-[#3730a3] dark:text-indigo-400"/>

                        <div className="flex flex-col items-start gap-1">
                            <p className="text-gray-500 dark:text-gray-400">Giới tính</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-100">{ProfileData.gender}</p>
                        </div>
                    </section>

                    <section className="flex gap-4 py-6 w-full border-b-2 border-gray-200 dark:border-gray-700">
                        <MapPinHouse className="w-6 h-6 text-[#3730a3] dark:text-indigo-400"/>

                        <div className="flex flex-col items-start gap-1">
                            <p className="text-gray-500 dark:text-gray-400">Địa chỉ</p>
                            <p className="font-semibold text-left text-gray-800 dark:text-gray-100">{ProfileData.address}</p>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col items-start gap-4 px-4 xl:px-10">
                    <section className="flex flex-col gap-4 py-4 w-full border-2 border-[#3730a3] dark:border-indigo-700
                    rounded-xl px-4 my-2 bg-white dark:bg-gray-800">
                        <p className="text-[#3730a3] dark:text-indigo-400 text-lg font-semibold">
                            Mục tiêu nghề nghiệp
                        </p>

                        <p className="text-left text-gray-700 dark:text-gray-300">
                            Áp dụng kiến thức chuyên môn về React.js, HTML/CSS và JavaScript 
                            để xây dựng các giao diện web tối ưu, mượt mà. 
                            Trong ngắn hạn, tôi mong muốn học hỏi kinh nghiệm thực tế từ các 
                            dự án tại công ty. Mục tiêu dài hạn là trở thành 
                            Lập trình viên Frontend chủ lực, đóng góp tích cực vào chất lượng 
                            sản phẩm.
                        </p>
                    </section>

                    <section className="flex flex-col gap-4 py-4 w-full border-2 border-[#3730a3] dark:border-indigo-700
                    rounded-xl px-4 my-2 bg-white dark:bg-gray-800">
                        <div className="flex items-center gap-2 text-[#3730a3] dark:text-indigo-400 text-lg font-semibold border-b border-indigo-100 dark:border-indigo-800 pb-2">
                            <GraduationCap className="w-6 h-6" />
                            <span>Học vấn</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between items-start gap-2 w-full text-left">
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-gray-800 dark:text-gray-100 text-base">
                                    {ProfileData.education.school}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Chuyên ngành: <span className="font-semibold text-gray-800 dark:text-gray-200">{ProfileData.education.major}</span>
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    GPA: <span className="font-semibold text-gray-800 dark:text-gray-200">{ProfileData.education.gpa}</span>
                                </p>
                            </div>
                            <p className="text-sm text-[#3730a3] dark:text-indigo-400 font-semibold md:self-start md:text-right shrink-0 bg-indigo-50 dark:bg-indigo-900/50 px-3 py-1 rounded-full">
                                {ProfileData.education.startDate} – {ProfileData.education.endDate}
                            </p>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 py-4 w-full border-2 border-[#3730a3] dark:border-indigo-700
                    rounded-xl px-4 my-2 bg-white dark:bg-gray-800">
                        <div className="flex items-center gap-2 text-[#3730a3] dark:text-indigo-400 text-lg font-semibold border-b border-indigo-100 dark:border-indigo-800 pb-2">
                            <Briefcase className="w-6 h-6" />
                            <span>Kinh nghiệm làm việc</span>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            {ProfileData.experience.map((exp, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:justify-between items-start gap-3 w-full text-left border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <p className="font-semibold text-gray-800 dark:text-gray-100 text-base">
                                            {exp.role}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                            {exp.company}
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-sm text-[#3730a3] dark:text-indigo-400 font-semibold md:self-start md:text-right shrink-0 bg-indigo-50 dark:bg-indigo-900/50 px-3 py-1 rounded-full">
                                        {exp.startDate} – {exp.endDate}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>            
            </main>
            
            <Footer/>
        </div>
    )
}