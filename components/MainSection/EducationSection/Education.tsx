import { Separator } from "@/components/ui/separator";
import education from "@/config/education";
import Institution from "./Institution";

const EducationSection = () => {
  const educationASC = education.sort((a, b) => {
    const anoA = Number(a.startDate);
    const anoB = Number(b.startDate);

    return anoB - anoA;
  });

  return (
    <div id="education" className="space-y-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold">Educação</h2>
      </div>
      <div className=" rounded-xl  bg-white p-16">
        <div className="space-y-3">
          {educationASC.map((institution, index) => {
            return (
              <div key={`education-${index}`}>
                {index === 0 ? null : <Separator />}
                <Institution institution={institution} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
