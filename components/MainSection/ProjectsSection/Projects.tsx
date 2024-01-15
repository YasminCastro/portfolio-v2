import { Project } from "./Project";
import projects from "@/config/projects";

const ProjectsSection = () => {
  return (
    <div id="projects" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold max-lg:text-2xl">Projetos</h2>
      </div>
      <div className=" p-16 max-lg:p-6">
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
