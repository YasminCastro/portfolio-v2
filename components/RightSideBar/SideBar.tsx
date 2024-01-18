import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaRegUser,
  FaBug,
} from "react-icons/fa";
import { ModeToggle } from "@/components/ModeToggle";

const RightSidebar = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 max-lg:space-y-5">
      <ModeToggle />
      <a
        className="rounded-full bg-secondary p-3  max-lg:p-2"
        href="#"
        aria-label="Ir para seção inicial"
      >
        <FaHome className="text-xl  max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 max-lg:p-2"
        href="#work"
        aria-label="Ir para seção de experiência"
      >
        <FaBriefcase className="text-lg max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 max-lg:p-2"
        href="#projects"
        aria-label="Ir para seção de projetos"
      >
        <FaBug className="text-lg max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 max-lg:p-2"
        href="#education"
        aria-label="Ir para seção de educação"
      >
        <FaGraduationCap className="text-xl max-lg:text-lg" />
      </a>

      <a
        className="rounded-full bg-secondary p-3 max-lg:p-2"
        href="#contact"
        aria-label="Ir para seção de contato"
      >
        <FaRegUser className="text-lg max-lg:text-base" />
      </a>
      <a
        className="rounded-full bg-secondary p-3 text-sm font-bold max-lg:p-2 max-lg:text-xs"
        href="/YasminCV-BR.pdf"
        target="_blank"
      >
        CV
      </a>
    </div>
  );
};

export default RightSidebar;
