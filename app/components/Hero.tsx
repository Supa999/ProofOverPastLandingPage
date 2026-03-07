"use client";
import { motion, type Variants } from "motion/react";

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.4
    },
  },
};

export default function Hero() {
  return (
    <div className="bg-black">
      <motion.section
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="bg-[url('/images/pop_no_background.png')] bg-center bg-cover w-full h-screen"
      ></motion.section>
    </div>
  );
}
