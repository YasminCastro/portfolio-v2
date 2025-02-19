export interface IProjects {
  title: string;
  summary: string;
  images: string[];
  thumbnail: string;
  description: string;
  link: string | null;
  repository: string;
}

export const projectsPT: IProjects[] = [
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
    repository: "https://github.com/YasminCastro/solar-power",
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
    repository: "https://github.com/YasminCastro/cervejometro",
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
    repository: "https://github.com/YasminCastro/party-invite",
  },
  {
    title: "Maluca Awards",
    summary:
      "A nossa versão do VMA: votação, vencedores e uma festa para comemorar!",
    images: ["/projects/maluca-awards/ma-1.png"],
    thumbnail: "/projects/maluca-awards/ma-1.png",
    description:
      "O Maluca Awards foi um site desenvolvido em 2024 como uma paródia do VMA 2024, criado para um sistema de votação entre amigos. Os participantes faziam login e votavam em diversas categorias, escolhendo os vencedores. No final, organizamos uma festa para revelar os ganhadores e celebrar a brincadeira. O projeto foi uma experiência divertida e interativa, combinando tecnologia com entretenimento.",
    link: "https://malucas-awards.vercel.app/",
    repository: "https://github.com/YasminCastro/malucas-awards",
  },
];

export const projectsEN: IProjects[] = [
  {
    title: "Solar Power",
    summary:
      "Track the energy generation from your photovoltaic system in real-time.",
    images: [
      "/projects/solarpower/home-energetica.png",
      "/projects/solarpower/login-hub.png",
      "/projects/solarpower/config.png",
    ],
    thumbnail: "/projects/solarpower/logo.png",
    description:
      "Solar Power is the result of our capstone project in Information Systems at IFG, created by Yasmin and Gabriel. The idea originated from the need to make solar energy monitoring more accessible, a critical point in the field of renewable energies. We realized that most existing systems were complex for non-experts. Thus, we developed SolarPower, an app that simplifies the tracking of solar energy in an intuitive and engaging way, promoting the use of sustainable energy with an easy-to-use interface.",
    link: "https://solar-power.vercel.app/about",
    repository: "https://github.com/YasminCastro/solar-power",
  },
  {
    title: "Beer Meter",
    summary: "Split the beer bill fairly and easily",
    images: [
      "/projects/cervejometro/cervejometro.jpg",
      "/projects/cervejometro/divide-2.jpg",
      "/projects/cervejometro/divide-2.jpg",
    ],
    thumbnail: "/projects/cervejometro/cervejometro.jpg",
    description:
      "Beer Meter is a personal project I developed in 2023 to solve a common problem in bars: splitting the beer bill. This website allows users to divide the bill fairly and easily, whether equally among all or proportionally, according to individual consumption.",
    link: "https://cervejometro.yascastro.com.br",
    repository: "https://github.com/YasminCastro/cervejometro",
  },
  {
    title: "Party Invite",
    summary: "Organize your birthday party with digital invitations.",
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
      "Party Invite is a custom personal project from 2023 that transforms birthday invitations into a unique experience, allowing the host to create, send, and manage digital invitations and track RSVPs with a personal touch.",
    link: null,
    repository: "https://github.com/YasminCastro/party-invite",
  },
  {
    title: "Maluca Awards",
    summary:
      "Our own version of the VMA: voting, winners, and a party to celebrate!",
    images: ["/projects/maluca-awards/ma-1.png"],
    thumbnail: "/projects/maluca-awards/ma-1.png",
    description:
      "Maluca Awards was a website developed in 2024 as a parody of the VMA 2024, created as a voting system among friends. Participants logged in and voted in various categories to choose the winners. In the end, we organized a party to reveal the winners and celebrate the fun. The project was a fun and interactive experience, combining technology with entertainment.",
    link: "https://malucas-awards.vercel.app/",
    repository: "https://github.com/YasminCastro/malucas-awards",
  },
];
