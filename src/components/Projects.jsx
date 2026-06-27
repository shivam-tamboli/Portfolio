import { useState } from 'react'
import { m } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { FaGithub, FaExternalLinkAlt, FaPizzaSlice, FaMusic, FaRobot, FaFileAlt, FaBookOpen, FaLaptopCode, FaLock, FaLink, FaServer } from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 1,
    title: 'AI Codebase Assistant',
    description: 'Production-grade RAG system for querying code repositories in natural language. Upload a ZIP or import from GitHub, ask questions in plain English, and get AI answers with exact file and line-number citations — streamed token-by-token.',
    tech: ['Python 3.12', 'FastAPI', 'MongoDB Atlas', 'React 19', 'OpenAI', 'Cohere', 'JWT'],
    github: 'https://github.com/shivam-tamboli/AI-CodeBase-Assistant',
    demo: 'https://ai-code-base-assistant-kws4.vercel.app',
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    caseStudy: {
      problem: 'Developers working on unfamiliar codebases spend hours just finding where things are defined. The goal was a tool you could point at any repository and ask plain-English questions, getting answers with exact file and line references.',
      solution: 'Built an async FastAPI backend that ingests repositories via ZIP upload or GitHub import. Multi-language AST parsing (Python stdlib ast, tree-sitter for JS/TS/Go/Java/Rust/Ruby) chunks code at function and class boundaries. Chunks are embedded with OpenAI and stored in MongoDB Atlas. Queries run hybrid retrieval — semantic vector search + keyword text search — fused with Reciprocal Rank Fusion (k=60), then re-ranked with Cohere. Answers stream token-by-token via SSE.',
      highlights: [
        'Incremental re-indexing via MD5 hash diff — unchanged files produce zero API calls',
        'Hybrid search: RRF fusion of vector + keyword results for higher recall',
        'Cohere cross-encoder re-ranking with BM25 fallback',
        'Multi-turn conversation sessions with tiktoken-based context window management',
        'JWT auth (HS256) + per-IP rate limiting on all endpoints',
        '41 automated tests (pytest + httpx), fully mock-isolated'
      ],
      challenges: 'Citation hallucination — the LLM would confidently cite file paths that did not exist. Fixed by post-processing every answer with a regex validator that cross-checks every cited path against the actual retrieved chunk metadata before sending the response.'
    }
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    description: 'Full-stack LMS built during internship at MIT World Peace University. RESTful backend with Express.js and PostgreSQL, JWT authentication, role-based access control (Admin/Student), normalized relational schema, and a Next.js frontend with role-based routing.',
    tech: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Next.js', 'JWT'],
    github: null,
    demo: null,
    internship: true,
    icon: <FaLaptopCode />,
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    caseStudy: {
      problem: 'MIT World Peace University needed a centralised platform where admins can manage courses and students can access enrolled content — with strict role separation and a clean, typed backend.',
      solution: 'Built the complete backend with Express.js and PostgreSQL. Designed a normalized relational schema covering users, courses, enrollments, and sessions. JWT-based authentication with role-based access control (Admin/Student) secures every route. TypeScript with ESLint enforces type safety and consistency across the API layer. Delivered a Next.js frontend with protected routes matching backend roles.',
      highlights: [
        'JWT authentication with role-based access control (Admin / Student)',
        'Normalized PostgreSQL schema: users, courses, enrollments, sessions',
        'Fully typed TypeScript codebase with ESLint enforcement',
        'Modular API architecture: auth, course management, student workflows',
        'Next.js frontend with role-aware routing and Tailwind CSS',
        'Primary focus on backend API design, data modeling, and server-side logic'
      ],
      challenges: 'Ensuring strict role separation without duplicating middleware logic. Solved with a composable auth middleware chain that attaches role context to every request, allowing route-level guards to be declarative rather than repeated.'
    }
  },
  {
    id: 2,
    title: 'LyricMind',
    description: 'AI-powered mood-based song recommender. Accepts natural-language mood input, runs semantic vector search via MongoDB Atlas HNSW, re-ranks candidates with GPT-4o-mini, and returns ranked songs with AI-generated explanations.',
    tech: ['Java 21', 'Spring Boot 3.5', 'Spring AI', 'MongoDB Atlas', 'React 19', 'GPT-4o-mini'],
    github: 'https://github.com/shivam-tamboli/lyricmind',
    demo: 'https://lyricmind-two.vercel.app/',
    icon: <FaMusic />,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    caseStudy: {
      problem: 'Standard music recommendation systems rely on genre tags or play history. The goal was a system that understands a natural-language mood description like "nostalgic and calm" and finds songs that genuinely match that emotional context.',
      solution: 'Built a RAG pipeline using Spring AI. The mood query is embedded and compared against pre-indexed song vectors in MongoDB Atlas using HNSW similarity search. Top candidates are then re-ranked by GPT-4o-mini which selects the final N songs and generates a human-readable explanation for each match. Results are cached per (mood, limit) pair to avoid redundant LLM calls.',
      highlights: [
        'Semantic vector search via MongoDB Atlas HNSW index (threshold 0.5)',
        'GPT-4o-mini re-ranking skipped when candidates ≤ limit — saves 1–3s latency',
        'In-memory cache with 15-minute TTL eliminates repeat AI calls',
        '"Refine Search" bar lets users iterate without starting over',
        'O(limit) token output from re-ranker keeps costs predictable'
      ],
      challenges: 'Re-ranking latency was unpredictable. Solved by making re-ranking conditional — only runs when there are more candidates than needed — and optimising the LLM prompt to output only IDs, not full text, keeping response tokens minimal.'
    }
  },
  {
    id: 3,
    title: 'FlavourFleet',
    description: 'Full-stack food delivery platform with role-based auth (Admin/Customer), REST APIs for order management, keyword search, rating aggregation, and full CRUD on restaurants and menu items.',
    tech: ['Java 21', 'Spring Boot 3.2', 'Spring Data JPA', 'React 18', 'MySQL', 'Maven'],
    github: 'https://github.com/shivam-tamboli/-FlavourFleet',
    demo: null,
    icon: <FaPizzaSlice />,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    caseStudy: {
      problem: 'Build a complete food delivery platform that handles two different user roles — customers browsing and ordering, and admins managing restaurants and menus — with a single backend API serving both.',
      solution: 'Implemented role-based authentication with Spring Security JWT. Designed a layered REST API architecture using Spring Boot with service, repository, and controller layers. MySQL with Spring Data JPA handles relational data. The React 18 frontend consumes the API via Axios with role-aware route guarding.',
      highlights: [
        'Role-based access control (Admin / Customer) with JWT authentication',
        'Full CRUD for restaurants, food items, and orders via REST APIs',
        'Keyword search across menu items with dynamic filtering',
        'Rating aggregation system with average calculation per restaurant',
        'Separated frontend (React) and backend (Spring Boot) with CORS configuration'
      ],
      challenges: 'Keeping the role-based UI logic clean without duplicating API calls. Solved by centralising auth state in a React context and using Axios interceptors to attach JWT headers globally.'
    }
  },
  {
    id: 4,
    title: 'Script Translator',
    description: 'FastAPI service that translates Marathi PDF/DOCX documents to English or Hindi using OpenAI GPT-4o-mini and Sarvam AI. Features async background processing, real-time progress polling, and downloadable translated DOCX output.',
    tech: ['Python', 'FastAPI', 'React', 'Vite', 'Tailwind CSS', 'OpenAI', 'Sarvam AI'],
    github: 'https://github.com/shivam-tamboli/Script-Translator',
    demo: 'https://script-translator.vercel.app/',
    icon: <FaFileAlt />,
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    caseStudy: {
      problem: 'Marathi speakers dealing with legal or official documents often need translations to English or Hindi but have no automated tool that handles PDFs and Word documents cleanly — most tools just dump plain text and lose formatting context.',
      solution: 'Built a FastAPI backend with pdfplumber (PDF extraction) and python-docx (DOCX parsing). Text is chunked into ~1000-character segments and translated in sequence. Provider selection is automatic: OpenAI GPT-4o-mini for English, Sarvam AI sarvam-translate:v1 for Hindi. Each translation job runs as a background task — the client gets a job ID immediately (HTTP 202) and polls for progress every 2 seconds. Completed translations are packaged as a downloadable DOCX.',
      highlights: [
        'Supports both PDF and DOCX input formats via pdfplumber + python-docx',
        'Async background processing — server returns instantly, no blocking',
        'Real-time progress bar via polling (job status endpoint)',
        'Automatic provider routing: OpenAI for English, Sarvam AI for Hindi',
        'Output delivered as formatted, downloadable DOCX file',
        'Deployed frontend on Vercel'
      ],
      challenges: 'Long documents with many chunks caused inconsistent translation quality at chunk boundaries, where sentences were cut mid-way. Resolved by implementing overlap-aware chunking that always breaks at sentence boundaries using regex sentence detection.'
    }
  },
  {
    id: 5,
    title: 'URL Shortener',
    description: 'Full-stack URL shortener with FastAPI, PostgreSQL, Redis, and React. Turns any long URL into a 6-character short code with optional custom aliases, expiry times, click tracking, and Redis cache-aside for sub-millisecond redirects on cache hits.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'Docker', 'Alembic'],
    github: 'https://github.com/shivam-tamboli/url-shortner',
    demo: 'https://url-shortner-eta-khaki.vercel.app',
    icon: <FaLink />,
    gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    caseStudy: {
      problem: 'Build a production-grade URL shortener that handles concurrent redirects without hammering the database on every click, supports custom aliases and expiry, and gives users honest feedback when things go wrong — expired links, taken codes, invalid input.',
      solution: 'Built an async FastAPI backend with PostgreSQL as the source of truth and Redis as a cache layer using the cache-aside pattern. Short codes are generated with 62-character base encoding (56 billion possible codes). New URLs are cached on write — not just on first read — so the very first click is already served from cache. Click counting runs as a FastAPI BackgroundTask so the redirect response is sent before the database write happens.',
      highlights: [
        'Cache-aside with write-through: Redis populated on creation, not just on first read — every redirect served from memory',
        'Background task click counting — redirect completes before DB write, zero added latency to the user',
        'Custom short codes with 409 Conflict on collision — honest UX, no silent fallbacks',
        'Link expiry: Redis TTL and PostgreSQL expires_at always set to the same duration, no separate cleanup job',
        'Same long URL always returns the same short code — deduplication prevents redundant rows',
        '12 automated tests (pytest + httpx) with isolated DB per test, covering all core behaviours and edge cases'
      ],
      challenges: 'Async SQLAlchemy sessions cannot be passed into background tasks — the session is already closed by the time the task runs, causing silent failures. Fixed by giving each background task its own independent session. Also required a full rewrite of the Alembic env.py since the default synchronous setup hangs against an async engine.'
    }
  },
  {
    id: 6,
    title: 'Multithreaded Web Server',
    description: 'Java web server built from raw sockets implementing three concurrency models — single-threaded, thread-per-client, and thread-pool — and benchmarked under concurrent load with JMeter to measure real-world throughput and latency differences.',
    tech: ['Java', 'Java Sockets', 'Multithreading', 'ExecutorService', 'JMeter'],
    github: 'https://github.com/shivam-tamboli/multithreaded-web-server',
    demo: null,
    icon: <FaServer />,
    gradient: 'linear-gradient(135deg, #f7b733 0%, #fc4a1a 100%)',
    caseStudy: {
      problem: 'Most backend developers use frameworks without understanding what actually happens when multiple clients connect simultaneously. The goal was to build a TCP server from raw Java sockets — no frameworks — and measure how each concurrency model behaves under real load.',
      solution: 'Implemented three server variants using java.net.ServerSocket. Single-threaded: accepts one connection, handles it fully, then accepts the next — every concurrent client waits in the OS queue. Thread-per-client: spawns a new Thread for each accepted socket using a lambda consumer, enabling true concurrency but with unbounded thread creation. Thread-pool: uses a fixed-size ExecutorService to bound resource usage and maintain consistent throughput under high load. All three were benchmarked with JMeter using concurrent virtual users.',
      highlights: [
        'Single-threaded model: zero thread overhead but blocks all concurrent clients — only one served at a time',
        'Thread-per-client: true concurrency via new Thread per socket, but no ceiling on thread count',
        'Thread-pool (ExecutorService): bounded concurrency — consistent throughput without unbounded thread growth',
        'JMeter benchmarks quantify throughput and latency under concurrent client load across all three models',
        'Pure Java — java.net.ServerSocket, no frameworks or libraries',
        'Demonstrates why thread-pool is the standard pattern in production servers'
      ],
      challenges: 'The single-threaded server appears fast under light load because there is no thread overhead. The performance gap only becomes visible under concurrent load — JMeter had to be configured with enough virtual threads to saturate the single-threaded bottleneck. Getting the thread-pool size right also required iteration: too small and it bottlenecks like single-threaded, too large and it wastes resources.'
    }
  }
]

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <m.div
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
      </m.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Tilt
              tiltEnable={!reducedMotion}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={!reducedMotion}
              glareMaxOpacity={0.08}
              glareColor="#00ff88"
              glarePosition="all"
              scale={reducedMotion ? 1 : 1.02}
              transitionSpeed={400}
              className="project-card"
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
                  {project.internship ? (
                    <span className="project-badge-internship">
                      <FaLock /> Internship Project
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {!project.internship && (project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="project-badge-backend">Backend / CLI</span>
                  ))}
                  <button
                    className="project-link case-study"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Open ${project.title} case study`}
                  >
                    <FaBookOpen /> Case Study
                  </button>
                </div>
              </div>
            </Tilt>
          </m.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
