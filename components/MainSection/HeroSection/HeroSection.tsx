import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { differenceInYears } from "date-fns";

const HeroSection = () => {
  const initialDate = new Date(2021, 9);
  const today = new Date();
  return (
    <div className="flex items-center justify-around rounded-xl bg-white px-16 py-3 shadow-lg">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold max-lg:text-2xl">
          Eu sou a Yasmin, <br /> Desenvolvedora{" "}
          <a className="text-primary">Full-Stack</a>
        </h1>

        <p className="w-3/4 max-w-xl text-justify">
          Tenho mais de {differenceInYears(today, initialDate)} anos de
          experiência na área de desenvolvimento. Me destaco por ser prática,
          eficaz e por aprender tudo muito rápido. Sou apaixonada por tecnologia
          em geral e sempre busco me manter atualizada.
        </p>

        <Button asChild size="lg" className="w-fit">
          <Link href="#contact">Contato</Link>
        </Button>
      </div>

      <div className="relative h-[400px] w-[400px]">
        <Image src="/girl.png" fill alt="Picture of the author" />
      </div>
    </div>
  );
};

export default HeroSection;
