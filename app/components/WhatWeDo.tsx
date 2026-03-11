'use client'
import React from 'react';
import { TextAnimate } from '@/components/ui/text-animate'
import { motion, Variants } from 'motion/react'

const containerVariants: Variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
  }
}

const slideLeft: Variants = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1, 
    x: 0, 
    transition: {duration: 1.5}},
}

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5
    }
  }
}

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 text-white border-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <TextAnimate animation="slideLeft" as="h2" className="font-heading text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            What Are We?
          </TextAnimate>
          <div className="h-2 w-24 bg-red-600 mt-4"></div>
        </div>

        {/* Bento Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: false}} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Main Mission Card - Spans 2 columns */}
          <motion.div className="md:col-span-2 row-span-1 bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-end group hover:border-red-600 transition-colors" variants={slideLeft} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.2}}>
            <h3 className="font-heading text-3xl mb-2">THE MISSION</h3>
            <p className="font-sans text-zinc-400 leading-relaxed">
              Proof Over Past takes pride in giving troubled youth opportunities to change their lives. 
              We introduce them to hobbies and careers that set them up for long-term success.
            </p>
          </motion.div>

          {/* Action Card - Small */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.2}} className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
            <span className="text-5xl mb-4">🚀</span>
            <h3 className="font-heading text-2xl uppercase">Career Paths</h3>
          </motion.div>

          {/* Impact Card - Small */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.2}} className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
            <span className="text-5xl mb-4">🤝</span>
            <h3 className="font-heading text-2xl uppercase">Mentorship</h3>
          </motion.div>

          {/* Community Card - Spans 2 columns */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.2}} className="md:col-span-2 bg-linear-to-br from-red-900 to-black border border-zinc-800 p-8 flex flex-col justify-center">
            <h3 className="font-heading text-3xl mb-2 italic">RISE ANYWAY</h3>
            <p className="font-sans text-zinc-200">
              It&apos;s not about where you&apos;ve been. It&apos;s about the proof you create today. 
              Join a community that refuses to be defined by the past.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}