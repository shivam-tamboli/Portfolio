import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'

const titles = [
  'Backend Developer',
  'Software Engineer',
  'Java & Spring Boot Dev',
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(prefersReducedMotion() ? titles[0] : '')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      
      <m.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <m.div
          className="hero-available"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="hero-available-dot" />
          Open to full-time roles in 2026
        </m.div>

        <m.p
          className="hero-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </m.p>
        
        <m.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Shivam Tamboli
        </m.h1>
        
        <m.h2
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </m.h2>
        
        <m.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Backend developer specialising in Java, Spring Boot, and FastAPI. I design REST APIs,
          build AI-powered systems using RAG pipelines and vector search, and ship full-stack
          products end to end. Completed internship at MIT World Peace University — open to
          full-time backend roles in 2026.
        </m.p>
        
        <m.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => handleLinkClick(e, '#projects')}
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Contact Me
          </a>
        </m.div>
        
        <m.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href="https://github.com/shivam-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivamtamboli/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shivamtamboli66@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </m.div>
      </m.div>
      
      <m.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse"></div>
        <span>Scroll</span>
      </m.div>
    </section>
  )
}

export default Hero

