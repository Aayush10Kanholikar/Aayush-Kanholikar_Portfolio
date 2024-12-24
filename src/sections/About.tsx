"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WobbleCard } from "../components/ui/wobble-card";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/javascript.a9594db4.svg",
  },
  {
    title: "HTML5",
    iconType: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
  },
  {
    title: "CSS3",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/css.18344ad1.svg",
  },

  {
    title: "React",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/react.d60a0182.svg",
  },

  {
    title: "GitHub",
    iconType: "	https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
  },
  {
    title: "Java",
    iconType: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
  {
    title: "MySQL",
    iconType: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
  },
  {
    title: "MongoDB",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/mongodb.47f680af.svg",
  },
  {
    title: "Linux",
    iconType: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png",
  },
  {
    title: "Next.js",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/next-js.e54be70c.svg",
  },
  {
    title: "Node.js",
    iconType:
      "	https://premkhodke.vercel.app/_next/static/media/nodejs.59c53601.svg",
  },
  {
    title: "Express.js",
    iconType:
      "	https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    title: "TypeScript",
    iconType:
      "	https://premkhodke.vercel.app/_next/static/media/typescript.27df170d.svg",
  },
  {
    title: "Tailwind CSS",
    iconType:
      "	https://premkhodke.vercel.app/_next/static/media/tailwindcss.566567ff.svg",
  },

  {
    title: "Postman",
    iconType:
      "https://premkhodke.vercel.app/_next/static/media/postman.293fd8fc.svg",
  },
  {
    title: "Selenium",
    iconType:
      "https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png",
  },
];

const hobbies = [
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Drawing",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },

  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },

  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

const variants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
    },
  },
};

export const AboutSection = () => {
  const constraintRef = useRef(null);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { margin: "50px" });
  const isInView2 = useInView(ref2, { margin: "75px" });
  const isInView3 = useInView(ref3, { margin: "100px" });

  return (
    <div id="about" className=" pb-40 md:pb-52 lg:pb-52">
      <div className="container">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="border-t border-white/15 "
        >
          <SectionHeader
            title="About Me"
            description="Enthusiastic Software Developer with a strong foundation in Java programming language, Web Development Technologies, and Software Testing. "
          />
        </motion.div>

        <div className="mt-20 flex flex-col gap-8">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3  "
          >
            <WobbleCard containerClassName="col-span-1  h-[350px] lg:col-span-3 bg-gray-900 p-0 ">
              <Card className="w-full h-full  md:col-span-1 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description=" Exlore the technologies I used to craft my projects."
                  className="text-3xl"
                />

                <ToolboxItems
                  items={toolboxItems}
                  className="  "
                  ItemsWrapperClassName="animate-move-left [animation-duration:60s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 "
                  ItemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
                />
              </Card>
            </WobbleCard>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-5"
          >
            <WobbleCard containerClassName="md:col-span-2  h-[320px] lg:col-span-2 bg-gray-900  p-0 ">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description=" Explore my Interest and Hobbies"
                  className="px-6 py-6 text-2xl"
                />

                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </WobbleCard>
            <WobbleCard containerClassName="md:col-span-3  h-[320px] lg:col-span-3  p-0 ">
              <Card className="h-[320px] p-0 relative md:col-span-3 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full   after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 inset-0 rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 inset-0 rounded-full -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="Smiling Emoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </WobbleCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
