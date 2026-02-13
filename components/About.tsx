'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPalette, FaRocket, FaProjectDiagram, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa'

export default function About() {
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

  const features = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'Beautiful Design',
      description: 'Creating visually stunning and user-friendly interfaces',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Column - Photo and Text */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-2xl blur-2xl opacity-50 animate-pulse" />
                  <motion.div
                    className="relative w-full h-full rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!imageError ? (
                      <Image
                        src="/images/anushka-photo.jpg"
                        alt="Anushka Jamkar"
                        width={320}
                        height={320}
                        className="object-cover w-full h-full"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <span className="text-6xl">👤</span>
                    )}
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm a passionate full-stack developer with a love for creating
                  beautiful and functional web applications. With expertise in modern
                  web technologies, I bring ideas to life through clean code and
                  innovative solutions.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  My journey in web development has been driven by curiosity and a
                  desire to solve complex problems. I enjoy working on projects that
                  challenge me and allow me to grow both technically and creatively.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Stats and Features */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  className="glass p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-white/70">Projects Completed</div>
                </motion.div>
                <motion.div
                  className="glass p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">30+</div>
                  <div className="text-sm text-white/70">Happy Clients</div>
                </motion.div>
                <motion.div
                  className="glass p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">4+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </motion.div>
                <motion.div
                  className="glass p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-sm text-white/70">Satisfaction Rate</div>
                </motion.div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass p-6 rounded-xl hover:scale-105 transition-transform"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-gradient mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Creative Element */}
              <motion.div
                className="glass p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/30"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gradient text-3xl">
                    <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-semibold">Always Learning</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Continuously exploring new technologies, frameworks, and methodologies 
                  to stay at the forefront of web development and deliver cutting-edge solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

