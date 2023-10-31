import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      <PersonalInfo />
    </div>
  );
};

export default LeftSidebar;
