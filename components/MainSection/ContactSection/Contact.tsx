import Address from "./Address";
import Usernames from "./Usernames";

const ContactSection = () => {
  return (
    <div id="contact" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold max-lg:text-2xl">Contato</h2>
      </div>
      <div className="flex justify-around gap-3 max-[920px]:flex-col max-[920px]:items-center">
        <Address />
        <Usernames />
      </div>
    </div>
  );
};

export default ContactSection;
