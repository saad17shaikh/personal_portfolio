import React from "react";
import MarqueeComp from "./marquee-comp";
import { FaReact } from "react-icons/fa6";
import MarqueeIcon from "./marquee-icon";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa6";
import { FaFilePowerpoint } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <main className="space-y-3">
      {/* Languages */}
      <MarqueeComp title="LANGUAGES">
        <MarqueeIcon
          skill_icon={
            <FaHtml5 className="w-16 h-16 text-orange-500 cursor-pointer" />
          }
          skill_name="JavaScript"
        />
        <MarqueeIcon
          skill_icon={
            // <FaHtml5 className="w-16 h-16 text-orange-500 cursor-pointer" />
            <Image
              src={"/python.png"}
              alt="Python Logo"
              height={58}
              width={58}
            />
          }
          skill_name="Python"
        />
      </MarqueeComp>
      {/* Frontend*/}
      <MarqueeComp title="FRONTEND">
        <MarqueeIcon
          skill_icon={
            <FaHtml5 className="w-16 h-16 text-orange-500 cursor-pointer" />
          }
          skill_name="HTML"
        />
        <MarqueeIcon
          skill_icon={
            <FaCss3Alt className="w-16 h-16 text-yellow-500 cursor-pointer" />
          }
          skill_name="CSS"
        />
        <MarqueeIcon
          skill_icon={
            <SiJavascript className="w-16 h-16 text-yellow-500 cursor-pointer" />
          }
          skill_name="JavaScript"
        />
        <MarqueeIcon
          skill_icon={
            <FaReact className="w-16 h-16 text-cyan-500 cursor-pointer" />
          }
          skill_name="React JS"
        />
        <MarqueeIcon
          skill_icon={
            <RiNextjsFill className="w-16 h-16 text-black cursor-pointer" />
          }
          skill_name="Next JS"
        />
      </MarqueeComp>
      {/* Backend */}
      <MarqueeComp title="BACKEND">
        <MarqueeIcon
          skill_icon={
            <FaNode className="w-16 h-16 text-green-600 cursor-pointer" />
          }
          skill_name="Node JS"
        />
        <MarqueeIcon
          skill_icon={
            <SiExpress className="w-16 h-16 text-white cursor-pointer" />
          }
          skill_name="Express JS"
        />
      </MarqueeComp>
      {/* DATABASE DESIGN */}
      <MarqueeComp title="DATABASE">
        <MarqueeIcon
          skill_icon={
            <SiMysql className="w-16 h-16 text-sky-600 cursor-pointer" />
          }
          skill_name="SQL"
        />
        <MarqueeIcon
          skill_icon={
            <BiLogoPostgresql className="w-16 h-16 text-blue-800 cursor-pointer" />
          }
          skill_name="PostgreSQL"
        />

        <MarqueeIcon
          skill_icon={
            <DiMongodb className="w-16 h-16 text-green-600 cursor-pointer" />
          }
          skill_name="Mongo DB"
        />
        <MarqueeIcon
          skill_icon={
            <FaDatabase className="w-16 h-16 text-white cursor-pointer" />
          }
          skill_name="Database Design"
        />
        <MarqueeIcon
          skill_icon={
            <SiPrisma className="w-16 h-16 text-purple-800 cursor-pointer" />
          }
          skill_name="Prisma ORM"
        />
        {/* <MarqueeIcon
          skill_icon={
            <FaHtml5 className="w-16 h-16 text-orange-500 cursor-pointer" />
          }
          skill_name="Mongoose"
        /> */}
      </MarqueeComp>
      {/* Other Skills */}
      <MarqueeComp title="OTHER SKILLS">
        <MarqueeIcon
          skill_icon={
            <FaEye className="w-16 h-16 text-orange-500 cursor-pointer" />
          }
          skill_name="Attention to Detail"
        />
        <MarqueeIcon
          skill_icon={
            <FaCogs className="w-16 h-16 text-orange-500 cursor-pointer" />
          }
          skill_name="Management"
        />
      </MarqueeComp>
      {/* Other Technical */}
      <MarqueeComp title="OTHER TECHNICAL SKILLS">
        <MarqueeIcon
          skill_icon={
            <FaFileWord className="w-16 h-16 text-blue-500 cursor-pointer" />
          }
          skill_name="MS Word"
        />
        <MarqueeIcon
          skill_icon={
            <FaFileExcel className="w-16 h-16 text-green-500 cursor-pointer" />
          }
          skill_name="MS Excel"
        />
        <MarqueeIcon
          skill_icon={
            <FaFilePowerpoint className="w-16 h-16 text-yellow-700 cursor-pointer" />
          }
          skill_name="MS Powerpoint"
        />
      </MarqueeComp>
    </main>
  );
};

export default SkillsSection;
