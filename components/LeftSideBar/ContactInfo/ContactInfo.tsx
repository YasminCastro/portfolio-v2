import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="mb-3 flex flex-col items-center space-y-2">
      <Avatar className="h-24 w-24 max-lg:h-20 max-lg:w-20">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62770317"
          alt="Yasmin Castro"
        />
        <AvatarFallback>YC</AvatarFallback>
      </Avatar>

      <h1 className="text-lg font-bold max-lg:text-sm">Yasmin Castro</h1>
      <Badge>Full-Stack Developer</Badge>

      <div className="flex gap-5 pt-5 max-lg:gap-3">
        <a
          href="https://www.linkedin.com/in/yasmin-sdcastro/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite meu perfil no LinkedIn"
        >
          <BiLogoLinkedin className="text-lg" />
        </a>
        <a
          href="mailto:yasminsdcastro@gmail.com"
          aria-label="Me envie um email"
        >
          <AiOutlineMail className="text-lg" />
        </a>
        <a
          href="https://github.com/YasminCastro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Veja meu perfil no GitHub"
        >
          <FiGithub className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
