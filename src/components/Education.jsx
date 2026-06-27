import { m } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaCertificate } from 'react-icons/fa'

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'MIT World Peace University',
    location: 'Pune, Maharashtra',
    period: '2024 – 2026',
    status: 'Completed',
    courses: ['Advanced Java', 'Web Technologies', 'Database Systems', 'Software Engineering'],
    icon: <FaGraduationCap />,
    accent: true
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Manipal University Jaipur',
    location: 'Jaipur, Rajasthan',
    period: '2021 – 2024',
    status: 'Completed',
    courses: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Java', 'DBMS'],
    icon: <FaUniversity />,
    accent: false
  }
]

const certifications = [
  {
    name: 'Java Development',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/1k224zTGwaIVkDK_orJ8kDiRknn2QqilP/view?usp=sharing'
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/1h6Ej8olYwK_qiIMGzDmNv_WgO6_JcYBu/view?usp=sharing'
  },
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
                  <span className={`education-status ${item.status === 'Completed' ? 'education-status--completed' : 'education-status--pursuing'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="education-courses">
                {item.courses.map(c => (
                  <span key={c} className="education-course-tag">{c}</span>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </div>

      <m.div
        className="certifications"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="certifications-heading">
          <FaCertificate /> Certifications
        </h3>
        <div className="certifications-grid">
          {certifications.map((cert) => {
            const Tag = cert.link ? 'a' : 'div'
            const linkProps = cert.link
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Tag
                key={cert.name}
                className={`certification-card${cert.link ? ' certification-card--link' : ''}`}
                {...linkProps}
              >
                <FaCertificate className="cert-icon" />
                <div>
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </Tag>
            )
          })}
        </div>
      </m.div>
    </section>
  )
}

export default Education
