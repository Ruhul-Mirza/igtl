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
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-500"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[300px] bg-gradient-to-b from-white to-gray-50/80 dark:from-zinc-900 dark:to-zinc-950 z-50 shadow-[35px_0px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[35px_0px_60px_-15px_rgba(0,0,0,0.5)] transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="relative py-6 px-6 border-b border-gray-200/50 dark:border-zinc-800/50">
            <button 
              onClick={onClose}
              className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:text-zinc-500 dark:hover:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <Link href="/" className="block w-fit">
              <Image
                src="/IGTL_Logo-removebg-preview.png"
                alt="Logo"
                width={130}
                height={45}
                className="dark:hidden"
              />
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
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-zinc-800 py-8 px-6">
            <nav className="space-y-3">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-5 py-3.5 flex items-center justify-between rounded-xl text-gray-700 dark:text-gray-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <span className="font-medium tracking-wide">Services</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    className={`transform transition-transform duration-300 text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-400 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isServicesOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-1 px-1">
                    {["Web Development", "Mobile Apps", "Cloud Solutions"].map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2.5 rounded-lg text-[15px] text-gray-600 dark:text-zinc-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
                  className="block px-5 py-3.5 rounded-xl text-[15px] text-gray-700 dark:text-gray-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}

              {/* Career Button */}
              <Link
                href="/careers"
                className="relative block mt-8 px-5 py-4 text-center text-white overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-[0_2px_15px_-3px_rgba(37,99,235,0.2)] dark:shadow-[0_2px_15px_-3px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_-3px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_4px_20px_-3px_rgba(37,99,235,0.4)]"
              >
                <div className="relative z-10">Join Our Team</div>
                <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 hover:translate-y-0" />
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="relative py-6 px-6 before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent dark:before:via-zinc-800">
            <div className="flex items-center justify-center gap-3">
              {[
                { icon: Linkedin, href: "#", color: "hover:text-[#0077b5]", label: "LinkedIn" },
                { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]", label: "Twitter" },
                { icon: Github, href: "#", color: "hover:text-[#333] dark:hover:text-white", label: "GitHub" },
                { icon: Instagram, href: "#", color: "hover:text-[#E4405F]", label: "Instagram" },
                { icon: Facebook, href: "#", color: "hover:text-[#1877F2]", label: "Facebook" }
              ].map(({ icon: Icon, href, color, label }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className={`p-2.5 rounded-lg text-gray-500 dark:text-zinc-400 ${color} hover:bg-black/[0.03] dark:hover:bg-white/[0.02] transition-all duration-200`}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}