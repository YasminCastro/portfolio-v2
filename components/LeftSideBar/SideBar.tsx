import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";
import OtherSkills from "./OtherSkills/Skills";
import { Separator } from "@/components/ui/separator";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      <Separator />
      <PersonalInfo />
      <Separator />
      <Languages />
      <Separator />
      <Skills />
      <Separator />
      <OtherSkills />
    </div>
  );
};

export default LeftSidebar;
