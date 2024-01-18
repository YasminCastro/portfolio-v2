import { Progress } from "@/components/ui/progress";

const Skills = () => {
  return (
    <div className="py-3">
      <h2 className="text-lg font-bold max-lg:text-base">Skills</h2>
      <div className="my-3 space-y-4">
        <SkillProgess skill="TypeScript/JavaScript" value={90} />
        <SkillProgess skill="Node.js" value={85} />
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
      <p className="max-lg:text-sm">{skill}</p>
      <Progress value={value} className="h-1" aria-label={skill} />
    </div>
  );
};
