import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaRegUser,
  FaBug,
} from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground"
        href="#"
      >
        <FaHome className="text-xl" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground"
        href="#education"
      >
        <FaGraduationCap className="text-xl" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground"
        href="#work"
      >
        <FaBriefcase className="text-lg" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground"
        href="#projects"
      >
        <FaBug className="text-lg" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 hover:bg-primary-foreground"
        href="#contact"
      >
        <FaRegUser className="text-lg" />
      </a>
      <button className="rounded-full bg-secondary p-3 hover:bg-primary-foreground ">
        <a
          className="text-sm font-bold"
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
