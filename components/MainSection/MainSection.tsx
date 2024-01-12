import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/Education";
import WorkSection from "./WorkSection/Work";
import ProjectsSection from "./ProjectsSection/Projects";
import ContactSection from "./ContactSection/Contact";

const MainSection = () => {
  return (
    <div className="max-w-full space-y-20">
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default MainSection;
