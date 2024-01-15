import { FaMapLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="flex w-11/12 flex-col items-center rounded-xl bg-white p-7 ">
      <div className="w-fit rounded-full bg-primary-foreground p-3 max-lg:p-2">
        <FaMapLocationDot className="text-3xl text-primary max-lg:text-2xl" />
      </div>
      <div className="w-full space-y-1 pt-5 text-gray-600">
        <div className="flex justify-between ">
          <p className="font-bold">País:</p>
          <p>Brasil</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Cidade:</p>
          <p>Goiânia - GO</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
