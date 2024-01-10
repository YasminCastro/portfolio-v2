import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <div className=" bg-white shadow-lg rounded-xl p-16">
      <h2 className="font-bold text-3xl w-fit">Educação</h2>
      <div className="space-y-3 mt-10">
        <Education />
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="space-y-2">
        <h3 className="font-bold text-lg">Instituto Federal de Goiás</h3>
        <div>
          <Badge>2020 - presente</Badge>
        </div>
      </div>
      <div className="space-y-6">
        <p className="font-bold">Bacharelado em Sistemas de Informação</p>
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          rerum, odit voluptate, suscipit fugiat sapiente debitis officiis
          tempora nemo aliquid voluptatum possimus! Enim saepe, voluptatibus
          adipisci sed possimus nesciunt unde.
        </p>
      </div>
    </div>
  );
};

export default EducationSection;
