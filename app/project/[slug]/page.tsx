"use client";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import image1 from "@/public/assets/laptop-program.jpg";
import React from "react";

export default function ProjectDetailPage({ params }: { params: any }) {
  // Sample projects data
  const projects = [
    {
      name: "To-do List Project",
      slug: "whado",
      date: "26-03-2000",
      description:
        "A minimalist to-do list app featuring dynamic themes and category-based UI transformations that keep users organized and motivated throughout their day.",
      image: image1,
      url: "https://to-do-list-project-two-ivory.vercel.app/",
      github: "https://github.com/GilbertOwen/whado",
    },
    {
      name: "Clone of Pinterest - Likerest",
      slug: "likerest",
      date: "26-03-2000",
      description:
        "A Pinterest-inspired image-sharing platform where users can browse, like, and save visual content into customizable boards, complete with smooth UI animations.",
      image: image1,
      url: "https://likerest.vercel.app/",
      github: "https://github.com/GilbertOwen/likerest",
    },
    {
      name: "Website of Love Confession",
      slug: "loveuprojecta",
      date: "26-03-2000",
      description:
        "An interactive web app for sharing anonymous love confessions, enhanced with reaction emojis, comment threads, and community-driven engagement features.",
      image: image1,
      url: "https://love-u-projecta.vercel.app/",
      github: "https://github.com/GilbertOwen/loveuprojecta",
    },
  ];

  // Find project by slug param
  const { slug }: { slug: string } = React.use(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Project not found.</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="w-full flex flex-col pt-24 md:pt-28 pb-12 relative gap-y-10">
        <motion.div
          initial={{ opacity: 0, x: -1400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="w-full h-[320px] md:h-[500px] relative"
        >
          <Image
            src={project.image}
            fill
            className="object-cover object-center"
            alt={project.name}
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-20 pb-12 grid grid-cols-1 gap-8">
          <div className="text-center w-fit mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="text-3xl md:text-4xl uppercase font-semibold text-[#DEAC80]"
            >
              {project.name}
            </motion.h1>
            <motion.hr
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.3 }}
              className="h-1 bg-[#B5C18E] border-none my-2"
            />
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              className="text-sm md:text-base text-[#DEAC80]"
            >
              {project.date}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.9 }}
            className="text-base md:text-lg text-[#DEAC80] mx-auto md:w-3/4 text-center"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 2.2 }}
          className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Link
            href={project.github}
            target="_blank"
            className="py-4 rounded-md text-lg font-semibold text-[#F7DCB9] bg-[#B5C18E] text-center"
          >
            View on GitHub
          </Link>

          <Link
            href={project.url}
            target="_blank"
            className="py-4 rounded-md text-lg font-semibold text-[#F7DCB9] bg-[#B5C18E] text-center"
          >
            View Live
          </Link>
        </motion.div>
      </div>
    </Fragment>
  );
}
