const accountsIconsPath = "/assets/images/accounts/";

export const ACCOUNTS = {
  social: [
    {
      title: "Facebook",
      iconUrl: accountsIconsPath + "facebook.svg",
      link: "",
      fontIcon: "facebook-f",
    },
    {
      title: "twitter",
      iconUrl: accountsIconsPath + "twitter.svg",
      link: "",
      fontIcon: "twitter",
    },
  ],
  formal: [
    {
      title: "Github",
      iconUrl: accountsIconsPath + "github.svg",
      link: "",
      fontIcon: "github",
    },
    {
      title: "Gitlab",
      iconUrl: accountsIconsPath + "gitlab.svg",
      link: "",
      fontIcon: "gitlab",
    },
    {
      title: "Linked In",
      iconUrl: accountsIconsPath + "linkedin.svg",
      link: "",
      fontIcon: "linkedin",
    },
  ],
  design: [
    {
      title: "Instagram",
      iconUrl: accountsIconsPath + "instagram.svg",
      link: "",
      fontIcon: "instagram",
    },
    {
      title: "Behance",
      link: "",
      fontIcon: "behance",
    },
    {
      title: "Dribble",
      link: "",
      fontIcon: "dribbble",
    },
  ],
};

const toolsIconsPath = "/assets/images/portfolio/case-studies/";
const DESIGN_TOOLS = {
  xd: {
    title: "Adobe XD",
    iconUrl: toolsIconsPath + "xd.svg",
    alt: "Adobe Xd Icon",
  },
  photoshop: {
    title: "Adobe Photoshop",
    iconUrl: toolsIconsPath + "ps.svg",
    alt: "Adobe Photoshop Icon",
  },
};

export const PROJECTS = {
  mfg: {
    header: {
      name: "My Fitness Goal",
      description: [
        "MFG is a web app where users can find coaches, nutritionists, gyms and nutrition clinics. a user can reach for the desired staff member (coach or nutritionist), find an empty slot in their schedules and request a reservation or booking.",
        "sers can also find branches (gyms or clinics) based on the city and find info about them such as opening hours, available classes, photo gallery, addresses etc.",
      ],
      imgUrl: "/assets/images/portfolio/case-studies/header-images/mfg.jpg",
      alt: "Woman doing yoga",
    },
    features: [
      "User/staff accounts",
      "Gym, clinic info page",
      "Apply filters to find the proper staff member based on location, gender preference or specialty",
      "Body weight analysis calculator",
      "Dashboard",
    ],
    role: ["UI - UX Designer", "Full Stack Developer"],
    technologies: ["React", "Redux", "Laravel", "MySQL"],
    designTools: [DESIGN_TOOLS.xd, DESIGN_TOOLS.photoshop],
    pallet: ["#fff701", "#242529", "#2e2f33", "#d5d5d6"],
    typography: ["Roboto [Regular - Condensed]", "Edwardian Script ITC"],
    screenshots: null,
    video: "",
    learned: [
      "Interpreting client's needs to a real project.",
      "More understanding and convenience working with react component life cycle.",
      "Using PropTypes to document my components.",
      "Better module and redux reducers structuring.",
      "Working with multiple redux stores categorized by feature makes the app way more organized and cleaner.",
    ],
    improvement: [
      "Consistency in naming and structure patterns",
      "Use 3rd party plugins to validate client side forms",
    ],
    fullProject: [ACCOUNTS.design[1], ACCOUNTS.design[2]],
  },
  scheduler: {
    header: {
      name: "Task Scheduler",
      description: [
        "Task scheduler was part of my last internship evaluation test, it was the first full SPA project i worked on",
        "As its name's descripe it's a simple scheduler where the user can organize his/her tasks and interact with other people",
      ],
      imgUrl: "",
      alt: "",
    },
    features: [
      "User/staff accounts",
      "Add, Edit, Remove and mark done tasks",
      "Other users Subscription",
      "Search other users",
    ],
    role: ["UI - UX Designer", "Full Stack Developer"],
    technologies: ["React", "React Native", "Redux", "Laravel", "MySQL"],
    designTools: [DESIGN_TOOLS.xd],
    pallet: ["#FF7B62", "#2C2F32", "#6c757d"],
    typography: ["Roboto [Regular - Condensed]"],
    screenshots: null,
    video: "",
    learned: [
      "Interpreting written requirments to a real project",
      "More understanding and convenience working with redux",
      "More understanding and convenience working with laravel",
      "Better module and redux reducers structuring.",
    ],
    improvement: [
      "Better project structuring by using a separate redux store for each feature",
    ],
    fullProject: [ACCOUNTS.design[1], ACCOUNTS.design[2]],
  },
  quantum: {
    header: {
      name: "Quantum",
      description: [
        "Quantum is a student mobility service based in mansoura, they nedded a website to get students familiar with their service, countries they cover and the process to apply for a certain program",
      ],
      imgUrl: "/assets/images/portfolio/case-studies/header-images/quantum.jpg",
      alt: "Woman doing yoga",
    },
    features: null,
    role: ["UI - UX Designer", "Full Stack Developer"],
    technologies: ["HTML5", "PHP", "JavaScript", "JQuery"],
    designTools: [DESIGN_TOOLS.xd, DESIGN_TOOLS.photoshop],
    pallet: ["#FB7262", "#F0988E", "#17486D", "#999999"],
    typography: ["Roboto [Regular]", "Georgia"],
    screenshots: null,
    video: "",
    learned: [
      "More understanding of the business logic and try to convert this to a real project",
      "Working with multilingual website",
    ],
    improvement: null,
    fullProject: [ACCOUNTS.design[1], ACCOUNTS.design[2]],
  },
};

// [{ title: "", imgUrl: "", alt: "" }]
