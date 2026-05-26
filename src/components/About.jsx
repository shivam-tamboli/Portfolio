import { useState, useEffect, useRef } from 'react'
import { m } from 'framer-motion'

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
    { number: '4+', label: 'Projects Completed' },
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
            I'm a final-year MCA student and Software Development Intern at MIT World Peace
            University, Pune. My core focus is backend engineering — designing
            REST APIs with Java and Spring Boot, and building AI-powered systems using RAG pipelines,
            vector search, and LLM integrations.
          </p>
          <p>
            My recent projects include a production-grade RAG codebase assistant (Python + FastAPI +
            OpenAI), an AI song recommender using Spring AI and MongoDB Atlas Vector Search, and a
            multilingual document translation service powered by Sarvam AI.
          </p>
          <p>
            I enjoy problems at the intersection of backend engineering and applied AI — building
            systems that are both technically solid and genuinely useful.
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
        className="github-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=shivam-tamboli&show_icons=true&theme=transparent&hide_border=true&title_color=00ff88&icon_color=00ff88&text_color=a0a0a0&bg_color=00000000&rank_icon=github"
          alt="Shivam's GitHub stats"
          className="github-stats-card"
          loading="lazy"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivam-tamboli&layout=compact&theme=transparent&hide_border=true&title_color=00ff88&text_color=a0a0a0&bg_color=00000000&langs_count=6"
          alt="Top languages"
          className="github-stats-card"
          loading="lazy"
        />
      </m.div>
    </section>
  )
}

export default About

