import React from "react";
// import { FaPaperclip } from "react-icons/fa6";
import SideBarIcons from "./sidebar-icons";
// import SocialLinks from "./social-link";

const RightSideBar = () => {
  return (
    <aside className="h-[96vh] rounded-lg  sticky top-5  w-[9%] my-3 lg:block hidden">
      <section className="bg-transparent border border-gray-700 rounded-full flex items-center justify-center flex-col py-5 w-full space-y-10">
        <div className="p-4 border-2 border-primary rounded-full flex items-center justify-center ">
          <span className="text-sm font-extrabold tracking-widest ">SS</span>
        </div>
        <div className="flex flex-col space-y-6">
          <SideBarIcons
            src="/house.png"
            height={22}
            width={22}
            hover_text="Home"
            link_id="introduction"
          />
          <SideBarIcons
            src="/programmer.png"
            height={25}
            width={25}
            hover_text="About"
            link_id="about-me"
          />
          <SideBarIcons
            src="/skill.png"
            height={25}
            width={25}
            hover_text="Experience"
            link_id="experience"
          />
          <SideBarIcons
            src="/working.png"
            height={22}
            width={22}
            hover_text="Skills"
            link_id="skills"
          />
          {/* <SideBarIcons
            src="/work-2.png"
            height={22}
            width={22}
            hover_text="Projects"
            link_id="introduction"
          /> */}
          <SideBarIcons
            src="/programmer.png"
            height={25}
            width={25}
            hover_text="Contact"
            link_id="contact"
          />
          {/* <SideBarIcons
            src="/skill.png"
            height={25}
            width={25}
            hover_text="Home"
          />
          <SideBarIcons
            src="/working.png"
            height={22}
            width={22}
            hover_text="Home"
          />
          <SideBarIcons
            src="/work-2.png"
            height={22}
            width={22}
            hover_text="Home"
          /> */}
        </div>
        {/* <div className=" rounded-full border border-gray-700 flex items-center justify-center p-3">
          <SocialLinks />
        </div> */}
      </section>
    </aside>
  );
};

export default RightSideBar;
