// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import microservicesLogo from './assets/tech_logo/microservicesLogo.png';
import hibernateLogo from './assets/tech_logo/hibernate.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import flaskLogo from './assets/tech_logo/flaskLogo.png';
import oracledbLogo from './assets/tech_logo/oracledbLogo.png';
import stsLogo from './assets/tech_logo/stsLogo.png';
import eclipseLogo from './assets/tech_logo/eclipseLogo.png';

// Experience Section Logo's
import tcsLogo from './assets/company_logo/TCS-Tata-Consultancy-Services-Lo.png';
import zensarLogo from './assets/company_logo/zensar-technologies-logo.png';
import evLogo from './assets/company_logo/EdgeVerve_Infosys_Logo.png';

// Education Section Logo's
import snjbLogo from './assets/education_logo/SNJB Logo.png';
import sschsc from './assets/education_logo/sschsc.png';

// Project Section Logo's
import aashaPortalLogo from './assets/work_logo/aashaPortalLogo.png';
import naitroLogo from './assets/work_logo/naitroLogo.png';
import airlineLogo from './assets/work_logo/airlineLogo.png';
import rajnitiLogo from './assets/work_logo/rajnitiLogo.png';


export const SkillsInfo = [
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Microservices', logo: microservicesLogo },
      { name: 'Hibernate', logo: hibernateLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Oracle SQL', logo: oracledbLogo },
      { name: 'Flask', logo: flaskLogo },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Spring Tool Suite', logo: stsLogo },
      { name: 'Eclipse', logo: eclipseLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: evLogo,
      role: "Java Backend Developer",
      company: "EdgeVerve(Infosys Finacle)",
      date: "October 2025 - Present",
      desc: "  Developing backend REST APIs for the vNext core platform using Java and Spring Boot. Designed reusable endpoints suitable for multi-client deployments.",
      skills: [
        "Java",
        "Spring boot",
        "Microservice",
        "Node Js",
        "PostgreSQL",
        "Kafka",
      ],
    },
    {
      id: 1,
      img: tcsLogo,
      role: "Java Full Stack Developer",
      company: "Tata Consultancy Services",
      date: "August 2023 - October 2025",
      desc: " Spearheaded the development and enhancement of financial products aligned with client requirements and industry standards. Collaborated with cross-functional teams to implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "Java",
        "Spring boot",
        "JavaScript",
        "Microservice",
        "Struts 2",
        "Oracle SQL",
      ],
    },
    {
      id: 2,
      img: zensarLogo,
      role: "Java/SQL Trainee",
      company: "Zensar Technologies Private Limited",
      date: "Feb 2022- Mar 2022",
      desc: "Built applications applying Java, SQL, and OOP principles. Developed SQL and PL/SQL scripts for database management, ensuring efficient handling of large datasets.",
      skills: [
        "Java",
        "OOP Principles",
        "SQL/PLSQL",
        "HTML",
        "CSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: snjbLogo,
      school: "SNJB's Late Sau KBJ College Of Engineering",
      date: "Sept 2019 - July 2023",
      grade: "9.65 CGPA",
      desc: "I have done my graducation in Bachelor's degree in Computer Engineering at SNJB's College Of Engineering, Chandwad.",
      degree: "Bachelor of Engineering - Computer Engineering",
    },
    {
      id: 2,
      img: sschsc,
      school: "S.S.M.M. College Pachora",
      date: "Apr 2018 - March 2019",
      grade: "73.38%",
      desc: "I completed my class 12 education from S.S.M.M. College Pachora, under the Maharashtra State board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "HSC(XII) - PCM",
    },
    {
      id: 3,
      img: sschsc,
      school: "S.G.S. Highschool Pachora",
      date: "Apr 2016 - March 2017",
      grade: "92.20%",
      desc: "I completed my class 10 education from S.G.S. Highschool Pachora",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Aasha Worker Portal",
      description:
        "A web app to reduce paper work of Aasha Workers to maintain records of child births, vaccine dates and many more.",
      image: aashaPortalLogo,
      tags: ["React JS", "API", "Spring Boot","MySQL","Spring Security", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tejasa0/Asha-Worker-Task-Management",
      webapp: "",
    },
    {
      id: 1,
      title: "Naitro - Price Negotiator Chatbot Integrated E-Commerce Platform",
      description:
        "AI based price negotiator chatbot to help customer to negotiate on prices to get facility like offline stores without interacting with Seller",
      image: naitroLogo,
      tags: ["Pyhton", "Flask", "Machine Learning", "AI", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tejasa0/PriceNegotiatorChatbotEcommerce",
      webapp: "",
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "A standalone application for booking appointment and generate prescriptions with login security.",
      image: "",
      tags: ["Java", "Spring Boot", "JSP", "CSS", "JavaScript"],
      github: "https://github.com/Tejasa0/HospitalManagementSystem",
      webapp: "",
    },
    {
      id: 3,
      title: "Dynamic Portfolio Website",
      description:
        "Instead of making change in code while updating portfolio, we can change it using database only. No need to change in code.",
      image: "",
      tags: ["React JS", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/Tejasa0/Portfolio-Website",
      webapp: "",
    },
    {
      id: 4,
      title: "Airline Reservation System",
      description:
        "Website to book an airline from available slots and available airline along with ticket download facility",
      image: airlineLogo,
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      github: "https://github.com/Tejasa0/-Airline-REservation-System--website",
      webapp: "",
    },
    
    {
      id: 5,
      title: "Rajniti Dhurandhar",
      description:
        "It is an website containing information about \"Chhatrapati Shivaji Maharaj\" from year 1630 to 1680.",
      image: rajnitiLogo,
      tags: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
      github: "https://github.com/Tejasa0/-RajnitiDhurandar--Website",
      webapp: "",
    },
    
  ];  