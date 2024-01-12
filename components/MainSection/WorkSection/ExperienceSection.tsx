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
    <div className="flex w-full space-x-4 py-4">
      <div className="w-1/3 flex justify-center">
        <p className="text-sm">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="w-full ml-6">
        <h3 className="font-bold">
          {experience.title} ・ {experience.company}
        </h3>
        <p className="text-gray-500 text-sm">{experience.type}</p>
        <p className="max-w-lg">{experience.description}</p>
      </div>
      <div>
        <div className="max-w-md">
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
