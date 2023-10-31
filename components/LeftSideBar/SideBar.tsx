import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";
import OtherSkills from "./OtherSkills/Skills";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      <PersonalInfo />
      <Languages />
      <Skills />
      <OtherSkills />
    </div>
  );
};

export default LeftSidebar;
