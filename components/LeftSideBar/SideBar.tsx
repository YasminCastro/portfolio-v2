"use client";

import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";
import OtherSkills from "./OtherSkills/Skills";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

const LeftSidebar = () => {
  const locale = useLocale();
  let cvPath = "/YasminCV-EN.pdf";

  if (locale === "pt") {
    cvPath = "/YasminCV-PT.pdf";
  }

  return (
    <div className="p-4">
      <ContactInfo />
      <Separator />
      <Languages />
      <Separator />
      <Skills />
      <Separator />
      <OtherSkills />
      <Separator />
      <Button className="mt-4 w-full text-white" asChild>
        <a href={cvPath} target="_blank">
          Download CV
        </a>
      </Button>
    </div>
  );
};

export default LeftSidebar;
