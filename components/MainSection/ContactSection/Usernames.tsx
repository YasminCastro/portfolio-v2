import { IoIosMail } from "react-icons/io";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Usernames = () => {
  return (
    <div className="flex w-3/4 flex-col items-center rounded-xl bg-white px-10 py-4">
      <div className="w-fit rounded-full bg-primary-foreground p-3">
        <IoIosMail className="text-primary" size={30} />
      </div>
      <div className="w-full space-y-4 pt-5 text-gray-600">
        <div className="space-y-1">
          <div className="flex justify-between ">
            <p className="font-bold">Email:</p>
            <p>yasminsdcastro@gmail.com</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Discord:</p>
            <p>yascastro</p>
          </div>
        </div>

        <div className=" flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yasmin-sdcastro/"
            target="_blank"
            className="rounded-full bg-primary-foreground p-2"
          >
            <BiLogoLinkedin className="text-lg text-primary " />
          </a>

          <a
            href="https://github.com/YasminCastro"
            target="_blank"
            className="rounded-full bg-primary-foreground p-2"
          >
            <BiLogoGithub className="text-lg text-primary " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Usernames;
