"use client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect when isOpen state changes

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  return  (
    <Fragment>
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } fixed top-4 left-6 md:top-8 md:opacity-60 opacity-100 hover:opacity-100 duration-200 ease-in-out md:left-10 z-[6] p-2 bg-[#a6d990] rounded-md cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size={30} className="" color="white" />
      </div>
      <div
        className={`fixed ${
          !isOpen ? "left-[-200px] md:left-[-200px]" : "left-6 md:left-10"
        } top-4 md:top-8 md:left-10 bg-[#8fc877] w-[200px] h-fit rounded-md px-2 py-4 z-[10] transition-all duration-200 ease-in shadow-md`}
        id="sidebar"
      >
        <Link href={"/project"} onClick={()=> setIsOpen(false)} className="w-full h-full text-xl px-2 text-[#DDF6D2] font-semibold hover:text-[#a6d990] hover:bg-[#DDF6D2] rounded-md block py-2">
          Project
        </Link>
        <Link href={"/"} onClick={()=> setIsOpen(false)} className="w-full h-full text-xl px-2 text-[#DDF6D2] font-semibold hover:text-[#a6d990] hover:bg-[#DDF6D2] rounded-md block py-2">
          Main
        </Link>
      </div>
    </Fragment>
  );
}
