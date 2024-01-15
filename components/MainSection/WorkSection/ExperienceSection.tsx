import { Badge } from "@/components/ui/badge";
import { IExperience } from "@/config/workExperience";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ExperienceSectionProps {
  experience: IExperience;
}

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const startDate = formatDate(experience.startDate);
  const endDate = formatDate(experience.endDate);

  return (
    <div className="flex w-full space-x-4 py-4 ">
      <div className="flex w-1/3 justify-center">
        <p className="text-sm">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="ml-6 w-full">
        <h3 className="font-bold">
          {experience.title} ・ {experience.company}
        </h3>
        <p className="text-sm text-gray-500 ">{experience.type}</p>
        <p className="mt-2 max-w-lg text-justify max-lg:text-sm">
          {experience.description}
        </p>
      </div>
      <div>
        <div className="max-w-md max-lg:max-w-sm">
          {experience.skills.map((skill, index) => (
            <Badge key={`badge-${index}`} className="mx-1 mt-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const formatDate = (date: string | null) => {
  if (!date) {
    return "presente";
  }
  const [mes, ano] = date.split("/").map(Number);
  return format(new Date(ano, mes - 1), "MMM yyyy", {
    locale: ptBR,
  });
};

export default ExperienceSection;
