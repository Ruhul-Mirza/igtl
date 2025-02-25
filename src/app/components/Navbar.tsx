"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const serviceItems = [
    { name: "List 1", href: "/services/list1" },
    { name: "List 2", href: "/services/list2" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 my-2 px-4">
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? "max-w-2xl" : "max-w-4xl"
        } backdrop-blur-2xl bg-white/75 dark:bg-transparent shadow-lg rounded-2xl shadow-orange-500/5`}
      >
        <div className="px-2">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={theme === "dark" ? "/IGTL Logo.jpg" : "/IGTL_Logo-removebg-preview.png"}
                  alt="IGTL Logo"
                  width={150}
                  height={40}
                  className="h-12 w-auto transition-opacity duration-300 hover:opacity-80"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link 
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-7 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-1">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="/careers"
                className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-medium text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Careers
              </Link>
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? "translate-y-0 opacity-100 max-h-96" 
              : "-translate-y-4 opacity-0 max-h-0"
          } md:hidden overflow-hidden`}
        >
          <div className="space-y-2 px-4 pb-4 pt-2">
            <Link
              href="/about"
              className="block rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-all duration-300 hover:shadow-md"
            >
              About
            </Link>
            
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-all duration-300 hover:shadow-md"
              >
                Services
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isServiceDropdownOpen ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div
                className={`transition-all duration-300 ${
                  isServiceDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2.5 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/contact"
              className="block rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50 transition-all duration-300 hover:shadow-md"
            >
              Contact
            </Link>
            
            <Link
              href="/careers"
              className="block rounded-lg px-4 py-2.5 text-base font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-center"
            >
              Careers
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}