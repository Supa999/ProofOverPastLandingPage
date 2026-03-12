"use client";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, Variants, stagger } from "motion/react";

type CardsType = {
  number: string;
  title: string;
  desc: string;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.3),
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
};

const cards: Array<CardsType> = [
  {
    number: "01",
    title: "Connect",
    desc: "Reach out via text or email. No gatekeeping. No Judgement",
  },
  {
    number: "02",
    title: "Explore",
    desc: "Get hands-on experience in any field we offer.",
  },
  {
    number: "03",
    title: "Execute",
    desc: "Build your portfolio, gain certifications, and rewrite your narrative",
  },
];

function renderCards() {
  return cards.map((card) => {
    return (
      <motion.div
        key={card.title}
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Card className="bg-black px-4">
          <CardTitle>
            <span className="text-5xl font-extrabold tracking-widest italic text-red-900 [text-stroke:2px_white] [-webkit-text-stroke:2px_white]">
              {card.number}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-red-400 to-red-900 to-70% text-5xl font-extrabold tracking-widest italic">
              {card.title}
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400 text-2xl italic tracking-wide leading-10">
            {card.desc}
          </CardDescription>
        </Card>
      </motion.div>
    );
  });
}

export default function HowSection() {
  return (
    <section className="text-white py-20 px-6 my-30">
      <div className="mb-14">
        <TextAnimate
          animation="slideRight"
          as="h2"
          className="font-heading text-5xl md:text-7xl font-black uppercase italic tracking-tighter"
        >
          The How
        </TextAnimate>
        <div className="h-1 w-20 bg-red-600 mt-4"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-start gap-10"
      >
        {renderCards()}
      </motion.div>
    </section>
  );
}
