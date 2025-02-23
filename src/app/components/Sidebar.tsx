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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`mx-auto transition-all duration-300 ease-in-out ${
          isScrolled ? "max-w-3xl" : "max-w-5xl"
        } backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 border-b border-orange-100/20 dark:border-orange-700/20`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                  alt="IGTL Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link 
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServiceDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="/careers"
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
              >
                Careers
              </Link>
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400"
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
          className={`transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
            >
              About
            </Link>
            
            <button
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isServiceDropdownOpen && (
              <div className="pl-4">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
            >
              Contact
            </Link>
            
            <Link
              href="/careers"
              className="block rounded-md px-3 py-2 text-base font-medium text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/50"
            >
              Careers
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}