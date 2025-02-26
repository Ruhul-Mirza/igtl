"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Cover } from "../ui/cover";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pb-20 pt-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6 text-center max-w-4xl mx-auto my-40"
        >
          
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Welcome to  <Cover>IGTL</Cover>
          </h1>
          

          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
    We specialize in delivering <span className="font-medium text-gray-800 dark:text-white">cutting-edge</span> 
    business process outsourcing (BPO), knowledge process outsourcing (KPO), and 
    <span className="font-medium text-orange-500"> innovative technology solutions</span>, 
    designed to drive business growth, enhance operational efficiency, and optimize 
    customer engagement.
  </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-medium text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}