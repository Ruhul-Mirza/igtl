"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="flex flex-col items-center justify-center px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl mt-20 font-extrabold text-neutral-800 dark:text-white leading-snug tracking-tight"
        >
          Welcome to{" "}
          <Highlight>
            IGTL
          </Highlight>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-bold text-neutral-600 my-5 dark:text-neutral-300 max-w-3xl leading-relaxed"
        >
          Your Trusted Partner in{" "}
          <span className="text-orange-600 dark:text-yellow-400 font-bold">
            BPO
          </span>
          ,{" "}
          <span className="text-orange-600 dark:text-yellow-400 font-bold">
            KPO
          </span>{" "}
          &{" "}
          <span className="text-orange-600 dark:text-yellow-400 font-bold">
            Technology Solutions
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-md md:text-lg text-neutral-900 dark:text-neutral-400 max-w-2xl leading-loose font-semibold"
        >
          We specialize in delivering {" "}
          <span className="text-orange-600 dark:text-orange-500">
            cutting-edge solutions
          </span>
          {" "}
          business process outsourcing (BPO), knowledge process outsourcing (KPO), and innovative technology solutions designed to drive business growth, enhance operational efficiency, and optimize customer engagement.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 text-sm text-neutral-700 dark:text-neutral-300"
        >
          
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-6"
        >
          <button className="group px-5 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
