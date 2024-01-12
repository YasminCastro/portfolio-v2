"use client";

import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";
import OtherSkills from "./OtherSkills/Skills";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  return (
    <div className="p-4">
      <ContactInfo />
      {/* <Separator />
      <PersonalInfo /> */}
      <Separator />
      <Languages />
      <Separator />
      <Skills />
      <Separator />
      <OtherSkills />
      <Separator />
      <Button className="mt-4 w-full" asChild>
        <a href="/YasminCV-BR.pdf" target="_blank">
          Download CV
        </a>
      </Button>
    </div>
  );
};

export default LeftSidebar;
