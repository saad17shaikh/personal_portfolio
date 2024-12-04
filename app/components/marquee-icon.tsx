import React from "react";

interface MarqueeIconProps {
  skill_name: string;
  skill_icon: React.ReactNode;
}
const MarqueeIcon = ({ skill_name, skill_icon }: MarqueeIconProps) => {
  return (
    <div className="space-y-3 group mx-6 flex flex-col items-center justify-center">
      {skill_icon}

      <p className="text-sm text-center duration-300">{skill_name}</p>
    </div>
  );
};

export default MarqueeIcon;
