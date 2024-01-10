import { Progress } from "@/components/ui/progress";

const Skills = () => {
  return (
    <div className="border-t-2 border-gray-200 py-3">
      <h2 className="font-bold text-lg">Skills</h2>
      <div className="space-y-4 my-3">
        <SkillProgess skill="TypeScript/JavaScript" value={90} />
        <SkillProgess skill="React.js" value={70} />
        <SkillProgess skill="Angular.js" value={60} />
        <SkillProgess skill="React Native" value={50} />
      </div>
    </div>
  );
};

export default Skills;

interface ISkillProgress {
  skill: string;
  value: number;
}

const SkillProgess = ({ skill, value }: ISkillProgress) => {
  return (
    <div>
      <p>{skill}</p>
      <Progress value={value} className="h-1" />
    </div>
  );
};
