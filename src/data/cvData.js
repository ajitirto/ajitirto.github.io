  
const cvData = {
  personalInfo: {
    name: "Aji Tirto Prayogo",
    title: "Full Stack Developer",
    email: "ajitirtoprayogo@gmail.com",
    phone: "+628 8216 506 271",
    linkedin: "linkedin.com/in/aji-tirto-prayogo",
    github: "github.com/ajitirto",
    summary:
      "Full-Stack Web Developer with 3+ years of experience in designing, developing, and deploying web applications. Proficient in PHP, MySQL, Laravel, Bash, and Python. Well-versed in version control tools including Git, GitHub, and GitLab. Eager to continuously learn and adapt to the ever-evolving landscape of technology, I thrive on tackling new challenges and making meaningful contributions.",
  },
  experience: [
    {
      id: 1,
      title: "Full Stack Web Developer",
      company: "Absolute Sinergi Nusantara",
      years: "Feb 2023 - Jul 2025",
      description: [
        "Make sure requirment from user can implementation in web. ",
        "Design ERD using normalization concept to enhance scalability.",
        "Implement transaction database to code.",
        "Create rest api for interact with mobile app.",
        "Deploy laravel in server shared hosting.",
        "Implement cron job in server. ",
        "Implement automation end to end test using laravel dusk.",
        "Implement backup data using python, scp and ssh.",
        "Fixing bug in legacy app.",

      ],
    },
    {
      id: 2,
      title: "Junior Developer",
      company: "Refactory",
      years: "Okt 2022 - Des 2022",
      description: [
        "Collaboration with a team : Tech fellow/Mentor, Developer, Project Manager.",
        "Explore tool for CI CD : Git, Github Actions/ Gitlab Actions, Bash, Docker, Google Cloud, Kubernetes, and Helm.",
        "Review code with intensive pair code.",
        "Daily stand up for report task.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Sarjana Ilmu Komputer",
      university: "Universitas Muhammadiyah Surakarta",
      years: "2016 - 2022",
      gpa: "IPK: 3.22/4.00",
    },
  ],
  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    backend: ["Golang", 'Php' "RESTful APIs", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Git", "Docker", "Jira", "VS Code", "Nvim"],
  },
};

export default cvData;
