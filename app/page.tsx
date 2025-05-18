"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "  Gilbert Owen Portfolio";
  const speed = 100;
  const [animated, setAnimated] = useState(false);

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
    <div className="flex flex-col items-center justify-center bg-[#ECFAE5] min-h-screen gap-8">
      <div className="flex flex-col gap-8 py-6 px-10 bg-[#DDF6D2] rounded-3xl">
        <h1 className="text-center text-[#333333] font-semibold text-4xl">
          Welcome to{" "}
          <span className="text-[#FFB85F] text-border-black">
            {text || <>Gilbert Owen Portfolio</>}
          </span>
        </h1>
        {!animated ? (
          <Button
            onClick={() => setAnimated(true)}
            variant="default"
            className="bg-[#B0DB9C] text-[#fff]"
            size="lg"
          >
            Hello
          </Button>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-content-center gap-2">
            <Button asChild className="bg-[#B0DB9C]">
              <Link href={"/about-me"}>About Me</Link>
            </Button>
            <Button asChild className="bg-[#B0DB9C]">
              <Link href={"/project"}>Project</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
