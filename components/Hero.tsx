'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [imageError, setImageError] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div ref={ref} className="container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                <motion.div
                  className="relative w-full h-full rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {!imageError ? (
                    <Image
                      src="/images/anushka-photo.jpg"
                      alt="Anushka Jamkar"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                      priority
                      onError={() => {
                        console.error('Image failed to load. Please check if the file exists at public/images/anushka-photo.jpg')
                        setImageError(true)
                      }}
                      onLoad={() => console.log('Image loaded successfully')}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <span className="text-6xl md:text-8xl mb-2">👋</span>
                      <span className="text-xs text-white/50 text-center px-2">Photo not found</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Hi, I'm Anushka Jamkar</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-4"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful, functional, and user-centric web experiences
            with modern technologies and innovative solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full text-2xl hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full text-2xl hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:anushkajamkar@gmail.com"
              className="glass p-4 rounded-full text-2xl hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="mb-2">Scroll to explore</span>
              <FaArrowDown className="text-2xl" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  )
}

