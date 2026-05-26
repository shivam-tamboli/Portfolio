import { m } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    role: 'Software Developer Intern',
    company: 'Siddesh Technologies Private Limited',
    location: 'Pune, India',
    period: 'Feb 2026 – Present',
    status: 'Current',
    description:
      'Working on backend development tasks — designing and implementing REST APIs, contributing to feature development, and participating in code reviews within a professional team environment. Applying Java and Spring Boot skills to real-world software projects.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Git'],
    icon: <FaBriefcase />,
  }
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <m.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// Work History</p>
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>
      </m.div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <m.div
            key={item.id}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="experience-card-icon">
              {item.icon}
            </div>

            <div className="experience-card-body">
              <div className="experience-card-header">
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-location">{item.location}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-status experience-status--current">{item.status}</span>
                </div>
              </div>

              <p className="experience-description">{item.description}</p>

              <div className="experience-tech">
                {item.tech.map(t => (
                  <span key={t} className="experience-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
