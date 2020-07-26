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
      iconUrl: accountsIconsPath + "behance.svg",
      link: "",
      fontIcon: "behance",
    },
    {
      title: "Dribble",
      iconUrl: accountsIconsPath + "dribble.svg",
      link: "",
      fontIcon: "dribbble",
    },
  ],
};

const toolsIconsPath = "/assets/images/portfolio/case-studies/";
const DESIGN_TOOLS = {
  xd: { title: "Adobe XD", iconUrl: toolsIconsPath + "xd.svg" },
  photoshop: { title: "Adobe Photoshop", iconUrl: toolsIconsPath + "ps.svg" },
};

export const PROJECTS = {
  mfg: {
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
    screenshots: [{ title: "", imgUrl: "", alt: "" }],
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
    fullProject: [ACCOUNTS.design[2], ACCOUNTS.design[3]],
  },
};
