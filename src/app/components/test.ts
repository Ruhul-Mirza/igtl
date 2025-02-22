"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Twitter, Instagram, Facebook, X } from "lucide-react";

export default function Sidebar({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) {
const [isServicesOpen, setIsServicesOpen] = useState(false);

return (
<>
{/* Backdrop */}
{isOpen && (
<div
className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 transition-opacity duration-300"
onClick={onClose}
/>
)}


  {/* Sidebar */}
  <div 
    className={`fixed top-0 left-0 h-full  bg-white dark:bg-[rgb(39,39,42)] z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="relative py-2 border-b border-gray-100 dark:border-zinc-700">
        <button 
          onClick={onClose}
          className="absolute right-4 top-1/2  -translate-y-1/2 p-2 rounded-full text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-[#3f3f46] transition-colors"
        >
          <X size={20} />
        </button>
        <Link href="/">
        <Image
          src="/IGTL_Logo-removebg-preview.png"
          alt="Logo"
          width={130}
          height={45}
          className="dark:hidden"
        />

        </Link>
        <Link href="/">

        <Image
          src="/erasebg-transformed.png"
          alt="Logo Dark"
          width={130}
          height={45}
          className="hidden dark:block"
        />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto scrollbar-thin py-6 px-4">
        <nav className="space-y-4">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full px-3 py-2 flex items-center justify-between rounded-lg dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#3f3f46] transition-all duration-300"
            >
              <span className="font-medium">Services</span>
              <ChevronDown
                size={18}
                className={`transform transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 space-y-1">
                {["Web Development", "Mobile Apps", "Cloud Solutions"].map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block p-3 pl-6 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Regular Links */}
          {["About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* Career Button */}
          <Link
            href="/careers"
            className="block mt-6 p-3 text-center text-white bg-gradient-to-r from-blue-600/90 to-blue-700/90 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            Join Our Team
          </Link>
        </nav>
      </div>

      {/* Social Links */}
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Linkedin, href: "#", color: "hover:text-[#0077b5]" },
            { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" },
            { icon: Github, href: "#", color: "hover:text-[#333]" },
            { icon: Instagram, href: "#", color: "hover:text-[#E4405F]" },
            { icon: Facebook, href: "#", color: "hover:text-[#1877F2]" }
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className={`p-2 rounded-full bg-gray-50/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 ${color} dark:hover:text-white transform hover:scale-110 transition-all duration-200`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</>