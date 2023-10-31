import { CustomFlowbiteTheme, Progress } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["progress"] = {
  color: {
    custom: "bg-lightBlue-700",
  },
};

const Skills = () => {
  return (
    <div className="border-t-2 border-gray-200 py-6">
      <h2 className="font-bold text-xl">Skills</h2>
      <div className="space-y-4 my-6">
        <Progress
          progress={90}
          labelText
          textLabel="TypeScript/JavaScript"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
        <Progress
          progress={85}
          labelText
          textLabel="NodeJS"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
        <Progress
          progress={70}
          labelText
          textLabel="ReactJS"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
        <Progress
          progress={60}
          labelText
          textLabel="AngularJS"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
        <Progress
          progress={50}
          labelText
          textLabel="React Native"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
      </div>
    </div>
  );
};

export default Skills;
