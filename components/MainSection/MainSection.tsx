import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./Education/Education";
import WorkSection from "./Work/Work";
import ProjectsSection from "./Projects/Projects";

const MainSection = () => {
  return (
    <div className="space-y-20 max-w-full">
      <HeroSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
    </div>
  );
};

export default MainSection;
