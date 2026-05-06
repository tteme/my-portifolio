/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Temesgen Nega",
  title: "Hi all, I'm Temesgen",
  subTitle: emoji(
    "A Passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tteme",
  linkedin: "https://www.linkedin.com/in/temesgen/",
  gmail: "temesgennega75@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Developer focused on building practical and scalable web applications",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Building responsive and scalable web applications using modern technologies"
    ),
    emoji(
      "⚡ Building fullstack applications including ERP and inventory systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahir Dar University",
      logo: require("./assets/images/bahir_dar_university_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - April 2021",
      desc: "Participated in the project of web-based identity management system prototype.",
      descBullets: [
        "Developed a web-based identity management system prototype to simulate citizen registration and identification workflows",
        "Designed and implemented a relational database to manage user records efficiently using MySQL",
        "Improved data handling efficiency by structuring normalized database schemas",
        "Simulated real-world identity system workflows to understand large-scale system design concepts"
      ]
    }
  ]
};

//  stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "DAN Energy, Ethiopia",
      companylogo: require("./assets/images/danLog.png"),
      date: "September 2021 – March 2022",
      desc: "Worked as a Software Engineer and contributed to the development of the company's main website.",
      descBullets: [
        "Developed and maintained the company’s main website using React",
        "Built reusable and responsive UI components to ensure consistent design across pages",
        "Collaborated with team members to gather requirements and deliver production-ready features"
      ]
    },
    {
      role: "Software Engineer",
      company: "AddisPay",
      companylogo: require("./assets/images/addispayLogo.png"),
      date: "May 2022 – May 2023",
      desc: "Worked as a Software Engineer at AddisPay, contributing to ERP system development.",
      descBullets: [
        "Contributed to the development of an Enterprise Resource Planning (ERP) system supporting business operations",
        "Gained experience working with complex, real-world business logic and systems",
        "Collaborated with cross-functional teams to gather and implement system requirements"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "ICT Incubation Center",
      companylogo: require("./assets/images/ICT-Incubation.png"),
      date: "july 2019 – october 2019",
      desc: "Worked as a Software Engineer Intern at ICT Incubation Center during university",
      descBullets: [
        "Developed a web-based inventory management system",
        "Implemented features for product tracking, stock management, and reporting",
        "Gained hands-on experience in fullstack development and real-world problem solving"
      ]
    }
  ]
};

/*  Github Pinned Projects */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/enat-logo-sm.png"),
      projectName: "Enat Healthcare Solution",
      projectDesc:
        "Currently developing a fullstack healthcare application using React and Node.js, focused on real-world problem solving.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tteme/Enat-healthcare-solution-application"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/netflix-logo.png"),
      projectName: "Netflix Clone",
      projectDesc:
        "A responsive Netflix clone built with React, featuring dynamic UI components and modern design patterns.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tteme/Netflix-application-clone"
        }
      ]
    },
    {
      image: require("./assets/images/amazon-logo.png"),
      projectName: "Amazon Clone",
      projectDesc:
        "An e-commerce web application clone built with React, implementing product listing and user interface interactions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/tteme/Amazon-Application-Clone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      imageAlt: "bahir Bar University Logo",
      footerLink: [
        {
          name: "View Degree Certificate",
          url: "https://drive.google.com/file/d/106riZb6QA3_Kl-ZSOfZiygYRfMN7HKNU/view?usp=sharing"
        }
      ]
    },
    {
      title: "Addis Ababa University",
      subtitle: "Python Training Certification.",
      image: require("./assets/images/addis-ababa-university-logo.png"),
      imageAlt: "addis Ababa university logo",
      footerLink: [
        {
          name: "View certificate",
          url: "https://drive.google.com/file/d/1XGn7BdiYdKXcQG7DMC42efRncJE7HDBC/view?usp=sharing"
        }
      ]
    },

    {
      title: "DAN Energy Ethiopia",
      subtitle: "Experience Letter",
      image: require("./assets/images/danLog.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Letter",
          url: "https://drive.google.com/file/d/1KYtLkVVu7HYCyKCmMHFbDdz1DUBrALPQ/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "/resume.pdf", 
  display: true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+251963699817",
  email_address: "temesgennega75@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  resumeSection
};
