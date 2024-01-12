export interface IEducation {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

const education: IEducation[] = [
  {
    title: "Instituto Federal de Goiás",
    institution: "Bacharelado em Sistemas de Informação",
    startDate: "2020",
    endDate: "presente",
    description:
      "O curso de Sistemas de Informação pelo IFG foi uma jornada enriquecedora que consolidou minha base em tecnologia e desenvolvimento. Durante o curso, mergulhei profundamente nos fundamentos da computação, sistemas de informação e desenvolvimento de software. Através dele, adquiri habilidades cruciais em análise de sistemas, gerenciamento de projetos e colaboração em equipe, me preparando para os desafios do mundo digital e me permitindo a contribuir de forma significativa na área de tecnologia da informação.",
  },
  {
    title: "English Language and Global Leadership",
    institution: "New Jersey City University",
    startDate: "2017",
    endDate: "",
    description:
      "Participei do projeto Goiás Sem Fronteiras, uma iniciativa do estado de Goiás que tinha como objetivo oferecer intercâmbio para alunos do ensino médio da rede pública do estado. Durante o intercâmbio, tive a oportunidade de aprimorar meu inglês e participar de aulas de liderança global ministradas por nativos da língua inglesa. Essa experiência foi fundamental para aprimorar minhas habilidades de comunicação e liderança, além de proporcionar uma vivência cultural enriquecedora.",
  },
];

export default education;
