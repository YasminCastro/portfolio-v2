import { FaMapLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Contato</h2>
      </div>
      <div className="flex rounded-xl bg-white p-10 ">
        <div>
          <div className="w-fit rounded-full bg-primary-foreground p-3">
            <FaMapLocationDot className="text-primary" size={30} />
          </div>
          <div className="w-1/2 border  border-pink-600">
            <div className="flex justify-between">
              <p>País:</p>
              <p>Brasil</p>
            </div>
            <div className="flex justify-between">
              <p>Cidade:</p>
              <p>Goiânia - GO</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-fit rounded-full bg-primary-foreground p-3">
            <FaMapLocationDot className="text-primary" size={30} />
          </div>
          <div className="w-1/2 border border-pink-600">
            <div className="flex justify-between">
              <p>País:</p>
              <p>Brasil</p>
            </div>
            <div className="flex justify-between">
              <p>Cidade:</p>
              <p>Goiânia - GO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
