import { compareDesc } from "date-fns";
import workExperience from "@/config/workExperience";
import ExperienceSection from "./ExperienceSection";
import { Separator } from "@/components/ui/separator";

const WorkSection = () => {
  const experienceASC = workExperience.sort((a, b) => {
    const [mesA, anoA] = a.startDate.split("/").map(Number);
    const [mesB, anoB] = b.startDate.split("/").map(Number);
    return compareDesc(new Date(anoA, mesA - 1), new Date(anoB, mesB - 1));
  });

  return (
    <div id="work" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold max-lg:text-2xl">Experiência</h2>
      </div>
      <div className="rounded-xl bg-card p-16 max-xl:p-10 max-lg:flex max-lg:justify-center max-lg:p-5">
        <div className="space-y-3">
          {experienceASC.map((experience, index) => {
            return (
              <div key={`experience-${index}`}>
                {index === 0 ? null : <Separator />}
                <ExperienceSection experience={experience} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
