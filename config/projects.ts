export interface IProjects {
  title: string;
  summary: string;
  images: string[];
  thumbnail: string;
  description: string;
  link: string | null;
  repositorio: string;
}

const projects: IProjects[] = [
  {
    title: "Cervejometro",
    summary: "Divida a conta da cerveja de forma justa e fácil",
    images: [
      "/projects/cervejometro/cervejometro.jpg",
      "/projects/cervejometro/divide-2.jpg",
      "/projects/cervejometro/divide-2.jpg",
    ],
    thumbnail: "/projects/cervejometro/cervejometro.jpg",
    description:
      "O Cervejômetro, é um projeto pessoal que desenvolvi em 2023 para solucionar um problema comum em bares: dividir a conta da cerveja. Este site permite aos usuários dividir a conta de maneira justa e fácil, seja igualmente entre todos ou proporcionalmente, de acordo com o consumo individual.",
    link: "https://cervejometro.yascastro.com.br",
    repositorio: "https://github.com/YasminCastro/cervejometro",
  },
  {
    title: "Party Invite",
    summary: "Organize sua festa de aniversário com convites digitais.",
    images: [
      "/projects/party-invite/glaucia-1.jpg",
      "/projects/party-invite/glaucia-2.jpg",
      "/projects/party-invite/glaucia-3.jpg",
      "/projects/party-invite/glaucia-4.jpg",
      "/projects/party-invite/glaucia-5.jpg",
      "/projects/party-invite/rharynice-1.jpg",
      "/projects/party-invite/rharynice-2.jpg",
    ],
    thumbnail: "/projects/party-invite/glaucia-1.jpg",
    description:
      "O Party Invite é um projeto pessoal customizado de 2023, que transforma convites de aniversário em uma experiência única, permitindo ao anfitrião criar, enviar e gerenciar convites digitais e acompanhar RSVPs com um toque pessoal.",
    link: null,
    repositorio: "https://github.com/YasminCastro/party-invite",
  },
];

export default projects;
