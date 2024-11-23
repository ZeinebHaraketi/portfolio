// components/Hero.js
"use client";

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-center relative overflow-hidden mx-0 p-0"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
    >
      {/* Background Elements Positioned Absolutely */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="w-72 h-72 bg-purple-300 rounded-full blur-3xl absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-pink-300 rounded-full blur-2xl absolute top-20 right-20"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-4">
          Heyy 👋 I'm Zeineb Haraketi
        </h1>

        <p className="text-2xl text-gray-300 mb-2">
          Software Engineer | Full-Stack JS |{" "}
          <span className="text-purple-500 font-semibold">Machine Learning</span>
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Open for new opportunities in tech
        </p>

        {/* Profile Image with Static Gradient Border */}
        <div className="relative mb-6 rounded-full p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="w-36 h-36 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
            <Image
              src="/ma_photo.png" // Replace with your image path
              alt="Profile Picture"
              width={130}
              height={130}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Poetry Section Styled as a Quote */}
        <blockquote className="text-lg italic text-gray-300 max-w-xl mx-auto mb-6 px-6 relative">
          <p className="before:content-['“'] after:content-['”'] text-2xl font-serif text-gray-300">
            The road ahead is long, yet my steps are strong. <br />
            A dreamer, a creator, weaving code into a song.
          </p>
        </blockquote>

        {/* Social Media Icons with Hover Effects */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/zeineb-haraketi-410018319/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ZeinebHaraketi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-500 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:zeineb.haraketi@esprit.tn "
            className="text-gray-300 hover:text-red-500 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
