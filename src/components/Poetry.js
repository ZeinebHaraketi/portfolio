// components/Poetry.js
"use client";
import { useState } from "react";

export default function Poetry() {
  const poems = [
    {
      title: "The Seed Within",
      excerpt: "Deep within, a seed is sown, through trials, a tree is grown...",
      content: `
        Deep within, a seed is sown,
        Through trials, a tree is grown.
        With every storm, its roots dig deep,
        A legacy of strength it seeks to keep.
        
        The winds may howl, the branches bend,
        But resilience becomes its closest friend.
        A lesson taught by nature's art,
        Growth begins within the heart.
      `,
      theme: "Personal Growth",
    },
    {
      title: "Code of Resilience",
      excerpt: "Through bugs and errors, I pave the way, determined to shine another day...",
      content: `
        Through bugs and errors, I pave the way,
        Determined to shine another day.
        My career's a code, an endless loop,
        Resilience in every project I troop.
        
        Each failure, a lesson, each success, a cheer,
        The path of coding makes the future clear.
        A syntax of dreams, a function of might,
        Building tomorrow, one debugged night.
      `,
      theme: "Determination & Career",
    },
    {
      title: "Passion in Pixels",
      excerpt: "In lines of code, my heart takes flight, crafting dreams from day to night...",
      content: `
        In lines of code, my heart takes flight,
        Crafting dreams from day to night.
        A world of logic, a canvas of art,
        My passion's alive, in programming's heart.
        
        Each variable holds a story untold,
        In functions, my creativity unfolds.
        A passion for pixels, a dream of design,
        Programming's magic, forever mine.
      `,
      theme: "Passion & Programming",
    },
  ];

  const [selectedPoem, setSelectedPoem] = useState(null);

  return (
    <section
      id="poetry"
      className="py-20 px-8 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-72 h-72 bg-purple-200 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-pink-200 rounded-full blur-3xl absolute bottom-10 right-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
          My Poetry
        </h2>

        {/* Poems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {poems.map((poem, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              {/* Poem Title */}
              <h3 className="text-xl font-bold text-purple-500 mb-4">
                {poem.title}
              </h3>

              {/* Theme */}
              <p className="text-sm font-semibold text-gray-600 mb-2 italic">
                {poem.theme}
              </p>

              {/* Poem Excerpt */}
              <p className="text-gray-700 mb-6">{poem.excerpt}</p>

              {/* Read More Button */}
              <button
                onClick={() => setSelectedPoem(poem)}
                className="absolute bottom-4 right-4 text-sm text-purple-500 hover:text-pink-500 transition"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPoem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transform scale-100 transition duration-500">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-purple-500 mb-2">
                {selectedPoem.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600 italic">
                {selectedPoem.theme}
              </p>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {selectedPoem.content}
              </pre>
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedPoem(null)}
                className="py-2 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
