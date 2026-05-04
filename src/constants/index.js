import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";
import cfpc from "/logo.webp";
import laravel from "/laravel2.png";
export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "work", title: "Travaux" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "🛍️ Développement de boutique en ligne", icon: web, explication: "Je développe une boutique en ligne complète pour vendre vos produits sur internet avec gestion des commandes et paiement intégré." },
  { title: "📲 Landing page de conversion", icon: mobile, explication: "Je crée une page simple et optimisée pour transformer vos visiteurs en clients ou en contacts rapidement." },
  { title: "⚙️ Automatisation de tâches business", icon: backend, explication: "Je mets en place des systèmes qui automatisent certaines tâches répétitives pour vous faire gagner du temps et améliorer votre organisation." },
  { title: "📊 Tableau de bord (dashboard)", icon: creator, explication: "Je développe une interface qui vous permet de suivre facilement vos ventes, clients et performances en temps réel." },
  { title: "📣 Système de prise de rendez-vous", icon: creator, explication: "Je crée un système de réservation en ligne simple pour permettre à vos clients de prendre rendez-vous facilement." },
  { title: "📈 Optimisation de visibilité (SEO + performance)", icon: creator, explication: "J’améliore la vitesse et la visibilité de votre site pour attirer plus de visiteurs depuis Google." },
  { title: "🎨 Portfolio personnel", icon: creator, explication: "Je crée un site personnel pour présenter vos compétences, projets et expériences de manière professionnelle comme celui sur lequel vous naviguez actuellement." },
  { title: "📱 Blog personnel", icon: creator, explication: "Je développe un blog simple pour publier vos idées, expériences ou contenus en ligne." },
  { title: "📷 Galerie ou showcase", icon: creator, explication: "Je crée un espace en ligne pour afficher vos créations, photos ou projets de manière élégante." },
  { title: "🛒 Création de site vitrine", icon: creator, explication: "Je crée un site professionnel pour présenter votre activité, vos services et vos contacts afin d’améliorer votre image et attirer de nouveaux clients en ligne." },
  
];

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "ReactJS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: laravel },
];

const experiences = [
  {
    title: "Développement Back-End",
    company_name: "Ecole Supérieure La Canadienne",
    icon: cfpc,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    technologies: ["PHP", "Laravel", "NodeJS"],
    location: "Bafoussam, Cameroun",
   points: [
  "Développement d’API backend avec PHP / Laravel.",
  "Gestion et optimisation de bases de données MySQL.",
  "Création de systèmes d’authentification sécurisés.",
  "Conception de structures backend évolutives (migrations, logique métier).",
],
    },
    
        {
          title: "Développement Front-End",
          company_name: "Ecole Supérieure La Canadienne",
          icon: cfpc,
          iconBg: "#E6DEDD",
          date: "Janvier 2021 - Février 2022",
          technologies: ["JavaScript", "ReactJS", "Redux Toolkit"],
          location: "Bafoussam, Cameroun",
         points: [
  "Développement d’interfaces dynamiques avec React et gestion d’état.",
  "Intégration d’API REST pour connecter le front-end au backend PHP/Laravel.",
  "Création de composants réutilisables et maintenables.",
  "Optimisation de l’expérience utilisateur et des performances UI.",
],
        },
  //       {
  //         title: "Développement Front-End",
  //         company_name: "Ecole Supérieure La Canadienne",
  //   icon: cfpc,
  //   iconBg: "#E6DEDD",
  //   date: "Janvier 2023 - Présent",
  //   technologies: ["ReactJS", "TypeScript", "Three.js", "Redux Toolkit"],
  //   location: "Bafoussam, Cameroun",
  //   points: [
  //     "Création d'expériences 3D interactives avec Three.js.",
  //     "Optimisation de la gestion d'état avec Redux Toolkit.",
  //     "Développement de composants TypeScript réutilisables.",
  //     "Intégration d'animations fluides avec l'équipe UX/UI.",
  //   ],
  // },
  {
        title: "Développement Full Stack",
        company_name: "Ecole Supérieure La Canadienne",
        icon: cfpc,
        iconBg: "#383E56",
        date: "Mars 2020 - Avril 2021",
        technologies: ["JavaScript", "ReactJS", "NextJS", "Laravel"],
        location: "Bafoussam, Cameroun",
       points: [
  "Développement d’applications web complètes (frontend React + backend PHP/Laravel).",
  "Transformation de maquettes Figma en interfaces web responsives et interactives.",
  "Création et consommation d’API REST pour connecter frontend et backend.",
  "Optimisation des performances et de l’expérience utilisateur (chargement, rendu, fluidité).",
],
        },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Frank m'a prouvé le contraire.",
    name: "Dr. Alain SIMO",
    designation: "Directeur Général",
    company: "Omiie Solutions",
    image: "/",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Frank.",
    name: "Herman Waffo",
    designation: "Directeur des Opérations",
    company: "S.A.B.C",
    image: "/",
  },
  {
    testimonial:
      "Après l'optimisation de notre site web par Frank, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Mlle Alice Kamdem",
    designation: "Directrice Technique",
    company: "456 Enterprises",
    image: "/",
  },
];

const projects = [
  // {
  //   name: "Projets GitHub",
  //   description:
  //     "Projets personnels et collaboratifs sur GitHub, démontrant mes compétences en développement web full-stack.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "laravel", color: "green-text-gradient" },
  //     { name: "tailwind", color: "pink-text-gradient" },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/Frankam487",
  // },
   {
    name: "Takoly Immobilier",
    description:
      "Application web pour promouvoir des biens immobilier dans toutes les villes du cameroun à des prix concurrenciels",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Laravel", color: "cyan-text-gradient" },
      // { name: "Inertia.js", color: "teal-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],
    image: "/immobilier.jpg",
    source_code_link: "https://takoly.com",
  },
  {
    name: "Projets En Graphisme",
    description:
      "Découvrez mes réalisations graphiques et mes projets créatifs.",
    tags: [
      { name: "Photoshop", color: "blue-text-gradient" },
      { name: "Figma", color: "green-text-gradient" },
     
    ],
    image: "/graphism.avif",
    source_code_link: "/infographie",
  },
    {
    name: "Elearning Full App👌",
    description:
      "Plateforme web pour découvrir mes cours, suivre des formations en ligne et accéder à des ressources pédagogiques.",
    tags: [
      { name: "Laravel", color: "pink-text-gradient" },
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: "/study.jpeg",
    source_code_link: "https://frankamdev.getomiie.com",
  },
  {
    name: "Omiie Technologies",
    description:
      "Application web pour l'achat de matériel électronique et la consultation des tarifs de vente et de maintenance.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Next.js", color: "cyan-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: "/omi.jpg",
    source_code_link: "https://getomiie.com",
  },

  // {
  //   name: "portfolio à vendre👌",
  //   description:
  //     "Portfolio interactif présentant mes réalisations et permettant aux clients de découvrir mes services et tarifs.",
  //   tags: [
  //     { name: "React", color: "blue-text-gradient" },
  //     { name: "TailwindCSS", color: "green-text-gradient" },
     
  //   ],
  //   image: "/pp.jpg",
  //   source_code_link: "https://my-portfolio-steel-three-91.vercel.app/",
  // },
 
  
  
];

export { services, technologies, experiences, testimonials, projects };



