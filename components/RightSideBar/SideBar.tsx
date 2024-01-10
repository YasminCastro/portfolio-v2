import React from "react";
import { FaHome, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center h-screen">
      <button className="bg-secondary p-3 rounded-full hover:bg-primary-foreground">
        <FaHome className="text-xl" />
      </button>

      <button className="bg-secondary p-3 rounded-full hover:bg-primary-foreground">
        <FaGraduationCap className="text-xl" />
      </button>

      <button className="bg-secondary p-3 rounded-full hover:bg-primary-foreground">
        <FaBriefcase className="text-lg" />
      </button>

      <button className="bg-secondary p-3 rounded-full hover:bg-primary-foreground ">
        <p className="text-sm font-bold">CV</p>
      </button>
    </div>
  );
};

export default RightSidebar;
