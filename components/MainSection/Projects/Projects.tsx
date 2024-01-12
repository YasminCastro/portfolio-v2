import { Project } from "./Project";
import projects from "@/config/projects";

const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl">Projetos</h2>
      </div>
      <div className=" p-16">
        <div className="grid grid-cols-3 place-items-center gap-3">
          {projects.map((project, index) => {
            return <Project project={project} key={`project-${index}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
