import { useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLightbulb, FaWrench, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa'

const FOCUSABLE = 'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'

function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    const focusable = panel ? Array.from(panel.querySelectorAll(FOCUSABLE)) : []
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !focusable.length) return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <m.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <m.div
          ref={panelRef}
          className="modal-panel"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>

          <div className="modal-header" style={{ background: project.gradient }}>
            <div className="modal-header-icon">{project.icon}</div>
            <div>
              <h2 id="modal-title" className="modal-title">{project.title}</h2>
              <div className="modal-tech-row">
                {project.tech.map(t => (
                  <span key={t} className="modal-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <div className="modal-section-label"><FaLightbulb /> Problem</div>
              <p>{project.caseStudy.problem}</p>
            </div>

            <div className="modal-section">
              <div className="modal-section-label"><FaWrench /> Solution & Architecture</div>
              <p>{project.caseStudy.solution}</p>
            </div>

            {project.caseStudy.highlights?.length > 0 && (
              <div className="modal-section">
                <div className="modal-section-label"><FaCheckCircle /> Key Highlights</div>
                <ul className="modal-list">
                  {project.caseStudy.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.caseStudy.challenges && (
              <div className="modal-section">
                <div className="modal-section-label"><FaExclamationTriangle /> Challenges</div>
                <p>{project.caseStudy.challenges}</p>
              </div>
            )}

            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn--github">
                <FaGithub /> View Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn--demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </m.div>
      </m.div>
    </AnimatePresence>
  )
}

export default ProjectModal
