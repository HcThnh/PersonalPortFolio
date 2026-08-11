import { CircleCheckBig } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    isVisible: boolean;
    message: string;
}

export default function Success ({message, isVisible}: Props) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial = {{ opacity: 0, x: 100 }}
                    animate = {{ opacity: 1, x: 0 }}
                    exit = {{ opacity: 0, x: 100 }}
                    transition = {{ duration: 0.3, ease: "easeInOut" }}
                    className = "py-6 px-12 bg-emerald-400 rounded-md absolute text-white font-semibold flex items-center gap-2 top-1/8 right-8 z-50 shadow-lg"
                >
                    {message}
                    <CircleCheckBig/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
