import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const EducationSection = () => {
  return (
    <div id="education" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Educação</h2>
      </div>
      <div className=" rounded-xl  bg-white p-16">
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
          <Separator />
          <Institution
            institution="New Jersey City University"
            date="2017"
            name="English Language and Global Leadership"
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
    <div className="flex w-full justify-between">
      <div className="space-y-2">
        <h3 className="text-lg font-bold">{institution}</h3>
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
