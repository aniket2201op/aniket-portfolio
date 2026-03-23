const portfolioData = {
  name: "Aniket Shinde",
  title: "Java Developer & Backend Engineer",
  tagline: "Building enterprise banking & AML compliance systems",
  location: "Navi Mumbai, India",
  email: "aniket.shinde.co@gmail.com",
  phone: "+91-9594279831",
  linkedin: "linkedin.com/in/aniketop",
  github: "github.com/aniket2201op",
  summary:
    "Java Developer with 2+ years of hands-on experience at IDBI Intech Ltd, building enterprise-grade banking and AML compliance systems. Delivered a 30% reduction in database latency and improved transaction screening accuracy by 25%. Promoted from MT to Executive within one year.",

  keySkills: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "SQL",
    "Oracle",
    "Hibernate",
    "Jenkins",
  ],

  skills: [
    { cat: "Languages",      items: ["Java", "SQL", "PL/SQL"] },
    { cat: "Frameworks",     items: ["Spring Boot", "Spring JPA", "Spring Security", "Hibernate", "JSP", "Servlets", "Bootstrap"] },
    { cat: "APIs & Design",  items: ["RESTful APIs", "Microservices", "Design Patterns", "OOP", "Multithreading"] },
    { cat: "Databases",      items: ["Oracle", "MySQL", "MS SQL Server"] },
    { cat: "DevOps & Tools", items: ["Git", "Maven", "Jenkins", "NGINX", "Swagger/OpenAPI", "IntelliJ IDEA"] },
    { cat: "Testing",        items: ["JUnit", "Unit Testing", "Code Review"] },
    { cat: "Practices",      items: ["Agile (Scrum)", "Performance Tuning", "ORM & Query Optimisation"] },
    { cat: "Exposure",       items: ["Docker (basic)", "AWS Cloud Fundamentals"] },
  ],

  experience: [
    {
      role: "Executive – Java Developer",
      company: "IDBI Intech Ltd",
      location: "Belapur, Navi Mumbai",
      period: "Oct 2025 – Present",
      tag: "Promoted",
      bullets: [
        "Developed and deployed AML modules using Spring Boot and Spring Security, improving transaction screening accuracy by 25% and reducing false positives.",
        "Optimised enterprise-grade applications with Spring JPA and Hibernate, reducing database latency by 30% through ORM tuning and indexing.",
        "Engineered and deployed 6 RESTful APIs adhering to OpenAPI/Swagger specifications, facilitating smooth integration between core banking platforms.",
        "Configured NGINX-based load balancers achieving 99.9% uptime across clustered environments.",
        "Automated CI/CD pipelines using Jenkins and Git, reducing deployment time by 40%.",
      ],
      stack: ["Java", "Spring Boot", "Spring Security", "Hibernate", "NGINX", "Oracle", "Jenkins"],
    },
    {
      role: "MT – Java Developer",
      company: "IDBI Intech Ltd",
      location: "Belapur, Navi Mumbai",
      period: "Oct 2024 – Oct 2025",
      tag: null,
      bullets: [
        "Built modular JSP/Servlet components for client-facing banking applications, reducing page load time by 20%.",
        "Integrated Oracle, MySQL, and MS SQL Server for dynamic multi-database connectivity, improving data retrieval by 30%.",
        "Diagnosed and resolved production issues, improving system uptime from 95% to 99.8%.",
        "Wrote unit tests using JUnit and participated in peer code reviews to maintain code quality.",
        "Contributed to Agile/Scrum sprints delivering features on time.",
      ],
      stack: ["Java", "JSP", "Servlets", "Oracle", "MySQL", "JUnit", "Maven"],
    },
  ],

  projects: [
    {
      name: "AML Transaction Monitoring Enhancement",
      company: "IDBI Intech Ltd",
      stack: ["Spring Boot", "Oracle", "Hibernate", "REST APIs"],
      bullets: [
        "Refactored legacy AML screening logic into modular Spring Boot components, reducing codebase complexity.",
        "Implemented a configurable rule engine enabling the compliance team to update rules without code deployments.",
      ],
    },
    {
      name: "Multi-Database Banking Portal",
      company: "IDBI Intech Ltd",
      stack: ["Java", "JSP", "Servlets", "Oracle", "MySQL", "MS SQL"],
      bullets: [
        "Created a unified DAO layer for Oracle, MySQL, and MS SQL Server, eliminating 800+ lines of duplicate code.",
        "Reduced data retrieval response time by 30% through stored procedure optimisation and connection pool tuning.",
      ],
    },
  ],

  metrics: [
    { value: "25%",  label: "AML screening accuracy improved" },
    { value: "30%",  label: "Database latency reduced" },
    { value: "99.9%",label: "Uptime achieved" },
    { value: "40%",  label: "Deployment time reduced" },
    { value: "800+", label: "Lines of duplicate code eliminated" },
    { value: "6",    label: "RESTful APIs deployed" },
  ],

  certifications: [
    { name: "Spring Certified Professional Learning Path", issuer: "Spring Academy (Broadcom)", year: "2026" },
    { name: "SQL and Relational Databases",               issuer: "IBM / Cognitive Class",      year: "2025" },
    { name: "Project Management Foundations",             issuer: "LinkedIn Learning",           year: "2024" },
    { name: "Generative AI Fundamentals",                 issuer: "LinkedIn Learning",           year: "2024" },
  ],

  education: [
    {
      degree: "B.E. – Information Technology",
      school: "A.C. Patil College of Engineering, Kharghar",
      period: "Aug 2020 – May 2024",
    },
    {
      degree: "HSC – Science (Bifocal)",
      school: "DPVN Junior College, Belapur",
      period: "Aug 2018 – Mar 2020",
    },
  ],

  achievements: [
    "Top 10 Rank – Ace of Hacks Hackathon, A.C. Patil College of Engineering (200+ teams)",
    "2nd Place – Project Presentation Competition, A.C. Patil College of Engineering",
    "Participant – Avishkar Inter-Collegiate Research Competition (Zonal Round)",
    "Project Showcase – K.J. Somaiya Institute of Technology Project Expo",
  ],

  heroStats: [
    { n: "2+",  l: "Years Experience" },
    { n: "92",  l: "ATS Score" },
    { n: "6",   l: "APIs Deployed" },
    { n: "↑",   l: "Promoted in 12mo" },
  ],
};

export default portfolioData;
