import { m } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'MIT World Peace University',
    location: 'Pune, India',
    period: 'Feb 2026 – Present',
    status: 'Current',
    project: 'Learning Management System',
    description:
      'Designed and built a RESTful backend with Express.js and PostgreSQL, implementing JWT-based authentication and role-based access control (Admin/Student) for a full Learning Management System. Engineered normalized relational database schemas and wrote typed, ESLint-enforced server-side code in TypeScript. Delivered a Next.js frontend with role-based routing; primary focus on backend API design, data modeling, and server-side logic.',
    tech: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Next.js', 'JWT', 'ESLint'],
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
                  <p className="experience-project">Project: {item.project}</p>
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
