import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shivam-tamboli',
      icon: <FaGithub />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivamtamboli/',
      icon: <FaLinkedin />
    },
    {
      name: 'Email',
      url: 'mailto:shivamtamboli66@gmail.com',
      icon: <FaEnvelope />
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            © {currentYear} Shivam Tamboli. Built with <FaHeart style={{ color: '#ff6b6b', margin: '0 5px' }} /> and React
          </p>
        </div>
        
        <motion.div
          className="footer-socials"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

