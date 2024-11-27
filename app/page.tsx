import Image from "next/image";
import RightSideBar from "./components/right-sidebar";
import SectionWrapper from "./components/section-wrapper";
import { FiUser, FiUsers } from "react-icons/fi";
import { PiListChecks } from "react-icons/pi";
import LeftSidebar from "./components/left-sidebar";
import { BsDownload } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main className=" bg-[#0e1217] flex gap-5 w-full px-6">
        {/* Left section */}
        <LeftSidebar />
        {/* Center section */}
        <section className=" min-h-screen w-full grid grid-cols-1 py-5 px-4 space-y-4">
          {/* IntroSection */}
          <SectionWrapper
            main_icon={<FiUser className="text-primary" />}
            section_name="INTRODUCTION"
          >
            <section className="grid grid-cols-2 gap-5">
              <div className="space-y-7">
                <div className="space-y-3">
                  <p className="capitalize font-extrabold text-5xl tracking-wide">
                    I Code The
                  </p>
                  <p className="font-extrabold text-5xl tracking-wide text-primary">
                    Digital Solution
                  </p>
                </div>
                <div className="">
                  <p className="text-white/90 ">
                    Hi, I am a skilled Software Engineer with 1 year of
                    experience in designing and developing scalable web
                    applications.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center justify-center gap-2">
                    <PiListChecks className="text-primary" />
                    <p className="text-sm tracking-wide">Open to work</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <PiListChecks className="text-primary" />
                    <p className="text-sm tracking-wide">Immediate Joining</p>
                  </div>
                </div>

                <div>
                  <button className=" bg-primary  px-10 rounded-full py-3 font-semibold tracking-wider flex justify-center items-center gap-2 hover:bg-secondary">
                    Hire Me{" "}
                    <FaLocationArrow className="w-5 h-5 font-semibold " />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center h-full w-full relative ">
                <Image
                  alt=""
                  src={"/image02.jpg"}
                  fill
                  className="rounded-lg"
                />
              </div>
            </section>
          </SectionWrapper>

          {/* About Section */}
          <SectionWrapper
            main_icon={<FiUsers className="text-primary" />}
            section_name="ABOUT ME"
          >
            <main className="space-y-7">
              <p className="text-4xl font-bold tracking-wide">
                ABOUT <span className="text-primary">ME</span>
              </p>
              <div className="pr-3">
                <p className="tracking-wider">
                  Hi 👋, My name is{" "}
                  <span className="font-semibold ">Saad Shaikh,</span> I am a
                  skilled Software Engineer with 1 year of experience in
                  designing and developing scalable web applications. Proficient
                  in building complex systems using modern JavaScript
                  technologies such as React, NextJS, ExpressJS and NodeJS. With
                  experience in creating efficient, user-focused solutions that
                  modernize processes and deliver high performance applications
                  to the clients.
                </p>
              </div>
              <div className="flex gap-x-3">
                <div className="rounded-full border p-2 px-4 border-gray-600 text-sm tracking-wider">
                  JavaScript
                </div>
                <div className="rounded-full border p-2 px-4 border-gray-600 text-sm tracking-wider">
                  React JS
                </div>
                <div className="rounded-full border p-2 px-4 border-gray-600 text-sm tracking-wider">
                  Next JS
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-3">
                <div className="space-y-2">
                  <p className="font-bold text-3xl text-primary">1+</p>
                  <p>Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-3xl text-primary">5+</p>
                  <p>Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-3xl text-primary">1+</p>
                  <p>Years of Experience</p>
                </div>
              </div>
            </main>
          </SectionWrapper>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
        </section>
        {/* Right section */}
        {/* <aside className="h-[96vh] rounded-lg  sticky top-3 bg-gray-700 w-[8%] my-3">
          Left side section
        </aside> */}
        <RightSideBar />
      </main>
    </>
  );
}
