'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '8308012745'
  const whatsappUrl = `https://wa.me/91${phoneNumber}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl md:text-3xl hover:scale-110 transition-transform group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-400 opacity-75"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.75, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      
      {/* Icon */}
      <FaWhatsapp className="relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Message me on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>
    </motion.a>
  )
}

