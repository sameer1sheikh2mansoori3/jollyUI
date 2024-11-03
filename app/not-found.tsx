'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link' // For navigation; change if using a different router

const NotFound = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col items-center justify-center text-center text-white px-4">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      
      <motion.div
        className="relative z-10 max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Heading */}
        <motion.h1
          className="text-8xl font-bold text-yellow-400 mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          404
        </motion.h1>
        
        {/* Subheading */}
        <motion.p className="text-2xl md:text-3xl mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Oops! Page Not Found
        </motion.p>
        
        {/* Link to Home Page */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/" // Home route
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default NotFound
