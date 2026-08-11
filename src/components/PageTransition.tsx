import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 24,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.38,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: {
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function PageTransition({ children }: Props) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
