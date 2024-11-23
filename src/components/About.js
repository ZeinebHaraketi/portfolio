"use client";
import { FaCode, FaLightbulb, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-80 h-80 bg-purple-200 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-pink-200 rounded-full blur-3xl absolute bottom-10 right-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
          About Me
        </h2>

        {/* Introduction Paragraph */}
        <p className="text-xl text-center text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          I&apos;m an enthusiastic software engineer driven by creativity and
          innovation. With a solid foundation in{" "}
          <span className="font-semibold text-purple-500">
            full-stack development
          </span>{" "}
          and a growing expertise in
          <span className="font-semibold text-purple-500">
            {" "}
            machine learning
          </span>
          , I enjoy transforming ideas into reality through clean, efficient
          code.
        </p>

        {/* Skills and Attributes Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaCode className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Full-Stack Development</h3>
            <p className="text-gray-600">
              Building seamless applications with modern frameworks and best
              practices.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaBrain className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Machine Learning</h3>
            <p className="text-gray-600">
              Applying data-driven insights to solve complex problems
              creatively.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <FaLightbulb className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Creative Problem Solving
            </h3>
            <p className="text-gray-600">
              Innovative approaches to crafting efficient, scalable solutions.
            </p>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">A Few Fun Facts</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new places,
            reading about the latest tech trends, or experimenting with creative
            projects. I believe in continuous learning and love discovering new
            ways to enhance my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
