import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Marquee } from "@/components/ui/marquee";

type InfoProps = {
  title: string;
  icon: string;
};

const info: Array<InfoProps> = [
  { title: "SWE", icon: "💻" },
  { title: "Construction", icon: "👷" },
  { title: "Military", icon: "🪖" },
  { title: "Teaching", icon: "📚" },
  { title: "Mechanic", icon: "🚗" },
  { title: "Painting", icon: "🎨" },
  { title: "Sports", icon: "🏈" },
];

const firstHalf = info.slice(0, info.length / 2);
const secondHalf = info.slice(info.length / 2);

export default function Pathways() {
  return (
    <section className="bg-black py-20 px-6 text-white border-2 border-black">
      <div className="mb-14">
        <TextAnimate
          animation="slideRight"
          as="h2"
          className="font-heading text-5xl md:text-7xl font-black uppercase italic tracking-tighter"
        >
          Programs & Opportunities
        </TextAnimate>
        <div className="h-1 w-20 bg-red-600 mt-4 shadow-xl shadow-white"></div>
      </div>

      <div className="overflow-x-hidden">
        <Marquee className="[--duration:20s]">
          {firstHalf.map((infoItem, index) => {
            return(
                <div className="bg-linear-to-br from-red-900 to-black p-1 rounded-2xl" key={index}>
                  <div className="h-22 w-50 bg-black rounded-2xl px-4 py-2 flex flex-col items-center justify-center">
                    <h3 className="text-3xl text-center">{infoItem.title}</h3>
                    <p className="text-5xl">{infoItem.icon}</p>
                  </div>
                </div>
            )
          })}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondHalf.map((infoItem, index) => {
            return(
                <div className="bg-linear-to-br from-red-900 to-black p-1 rounded-2xl" key={index}>
                  <div className="h-20 w-50 bg-black rounded-2xl px-4 py-2 flex flex-col items-center justify-center">
                    <h3 className="text-3xl text-center">{infoItem.title}</h3>
                    <p className="text-3xl">{infoItem.icon}</p>
                  </div>
                </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  );
}
