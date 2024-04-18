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

export const experiencesPT: IExperience[] = [
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

export const experiencesEN: IExperience[] = [
  {
    title: "Customer Support and Service",
    company: "ILION Web Solutions",
    startDate: "06/2021",
    endDate: "08/2021",
    address: "Goiânia - Brazil",
    type: "Internship",
    skills: ["Linux", "Shell", "WordPress", "Problem-solving"],
    description:
      "I worked in customer service, providing technical support to the company's clients. I answered calls, resolved minor adjustments on WordPress sites, and forwarded more complex issues to the responsible programmers. I developed important skills, such as the ability to handle stressful situations and work in a team to achieve common goals.",
  },
  {
    title: "Junior Software Developer",
    company: "Hyerdev",
    startDate: "09/2021",
    endDate: "11/2022",
    address: "Goiânia - Brazil",
    type: "Full-time",
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
      "I developed my programming skills by actively participating in the company's projects, serving a variety of clients in the logistics sector. I created web scraping automations, developed websites in React, and APIs in Node.js, and crafted custom CMS using the Directus library. This experience allowed me to enhance both my technical skills and teamwork abilities, as well as solve complex problems.",
  },
  {
    title: "Full-Stack Developer",
    company: "SVA Tech",
    startDate: "11/2022",
    endDate: null,
    address: "Belo Horizonte - Brazil (remote)",
    type: "Full-time",
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
      "My role involves maintaining and developing new features for dashboards that display analytical data obtained from videos of our clients, which include major companies such as Vale do Rio Doce, Rumo Logística, among other mining firms and smaller clients. My responsibilities encompass developing robust and scalable solutions, actively participating in technical discussions with both the development team and stakeholders, identifying and fixing bugs and performance issues, as well as making significant contributions to the agile development process.",
  },
];
