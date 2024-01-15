import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="mb-6 flex flex-col items-center space-y-1">
      <Avatar className="h-24 w-24 max-lg:h-20 max-lg:w-20">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62770317"
          alt="Yasmin Castro"
        />
        <AvatarFallback>YC</AvatarFallback>
      </Avatar>

      <h1 className="text-lg font-bold max-lg:text-sm">Yasmin Castro</h1>
      <h2 className="text-base  text-gray-600 max-lg:text-sm">
        Full-Stack Developer
      </h2>
      <div className="flex gap-4 max-lg:gap-2">
        <a
          href="https://www.linkedin.com/in/yasmin-sdcastro/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary p-2 hover:bg-primary-foreground"
        >
          <BiLogoLinkedin className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
        <a
          href="mailto:yasminsdcastro@gmail.com"
          className="rounded-full bg-primary p-2 hover:bg-primary-foreground"
        >
          <AiOutlineMail className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
        <a
          href="https://github.com/YasminCastro"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary p-2 hover:bg-primary-foreground"
        >
          <FiGithub className="text-lg text-secondary hover:text-secondary-foreground" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
