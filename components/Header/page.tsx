'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import nameUI from '@/app/utils/constant'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {nameUI}
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/home" className="hover:text-yellow-400 transition duration-300">Home</a>
          <a href="/about" className="hover:text-yellow-400 transition duration-300">About</a>
          <a href="/services" className="hover:text-yellow-400 transition duration-300">Services</a>
          <a href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={toggleMenu} className="hover:text-yellow-400 transition duration-300">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-yellow-400 transition duration-300">About</a>
            <a href="#services" onClick={toggleMenu} className="hover:text-yellow-400 transition duration-300">Services</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-yellow-400 transition duration-300">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Header
