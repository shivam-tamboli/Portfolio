import { m } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub',   url: 'https://github.com/shivam-tamboli',         icon: <FaGithub /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shivamtamboli/', icon: <FaLinkedin /> },
  { name: 'Email',    url: 'mailto:shivamtamboli66@gmail.com',           icon: <FaEnvelope /> }
]

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">ST</span>
            <p className="footer-tagline">Building backends, shipping AI.</p>
          </div>

          <m.div
            className="footer-socials"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <m.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="footer-social-link"
              >
                {social.icon}
              </m.a>
            ))}
          </m.div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Shivam Tamboli — Built with React, Vite &amp; Framer Motion
          </p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
