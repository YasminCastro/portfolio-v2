import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <div className=" bg-white shadow-lg rounded-xl p-16">
      <h2 className="font-bold text-3xl w-fit">Educação</h2>
      <div className="space-y-3 mt-10">
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

export default EducationSection;
