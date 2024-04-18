import { Separator } from "@/components/ui/separator";
import { educationPT, educationEN } from "@/config/education";
import Institution from "./Institution";
import { useTranslations, useLocale } from "next-intl";

const EducationSection = () => {
  const t = useTranslations("EducationSection");

  let education = educationEN;
  let locale = useLocale();

  if (locale === "pt") {
    education = educationPT;
  }

  const educationASC = education.sort((a, b) => {
    const anoA = Number(a.startDate);
    const anoB = Number(b.startDate);

    return anoB - anoA;
  });

  return (
    <div id="education" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold max-lg:text-2xl">{t("education")}</h2>
      </div>
      <div className="rounded-xl bg-card p-16 max-xl:p-10 max-lg:flex max-lg:justify-center max-lg:p-5">
        <div className="space-y-3">
          {educationASC.map((institution, index) => {
            return (
              <div key={`education-${index}`}>
                {index === 0 ? null : <Separator />}
                <Institution institution={institution} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
