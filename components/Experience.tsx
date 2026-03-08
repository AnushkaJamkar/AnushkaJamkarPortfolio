'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelancing',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Built and deployed web applications for real client requirements.',
      'Worked across frontend and backend using React, Next.js, Node.js, Express, and MongoDB.',
      'Developed AI-assisted tools and automation features to improve productivity.',
      'Managed delivery timelines and communication with freelance clients.',
    ],
    highlights: ['10+ Projects', 'Freelance Clients', '1+ Years Coding Experience'],
  },
  {
    title: 'Mentor - Web Development & Python',
    company: 'Independent Mentoring',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Mentored students on HTML, CSS, JavaScript, React basics, and Python fundamentals.',
      'Provided hands-on guidance through mini-projects and debugging sessions.',
      'Helped students build confidence in problem-solving and writing clean code.',
      'Created simple learning plans based on each student\'s pace and goals.',
    ],
    highlights: ['Student Mentoring', 'Web Dev Training', 'Python Teaching'],
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
            Full-Stack Developer focused on building practical, maintainable, and business-oriented web solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
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
                      {exp.description.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white/80">
                          <span className="text-gradient mt-1.5">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 mt-5">
                      {exp.highlights.map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                          {item}
                        </span>
                      ))}
                    </div>
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
