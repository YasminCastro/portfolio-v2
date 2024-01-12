import { FaMapLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl">Contato</h2>
      </div>
      <div className="bg-white rounded-xl p-10 flex ">
        <div>
          <div className="bg-primary-foreground p-3 rounded-full w-fit">
            <FaMapLocationDot className="text-primary" size={30} />
          </div>
          <div className="border border-pink-600  w-1/2">
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
          <div className="bg-primary-foreground p-3 rounded-full w-fit">
            <FaMapLocationDot className="text-primary" size={30} />
          </div>
          <div className="border border-pink-600  w-1/2">
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
