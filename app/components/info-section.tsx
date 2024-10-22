import React from "react";
// import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const InfoSection = () => {
  return (
    <main className="min-h-[95vh] bg-white/5 rounded-lg py-12 px-8">
      <section className="w-fit rounded-3xl flex gap-2 p-2 px-6 items-center justify-center border border-gray-700">
        <FiUser />
        <span className="text-xs">INTRODUCE</span>
      </section>
    </main>
  );
};

export default InfoSection;
