const PersonalInfo = () => {
  return (
    <div className="flex flex-col items-center space-y-3 border-t-2 border-gray-200 py-4">
      <PersonalCard title="Endereço" description="Goiânia - GO" />
    </div>
  );
};

export default PersonalInfo;

interface IPersonalCard {
  title: string;
  description: string;
}

const PersonalCard = ({ title, description }: IPersonalCard) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="bg-primary px-2 rounded-md text-secondary">{title}:</p>
      <p>{description}</p>
    </div>
  );
};
