import { m } from 'framer-motion'
import { FaReact, FaDatabase, FaServer, FaTools, FaCode, FaRobot } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['Java', 'Python', 'JavaScript']
  },
  {
    title: 'Frontend Development',
    icon: <FaReact />,
    skills: ['React 19', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS', 'Axios']
  },
  {
    title: 'Backend & Frameworks',
    icon: <FaServer />,
    skills: ['Spring Boot 3', 'Spring AI', 'Spring Data JPA', 'Hibernate', 'FastAPI', 'REST APIs']
  },
  {
    title: 'Databases & Search',
    icon: <FaDatabase />,
    skills: ['MongoDB Atlas', 'MySQL', 'Vector Search (HNSW)', 'H2 Database']
  },
  {
    title: 'AI & Integrations',
    icon: <FaRobot />,
    skills: ['OpenAI API', 'Sarvam AI', 'RAG Pipelines', 'LLM Integration', 'Prompt Engineering']
  },
  {
    title: 'Tools & DevOps',
    icon: <FaTools />,
    skills: ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'JWT Auth']
  }
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <m.div
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
      </m.div>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <m.div
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
                  <m.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </m.span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

