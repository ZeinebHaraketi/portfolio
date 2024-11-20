// components/Skills.js
"use client";
import {
  FaReact,
  FaJava,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaLaravel,
  FaGithub,
  FaWindows,
} from "react-icons/fa";
import {
  SiSpring,
  SiAngular,
  SiTailwindcss,
  SiSymfony,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFlask,
  SiDjango,
  SiGrafana,
  SiJenkins,
  SiVagrant,
  SiSonarqube,
  SiDotnet,
  SiJira,
  SiTrello,
  SiSlack,
  SiOdoo,
  SiVisualstudio,
  SiTableau,
  SiMicrosoft,
  SiIntellijidea,
  SiEclipsejetty,
  SiApachenetbeanside,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-orange-600 text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-3xl" /> },
        { name: "C++", icon: <FaGithub className="text-blue-500 text-3xl" /> }, // Placeholder
        { name: "C#", icon: <FaGithub className="text-green-500 text-3xl" /> }, // Placeholder
        { name: ".NET Core", icon: <SiDotnet className="text-purple-500 text-3xl" /> },
      ],
    },
    {
      category: "Frontend Frameworks",
      items: [
        { name: "ReactJS", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "ReactTS", icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: "AngularJS", icon: <SiAngular className="text-red-500 text-3xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 text-3xl" /> },
      ],
    },
    {
      category: "Backend Frameworks",
      items: [
        { name: "Spring / Spring Boot", icon: <SiSpring className="text-green-500 text-3xl" /> },
        { name: "Symfony", icon: <SiSymfony className="text-purple-500 text-3xl" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-600 text-3xl" /> },
        { name: "Django", icon: <SiDjango className="text-green-700 text-3xl" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-500 text-3xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-500 text-3xl" /> },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", icon: <FaDocker className="text-blue-500 text-3xl" /> },
        { name: "Linux", icon: <FaLinux className="text-gray-500 text-3xl" /> },
        { name: "Grafana", icon: <SiGrafana className="text-orange-500 text-3xl" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-red-500 text-3xl" /> },
        { name: "Vagrant", icon: <SiVagrant className="text-teal-500 text-3xl" /> },
        { name: "SonarQube", icon: <SiSonarqube className="text-blue-500 text-3xl" /> },
      ],
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Jira", icon: <SiJira className="text-blue-600 text-3xl" /> },
        { name: "Trello", icon: <SiTrello className="text-blue-400 text-3xl" /> },
        { name: "Slack", icon: <SiSlack className="text-purple-500 text-3xl" /> },
        { name: "Odoo", icon: <SiOdoo className="text-pink-500 text-3xl" /> },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-blue-400 text-3xl" /> }, // Placeholder
        { name: "Eclipse IDE", icon: <SiEclipsejetty className="text-gray-600 text-3xl" /> }, // Placeholder
        { name: "NetBeans", icon: <SiApachenetbeanside className="text-teal-400 text-3xl" /> }, // Placeholder
        { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500 text-3xl" /> },
        { name: "Visual Studio", icon: <SiVisualstudio className="text-blue-500 text-3xl" /> },
        { name: "WampServer", icon: <SiMicrosoft className="text-red-500 text-3xl" /> }, // Placeholder
        { name: "PgAdmin", icon: <SiPostgresql className="text-indigo-500 text-3xl" /> },
        { name: "TablePlus", icon: <SiTableau className="text-orange-500 text-3xl" /> },
        { name: "MongoDB Compass", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "Protégé", icon: <FaGithub className="text-gray-500 text-3xl" /> }, // Placeholder
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 relative overflow-hidden">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            {/* Skill Category Title */}
            <h3 className="text-2xl font-semibold text-purple-600 mb-6">{skillCategory.category}</h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
                >
                  {/* Skill Icon */}
                  <div className="flex justify-center mb-2">{skill.icon}</div>

                  {/* Skill Name */}
                  <h4 className="text-sm font-medium text-center group-hover:text-purple-500 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
