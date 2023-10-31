import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      <PersonalInfo />
      <Languages />
      <Skills />
    </div>
  );
};

export default LeftSidebar;
