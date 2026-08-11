import { motion } from "framer-motion";

export default function SkillBar({ name, level, icon }: { name: string, level: number, icon: React.ReactNode }) {
    return (
        <div className="mb-4 flex gap-3">
            {icon}

            <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                    className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full origin-left"
                    style={{ width: `${level}%`}}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    />
                </div>
            </div>
        </div>
    )
}