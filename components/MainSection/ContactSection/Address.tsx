import { FaMapLocationDot } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Address = () => {
  const t = useTranslations("ContactSection");

  return (
    <div className="flex min-h-full w-80 flex-col items-center justify-around rounded-xl bg-card p-7 max-lg:p-4 max-md:w-full">
      <div className="w-fit rounded-full bg-primary-foreground p-3 dark:bg-secondary ">
        <FaMapLocationDot className="text-3xl text-primary max-lg:text-2xl" />
      </div>
      <div className="w-full space-y-1 pt-5 text-gray-600 dark:text-gray-100">
        <div className="flex justify-between ">
          <p className="font-bold">{t("country")}:</p>
          <p>{t("brazil")}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">{t("city")}:</p>
          <p>Goiânia - GO</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
