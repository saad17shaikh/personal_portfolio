import React from "react";

interface MarqueeIconProps {
  skill_name: string;
  skill_icon: React.ReactNode;
}
const MarqueeIcon = ({ skill_name, skill_icon }: MarqueeIconProps) => {
  return (
    <div className="space-y-3 mx-3 lg:mx-6 flex flex-col items-center justify-center h-20">
      {skill_icon}

      <p className="text-sm text-center duration-300">{skill_name}</p>
    </div>
  );
};

export default MarqueeIcon;
