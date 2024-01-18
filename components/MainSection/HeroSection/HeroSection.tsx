import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { differenceInYears } from "date-fns";

const HeroSection = () => {
  const initialDate = new Date(2021, 9);
  const today = new Date();
  return (
    <div className="flex  items-center justify-around  rounded-xl bg-white px-16 py-3 shadow-lg max-xl:px-10  max-lg:pl-6 max-lg:pr-0 max-[580px]:flex-col max-[580px]:pr-8">
      <div className="space-y-3 ">
        <h1 className="text-4xl font-bold max-xl:text-3xl">
          Eu sou a Yasmin, <br /> Desenvolvedora{" "}
          <span className="text-primary">Full-Stack</span>
        </h1>

        <p className="w-3/4 max-w-xl text-justify max-xl:w-full max-lg:text-sm">
          Tenho mais de {differenceInYears(today, initialDate)} anos de
          experiência na área de desenvolvimento. Me destaco por ser prática,
          eficaz e por aprender tudo muito rápido. Sou apaixonada por tecnologia
          em geral e sempre busco me manter atualizada.
        </p>

        <Button asChild size="lg" className="w-fit">
          <Link href="#contact">Contato</Link>
        </Button>
      </div>

      <div className="max-[580px]: relative h-[400px] min-w-[400px] max-xl:h-[300px] max-xl:min-w-[300px]">
        <Image
          src="/girl.png"
          fill
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default HeroSection;
