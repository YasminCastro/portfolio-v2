import { MdOutlineFiberSmartRecord } from "react-icons/md";

const OtherSkills = () => {
  return (
    <div className="py-3">
      <h2 className="text-lg font-bold max-lg:text-base">Outras Skills</h2>
      <div className="my-3 space-y-4">
        <Skill skill="Git" />
        <Skill skill="Express.js" />
        <Skill skill="Docker" />
        <Skill skill="Next.js" />
      </div>
    </div>
  );
};

export default OtherSkills;

interface ISkill {
  skill: string;
}

const Skill = ({ skill }: ISkill) => {
  return (
    <div className="flex w-full items-center space-x-2 max-lg:text-sm">
      <MdOutlineFiberSmartRecord className="text-primary" />
      <p>{skill}</p>
    </div>
  );
};
