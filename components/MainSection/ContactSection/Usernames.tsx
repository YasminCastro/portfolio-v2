"use client";

import { IoIosMail } from "react-icons/io";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { getCVPath } from "@/lib/utils";
import { useLocale } from "next-intl";

const Usernames = () => {
  const locale = useLocale();
  const cvPath = getCVPath(locale);

  return (
    <div className="flex min-h-full w-80 flex-col items-center justify-around rounded-xl bg-card p-7 max-lg:p-4 max-md:w-full">
      <div className="w-fit rounded-full bg-primary-foreground p-3 dark:bg-secondary max-lg:p-2">
        <IoIosMail className="text-3xl text-primary max-lg:text-2xl" />
      </div>
      <div className="w-full space-y-4 pt-5 text-gray-600 dark:text-gray-100">
        <div className="space-y-1">
          <div className="flex justify-between ">
            <p className="font-bold ">Email:</p>
            <p className="max-lg:text-sm">yasminsdcastro@gmail.com</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Discord:</p>
            <p className="max-lg:text-sm">yascastro</p>
          </div>
        </div>

        <div className=" flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yasmin-sdcastro/"
            target="_blank"
            className="rounded-full bg-primary-foreground p-2 dark:bg-secondary"
            aria-label="Visite meu perfil no LinkedIn"
          >
            <BiLogoLinkedin className="text-lg text-primary " />
          </a>

          <a
            href="https://github.com/YasminCastro"
            target="_blank"
            className="rounded-full bg-primary-foreground p-2 dark:bg-secondary"
            aria-label="Veja meu perfil no GitHub"
          >
            <BiLogoGithub className="text-lg text-primary " />
          </a>

          <a
            className="rounded-full bg-primary-foreground p-2 text-sm font-bold text-primary dark:bg-secondary"
            href={cvPath}
            target="_blank"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Usernames;
