import { useState } from 'react'
import { m } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'shivamtamboli66@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      )
      
      toast.success('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error(`Failed to send: ${error.text || error.message || 'Unknown error'}`)
    }
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'shivamtamboli66@gmail.com',
      link: 'mailto:shivamtamboli66@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'shivamtamboli',
      link: 'https://www.linkedin.com/in/shivamtamboli/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'shivam-tamboli',
      link: 'https://github.com/shivam-tamboli'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'India',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <m.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// Get In Touch</p>
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
      </m.div>

      <div className="contact-content">
        <div className="contact-availability">
          <span className="contact-availability-dot" />
          Open to full-time roles &amp; freelance projects — typically responds within 24 hours
        </div>
        <p className="contact-intro">
          Looking to hire a backend developer who can build production REST APIs, AI-powered
          features, or end-to-end systems? I'd love to hear about it. Reach out below or directly via email.
        </p>

        <div className="contact-wrapper">
          <m.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            {contactInfo.map((item, index) => (
              <div key={item.label} className="contact-item">
                <div className="icon">{item.icon}</div>
                <div className="details">
                  <p className="label">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="value">
                      {item.value}
                    </a>
                  ) : (
                    <p className="value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </m.div>

          <m.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

