import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaRegUser,
  FaBug,
} from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 max-lg:space-y-5">
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground  max-lg:p-2"
        href="#"
      >
        <FaHome className="text-xl  max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground max-lg:p-2"
        href="#education"
      >
        <FaGraduationCap className="text-xl max-lg:text-lg" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground max-lg:p-2"
        href="#work"
      >
        <FaBriefcase className="text-lg max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground max-lg:p-2"
        href="#projects"
      >
        <FaBug className="text-lg max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground max-lg:p-2"
        href="#contact"
      >
        <FaRegUser className="text-lg max-lg:text-base" />
      </a>
      <button className="rounded-full bg-secondary p-3 hover:bg-primary-foreground max-lg:p-2 ">
        <a
          className="text-sm font-bold max-lg:text-xs"
          href="/YasminCV-BR.pdf"
          target="_blank"
        >
          CV
        </a>
      </button>
    </div>
  );
};

export default RightSidebar;
