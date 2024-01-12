import { IoIosMail } from "react-icons/io";

const Usernames = () => {
  return (
    <div className="flex w-3/4 flex-col items-center rounded-xl bg-white p-10">
      <div className="w-fit rounded-full bg-primary-foreground p-3">
        <IoIosMail className="text-primary" size={30} />
      </div>
      <div className="w-full space-y-1 pt-5 text-gray-600">
        <div className="flex justify-between ">
          <p className="font-bold">Email:</p>
          <p>yasminsdcastro@gmail.com</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="font-bold">Linkedin:</p>
          <p>yasmin-sdcastro</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Github:</p>
          <p>YasminCastro</p>
        </div> */}

        <div className="flex justify-between">
          <p className="font-bold">Discord:</p>
          <p>yascastro</p>
        </div>
      </div>
    </div>
  );
};

export default Usernames;
