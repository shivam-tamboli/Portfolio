import { motion } from 'framer-motion'
import { FaUser, FaCode, FaRocket } from 'react-icons/fa'

function About() {
  const stats = [
    { number: '3+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '5+', label: 'Technologies' }
  ]

  return (
    <section id="about" className="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// About Me</p>
        <h2 className="section-title">
          Get to know <span>Me</span>
        </h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <FaUser />
            </div>
          </div>
          <div className="about-image-decoration"></div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Full Stack Developer & Backend Specialist</h3>
          <p>
            I'm a passionate Full Stack Developer with expertise in building robust backend 
            systems and modern web applications. My journey in software development has 
            been focused on creating efficient, scalable solutions using Java, Spring Boot, 
            and modern frontend technologies.
          </p>
          <p>
            I specialize in developing RESTful APIs, managing database systems, and building 
            full-stack applications with clean architecture. I'm constantly learning and 
            adapting to new technologies to stay at the forefront of web development.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

