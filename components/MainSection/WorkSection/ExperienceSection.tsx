import { Badge } from "@/components/ui/badge";
import { IExperience } from "@/config/workExperience";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useTranslations } from "next-intl";

interface ExperienceSectionProps {
  experience: IExperience;
}

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const startDate = formatDate(experience.startDate);
  const endDate = formatDate(experience.endDate);

  return (
    <div className="flex w-full space-x-4 py-4  max-[920px]:flex-col">
      <div className="flex w-1/3 justify-center max-[920px]:hidden ">
        <p className="text-sm ">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="ml-6 w-full max-lg:w-auto">
        <h3 className="font-bold">
          {experience.title} ・ {experience.company}
        </h3>
        <p className="text-sm text-gray-500  dark:text-gray-400 max-[920px]:hidden">
          {experience.type}
        </p>
        <p className="hidden text-sm text-gray-500  max-[920px]:block">
          {startDate} - {endDate} ・ {experience.type}
        </p>
        <p className="mt-2 max-w-lg text-justify max-lg:text-sm">
          {experience.description}
        </p>
      </div>
      <div>
        <div className="max-w-md max-xl:max-w-xs ">
          {experience.skills.map((skill, index) => (
            <Badge key={`badge-${index}`} className="mx-1 mt-2 text-white">
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
    const t = useTranslations("WorkSection");

    return t("present");
  }
  const [mes, ano] = date.split("/").map(Number);
  return format(new Date(ano, mes - 1), "MMM yyyy", {
    locale: ptBR,
  });
};

export default ExperienceSection;
