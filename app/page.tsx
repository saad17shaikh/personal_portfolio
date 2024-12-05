import Image from "next/image";
import RightSideBar from "./components/right-sidebar";
import SectionWrapper from "./components/section-wrapper";
import { FiUser, FiUsers } from "react-icons/fi";
import { PiListChecks } from "react-icons/pi";
import LeftSidebar from "./components/left-sidebar";
import { BsBriefcase } from "react-icons/bs";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import {  FaTools } from "react-icons/fa";
import SkillsSection from "./components/skill-section";
import ContactForm from "./components/contact-form";


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

          {/* Professional Experience Section */}
          <SectionWrapper
            section_name="Experience"
            main_icon={<BsBriefcase className="text-primary" />}
          >
            <main className="space-y-7">
              <p className="text-4xl font-bold tracking-wide">
                PROFESSIONAL <span className="text-primary">EXPERIENCE</span>
              </p>
              <main className="space-y-3">
                <div className="flex justify-between border-b border-gray-500">
                  <p className="text-xl tracking-wider font-semibold text-primary">
                    SOFTWARE ENGINEER
                  </p>
                  <p className="text-sm text-primary">NOV 2023 - NOV 2024</p>
                </div>
                <p className="text-xl tracking-wider font-semibold">
                  TechlogixIT Services
                </p>
                <>
                  <div className="space-y-2">
                    <p className="font-semibold tracking-wider text-primary">
                      1. FREIGHT AUDIT MANAGEMENT SYSTEM
                    </p>
                    <ul className="space-y-1 ">
                      <li>
                        - Collaborated with a team to develop a Freight Audit
                        Processing for a client, handling complex business and
                        improving business efficiency.
                      </li>
                      <li>
                        - Contributed to frontend and backend development
                        creating RESTFUL APIs with ExpressJS. Also played a key
                        role in designing scalable and efficient database
                        structure to support seamless operations and replaced
                        the legacy system.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="tracking-wider font-semibold text-primary">
                      2. HR MANAGEMENT SYSTEM
                    </p>
                    <ul className="space-y-1">
                      <li>
                        - Developed a Saas-based HRMS product using NextJs,
                        NodeJS and PostgresSQL with prisma which replaced
                        outdated system with improved speed and added some more
                        features like overtime attendance and leave management.
                      </li>
                      <li>
                        - This application increased efficiency and user
                        adoption internally, and also generated sales by selling
                        it to other local businesses.
                      </li>
                    </ul>
                  </div>
                </>
              </main>
            </main>
          </SectionWrapper>
          <SectionWrapper
            main_icon={<FaTools className="w-4 h-4 text-primary" />}
            section_name="SKILLS"
          >
            <main className="space-y-7">
              <p className="text-4xl font-bold tracking-wide">
                MY <span className="text-primary">SKILLS</span>
              </p>
              <SkillsSection />
            </main>
          </SectionWrapper>
          {/* Projects */}
          {/* <SectionWrapper
            main_icon={<FaTasks  className="w-4 h-4 text-primary" />}
            section_name="PROJECTS"
          >
            <main className="space-y-7">
              <p className="text-4xl font-bold tracking-wide">
                PERSONAL <span className="text-primary">PROJECTS</span>
              </p>
              
            </main>
          </SectionWrapper> */}

          {/* Contact Me Form */}
          <SectionWrapper
            main_icon={<FaEnvelope className="w-4 h-4 text-primary" />}
            section_name="CONTACT ME"
          >
            <main className="space-y-7">
              <p className="text-4xl font-bold tracking-wide">
                CONTACT <span className="text-primary">ME</span>
              </p>
              <main className="">
                <ContactForm />
              </main>
              <main className="p-2 bg-white/10 rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.99640985196!2d-122.52000190459079!3d37.75780703827831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1733276092560!5m2!1sen!2sus"
                  className="w-full h-[40vh] rounded-lg"
                  loading="lazy"
                />
              </main>
            </main>
           
          </SectionWrapper>
        </section>

        {/* Right section */}
        <RightSideBar />
      </main>
    </>
  );
}
