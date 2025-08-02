/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import cplusplusLogo from "./assets/images/cplusplus.svg";
import csharpLogo from "./assets/images/csharp.svg";
import flaskLogo from "./assets/images/flask.svg";
import djangoLogo from "./assets/images/django.svg";
import gcpLogo from "./assets/images/gcp.svg";
import springbootLogo from "./assets/images/springboot.svg";
import hibernateLogo from "./assets/images/hibernate.svg";

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
  username: "Keeran Dhakal",
  title: "Hi all, I'm Keeran",
  subTitle: emoji(
    "A passionate software engineer with professional experience building scalable applications, APIs, and microservices. Proficient in various programming languages, databases, and RESTful architecture, with additional exposure to containerization, cloud deployment, and CI/CD practices. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhakalkeeran",
  linkedin: "https://www.linkedin.com/in/keerandhakal/",
  gmail: "keeran.dhakal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "SOFTWARE DEVELOPER WITH ENTHUSIASM TO EXPLORE AND LEARN NEW TECH STACKS",
  skills: [
    emoji(
      "⚡ Build software using Python, Java, C++, C# and other related technologies"
    ),
    emoji("⚡ Create APIs and integrate into the product"),
    emoji(
      "⚡ Integration of databases, containerization and automated deployment with CI/CD"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      svgLogo: cplusplusLogo
    },
    // {
    //   skillName: "C#",
    //   svgLogo: csharpLogo
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Flask",
      svgLogo: flaskLogo
    },
    {
      skillName: "Django",
      svgLogo: djangoLogo
    },
    {
      skillName: "Spring Boot",
      svgLogo: springbootLogo
    },
    {
      skillName: "Hibernate",
      svgLogo: hibernateLogo
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      svgLogo: gcpLogo
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  skillsTable: [
    {
      category: "Programming Languages",
      allItems: ["Python", "Java", "C++", "SQL", "HTML", "CSS"]
    },
    {
      category: "Tools & Frameworks",
      allItems: ["Flask", "Django", "Spring Boot", "Hibernate", "CMake", "Git"]
    },
    {
      category: "Data Processing",
      allItems: ["Pandas", "NumPy", "Matplolib", "Power BI"]
    },
    {
      category: "Programming Languages",
      allItems: ["Python", "Java", "C++", "SQL", "HTML", "CSS"]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Nebraska Omaha",
      logo: require("./assets/images/unomaha.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "GPA: 3.96",
        ["Computer Science Courseworks", "Design and Analysis of Algorithms, Software Specifications and Design, Advanced Operating Systems, Introduction to Cloud Computing, Advanced Concepts of Programming Language"],
        ["Artificial Intelligence Courseworks", "Introduction to Aritificial Intelligence, Computer Vision and Pattern Recognition, Advanced Natural Language Understanding"],
      ]
    },
    {
      schoolName: "Institute of Engineering, Pulchowk Campus, Tribhuvan University",
      logo: require("./assets/images/ioe.jpg"),
      subHeader: "Bachelor of Electronics and Communication Engineering",
      duration: "September 2016 - April 2021",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [["Relevant Courseworks", "Computer Programming using C, Object Oriented Programming using C++, Computer Graphics, Artificial Intelligence, Data Mining, Big Data Technologies, Digital Signal Processing, Computer Networks, Microprocessors"]]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "University of Nebraska Omaha, NLPKR Lab",
      companylogo: require("./assets/images/unomaha.png"),
      date: "August 2023 – May 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Engineer",
      company: "Docsumo",
      companylogo: require("./assets/images/docsumo.jpeg"),
      date: "August 2021 – July 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Docsumo",
      companylogo: require("./assets/images/docsumo.jpeg"),
      date: "June 2021 – July 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME RESEARCH AND PERSONAL PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "EZSMTv3",
      projectDesc: "A Constraint ANswer Set Programming Solver",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/ylierler/ezsmtv3/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc: "Benchmarking Platform for ASP solvers using Docker containers",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Details ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "keeran.dhakal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
