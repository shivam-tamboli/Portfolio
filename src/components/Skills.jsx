import { motion } from 'framer-motion'
import { FaJava, FaPython, FaJs, FaReact, FaDatabase, FaServer, FaTools, FaCode } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['Java', 'Python', 'JavaScript']
  },
  {
    title: 'Frontend Development',
    icon: <FaReact />,
    skills: ['React', 'HTML', 'CSS', 'Thymeleaf']
  },
  {
    title: 'Backend & Frameworks',
    icon: <FaServer />,
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'MVC Architecture']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['MySQL', 'H2 Database']
  },
  {
    title: 'Tools & Technologies',
    icon: <FaTools />,
    skills: ['Git', 'GitHub', 'Postman', 'Maven', 'RESTful APIs']
  },
  {
    title: 'Concepts',
    icon: <FaJava />,
    skills: ['OOP', 'Dependency Injection', 'Exception Handling', 'CRUD Operations']
  }
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// My Skills</p>
        <h2 className="section-title">
          Technical <span>Expertise</span>
        </h2>
      </motion.div>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="skill-category-title">
                <span className="icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

