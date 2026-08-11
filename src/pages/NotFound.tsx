import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 text-center"
                >
                    {/* Error Code */}
                    <p className="text-[120px] md:text-[160px] font-extrabold leading-none
                    bg-gradient-to-br from-[#3730a3] to-[#6d28d9] bg-clip-text text-transparent
                    select-none">
                        404
                    </p>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Trang không tồn tại
                    </h1>

                    <p className="text-gray-500 max-w-sm leading-relaxed">
                        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. 
                        Hãy quay lại trang chủ để tiếp tục.
                    </p>

                    <Link
                        to="/home"
                        className="mt-2 flex items-center gap-2 py-2.5 px-8 bg-[#3730a3]
                        text-white rounded-xl font-semibold transition-all duration-300
                        hover:bg-[#1e1b4b] hover:shadow-lg hover:shadow-[#3730a3]/30"
                    >
                        Về trang chủ
                    </Link>
                </motion.div>
            </div>
        </PageTransition>
    );
}
