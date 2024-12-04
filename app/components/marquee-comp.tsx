import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueCompProps {
  title: string;
  children: React.ReactNode;
}

const MarqueeComp = ({ title, children }: MarqueCompProps) => {
  return (
    <div className="space-y-7">
      <p className="text-lg text-primary tracking-wider font-semibold border-b border-primary">{title}: </p>
      <div className="w-3/4">
        <Marquee className="w-1/2" speed={100} >
          {children}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
