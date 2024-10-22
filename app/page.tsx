import Image from "next/image";
import RightSideBar from "./components/right-sidebar";
import SectionWrapper from "./components/section-wrapper";
import { FiUser } from "react-icons/fi";
import { PiListChecks } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <main className=" bg-[#0e1217] flex gap-5 w-full px-6">
        {/* Left section */}
        <aside className="h-[96vh] sticky top-5 rounded-lg bg-white/5  w-[22%] ">
          Left side section
        </aside>
        {/* Center section */}
        <section className=" min-h-screen w-full grid grid-cols-1 py-5 px-4">
          <SectionWrapper
            main_icon={<FiUser className="text-primary" />}
            section_name="INTRODUCE"
          >
            <section className="grid grid-cols-2 gap-5">
              <div className="space-y-7">
                <div className="space-y-2">
                  <p className="capitalize font-extrabold text-5xl tracking-wide">
                    I Code The
                  </p>
                  <p className="font-extrabold text-5xl tracking-wide text-primary">
                    Digital Solution
                  </p>
                </div>
                <div className="">
                  <p className="text-white/90 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam, voluptate.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="flex">
                    <PiListChecks />
                    <p className="">Open to work</p>
                  </div>
                  <div className="flex">
                    <PiListChecks />
                    <p className="text-sm">Open to work</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center h-full w-full  ">
                <Image alt="" src={"/hard-work.png"} height={250} width={250} />
              </div>
            </section>
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
