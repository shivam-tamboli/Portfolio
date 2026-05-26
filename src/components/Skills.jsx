import { m } from 'framer-motion'
import {
  FaJava, FaRobot, FaServer, FaDatabase, FaTools, FaCode, FaSearch, FaNetworkWired
} from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiTypescript,
  SiSpringboot, SiFastapi, SiExpress, SiNodedotjs,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiMysql, SiDocker,
  SiGit, SiPostman, SiApachemaven, SiJsonwebtokens
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    color: '#60a5fa',
    skills: [
      { name: 'Java',       icon: <FaJava />,       color: '#f89820' },
      { name: 'Python',     icon: <SiPython />,     color: '#3776ab' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    icon: <FaServer />,
    color: '#34d399',
    primary: true,
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
      { name: 'Spring AI',   icon: <FaRobot />,      color: '#6db33f' },
      { name: 'FastAPI',     icon: <SiFastapi />,    color: '#009688' },
      { name: 'Express.js',  icon: <SiExpress />,    color: '#a0a0a0' },
      { name: 'Node.js',     icon: <SiNodedotjs />,  color: '#5fa04e' },
    ]
  },
  {
    title: 'AI & Systems',
    icon: <FaRobot />,
    color: '#a78bfa',
    primary: true,
    skills: [
      { name: 'RAG Pipelines',    icon: <FaNetworkWired />, color: '#a78bfa' },
      { name: 'Vector Search',    icon: <FaSearch />,       color: '#a78bfa' },
      { name: 'LLM Integration',  icon: <FaRobot />,        color: '#a78bfa' },
      { name: 'Hybrid Search',    icon: <FaSearch />,       color: '#a78bfa' },
    ]
  },
  {
    title: 'Databases & Infra',
    icon: <FaDatabase />,
    color: '#fb923c',
    skills: [
      { name: 'MongoDB Atlas', icon: <SiMongodb />,    color: '#47a248' },
      { name: 'PostgreSQL',    icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL',         icon: <SiMysql />,      color: '#4479a1' },
      { name: 'Docker',        icon: <SiDocker />,     color: '#2496ed' },
    ]
  },
  {
    title: 'Frontend (Supporting)',
    icon: <SiReact />,
    color: '#38bdf8',
    skills: [
      { name: 'React',        icon: <SiReact />,       color: '#61dafb' },
      { name: 'Next.js',      icon: <SiNextdotjs />,   color: '#a0a0a0' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: <FaTools />,
    color: '#94a3b8',
    skills: [
      { name: 'Git',      icon: <SiGit />,          color: '#f05032' },
      { name: 'Maven',    icon: <SiApachemaven />,   color: '#c71a36' },
      { name: 'Postman',  icon: <SiPostman />,       color: '#ff6c37' },
      { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#d63aff' },
    ]
  }
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <m.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// My Skills</p>
        <h2 className="section-title">
          Technical <span>Expertise</span>
        </h2>
      </m.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIdx) => (
          <m.div
            key={category.title}
            className={`skill-category ${category.primary ? 'skill-category--primary' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
          >
            <h3 className="skill-category-title">
              <span className="skill-category-icon" style={{ color: category.color }}>
                {category.icon}
              </span>
              {category.title}
            </h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIdx) => (
                <m.span
                  key={skill.name}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08 + skillIdx * 0.04 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="skill-tag-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </m.span>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
