import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl py-3 px-16 flex items-center justify-between">
      <div className="space-y-3 max-w-xl">
        <h2 className="font-bold text-4xl">
          Eu sou a Yasmin, <br /> Desenvolvedora{" "}
          <a className="text-primary">Full-Stack</a>
        </h2>

        <p className="w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
          dignissimos accusantium odit aperiam, dolor soluta dolorem?
        </p>

        <Button asChild size="lg" className="w-fit">
          <Link href="/">Contato</Link>
        </Button>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/girl.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
