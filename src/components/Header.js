// components/Header.js
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg z-50 transition-colors">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Creative Portfolio Title */}
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          <Link href="/">Portfolio</Link>
        </h1>

        <nav className="hidden md:flex items-center space-x-6 font-semibold">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          <a 
            href="/resumeZ.pdf" 
            target="_blank" 
            className="ml-4 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-purple-400 transition-all"
          >
            Resume/CV
          </a>
        </nav>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4 text-2xl">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl ml-4">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-center space-y-4 py-4 font-semibold">
          <a href="#about" className="block hover:text-purple-400 transition" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-purple-400 transition" onClick={toggleMenu}>Projects</a>
          <a href="#skills" className="block hover:text-purple-400 transition" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="block hover:text-purple-400 transition" onClick={toggleMenu}>Contact</a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="block px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-purple-400 transition-all" 
            onClick={toggleMenu}
          >
            Resume/CV
          </a>
        </div>
      )}
    </header>
  );
}
