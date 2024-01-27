import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo
} from "@/images/logos";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA_PT_BR = {
  name: "Ariel Ribeiro",
  initials: "AR",
  location: "São José dos Campos, SP, Brasil",
  locationLink: "https://www.google.com/maps/place/São+José+dos+Campos",
  about:
    "Desenvolvedor de Software Senior",
  summary:
    "Entre 2010 e 2018, eu desenvolvi diversos websites como Desenvolvedor Web. Depois disso, eu iniciei minha carreira como Desenvolvedor Front End. Eu desenvolvi múltiplos produtos de 0 a 1. Eu lideirei um time efetivamente, garantindo um ambiente onde as pessoas podem fazer seus melhores trabalhos. Atualmente, eu trabalho com TypeScript, Angular, .NET, e Java.",
  avatarUrl: "https://github.com/arielribeiror.png",
  personalWebsiteUrl: "https://arielribeiro.com",
  contact: {
    email: "ariiel.ribeiro@gmail.com",
    tel: "+55 12 98868-8457",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arielribeiror",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arielribeiro/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/arielribeiror",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "Faculdade de Informática e Administração Paulista (FIAP)",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      start: "2020",
      end: "2022",
    },
    {
      school: "UNIVAP Colégio Técnico “Antônio Teixeira Fernandes”",
      degree: "Técnico em Informática",
      start: "2009",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com/",
      badges: ["Remoto"],
      title: "Senior Software Engineer",
      logo: "",
      start: "Mai 2022",
      end: "Atual",
      description:
        "Desenvolvendo um produto B2B de um grande banco brasileiro com milhões de usuários e bilhões em faturamento anual. Tecnologias: Angular, Karma, Jest, Cypress, .NET e Java.",
    },
    {
      company: "AS2 Group",
      link: "https://www.as2group.com.br/",
      badges: ["Remoto"],
      title: "Frontend Developer → Frontend Lead",
      logo: "",
      start: "Jul 2018",
      end: "Mai 2022",
      description:
        "Desenhei layouts de aplicações e as desenvolvi do zero. Com o time em crescimento e as responsabilidades aumentando, fui convidado para ser líder técnico.",
    },
    {
      company: "Caxola Estúdio Criativo",
      link: "https://caxo.la/",
      badges: ["Remoto"],
      title: "Frontend Developer",
      logo: "",
      start: "Set 2014",
      end: "Jul 2018",
      description:
        "Desenvolvi um forte background em UX/UI, juntamente com expertise em desenvolvimento front-end. Minha experiência nesses campos me permitiram criar websites responsivos e user-friendly.",
    },
    {
      company: "Coruja Web",
      link: "",
      badges: ["Remoto"],
      title: "Web Developer Freelancer",
      logo: "",
      start: "Jun 2013",
      end: "Set 2014",
      description: "Criei e desenvolvi websites e landing pages como freelancer.",
    },
    {
      company: "WF7 Softwares",
      link: "",
      badges: [],
      title: "Analista de Sistemas",
      logo: "",
      start: "Jul 2012",
      end: "Mai 2013",
      description: "Fiz diversas viagens pelo Brasil para conduzir, através da análise, um sistema que estava sendo desenvolvido para assistir centros de unidade de saúde priorizando o cuidado dos pacientes.",
    },
    {
      company: "Vínculo Consultoria e Marketing",
      link: "https://www.vinculoconsultoria.com/",
      badges: [],
      title: "Web Designer",
      logo: "",
      start: "Mar 2012",
      end: "Jul 2012",
      description: "Trabalhei no desenvolvimento front-end de sites institucionais. Introduzi boas práticas de desenvolvimento, pois práticas desatualizadas de estrutura de projetos eram utilizadas (tables to tableless).",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "React/Next.js",
    "Java",
    ".NET Core",
    "Go",
    "Node.js",
    "RESTful",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
