import React from "react";
import { FaHome } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const RightSidebar = () => {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center h-screen">
      <button>
        <FaHome />
      </button>
      <button>
        <MdSchool />
      </button>
    </div>
  );
};

export default RightSidebar;
