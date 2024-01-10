import { Progress } from "@/components/ui/progress";

const Languages = () => {
  return (
    <div className=" py-3">
      <h2 className="font-bold text-lg">Idiomas</h2>
      <div className="space-y-4 my-3">
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
      <p>{languageName}</p>
      <Progress value={value} className="h-1" />
    </div>
  );
};
