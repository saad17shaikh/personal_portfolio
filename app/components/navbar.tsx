"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Personal Details", href: "#personal-details" },
    { name: "Introduction", href: "#introduction" },
    { name: "About Me", href: "#about-me" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  //
  // Breakpoint prefix	Minimum width	CSS
  // sm	640px	@media (min-width: 640px) { ... }
  // md	768px	@media (min-width: 768px) { ... }
  // lg	1024px	@media (min-width: 1024px) { ... }
  // xl	1280px	@media (min-width: 1280px) { ... }
  // 2xl	1536px	@media (min-width: 1536px) { ... }

  return (
    <>
      <nav className="lg:hidden lg:py-6 md:py-4 py-4 sticky top-0 w-full bg-[#0e1217] z-50 text-primary">
        <section className="h-full w-full flex lg:px-10 md:px-8 px-4 items-center justify-between">
          <p>SS</p>
          <div className="hidden lg:block">
            <ul className="md:flex  lg:gap-x-4 md:gap-x-2 hidden">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm tracking-wider hover:text-primary cursor-pointer duration-200 text-primary hover:bg-primary/10 p-2 rounded-md lg:px-3 md:px-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <BiMenu className="w-6 h-6" />
              ) : (
                <BiX className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Mobile Navigation */}
          <section
            className={`${
              isOpen
                ? "bg-[#0e1217] absolute top-[0rem] left-0 w-full h-[60vh] duration-300 translate-y-0 transition-all px-2 py-3 space-y-5"
                : "-translate-y-full duration-300 transition-all top-0 left-0 w-full absolute bg-[#0e1217] h-72"
            }`}
          >
            <div className="w-full flex justify-between items-center px-2">
              <p className="text-xl font-bold">SS</p>
              <button onClick={() => setIsOpen(!isOpen)}>
                <BiX className="w-6 h-6" />
              </button>
            </div>
            <div>
              <ul className="text-center space-y-3 mt-5">
                {navigation.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm tracking-wider hover:text-primary cursor-pointer duration-200 text-primary hover:bg-primary/10 p-2 rounded-md px-3"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
