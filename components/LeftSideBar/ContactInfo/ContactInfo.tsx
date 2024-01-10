import { Avatar } from "flowbite-react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-1 mb-6">
      <Avatar
        alt="avatar of Yasmin Castro"
        img="https://avatars.githubusercontent.com/u/62770317"
        rounded
        size="lg"
      />
      <h1 className="text-lg font-bold">Yasmin Castro</h1>
      <h2 className="text-lg  text-gray-600">Full-Stack Developer</h2>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/yasmin-sdcastro/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lightBlue-600 p-2 rounded-full hover:bg-lightBlue-700"
        >
          <BiLogoLinkedin className="text-lg" />
        </a>
        <a
          href="mailto:yasminsdcastro@gmail.com"
          className="bg-lightBlue-600 p-2 rounded-full hover:bg-lightBlue-700"
        >
          <AiOutlineMail className="text-lg" />
        </a>
        <a
          href="https://github.com/YasminCastro"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lightBlue-600 p-2 rounded-full hover:bg-lightBlue-700"
        >
          <FiGithub className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
