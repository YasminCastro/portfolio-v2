import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <h2 className="font-bold text-3xl">Projetos</h2>
      </div>
      <div className=" p-16">
        <div className="grid grid-cols-3 place-items-center gap-3">
          <Link href="/">
            <Image src="/mockup.png" alt="" width={310} height={300} />
          </Link>
          <Link href="/">
            <Image src="/mockup.png" alt="" width={310} height={300} />
          </Link>
          <Link href="/">
            <Image src="/mockup.png" alt="" width={310} height={300} />
          </Link>
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

export default ProjectsSection;
