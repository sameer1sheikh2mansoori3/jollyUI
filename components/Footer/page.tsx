'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import nameUI from './../../app/utils/constant';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Logo / Company Name */}
          <motion.div 
            className="text-3xl font-bold mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            {nameUI}
          </motion.div>

          {/* Links */}
          <div className="flex space-x-8 text-lg">
            <a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a>
            <a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a>
            <a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Info */}
            <div className="text-gray-400 text-center md:text-left">
              <p>Email: info@yourcompany.com</p>
              <p>Phone: +123 456 7890</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>

          {/* Copyright Section */}
          <p className="text-center text-gray-500 mt-8">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
