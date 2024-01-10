import { Badge } from "@/components/ui/badge";

const WorkSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl">Experiência</h2>
      </div>
      <div className=" bg-white  rounded-xl p-16">
        <div className="space-y-3">
          <Institution
            institution="Instituto Federal de Goiás"
            date="2020 - presente"
            name="Bacharelado em Sistemas de Informação"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          rerum, odit voluptate, suscipit fugiat sapiente debitis officiis
          tempora nemo aliquid voluptatum possimus! Enim saepe, voluptatibus
          adipisci sed possimus nesciunt unde."
          />
        </div>
      </div>
    </div>
  );
};

interface IInstitution {
  institution: string;
  date: string;
  name: string;
  description: string;
}

const Institution = ({
  institution,
  date,
  name,
  description,
}: IInstitution) => {
  return (
    <div className="flex justify-between w-full">
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{institution}</h3>
        <div>
          <Badge>{date}</Badge>
        </div>
      </div>
      <div className="space-y-6">
        <p className="font-bold">{name}</p>
        <p className="max-w-lg">{description}</p>
      </div>
    </div>
  );
};

export default WorkSection;
