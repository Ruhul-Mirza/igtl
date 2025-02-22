"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div
          className={`backdrop-blur-sm bg-white/70 dark:bg-slate-50/10 border border-white/20 dark:border-gray-800/20 mx-auto my-2 rounded-lg shadow-md transition-all duration-300 ${
            scrolled ? "max-w-2xl" : "max-w-3xl"
          }`}
        >
          <div className="flex justify-between items-center px-3">
            {/* Left section */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <Menu size={25} />
              </button>
              <Link href="/">
                <Image
                  src={darkMode ? "/erasebg-transformed.png" : "/IGTL_Logo-removebg-preview.png"}
                  alt="Logo"
                  width={scrolled ? 70 : 90}
                  height={40}
                  className="object-contain transition-all duration-300"
                />
              </Link>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-3">
              <button className="text-sm text-gray-800 dark:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
                Careers
              </button>
              <button className="text-sm text-gray-800 dark:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
                Get In Touch With Us
              </button>
              <button
                onClick={toggleDarkMode}
                className="text-gray-800 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/10 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}