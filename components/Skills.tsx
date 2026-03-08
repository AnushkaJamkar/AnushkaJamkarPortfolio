'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNode, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaRobot, FaPython, FaFlask, FaDatabase, FaChartBar, FaChartLine } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiExpress, SiGithub } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact />, level: 90, color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'from-gray-400 to-gray-600' },
  { name: 'Semantic HTML', icon: <FaHtml5 />, level: 90, color: 'from-orange-400 to-orange-600' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 88, color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', icon: <FaJs />, level: 90, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Node.js', icon: <FaNode />, level: 85, color: 'from-green-400 to-green-600' },
  { name: 'Express.js', icon: <SiExpress />, level: 80, color: 'from-gray-400 to-gray-600' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: 'from-green-400 to-green-600' },
  { name: 'Python', icon: <FaPython />, level: 82, color: 'from-blue-400 to-yellow-500' },
  { name: 'Flask', icon: <FaFlask />, level: 78, color: 'from-gray-300 to-gray-500' },
  { name: 'SQL', icon: <FaDatabase />, level: 80, color: 'from-sky-400 to-blue-600' },
  { name: 'Power BI', icon: <FaChartBar />, level: 75, color: 'from-yellow-400 to-amber-600' },
  { name: 'Tableau', icon: <FaChartLine />, level: 74, color: 'from-indigo-400 to-blue-600' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: 'from-orange-400 to-red-500' },
  { name: 'GitHub', icon: <SiGithub />, level: 85, color: 'from-gray-400 to-gray-600' },
  { name: 'Automation', icon: <FaRobot />, level: 87, color: 'from-cyan-400 to-teal-400' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-6 rounded-xl text-center group hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-5xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  />
                </div>
                <span className="text-sm text-white/60 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
