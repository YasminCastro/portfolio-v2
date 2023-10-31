import { Avatar } from "flowbite-react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <Avatar
        alt="avatar of Jese"
        img="https://avatars.githubusercontent.com/u/62770317"
        rounded
      />
      <h1 className="text-xl font-bold mb-2">Yasmin Castro</h1>
      <h2 className="text-lg mb-6">Full-Stack Developer</h2>
      <div className="flex gap-3">
        <BsLinkedin />
        <AiOutlineMail />
      </div>
    </div>
  );
};

export default ContactInfo;
