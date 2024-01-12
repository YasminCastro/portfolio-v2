export interface IProjects {
  title: string;
  summary: string;
  imagesPath: string;
  description: string;
  link: string;
}

const projects: IProjects[] = [
  {
    title: "Cervejometro",
    summary: "Divida a conta da cerveja de forma justa e fácil",
    imagesPath: "/projects/cervejometro/cervejometro.jpg",
    description:
      "O Cervejômetro, é um projeto pessoal que desenvolvi em 2023 para solucionar um problema comum em bares: dividir a conta da cerveja. Este site permite aos usuários dividir a conta de maneira justa e fácil, seja igualmente entre todos ou proporcionalmente, de acordo com o consumo individual.",
    link: "https://cervejometro.yascastro.com.br",
  },
];

export default projects;
