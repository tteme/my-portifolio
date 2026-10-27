/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Temesgen Nega",
  title: "Hi all, I'm Temesgen",
  subTitle: emoji(
    "I'm a Full Stack Software Engineer based in Addis Ababa, Ethiopia, with 3+ years of professional and independent experience building web applications, REST APIs, and database-driven business systems with React, Node.js, TypeScript, and SQL. At Digaf Microfinance I built an internal help desk platform used by 300+ staff across 10+ departments. I enjoy learning new technologies and building software that solves real problems, and I'm available to collaborate during US business hours.",
  ),
  resumeLink: "/Temesgen_Nega.pdf", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tteme",
  linkedin: "https://www.linkedin.com/in/temesgen-nega/",
  gmail: "temesgennega75@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Developer focused on building practical and scalable web applications",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end user interfaces for web applications using React",
    ),
    emoji(
      "⚡ Build REST APIs and backends with Node.js, Express, and SQL databases (PostgreSQL, MySQL)",
    ),
    emoji(
      "⚡ Deliver full-stack business systems with role-based access, notifications, reporting, and workflow automation",
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      // Font Awesome has no TypeScript brand icon, so a generic code icon is used
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "PostgreSQL / MySQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahir Dar University",
      logo: require("./assets/images/bahir_dar_university_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - February 2021",
      desc: "Participated in the project of web-based identity management system prototype.",
      descBullets: [
        "Developed a web-based identity management system prototype to simulate citizen registration and identification workflows",
        "Designed and implemented a relational database to manage user records efficiently using MySQL",
        "Improved data handling efficiency by structuring normalized database schemas",
        "Simulated real-world identity system workflows to understand large-scale system design concepts",
      ],
    },
  ],
};

//  stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section (newest first)

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Software Engineer",
      company: "Digaf Microfinance",
      // TODO: add this image file to src/assets/images/ (or point to any existing logo)
      companylogo: require("./assets/images/favicon1.ico"),
      date: "December 2024 – Present",
      desc: "Software Developer building internal business applications and supporting operational workflows used by 300+ staff across 10+ departments.",
      descBullets: [
        "Built and maintain an internal Help Desk Management System using React, Node.js, Express, and Prisma",
        "Implemented role-based access control, request tracking, notifications, SLA monitoring, and cross-department escalation",
        "Designed database models and REST APIs and integrated them with the React frontend",
        "Developed reporting features for management and supported day-to-day internal workflows",
      ],
    },
    {
      role: "Independent Full-Stack Developer",
      company: "Personal Projects",
      companylogo: require("./assets/images/enat-logo-sm.png"),
      date: "February 2023 – December 2024",
      desc: "Designed and built full-stack applications end to end while growing my backend and system design skills.",
      descBullets: [
        "Built Enat Smart Gate, a Node.js, Express, and MySQL backend with JWT authentication for residents, vehicles, user roles, gate access, and payment validation",
        "Developed Enat Healthcare Solution, a clinic management app with React, Redux Toolkit, Node.js, and MySQL",
        "Handled requirements, database design, API development, and frontend on my own",
      ],
    },
    {
      role: "Software Engineer",
      company: "DAN Energy, Ethiopia",
      companylogo: require("./assets/images/danLog.png"),
      date: "September 2022 – February 2023",
      desc: "Worked as a Software Engineer and contributed to the development of the company's main website.",
      descBullets: [
        "Developed all pages of the company's main website using React and JavaScript",
        "Built reusable and responsive UI components to ensure consistent design across pages",
        "Deployed the website on the company's server",
        "Collaborated with team members to gather requirements and deliver production-ready features",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "ICT Incubation Center",
      companylogo: require("./assets/images/ICT-Incubation.png"),
      date: "July 2020 – November 2020",
      desc: "Worked as a Software Engineer Intern at ICT Incubation Center during university",
      descBullets: [
        "Developed a web-based inventory management system",
        "Implemented features for product tracking, stock management, and reporting",
        "Gained hands-on experience in fullstack development and real-world problem solving",
      ],
    },
  ],
};

/*  Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "REAL-WORLD SYSTEMS THAT I DESIGNED AND BUILT",
  projects: [
    {
      // TODO: uses the same Digaf logo file as the work experience entry
      image: require("./assets/images/digafLogo.JPEG"),
      projectName: "Digaf Help Desk Management System",
      projectDesc:
        "Internal support platform used by 300+ staff across 10+ departments, with request workflows, role-based permissions, notifications, reports, SLA tracking, and department escalation. Built with React, Node.js, Express, and Prisma.",
      footerLink: [], // Internal company project, so no public link
    },
    {
      image: require("./assets/images/enatGateLogo.png"),
      projectName: "Enat Smart Gate",
      projectDesc:
        "Backend/API system for managing residents, vehicles, user roles, compound gate access, and payment validation. Built with Node.js, Express, MySQL, and JWT authentication.",
      footerLink: [
        // Add your repository link here when it is public:
        // { name: "GitHub", url: "https://github.com/tteme/<repo-name>" }
      ],
    },
    {
      image: require("./assets/images/enat-logo-sm.png"),
      projectName: "Enat Healthcare Solution",
      projectDesc:
        "Clinic management application with authentication, profiles, departments, doctors, appointments, and dashboards. Built with React, Redux Toolkit, Node.js, Express, and MySQL (in progress).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tteme/Enat-healthcare-solution-application",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bahir Dar University",
      subtitle: "Bachelor of Science in Computer Science",
      image: require("./assets/images/bahir_dar_university_logo.jpg"),
      imageAlt: "Bahir Dar University Logo",
      footerLink: [
        {
          name: "View Degree Certificate",
          url: "https://drive.google.com/file/d/106riZb6QA3_Kl-ZSOfZiygYRfMN7HKNU/view?usp=sharing",
        },
      ],
    },
    {
      title: "Addis Ababa University",
      subtitle: "Python Training Certification.",
      image: require("./assets/images/addis-ababa-university-logo.png"),
      imageAlt: "Addis Ababa University Logo",
      footerLink: [
        {
          name: "View certificate",
          url: "https://drive.google.com/file/d/1XGn7BdiYdKXcQG7DMC42efRncJE7HDBC/view?usp=sharing",
        },
      ],
    },

    {
      title: "DAN Energy Ethiopia",
      subtitle: "Experience Letter",
      image: require("./assets/images/danLog.png"),
      imageAlt: "DAN Energy Ethiopia Logo",
      footerLink: [
        {
          name: "View Letter",
          url: "https://drive.google.com/file/d/1KYtLkVVu7HYCyKCmMHFbDdz1DUBrALPQ/view?usp=sharing",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "/Temesgen_Nega_CV.pdf", // same file as the greeting button
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+251963699817",
  email_address: "temesgennega75@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
