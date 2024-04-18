import React from "react";
import { Profile } from "./Profile";
import { ModeToggle } from "../ModeToggle";
import { LanguageToggle } from "../LanguageToggle";

const MobileHeader = () => {
  return (
    <div className="h-fit w-11/12 self-center rounded-full bg-card shadow-lg">
      <div className="flex justify-between px-3 py-2">
        <Profile />
        <div className="flex flex-row gap-3">
          <ModeToggle />
          <LanguageToggle side="bottom" sectionId="" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
