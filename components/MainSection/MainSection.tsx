import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/Education";
import WorkSection from "./WorkSection/Work";
import ProjectsSection from "./ProjectsSection/Projects";
import ContactSection from "./ContactSection/Contact";

const MainSection = () => {
  return (
    <div className="space-y-20 max-w-full">
      <HeroSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default MainSection;
