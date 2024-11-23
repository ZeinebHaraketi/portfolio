"use client";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "DevOps",
      description:
        "This project aims to establish a complete CI/CD pipeline, integrating Jenkins, Docker, Nexus for storage, test automation (JUnit), and tools like Sonar, Grafana, and Prometheus for analysis and monitoring.",
      image: "/jenkins.png",
      link: "#",
      skills: ["Jenkins", "Docker", "Nexus", "JUnit", "SonarQube", "Grafana", "Prometheus"],
    },
    {
      title: "Book Haven",
      description:
        "A groundbreaking web app that blends literature, gaming, and cinema to create an immersive and engaging experience.",
      image: "/Bookhaven.png",
      link: "#",
      skills: ["Next.js", "Node.js","Express.js", "MongoDB","TailwindCSS","UX Design", "Interactive Features"],
    },
    {
      title: "Atlas-patrimonial",
      description:
        "The project aims to develop a robust application for efficient subscription management, featuring a scalable payment system and advanced forecasting capabilities.",
      image: "/ML_abonn.png",
      link: "#",
      skills: ["Flask", "SQLAlchemy", "Postgresql", "ReactTS","Stripe", "TailwindCSS", "Dante AI", "News API", "BERT", "Vader Sentiment" ,"ML Models"],
    },
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 bg-white"
          >
            {/* Project Image */}
            <div className="relative h-60">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Icon to Expand Details */}
              <button
                onClick={() => toggleDetails(index)}
                className={`absolute top-2 right-2 bg-black bg-opacity-60 p-2 rounded-full text-white hover:bg-opacity-80 transition-transform transform ${
                  expandedIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Project Title */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            </div>

            {/* Details Section */}
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                expandedIndex === index ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="bg-gray-50 rounded-lg shadow-inner border border-purple-100">
                <p className="text-sm text-gray-600">{project.description}</p>
                <h4 className="text-sm font-bold text-gray-800 mt-4">Skills & Tools:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium rounded-full shadow-sm transform transition duration-300 hover:scale-110"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}
