import React from 'react'
import { motion, Variants } from "motion/react"

const buttonVariants: Variants ={
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible:{
    opacity: 1,
    x: 0,
    transition:{
      type: "spring",
      stiffness: 150,
      damping: 10,
      mass: 0.3,
      delay: 1.2
    }
  }
}

export default function CTAButton() {
  return (
    <motion.section variants={buttonVariants} initial="hidden" animate="visible" className="bg-linear-to-br from-red-400 via-red-900 to-red-400 rounded-2xl p-1 w-fit">
      <button className="text-2xl bg-white rounded-2xl px-3 py-2"><span className="text-transparent bg-clip-text bg-linear-to-b from-red-400 to-red-900 font-bold">Sign Up</span></button>
    </motion.section>
  )
}
