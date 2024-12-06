import React from "react";
import { BsDownload } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <aside className="h-[93vh] sticky top-5 w-[25%] lg:block hidden">
      <section className="flex flex-col space-y-5 h-full w-full rounded-lg bg-white/5 py-5 px-2">
        {/* First Section with Image Name and designation */}
        <section className="w-full flex items-center justify-center flex-col space-y-2">
          <div className="w-24 h-24 rounded-full border-2 border-primary"></div>
          <div className="space-y-1">
            <p className="text-primary font-bold tracking-wide text-center text-xl">
              Saad Shaikh
            </p>
            <p className="text-sm text-center">Web Developer</p>
          </div>
        </section>
        <hr className="border-gray-700 border w-full " />
        <section>
          <table className=" w-full  text-xs">
            <tbody className="">
              <tr className="">
                <th className="text-left py-2">Email</th>
                <td className="text-right">saadshaikh1703@gmail.com</td>
              </tr>
              <tr className="">
                <th className="py-2 text-left">Address</th>
                <td className="text-right">San Francisco, CA</td>
              </tr>
              <tr>
                <th className="py-2 text-left">Phone</th>
                <td className="text-right">+14157661924</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="w-full flex items-center justify-center px-2">
          <button className=" bg-primary text-sm w-full rounded-full py-2 font-semibold tracking-wider flex justify-center items-center gap-2 hover:bg-secondary">
            Resume <BsDownload className="w-4 h-4 font-semibold"/>
          </button>
        </section>
      </section>
    </aside>
  );
};

export default LeftSidebar;
