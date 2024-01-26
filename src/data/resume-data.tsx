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

export const RESUME_DATA = {
  name: "Ariel Ribeiro",
  initials: "AR",
  location: "São José dos Campos, SP, Brazil, BRT",
  locationLink: "https://www.google.com/maps/place/São+José+dos+Campos",
  about:
    "Senior Software Engineer",
  summary:
    "Between 2010 and 2018, I developed several websites as a Web Developer. After that, I started my career as a Front End Engineer. I have successfully taken multiple products from 0 to 1. I lead a team effectively, ensuring an environment where people can do their best work. Currently, I work with TypeScript, Angular, .NET, and Java.",
  avatarUrl: "https://github.com/arielribeiror.png",
  personalWebsiteUrl: "https://arielribeiro.com",
  contact: {
    email: "hello@arielribeiro.com",
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
      degree: "Associates Degree in Analysis and systems development",
      start: "2020",
      end: "2022",
    },
    {
      school: "UNIVAP Colégio Técnico “Antônio Teixeira Fernandes”",
      degree: "Vocational Certificate in Computing",
      start: "2009",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: "",
      start: "May 2022",
      end: "Current",
      description:
        "Developing a B2B product of a Major Brazilian bank with millions of users and billions of YRR. Tecnhologies: Angular, Karma, Jest, Cypress, .NET and Java.",
    },
    {
      company: "AS2 Group",
      link: "https://www.as2group.com.br/",
      badges: ["Remote"],
      title: "Frontend Developer → Lead Frontend",
      logo: "",
      start: "Jul 2018",
      end: "May 2022",
      description:
        "I designed application layouts and developed them from the ground up. As the team grew and our responsibilities increased, I was invited to become the technical leader.",
    },
    {
      company: "Caxola Estúdio Criativo",
      link: "https://caxo.la/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "",
      start: "Sep 2014",
      end: "Jul 2018",
      description:
        "I possess a strong background in UX/UI, coupled with expertise in front-end development. My experience in these fields has enabled me to create user-friendly and responsive websites.",
    },
    {
      company: "Coruja Web",
      link: "",
      badges: ["Remote"],
      title: "Web Developer Freelancer",
      logo: "",
      start: "Jun 2013",
      end: "Sep 2014",
      description: "Creating and developing websites and landing pages as a freelancer.",
    },
    {
      company: "WF7 Softwares",
      link: "",
      badges: [],
      title: "System Analyst",
      logo: "",
      start: "Jul 2012",
      end: "May 2013",
      description: "I personally made several visits to conduct a thorough analysis of a cutting-edge system currently being developed to assist healthcare centers in prioritizing patient care.",
    },
    {
      company: "Vínculo Consultoria e Marketing",
      link: "https://www.vinculoconsultoria.com/",
      badges: [],
      title: "Web Designer",
      logo: "",
      start: "Mar 2012",
      end: "Jul 2012",
      description: "I worked on front-end development of institutional websites. I introduced good development practices, as outdated practices were used to structure projects (tables to tableless).",
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
