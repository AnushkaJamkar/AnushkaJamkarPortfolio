'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard. Built with Next.js, TypeScript, and Stripe.',
    image: '🛒',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '📋',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using advanced NLP models.',
    image: '🤖',
    technologies: ['Next.js', 'Python', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.',
    image: '💪',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Real Estate Platform',
    description: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent matching.',
    image: '🏠',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-xl overflow-hidden group hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Request Demo</span>
                    </motion.a>
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

