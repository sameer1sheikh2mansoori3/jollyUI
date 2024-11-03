'use client'
import React from 'react'
import { motion } from 'framer-motion'

// Variants for animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center text-white px-4">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <motion.div
        className="relative z-10 max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          variants={item}
        >
          <span className="text-yellow-400">Your Vision</span> Crafted with Precision
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg md:text-xl mb-8" variants={item}>
          Build outstanding web experiences with our powerful tools and components.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#get-started"
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
          variants={item}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  )
}

export default HeroSection
