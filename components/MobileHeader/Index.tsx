import React from "react";
import { Profile } from "./Profile";

const MobileHeader = () => {
  return (
    <div className=" h-fit w-11/12 self-center rounded-full bg-card shadow-lg">
      <div className="flex p-2">
        <Profile />
      </div>
    </div>
  );
};

export default MobileHeader;
