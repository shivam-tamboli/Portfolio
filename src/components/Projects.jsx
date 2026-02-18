import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTrain, FaPizzaSlice, FaPaw, FaShoppingCart } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Railway Reservation Management System',
    description: 'A comprehensive CLI-based railway ticket booking system featuring modular service-layer architecture, seat allocation using 2D matrix logic, booking validation, and JSON-based file persistence for data storage.',
    tech: ['Java', 'Collections', 'Jackson', 'JSON', 'BCrypt', 'Maven'],
    github: 'https://github.com/shivam-tamboli',
    demo: null,
    icon: <FaTrain />,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'Food Delivery Platform',
    description: 'A full-stack food delivery platform with role-based authentication (Admin/User), REST APIs for order management, keyword search functionality, and dynamic rating aggregation using MySQL.',
    tech: ['Spring Boot', 'JPA/Hibernate', 'React', 'MySQL', 'Maven'],
    github: 'https://github.com/shivam-tamboli',
    demo: null,
    icon: <FaPizzaSlice />,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: 'ShopHub - Ecommerce Application',
    description: 'A modern e-commerce web application with product catalog, shopping cart, user authentication, and checkout functionality. Features responsive design and localStorage data persistence.',
    tech: ['React 19', 'Vite', 'React Router v6', 'React Hook Form', 'localStorage'],
    github: 'https://github.com/shivam-tamboli/ecommerce--react-project',
    demo: 'https://ecommerce-react-project-lake.vercel.app/',
    icon: <FaShoppingCart />,
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  },
  {
    id: 4,
    title: 'Pet Clinic Management System',
    description: 'A comprehensive Pet Clinic management system with CRUD operations for owners, pets, veterinarians, and visit records. Features in-memory H2 database with MySQL integration option.',
    tech: ['Spring Boot', 'Spring MVC', 'JPA/Hibernate', 'MySQL', 'H2', 'Maven'],
    github: 'https://github.com/shivam-tamboli',
    demo: null,
    icon: <FaPaw />,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// My Projects</p>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div 
              className="project-image"
              style={{ background: project.gradient }}
            >
              {project.icon}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <FaGithub /> Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : (
                  <span className="project-link demo" style={{ cursor: 'not-allowed', opacity: 0.7 }}>
                    <FaExternalLinkAlt /> Demo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

