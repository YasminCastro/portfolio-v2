import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Languages from "./Languages/Languages";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      <PersonalInfo />
      <Languages />
    </div>
  );
};

export default LeftSidebar;
