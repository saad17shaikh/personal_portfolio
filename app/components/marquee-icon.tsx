import React from "react";

interface MarqueeIconProps {
  skill_name: string;
  skill_icon: React.ReactNode;
}
const MarqueeIcon = ({ skill_name, skill_icon }: MarqueeIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mx-3 lg:mx-6 h-auto">
      {skill_icon}
      <p className="text-sm text-center tracking-wide">{skill_name}</p>
    </div>
  );
};

export default MarqueeIcon;
