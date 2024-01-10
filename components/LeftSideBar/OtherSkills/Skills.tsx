import { MdOutlineFiberSmartRecord } from "react-icons/md";

const OtherSkills = () => {
  return (
    <div className="py-3">
      <h2 className="font-bold text-lg">Outras Skills</h2>
      <div className="space-y-4 my-3">
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
    <div className="flex items-center w-full space-x-2 ">
      <MdOutlineFiberSmartRecord className="text-primary" />
      <p>{skill}</p>
    </div>
  );
};
