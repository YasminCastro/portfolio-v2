import { MdOutlineFiberSmartRecord } from "react-icons/md";

const OtherSkills = () => {
  return (
    <div className="border-t-2 border-gray-200 py-6">
      <h2 className="font-bold text-xl">Outras Skills</h2>
      <div className="space-y-4 my-6">
        <div className="flex items-center w-full space-x-2 ">
          <MdOutlineFiberSmartRecord className="bg-lightBlue-500" />
          <p>Goiânia - GO</p>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
