import { Badge } from "@/components/ui/badge";
import { IEducation } from "@/config/education";

interface IProps {
  institution: IEducation;
}

const Institution = ({ institution }: IProps) => {
  return (
    <div className="flex w-full justify-between space-x-4 py-4">
      <div>
        <h3 className="text-lg font-bold ">{institution.institution}</h3>
        <div>
          {institution.endDate && (
            <Badge>
              {institution.startDate} - {institution.endDate}
            </Badge>
          )}

          {!institution.endDate && <Badge>{institution.startDate}</Badge>}
        </div>
      </div>
      <div className="space-y-6">
        <p className="font-bold">{institution.title}</p>
        <p className="mt-2 max-w-lg text-justify max-lg:text-sm">
          {institution.description}
        </p>
      </div>
    </div>
  );
};

export default Institution;
