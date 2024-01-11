import Image from "next/image";
import Link from "next/link";
import { Project } from "./Project";

const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl">Projetos</h2>
      </div>
      <div className=" p-16">
        <div className="grid grid-cols-3 place-items-center gap-3">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
