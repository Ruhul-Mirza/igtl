"use client"

import { motion } from "framer-motion";
import { ArrowRight, Globe, Brain, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white relative z-10 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-500 to-orange-400 dark:from-orange-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-orange-400 to-yellow-300 dark:to-yellow-600"></div>
          </div>

          <div className="relative">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  IGTL
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Trusted Partner in BPO, KPO & Technology Solutions
              </motion.p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/** BPO Card */}
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-orange-500 mb-4" />}
                title="Business Process Outsourcing"
                description="Streamline your operations with our comprehensive BPO solutions"
              />

              {/** KPO Card */}
              <ServiceCard
                icon={<Brain className="h-10 w-10 text-orange-500 mb-4" />}
                title="Knowledge Process Outsourcing"
                description="Leverage our expertise for high-value knowledge-based services"
              />

              {/** Technology Card */}
              <ServiceCard
                icon={<Code className="h-10 w-10 text-orange-500 mb-4" />}
                title="Technology Solutions"
                description="Drive innovation with our cutting-edge technology services"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CTAButton />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-xl border border-orange-100/20 dark:border-orange-700/20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {icon}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

function CTAButton() {
  return (
    <a
      href="/contact"
      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
    >
      Get Started
      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
