'use client'
import CTAButton from './CTAButton' 
import { TextAnimate } from '@/components/ui/text-animate'
import { motion, Variants } from 'motion/react'

const divVariants: Variants = {
  hidden: {
    opacity: 0, 
    scale: 1.2,
    filter: "blur(10px)"
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 7,
      mass: 0.3,
      delay: 0.6
    }
  }

}

export default function Header() {
  return (
    <header className="fixed inset-0 h-26 w-full bg-white flex items-center justify-between px-5 z-50">
      <section className="flex flex-col items-center flex-1/2 -space-y-2">
        <TextAnimate animation="fadeIn" by="word" as="span" className="text-2xl text-transparent [-webkit-text-stroke:2px_black] uppercase font-bold tracking-widest">
          Proof Over
        </TextAnimate >
        <motion.div variants={divVariants} initial="hidden" whileInView="whileInView"  className="text-6xl font-extrabold tracking-widest italic uppercase text-transparent bg-clip-text bg-linear-to-b from-red-400 via-red-900 to-red-400">
          Past
        </motion.div>
      </section>
      <section className="flex-1/2 flex flex-col items-end">
        <CTAButton />
      </section>
    </header>
  )
}
