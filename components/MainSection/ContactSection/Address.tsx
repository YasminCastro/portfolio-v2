import { FaMapLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="flex w-3/4 flex-col items-center rounded-xl bg-white p-10">
      <div className="w-fit rounded-full bg-primary-foreground p-3">
        <FaMapLocationDot className="text-primary" size={30} />
      </div>
      <div className="w-full pt-5 text-gray-600">
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
