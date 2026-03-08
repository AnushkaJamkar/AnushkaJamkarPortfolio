'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  highlights?: string[]
  github?: string
  live: string
  color: string
}

const projects: Project[] = [
  {
    title: 'Code Explainer Platform',
    description:
      'AI-powered developer learning platform for understanding and improving source code with analysis reports and guided explanations.',
    image: '</>',
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Vercel',
      'Render',
    ],
    highlights: [
      'Code analysis with complexity and maintainability metrics',
      'Line-by-line explanations and flowchart visualization',
      'AI tutor support with code smell detection and refactoring suggestions',
    ],
    github: 'https://github.com/AnushkaJamkar/code-explainer-platform',
    live: 'https://code-explainer-platform.vercel.app/',
    color: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Desai Academy Website',
    description:
      'Responsive academy website focused on clear navigation, performance, and maintainable frontend structure.',
    image: 'ACA',
    technologies: [
      'React (Vite)',
      'React Router DOM',
      'Plain CSS',
      'Vercel',
      'Git',
      'GitHub',
    ],
    highlights: [
      'Mobile-first responsive pages: Home, About, Programs, Why Us, and Contact',
      'Simple architecture without heavy UI libraries for better maintainability',
      'Organized component/page structure for easy updates and scaling',
    ],
    github: 'https://github.com/AnushkaJamkar/desai-academy',
    live: 'https://desai-academy.vercel.app/',
    color: 'from-blue-500 to-indigo-500',
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
          <p className="text-center text-white/70 max-w-3xl mx-auto mb-6">
            Selected projects with live deployments, clear architecture, and practical business impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                  {project.highlights?.length ? (
                    <ul className="text-sm text-white/70 mb-4 space-y-2">
                      {project.highlights.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  ) : null}
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
                    {project.github ? (
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
                    ) : null}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
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
