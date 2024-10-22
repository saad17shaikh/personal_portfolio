"use client";
import React from "react";
import Image from "next/image";

interface SideBarIconsProps {
  src: string;
  height: number;
  width: number;
  hover_text: string;
}
const SideBarIcons = ({ src, height, width }: SideBarIconsProps) => {
  return (
    <div className="relative group ">
      <Image
        alt={src}
        src={src}
        height={height}
        width={width}
        className="relative group cursor-pointer hover:scale-105 duration-200 hover:-translate-y-0.5"
      />
      <div className="px-3 py-1  absolute  top-0 right-8 text-xs rounded-lg border border-gray-600 group-hover:bg- hidden group-hover:block duration-300 uppercase bg-[#0e1217]">
        Hello
      </div>
    </div>
  );
};

export default SideBarIcons;
