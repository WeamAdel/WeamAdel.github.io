const accountsIconsPath = "/assets/images/accounts/";

export const ACCOUNTS = {
  social: [
    {
      title: "Facebook",
      iconUrl: accountsIconsPath + "facebook.svg",
      link: "https://www.facebook.com/WeaamAdel94",
      fontIcon: "facebook-f",
    },
    {
      title: "twitter",
      iconUrl: accountsIconsPath + "twitter.svg",
      link: "https://twitter.com/weamadel94",
      fontIcon: "twitter",
    },
  ],
  formal: [
    {
      title: "Github",
      iconUrl: accountsIconsPath + "github.svg",
      link: "https://github.com/WeamAdel",
      fontIcon: "github",
    },
    {
      title: "Gitlab",
      iconUrl: accountsIconsPath + "gitlab.svg",
      link: "https://gitlab.com/weamadel1994",
      fontIcon: "gitlab",
    },
    {
      title: "Linked In",
      iconUrl: accountsIconsPath + "linkedin.svg",
      link: "https://www.linkedin.com/in/weam-adel-083593a0/",
      fontIcon: "linkedin",
    },
  ],
  design: [
    {
      title: "Instagram",
      iconUrl: accountsIconsPath + "instagram.svg",
      link: "https://www.instagram.com/weamadel94/",
      fontIcon: "instagram",
    },
    {
      title: "Behance",
      link: "https://www.behance.net/weamadel",
      fontIcon: "behance",
    },
    {
      title: "Dribble",
      link: "https://dribbble.com/weamadel94",
      fontIcon: "dribbble",
    },
  ],
};

const toolsIconsPath = "/assets/images/portfolio/icons/case-study/";
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

const basics = ["HTML5", "SASS", "Bootstrap4", "JavaScript", "JQuery", "PHP"];

export const PROJECTS = {
  mfg: {
    header: {
      name: "My Fitness Goal",
      year: 2020,
      description: [
        "MFG is a web app where users can find coaches, nutritionists, gyms and nutrition clinics. a user can reach for the desired staff member (coach or nutritionist), find an empty slot in their schedules and request a reservation or booking.",
        "Users can also find branches (gyms or clinics) based on the city and find info about them such as opening hours, available classes, photo gallery, addresses etc.",
      ],
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
    screenshots: [
      {
        title: "Home Page Header",
        imgName: "header",
        alt: "Black Athlete Man",
      },
      {
        title: "Nutritionists Page",
        imgName: "nutritionists",
        alt:
          "Showing top nutritionists images and name with introduction to how booking nutritionists work and a quote of the importance of nutrition.",
      },
      {
        title: "Branches [Gyms & Clinics] Filtered By City",
        imgName: "branches",
        alt:
          "Cards displaying basic branches info, controls to filter branches by service and the city's image",
      },
      {
        title: "Nutrition Clinic Info",
        imgName: "clinic",
        alt:
          "Clinic's detailed info such as image, about, gallery, social links and opening hours",
      },
    ],
    video: true,
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
    fullProject: null,
  },
  scheduler: {
    header: {
      name: "Task Scheduler",
      year: 2019,
      description: [
        "Task scheduler was part of my last internship evaluation test, it was the first full SPA project i worked on. The scheduler is both mobile and web app.",
        "As its name descripes it's a simple scheduler where the user can organize his/her tasks and interact with other people",
      ],
      alt: "Sandwatch near to blank calendar and paper pins.",
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
    screenshots: [
      {
        title: "Landing Page Of React Native App",
        imgName: "landing",
        alt: "",
      },
      {
        title: "Login Page",
        imgName: "login",
        alt: "",
      },
      {
        title: "User Profile",
        imgName: "profile",
        alt: "",
      },
      {
        title: "Account Settings",
        imgName: "account-settings",
        alt: "",
      },
    ],
    video: null,
    learned: [
      "Interpreting written requirments to a real project",
      "More understanding and convenience working with redux",
      "More understanding and convenience working with laravel",
      "Better module and redux reducers structuring.",
    ],
    improvement: [
      "Better project structuring by using a separate redux store for each feature",
    ],
    fullProject: null,
  },
  quantum: {
    header: {
      name: "Quantum Student Mobility",
      year: 2019,
      description: [
        "Quantum is a student mobility service based in Egypt, they nedded a website to get students familiar with their service, countries they cover and the process to apply for a certain program",
      ],
      alt: "Young black women students holding books",
    },
    features: null,
    role: ["UI - UX Designer", "Front-End Developer"],
    technologies: basics,
    designTools: [DESIGN_TOOLS.xd, DESIGN_TOOLS.photoshop],
    pallet: ["#FB7262", "#F0988E", "#17486D", "#999999"],
    typography: ["Roboto [Regular]", "Georgia"],
    screenshots: [
      {
        title: "Header Slider",
        imgName: "header",
        alt: "Young black women students holding books",
      },
      {
        title: "Introduction to Country",
        imgName: "country-intro",
        alt:
          "Information About Studying in Canada and a gallery of the country's landmarks.",
      },
      {
        title: "Universities Info",
        imgName: "universities",
        alt: "A List Of Universities Located In Russia ",
      },
    ],
    video: null,
    learned: [
      "More understanding of the business logic and try to convert this to a real project",
      "Working with multilingual website",
    ],
    improvement: null,
    fullProject: [
      {
        platform: ACCOUNTS.design[1],
        link:
          "https://www.behance.net/gallery/102648275/Quantum-Student-Mobility",
      },
    ],
  },
  pharmacy: {
    header: {
      name: "Pharmacy E-Commerce",
      year: 2019,
      description: [
        "Pharmacy is an E-commerce project built by the very basic front-end languages. This project is one of the first projects i've worked on as an intern in BlueOcean Solutions.",
      ],
      alt: "Syrum bottle near to syrum pipe placed over pearl balls",
    },
    features: null,
    role: ["UI - UX Designer", "Front-End Developer"],
    technologies: basics,
    designTools: [DESIGN_TOOLS.xd],
    pallet: ["#2DC4CF", "#2D2D2D", "#FFFFFF", "#F5F5F5"],
    typography: ["Roboto [Regular - Condensed]"],
    screenshots: null,
    video: null,
    learned: ["More Convenience working with Adobe Xd"],
    improvement: null,
    fullProject: null,
  },
  portfolio: {
    header: {
      name: "My Old Portfolio",
      year: 2019,
      description: [
        "My old portfolio is a single page resume that gives a brief introduction of who i am and what i can do.",
      ],
      alt:
        "Black Labtop near to a mug and placed on white bed sheet between grey pillows.",
    },
    features: null,
    role: ["UI - UX Designer", "Front-End Developer"],
    technologies: basics,
    designTools: [DESIGN_TOOLS.xd, DESIGN_TOOLS.photoshop],
    pallet: ["#f6efef", "#c1aabe", "#504f67", "#333240"],
    typography: ["Roboto [Regular]", "Showcard Gothic"],
    screenshots: [
      {
        title: "Page Header",
        imgName: "header-sc",
        alt:
          "Navigation bar, standing girl illustration and a beif introduction of who i am.",
      },
      {
        title: "Skills Section",
        imgName: "skills",
        alt:
          "Progress bars showing the level of progress in each of my coding and design skills.",
      },
      {
        title: "Portfolio Section",
        imgName: "portfolio",
        alt:
          "Project cards each consists of the project image, name and a button to show details.",
      },
    ],
    video: null,
    learned: [
      "Apply some of the UI design principles i learned",
      "More convenience working with responsive layouts",
      "Applying custom animations and more complex positionings",
    ],
    improvement: null,
    fullProject: [
      {
        platform: ACCOUNTS.design[1],
        link: "https://www.behance.net/gallery/79437657/Maria-Personal-Website",
      },
    ],
  },
};
