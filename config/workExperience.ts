export interface IExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  address: string;
  type: string;
  skills: string[];
  description: string;
}

const experiences: IExperience[] = [
  {
    title: "Atendimento e Suporte ao Cliente",
    company: "ILION Soluções Web",
    startDate: "06/2021",
    endDate: "08/2021",
    address: "Goiânia - Brasil",
    type: "Estágio",
    skills: ["Linux", "Shell", "WordPress", "Resolução de problemas"],
    description: "lorem ipsum dolor sit amet, consectet",
  },
  {
    title: "Desenvolvedora de Software Júnior",
    company: "Hyerdev",
    startDate: "09/2021",
    endDate: "11/2022",
    address: "Goiânia - Brasil",
    type: "Tempo integral",
    skills: [
      "TypeScript",
      "React.js",
      "StyledComponents",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Docker",
      "Puppetter",
      "Nest.js",
    ],
    description: "lorem ipsum dolor sit amet, consectet",
  },
  {
    title: "Desenvolvedora Full-Stack",
    company: "SVA Tech",
    startDate: "11/2022",
    endDate: null,
    address: "Belo Horizonte - Brasil (remota)",
    type: "Tempo integral",
    skills: [
      "JavaScript",
      "Angular.js",
      "CSS",
      "HTML",
      "Express.js",
      "MongoDB",
      "Ionic",
    ],
    description: "lorem ipsum dolor sit amet, consectet",
  },
];

export default experiences;
