/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Atharv's Portfolio",
  description:
    "A passionate Full stack developer thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Atharv Kulkarni Portfolio",
    type: "website",
    
  },
};

//Home Page
const greeting = {
  title: "Atharv Kulkarni",
  logo_name:"Atharv Kulkarni",
  nickname: "",
  subTitle:
    "A passionate Full Stack developer who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/Atharvk7/myportfolio",
  githubProfile: "https://github.com/Atharvk7",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Atharvk7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/atharv-kulkarni777/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:apdk.2017@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Atharv_13",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
  
];

const skills = {
  data: [

    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
         {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#61DAFB",
          },
        },
       
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#663399",
          },
        },
       
      ],
    },
    {
      title: "Backend Development and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "red",
          
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#FFCA28",
          },
        },
         {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
         {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Atharv13/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://github.com/Atharvk7/",
    },
   
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Pune",
      subtitle: "B.Eng. in Computer Engineering",
      logo_path: "sppu.jpg",
      alt_name: "University of Pune",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Computer Networks, AI etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://www.unipune.ac.in/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/5bed0dd73506",
      alt_name: "Stanford University",
      color_code: "cyan",
    },
    {
      title: "C++",
      subtitle: "C++ programming",
      logo_path: "sololearn.png",
      certificate_link:
        "https://www.sololearn.com/Certificate/CT-FRNXGVPP/png",
      alt_name: "Google",
      color_code: "black",
    },
    {
      title: "React and Redux",
      subtitle: "- Alex Aklson",
      logo_path: "sololearn.png",
      certificate_link:
        "https://www.sololearn.com/Certificate/CT-RLJP9LS5/jpg",
      alt_name: "IBM",
      color_code: "black",
    },
 {
      title: "Frontend Development",
      subtitle: "- Andrew Ng",
      logo_path: "greatlearning.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "white",
    },

  
 
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full stack developer",
          company: "MindKind Inc.",
          company_url: "https://mindkind.life",
          logo_path: "favicon.ico",
          duration: "Feb 2023 - Sept 2023",
          location: "CA, USA (remote)",
          description:
            "I worked NextJS, NodeJS, MySQL and DigitalOcean based stack ",
          color: "#0879bf",
        },
        {
          title: "Web developement intern",
          company: "Agrivision4U",
          company_url: "https://www.linkedin.com/company/agrivision4u-official/about/",
          logo_path: "favicon2.ico",
          duration: "April 2022 - June 2022",
          location:"Remote India",
          description:
            "I worked on Frontend components, API integrations in ReactJS",
          color: "#9b1578",
        },
        {
          title: "Programming and Full stack dev mentor",
          company: "The 10x Academy",
          company_url: "https://www.linkedin.com/company/the-10x-academy/about/",
          logo_path: "10x.jpg",
          duration: "July 2022 - Jan 2023",
          location: "Remote India",
          description:
            "I taught JavaScript to hundreads of university students from basics and programming fundamentals.",
          color: "#fc1f20",
        },
      ],
    },

    {
      title: "Open Source and Volunteer work",
      experiences: [
        {
          title: "Open souce contributor",
          company: "Girscript Foundation",
          company_url: "https://gssoc.girlscript.tech/",
          logo_path: "girlsscript.jpg",
          duration: "20th May - 10th August 2023",
          location: "Pune India",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Open source contributor",
          company: "Social summer of code",
          company_url: "https://ssoc.devfolio.co/",
          logo_path: "social.jpg",
          duration: "",
          location: "Pune, India",
          description:
            "Participated in SSoC as open source contributor major contributed in frontend projects.",
          color: "#D83B01",
        },
        
        {
          title: "ET Department AISSMS College of Engineering",
          company: "AISSMS COE",
          company_url:
            "",
          logo_path: "college.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
     
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Frontend, Backend, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@Atharv_77",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bhramachaitanya society, Warje Naka, Pune - 411058",
    locality: "Pune",
    country: "IN",
    region: "Pune",
    postalCode: "385520",
    streetAddress: "Warje",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
