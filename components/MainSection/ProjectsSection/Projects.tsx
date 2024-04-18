import { Project } from "./Project";
import { projectsPT, projectsEN } from "@/config/projects";
import { useTranslations, useLocale } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();

  let projects = projectsEN;

  if (locale === "pt") {
    projects = projectsPT;
  }

  return (
    <div id="projects" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold max-lg:text-2xl">{t("projects")}</h2>
      </div>
      <div className=" p-16 max-lg:p-6">
        <div className="grid grid-cols-3 place-items-center gap-3 max-sm:flex max-sm:flex-col">
          {projects.map((project, index) => {
            return <Project project={project} key={`project-${index}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
