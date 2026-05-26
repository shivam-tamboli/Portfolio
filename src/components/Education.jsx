import { m } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "MIT World Peace University",
    location: "Pune, Maharashtra",
    period: "2024 – 2026",
    status: "Pursuing",
    description: "Specialising in software engineering, AI/ML applications, and advanced system design. Building production-grade full-stack and AI-powered projects alongside coursework.",
    icon: <FaGraduationCap />,
    accent: true
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Manipal University Jaipur",
    location: "Jaipur, Rajasthan",
    period: "2021 – 2024",
    status: "Completed",
    description: "Gained a strong foundation in computer science fundamentals, data structures, algorithms, and web development.",
    icon: <FaUniversity />,
    accent: false
  }
]

function Education() {
  return (
    <section id="education" className="education">
      <m.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// My Background</p>
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
      </m.div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <m.div
            key={item.id}
            className={`education-card ${item.accent ? 'education-card--active' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="education-card-icon">{item.icon}</div>
            <div className="education-card-body">
              <div className="education-card-header">
                <div>
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-location">{item.location}</p>
                </div>
                <div className="education-meta">
                  <span className="education-period">{item.period}</span>
                  <span className={`education-status ${item.accent ? 'education-status--pursuing' : 'education-status--completed'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <p className="education-description">{item.description}</p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Education
