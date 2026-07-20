export interface Project {
  titleKey: string;
  descKey: string;
  technologies: string[];
  link: string;
  image?: string;
  categoryKey: string;
}

export const PROJECTS: Project[] = [
  {
    titleKey: "project12.title",
    descKey: "project12.desc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Vercel"],
    link: "https://www.gmvykon.com/",
    image: "/photos/projects/gmvykon.webp",
    categoryKey: "category.corporateWebsite",
  },
  {
    titleKey: "project11.title",
    descKey: "project11.desc",
    technologies: ["Next.js", "PostgreSQL", "Azure", "Vercel"],
    link: "https://chamcodigital.com/",
    image: "/photos/projects/chamco-digital.webp",
    categoryKey: "category.adminPanel",
  },
  {
    titleKey: "project10.title",
    descKey: "project10.desc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://school-mauve-eight.vercel.app/",
    categoryKey: "category.saas",
  },
  {
    titleKey: "project1.title",
    descKey: "project1.desc",
    technologies: ["Next.js", "TypeScript", "Payload CMS", "AWS Amplify"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/hacking-hr.webp",
    categoryKey: "category.eventPlatform",
  },
  {
    titleKey: "project2.title",
    descKey: "project2.desc",
    technologies: ["Next.js", "NestJS", "Prisma", "MySQL", "AFIP"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    categoryKey: "category.erp",
  },
  {
    titleKey: "project3.title",
    descKey: "project3.desc",
    technologies: ["React Native", "Expo", "Tailwind CSS", "TypeScript"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    categoryKey: "category.mobileApp",
  },
  {
    titleKey: "project4.title",
    descKey: "project4.desc",
    technologies: ["Next.js", "React", "Stripe", "PayPal"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/piggyback-network.webp",
    categoryKey: "category.ecommerce",
  },
  {
    titleKey: "project5.title",
    descKey: "project5.desc",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/little-taller.webp",
    categoryKey: "category.frontendSuite",
  },
  {
    titleKey: "project6.title",
    descKey: "project6.desc",
    technologies: ["Angular", "Angular Material", "Google Maps API", "AWS"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    categoryKey: "category.enterpriseDashboard",
  },
  {
    titleKey: "project7.title",
    descKey: "project7.desc",
    technologies: ["Angular", "GoJS", "D3.js", "TypeScript"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/cloudshim.webp",
    categoryKey: "category.saasTool",
  },
];
