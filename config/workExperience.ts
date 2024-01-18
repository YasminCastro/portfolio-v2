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
    description:
      "Trabalhei com atendimento ao cliente, prestando suporte técnico para clientes da empresa. Atendia ligações, resolvia pequenos ajustes em sites WordPress e encaminhava problemas mais complexos para os programadores responsáveis. Desenvolvi habilidades importantes, como a capacidade de lidar com situações estressantes e trabalhar em equipe para alcançar metas comuns.",
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
      "AWS",
      "Next.js",
      "StyledComponents",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Docker",
      "Puppetter",
      "Nest.js",
      "Directus",
    ],
    description:
      "Desenvolvi minhas habilidades de programação ao participar ativamente dos projetos da empresa, atendendo a uma variedade de clientes do setor de logística. Criei automações de web scraping, desenvolvi sites em React e APIs em Node.js, e elaborei CMS personalizados utilizando a biblioteca Directus. Essa experiência me permitiu aprimorar tanto minhas habilidades técnicas quanto as de trabalho em equipe, além de solucionar problemas complexos.",
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
    description:
      "Minha função consiste em manter e desenvolver novas funcionalidades para painéis que exibem dados analíticos obtidos a partir de vídeos dos nossos clientes, que incluem grandes empresas como Vale do Rio Doce, Rumo Logística, entre outras mineradoras e clientes de menor porte. Minhas responsabilidades abrangem o desenvolvimento de soluções robustas e escaláveis, a participação ativa em discussões técnicas tanto com a equipe de desenvolvimento quanto com os stakeholders, a identificação e correção de bugs e problemas de desempenho, além de contribuir significativamente para o processo de desenvolvimento ágil.",
  },
];

export default experiences;
