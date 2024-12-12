import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueCompProps {
  title: string;
  children: React.ReactNode;
}

const MarqueeComp = ({ title, children }: MarqueCompProps) => {
  return (
    <div className="space-y-7  py-2">
      <p className="text-lg text-primary tracking-wider font-semibold border-b border-primary">
        {title}:{" "}
      </p>
      <div className="lg:w-3/4 ">
        <Marquee className="min-h-28" speed={100}>
          {children}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
