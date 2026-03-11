'use client'
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

function copyEmail() {
  navigator.clipboard.writeText("johndoe@gmail.com");
  alert("Email Copied!");
}

export default function CTASection() {
  return (
    <section className="text-white py-20 px-6 my-30" id='contact-section'>
      <div className="mb-14">
        <TextAnimate
          animation="slideRight"
          as="h2"
          className="font-heading text-5xl md:text-7xl font-black uppercase italic tracking-tighter"
        >
          Reach Out
        </TextAnimate>
        <div className="h-1 w-20 bg-red-600 mt-4"></div>
      </div>
      <Card className="relative bg-black border-0 text-white">
        <ShineBorder shineColor={["red", "white", "red"]} />
        <CardHeader>
          <CardTitle className="font-extrabold text-4xl italic tracking-widest">
            Lets Connect
          </CardTitle>
          <CardDescription className="text-gray-300 text-xl">
            Ready to turn your life around? Lets get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <address className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold tracking-wide">Text Me:</h3>
              <a href="sms:+19096970387" className="text-2xl font-bold tracking-widest" >909-697-0387</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-4xl font-bold tracking-wide">Email Me:</h3>
              <a href="mailto:kevinasteele@icloud.com" className="text-2xl font-bold tracking-widest">johndoe@gmail.com</a>
              <button className="text-2xl ring-2 rounded-2xl px-2 py-1 font-bold tracking-wide" onClick={() => copyEmail()}>Copy Email</button>
            </div>
          </address>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
}
