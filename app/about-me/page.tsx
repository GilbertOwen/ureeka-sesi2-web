"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export default function About() {
  const [text, setText] = useState("");
  const fullText = "  Gilbert Owen Portfolio";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
  }, []);
  return (
    <div className="bg-[#f8e5cd] min-h-screen grid lg:grid-cols-2 px-4 py-4 md:px-8 md:py-4 lg:px-14 lg:py-10 gap-14">
      <div className="flex flex-col gap-6 py-8 px-10 bg-[#DDF6D2] border-2 h-fit my-auto rounded-3xl shadow-lg hover:translate-y-[-5px] transition-all duration-150 cursor-grab select-none">
        <h2 className="text-4xl font-extrabold text-[#333333]">
          Hi, I'm Gilbert Owen
        </h2>
        <p className="text-lg leading-relaxed text-[#333333]">
          I'm a full-stack developer who loves building intuitive web
          experiences. Recently, I've been diving into Next.js, Tailwind CSS,
          and modern React patterns. When I'm not coding you can find me
          exploring mountain trails with my camera in hand.
        </p>
        <ul className="list-disc list-inside text-[#333333] space-y-1">
          <li>JavaScript, TypeScript & React</li>
          <li>Node.js, Express & Serverless</li>
          <li>Laravel & PHP</li>
          <li>Photography & UI design</li>
        </ul>
        <p className="opacity-30">Just a button</p>
        <Button
          className="self-start bg-[#B0DB9C] text-white hover:bg-[#A0C985]"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Download Resume
        </Button>
      </div>

      {/* ← RIGHT PANEL */}
      <div className="flex flex-col gap-4 py-6 px-10 bg-[#DDF6D2] h-full justify-between border-2 rounded-3xl items-center">
        <Image
          src={"/image-portfolio.jpg"}
          width={1920}
          height={1080}
          className="object-cover w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full"
          alt="Gilbert Owen"
        />
        <div
          id="social-media"
          className="flex flex-col gap-4 h-full w-full text-center"
        >
          <h3 className="text-3xl font-medium text-[#333333]">
            Let's Connect!
          </h3>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col h-full sm:border-r-2 pr-2 border-black w-full">
              <h1 className="mb-2 font-semibold text-xl text-left">Social Media</h1>
              <div className="flex flex-col gap-2">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://www.linkedin.com/in/gilbert-owen-33a65029a/"
                >
                  <FaLinkedin size={32} />{" "}
                  <span className="text-md font-bold">LinkedIn</span>
                </Link>
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://www.instagram.com/gib_tyx/"
                >
                  <FaSquareInstagram size={32} />{" "}
                  <span className="text-md font-bold">Instagram</span>
                </Link>
                {/* <Link
                  className="flex flex-row items-center gap-2"
                  href="https://www.linkedin.com/in/gilbert-owen/"
                >
                  <FaLinkedin size={36} />{" "}
                  <span className="text-lg font-bold">LinkedIn</span>
                </Link> */}
              </div>
            </div>
            <div className="flex flex-col h-full md:pl-2 sm:mt-0 mt-2 sm:border-l-2 border-black w-full">
              <h1 className="mb-2 font-semibold text-xl text-left sm:text-right">Contact</h1>
              <div className="flex flex-col gap-2 sm:items-end">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-sm">gilbert.owen@example.com</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-sm">+1 (555) 123-4567</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-sm">San Francisco, CA</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Link
                    href="https://github.com/yourusername"
                    className="text-sm hover:underline"
                  >
                    github.com/yourusername
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
