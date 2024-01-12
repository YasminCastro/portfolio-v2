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
    title: "Solar Power",
    summary:
      "Acompanhe a geração de energia do seu sistema fotovoltaico em tempo real.",
    images: [
      "/projects/solarpower/home-energetica.png",
      "/projects/solarpower/login-hub.png",
      "/projects/solarpower/config.png",
    ],
    thumbnail: "/projects/solarpower/logo.png",
    description:
      "O Solar Power é o resultado do nosso TCC em Sistemas de Informação no IFG, criado por Yasmin e Gabriel. A ideia nasceu da necessidade de tornar o monitoramento de energia solar mais acessível, um ponto crítico na área de energias renováveis. Percebemos que a maioria dos sistemas existentes era complexa para quem não é especialista. Assim, desenvolvemos o SolarPower, um app que simplifica o acompanhamento da energia solar de forma intuitiva e engajadora, promovendo o uso de energia sustentável com uma interface fácil de usar.",
    link: "https://solar-power.vercel.app/about",
    repositorio: "https://github.com/YasminCastro/solar-power",
  },
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
