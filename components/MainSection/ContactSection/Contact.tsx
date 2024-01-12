import Address from "./Address";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Contato</h2>
      </div>
      <div className="grid grid-cols-2 place-items-center">
        <Address />
        <Address />
      </div>
    </div>
  );
};

export default ContactSection;
