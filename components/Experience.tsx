'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelancing',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Built AI-powered tools and data-driven web applications',
      'Developed scalable full-stack platforms from frontend to backend',
      'Delivered practical solutions for freelance clients',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-white/75 max-w-3xl mx-auto mb-6">
            Full-Stack Developer building AI-powered tools, data-driven applications, and scalable web platforms.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass p-6 md:p-8 rounded-xl relative"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-gradient text-3xl mt-1">
                    <FaBriefcase />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/70 mb-3">
                      <span className="flex items-center gap-2">
                        <FaBriefcase className="text-sm" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sm" />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80">
                          <span className="text-gradient mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
