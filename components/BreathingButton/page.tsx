import React from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

// Reusable button component with props for label and icon
const BreathingButton = ({ label, Icon }: { label: string; Icon: IconType }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Slightly larger on hover
      animate={{ scale: [1, 1.05, 1] }} // Breathing effect
      transition={{
        duration: 1.5, // Controls speed of breathing effect
        repeat: Infinity, // Infinite loop
        repeatType: 'reverse', // Alternates back and forth
      }}
      className="flex items-center space-x-2 px-6 py-3 text-white bg-yellow-500 rounded-3xl shadow-lg font-semibold"
    >
      <Icon className="text-xl" /> {/* Display icon */}
      <span>{label}</span> {/* Display label */}
    </motion.button>
  )
}

export default BreathingButton
