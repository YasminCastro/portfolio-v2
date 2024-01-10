import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-1 mb-6">
      <Avatar className="w-24 h-24">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62770317"
          alt="Yasmin Castro"
        />
        <AvatarFallback>YC</AvatarFallback>
      </Avatar>

      <h1 className="text-lg font-bold">Yasmin Castro</h1>
      <h2 className="text-base  text-gray-600">Full-Stack Developer</h2>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/yasmin-sdcastro/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-2 rounded-full hover:bg-primary-foreground"
        >
          <BiLogoLinkedin className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
        <a
          href="mailto:yasminsdcastro@gmail.com"
          className="bg-primary p-2 rounded-full hover:bg-primary-foreground"
        >
          <AiOutlineMail className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
        <a
          href="https://github.com/YasminCastro"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-2 rounded-full hover:bg-primary-foreground"
        >
          <FiGithub className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
