import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#ffffff',
          gap: '1rem',
          fontFamily: 'Poppins, sans-serif'
        }}>
          <p style={{ color: '#00ff88', fontFamily: 'Space Mono, monospace', fontSize: '0.9rem' }}>// oops</p>
          <h2 style={{ fontSize: '1.5rem' }}>Something went wrong</h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '0.5rem',
              padding: '0.6rem 1.5rem',
              background: '#00ff88',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            Reload page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
