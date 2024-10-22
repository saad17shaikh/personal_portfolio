import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  main_icon: React.ReactNode;
  section_name: string;
}

const SectionWrapper = ({
  children,
  main_icon,
  section_name,
}: SectionWrapperProps) => {
  return (
    <main className="min-h-[95vh] bg-white/5 rounded-lg py-12 px-8 space-y-5">
      <section className="w-fit rounded-3xl flex gap-2 p-2 px-6 items-center justify-center border border-gray-700">
        {main_icon}
        <span className="text-xs">{section_name}</span>
      </section>
      <div>{children}</div>
    </main>
  );
};

export default SectionWrapper;
