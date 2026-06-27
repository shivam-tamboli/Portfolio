import { useState, useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}

function StatItem({ number, label, delay }) {
  const raw = parseInt(number)
  const suffix = number.replace(String(raw), '')
  const [count, ref] = useCountUp(raw, 1000)

  return (
    <m.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </m.div>
  )
}

function About() {
  const stats = [
    { number: '6+', label: 'Projects Completed' },
    { number: '20+', label: 'Technologies' }
  ]

  return (
    <section id="about" className="about">
      <m.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// About Me</p>
        <h2 className="section-title">
          Get to know <span>Me</span>
        </h2>
      </m.div>

      <div className="about-content">
        <m.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Shivam Tamboli"
              className="about-photo"
            />
          </div>
          <div className="about-image-decoration"></div>
        </m.div>

        <m.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Backend Developer & AI Application Builder</h3>
          <p>
            I'm an MCA graduate (MIT World Peace University, 2026) who completed a Software
            Development Internship there. My core focus is backend engineering — designing REST APIs
            with Java and Spring Boot, and building AI-powered systems using RAG pipelines, vector
            search, and LLM integrations.
          </p>
          <p>
            My projects include a production-grade RAG codebase assistant (Python + FastAPI +
            OpenAI), an AI song recommender using Spring AI and MongoDB Atlas Vector Search, a
            multilingual document translation service, and a full-stack URL shortener with FastAPI,
            PostgreSQL, and Redis.
          </p>
          <p>
            I enjoy problems at the intersection of backend engineering and applied AI — building
            systems that are both technically solid and genuinely useful. Open to full-time backend
            roles.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>

          <div className="currently-learning">
            <span className="learning-label">// currently exploring</span>
            <div className="learning-tags">
              {['System Design'].map(tag => (
                <span key={tag} className="learning-tag">{tag}</span>
              ))}
            </div>
          </div>
        </m.div>
      </div>

      <m.div
        className="github-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://github.com/shivam-tamboli"
          target="_blank"
          rel="noopener noreferrer"
          className="github-cta-btn"
          aria-label="View GitHub profile"
        >
          <FaGithub />
          View GitHub Profile
        </a>
      </m.div>
    </section>
  )
}

export default About

