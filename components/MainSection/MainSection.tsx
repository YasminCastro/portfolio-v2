import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./Education/Education";

const MainSection = () => {
  return (
    <div className="space-y-20 max-w-full">
      <HeroSection />

      <EducationSection />
    </div>
  );
};

export default MainSection;
