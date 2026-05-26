import { lazy, Suspense } from 'react'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About    = lazy(() => import('./components/About'))
const Skills   = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Contact  = lazy(() => import('./components/Contact'))
const Footer   = lazy(() => import('./components/Footer'))

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <div className="app">
          <Navbar />
          <main id="main-content">
            <Hero />
            <Suspense fallback={null}>
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default App

