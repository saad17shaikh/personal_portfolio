import React from "react";
import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div className="">
      <Image
        alt={"social-link"}
        src={"/link.png"}
        height={20}
        width={20}
        className="cursor-pointer"
      />
      
    </div>
  );
};

export default SocialLinks;
