import { CustomFlowbiteTheme, Progress } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["progress"] = {
  color: {
    custom: "bg-lightBlue-700",
  },
};

const Languages = () => {
  return (
    <div className="border-t-2 border-gray-200 py-6">
      <h2 className="font-bold text-xl">Idiomas</h2>
      <div className="space-y-4 my-6">
        <Progress
          progress={100}
          labelText
          textLabel="Português"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
        <Progress
          progress={80}
          labelText
          textLabel="Inglês"
          textLabelPosition="outside"
          theme={customTheme}
          color="custom"
        />
      </div>
    </div>
  );
};

export default Languages;
