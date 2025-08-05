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
  title: "Hi, I'm Keeran",
  subTitle: [
    "A passionate software engineer with professional experience in building scalable applications, APIs, and microservices. \
    I am proficient in various programming languages, databases, and RESTful architecture, along with additional exposure to containerization, \
    cloud deployment, and CI/CD practices.",
    "I recently graduated with a Master's degree in Computer Science from the University of Nebraska Omaha.\
    During my graduate studies, I worked as a Graduate Research Assistant under the advisory of Dr. Yuliya Lierler and Dr. Jorge Fandinno Garcia. \
    My research primarily focused on developing a CASP solver, EZSMTv3, and building a benchmarking platform for ASP solvers.",
    "Before joining my graduate studies, I worked as a software engineer for two years. I received my undergraduate degree in \
    Electronics and Communication Engineering from the Institute of Engineering, Pulchowk Campus, Tribhuvan University.",
    "Right now, I am seeking full-time opportunities in software development, data science or artificial  intelligence."
  ],
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhakalkeeran",
  linkedin: "https://www.linkedin.com/in/keerandhakal/",
  gmail: "keeran.dhakal@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "SOFTWARE DEVELOPER WITH EXPERIENCE IN THE FOLLOWING TECH STACKS",
  skills: [
    emoji("⚡ ENTHUSIASM TO EXPLORE AND ALWAYS OPEN TO LEARN NEW TECHNOLOGIES")
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
    // {
    //   skillName: "Machine Learning",
    //   fontAwesomeClassname: "fas fa-hexagon-nodes"
    // }
  ],

  skillsTable: [
    {
      category: "Programming Languages",
      allItems: ["Python", "Java", "C++", "C", "JavaScript", "SQL"]
    },
    {
      category: "Backend",
      allItems: ["Flask", "Django", "Spring Boot", "Hibernate", "Streamlit"]
    },
    {
      category: "Frontend",
      allItems: ["HTML", "CSS", "React", "Bootstrap"]
    },
    {
      category: "Cloud & DevOps",
      allItems: ["Docker", "CI/CD", "AWS", "GCP"]
    },
    {
      category: "Machine Learning/Deep Learning",
      allItems: [
        "Natural Language Processing",
        "Computer Vision",
        "LLM",
        "GAN",
        "Neural Networks",
        "Information Retrieval"
      ]
    },
    {
      category: "Frameworks & Tools",
      allItems: [
        "TensorFlow",
        "Pytorch",
        "OpenCV",
        "SpaCy",
        "NLTK",
        "CMake",
        "Git",
        "Bash",
        "Linux"
      ]
    },
    {
      category: "Data Processing",
      allItems: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Power BI"]
    },
    {
      category: "Soft Skills",
      allItems: [
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Good Communication",
        "Time Management"
      ]
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
      desc: "",
      descBullets: [
        "GPA: 3.96",
        [
          "Computer Science Courseworks",
          "Design and Analysis of Algorithms, Software Specifications and Design, Advanced Operating Systems, Introduction to Cloud Computing, Advanced Concepts of Programming Language"
        ],
        [
          "Artificial Intelligence Courseworks",
          "Introduction to Aritificial Intelligence, Image Processing and Computer Vision, Advanced Natural Language Understanding"
        ]
      ]
    },
    {
      schoolName:
        "Institute of Engineering, Pulchowk Campus, Tribhuvan University",
      logo: require("./assets/images/ioe.jpg"),
      subHeader: "Bachelor of Electronics and Communication Engineering",
      duration: "September 2016 - April 2021",
      desc: "",
      descBullets: [
        [
          "Computer Science Courseworks",
          "Computer Programming with C, Object Oriented Programming with C++, Computer Organization and Architecture, Embedded System, \
          Discrete Structure, Computer Graphics, Computer Networks, Microprocessor, Digital Signal Processing, Project Management"
        ],
        [
          "Artificial Intelligence Courseworks",
          "Artificial Intelligence, Data Mining, Big Data Technologies"
        ],
        [
          "Mathematics Courseworks",
          "Probability and Statistics, Calculus I, Calculus II, Linear Algebra, Numerical Methods, Applied Mathematics"
        ]
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
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
      desc: "",
      descBullets: [
        "Designed and implemented a Constraint Answer Set Programming (CASP) solver system capable of handling 1000+ combinatorial optimization instances, improving solver scalability and expressiveness. ",
        "Built a Dockerized benchmarking infrastructure that automated performance testing across 3+ solver systems, reducing evaluation time by 70%.",
        "Developed 20+ modular components using C++, Python, and CMake, ensuring high performance, portability, and reproducibility of experiments.",
        "Collaborated with 2 faculty advisors and 3+ peer researchers on system design and architecture, contributing to research publication submissions.",
        "Maintained a clean, extensible codebase to support future solver extensions and simplify integration with logic-based toolchains."
      ]
    },
    {
      role: "Software Engineer",
      company: "Docsumo",
      companylogo: require("./assets/images/docsumo.jpeg"),
      date: "August 2021 – July 2023",
      desc: "",
      descBullets: [
        "Designed and maintained 10+ high-performance microservices and RESTful APIs using Python and Flask, enabling efficient processing of 30,000+ financial documents across 20+ formats.",
        "Deployed and managed scalable backend systems in production with Docker, Google Cloud Platform, and CI/CD pipelines, maintaining 99.9% service uptime.",
        "Built internal data extraction frameworks using machine learning algorithms and LLMs that increased field-level accuracy to 95%+ and reduced document processing latency by 25%.",
        "Developed and maintained unit and integration test suites with a focus on test-driven development, improving code reliability, and catching 90%+ of bugs pre-release.",
        "Collaborated with cross-functional teams (Product, QA, ML) during bi-weekly Agile sprints, contributing to 20+ successful production deployments and driving feature delivery from ideation to release."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Docsumo",
      companylogo: require("./assets/images/docsumo.jpeg"),
      date: "June 2021 – July 2021",
      desc: "",
      descBullets: [
        "Trained various machine learning models for information retrieval and extraction from financial documents.",
        "Used LLMs and Spacy for Named Entity Recognition (NER)."
      ]
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
  subtitle:
    "SOME RESEARCH PROJECTS AND PERSONAL PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/ezsmt_interface.png"),
      projectName: "EZSMTv3",
      projectDesc: "A Constraint Answer Set Programming Solver",
      linkedUrl: "https://github.com/ylierler/ezsmtv3/",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/ylierler/ezsmtv3/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/reproducible_benchmarking_platform.jpg"),
      projectName: "Reproducible Benchmarking Platform using Docker",
      projectDesc:
        "Benchmarking Platform for ASP solvers using Docker containers",
      linkedUrl: "https://github.com/jorgefandinno/eclingo-benchmark-docker",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      image: require("./assets/images/analogMeterReader.png"),
      projectName: "Analog Meter Reading using Computer Vision",
      projectDesc:
        "Uses YOLOv7 to locate the meter in the image and image processing algorithms to detect the position of the needle",
      linkedUrl: "https://github.com/dhakalkeeran/analog-meter-reader.git",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/dhakalkeeran/analog-meter-reader.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "Some of my achievements",
  id: "achievements", // custom id to set for achievements div

  achievementsCards: [
    {
      title: "Outstanding Research Award",
      subtitle:
        "Received outstanding research award for poster presentation at the University of Nebraska Omaha",
      image: require("./assets/images/posterPresentation.png"),
      imageAlt: "Poster",
      footerLink: [
        {
          name: "Poster",
          url: "https://drive.google.com/file/d/10ddECEnsMztYBFBnMQBkiy0W-_I-hP4a/view?usp=drive_link"
        },
        {
          name: "Research Project",
          url: "https://github.com/jorgefandinno/eclingo-benchmark-docker"
        }
      ]
    },
    {
      title: "GRACA Grant",
      subtitle:
        "Selected for GRACA grant to work on research for the summer of 2024 at the University of Nebraska Omaha",
      image: require("./assets/images/unomaha.png"),
      imageAlt: "UNO logo",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.unomaha.edu/office-of-research-and-creative-activity/for-students/graca.php"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const certifcationSection = {
  title: emoji("Certifications 📜"),
  subtitle: "Listing some Certifications that I have completed",
  id: "certifications", // custom id to set for certifications div

  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle:
        "Completed Deep Learning specialization from deeplearning.ai which includes courses such as Neural Networks and Deep Learning, Improving Deep Neural Networks, Structuring \
        Machine Learning Projects, Convolution Neural Networks, and Sequence Models",
      image: require("./assets/images/deepLearning.png"),
      imageAlt: "DL specialization certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/5a2c8b68c15922f45c513022451877d4"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle:
        "Completed Machine Learning  from the Stanford University offered on Coursera",
      image: require("./assets/images/machineLearning.png"),
      imageAlt: "Machine Learning certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/712d010f815df59a141a990a48319383"
        }
      ]
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle:
        "Completed Bootstrap 4 course on Coursera from the Hong Kong University of Science and Technology",
      image: require("./assets/images/bootstrap.png"),
      imageAlt: "Machine Learning certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/beb817bd116c891f654a56b45eb7012a"
        }
      ]
    },
    {
      title: "JavaScript Essentials",
      subtitle: "Completed JavaScript Essentials course on Udemy",
      image: require("./assets/images/javascript.png"),
      imageAlt: "Machine Learning certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-A0GZMFEZ/"
        }
      ]
    },
    {
      title: "Introduction to Web Development",
      subtitle:
        "Completed introductory web development course on Coursera from UCDavis",
      image: require("./assets/images/webDevelopment.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/b695b331f803e83f23156865792732b0"
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
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
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
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
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
  subtitle: "Want to discuss a project or just say hi?",
  // number: "+1-XXX-XXX-XXXX",
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
  certifcationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
