// components/Projects.js
"use client";
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "DevOps",
      description: "Ce projet vise à établir une chaîne CI/CD complète, intégrant Jenkins, Docker, Nexus pour le stockage, l'automatisation des tests (JUnit), et des outils comme Sonar, Grafana et Prometheus pour l'analyse et le suivi.",
      image: "/jenkins.png", // Replace with your image path
      link: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with payment integration.",
      image: "/images/project2.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "Project 3",
      description: "A social media dashboard with real-time updates.",
      image: "/images/project3.jpg", // Replace with your image path
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          // <a href={project.link} key={index} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          //   {/* Project Image */}
          //   <div className="h-48 w-full relative">
          //     <Image
          //       src={project.image}
          //       alt={project.title}
          //       layout="fill"
          //       objectFit="cover"
          //       className="transition-transform duration-500 group-hover:scale-110"
          //     />
          //   </div>
            
          //   {/* Project Details */}
          //   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          //   <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
          //     <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
          //     <p className="text-sm opacity-80">{project.description}</p>
          //   </div>
          // </a>
          <a href={project.link} key={index} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
  {/* Project Image */}
  <div className="h-60 w-full relative">
    <Image
      src={project.image}
      alt={project.title}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 group-hover:scale-110"
    />
    
    {/* Zoom Icon in the top-right corner */}
    <div className="absolute top-2 right-2 bg-black bg-opacity-60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 7H7v6h6V7z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-3V5z" clipRule="evenodd" />
      </svg>
    </div>
  </div>

  {/* Project Details with Subtle Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
    <h3 className="text-lg font-semibold">{project.title}</h3>
    <p className="text-xs mt-1">{project.description}</p>
  </div>
</a>


        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}
