import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";

const Languages = () => {
  const t = useTranslations("Languages");
  console.log(t("languages"));
  return (
    <div className=" py-3">
      <h2 className="text-lg font-bold max-lg:text-base">{t("languages")}</h2>
      <div className="my-3 space-y-4">
        <LanguageProgess languageName="Português" value={100} />
        <LanguageProgess languageName="Inglês" value={80} />
      </div>
    </div>
  );
};

export default Languages;

interface ILanguageProgress {
  languageName: string;
  value: number;
}

const LanguageProgess = ({ languageName, value }: ILanguageProgress) => {
  return (
    <div>
      <p className="max-lg:text-sm">{languageName}</p>
      <Progress value={value} className="h-1" aria-label={languageName} />
    </div>
  );
};
