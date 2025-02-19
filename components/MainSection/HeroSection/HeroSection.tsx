import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { differenceInYears } from "date-fns";
import { useTranslations, useLocale } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const locale = useLocale();

  const initialDate = new Date(2021, 6);
  const today = new Date();
  return (
    <div className="flex  items-center justify-around  rounded-xl bg-card px-16 py-3 shadow-lg max-xl:px-10  max-lg:pl-6 max-lg:pr-0 max-[580px]:flex-col max-[580px]:gap-8 max-[580px]:pr-8">
      <div className="space-y-3 ">
        {locale === "en" ? (
          <TitleEN im={t("im")} developer={t("developer")} />
        ) : (
          <TitlePT im={t("im")} developer={t("developer")} />
        )}

        <p className="w-3/4 max-w-xl text-justify max-xl:w-full max-lg:text-sm">
          {t("have")} {differenceInYears(today, initialDate)} {t("description")}{" "}
        </p>

        <Button asChild size="lg" className="w-fit max-[580px]:w-full">
          <Link href="#contact">Contato</Link>
        </Button>
      </div>

      <div className="max-[580px]: relative h-[400px] min-w-[400px] max-xl:h-[300px] max-xl:min-w-[300px]">
        <Image
          src="/girl.png"
          fill
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;

const TitleEN = ({ im, developer }: ITitle) => (
  <h1 className="text-4xl font-bold max-xl:text-3xl">
    {im}, <br /> <span className="text-primary">Full-Stack</span> {developer}
  </h1>
);

const TitlePT = ({ im, developer }: ITitle) => (
  <h1 className="text-4xl font-bold max-xl:text-3xl">
    {im}, <br /> {developer} <span className="text-primary">Full-Stack</span>
  </h1>
);

interface ITitle {
  im: string;
  developer: string;
}
