import { Link } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login submitted')
  }

  return (
    <div className="login-container">
      <div className="header-section">
        <div className="status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        <div className="header-decoration">
          <div className="decorative-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
          <div className="truck-illustration">
            <svg viewBox="0 0 120 140" className="truck-svg">
              <rect x="25" y="50" width="35" height="35" rx="4" fill="#ffffff" />
              <rect x="60" y="60" width="40" height="25" rx="4" fill="#ffffff" />
              <rect x="28" y="55" width="14" height="12" rx="2" fill="#E2E8F0" />
              <circle cx="38" cy="110" r="10" fill="#ffffff" />
              <circle cx="38" cy="110" r="6" fill="#2D3748" />
              <circle cx="85" cy="110" r="10" fill="#ffffff" />
              <circle cx="85" cy="110" r="6" fill="#2D3748" />
              <rect x="65" y="65" width="8" height="8" rx="1" fill="#E2E8F0" />
              <rect x="76" y="65" width="8" height="8" rx="1" fill="#E2E8F0" />
              <rect x="87" y="65" width="8" height="8" rx="1" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
        <div className="welcome-text">
          <h1>Hello!</h1>
          <p>Welcome to Logistics Hub</p>
        </div>
      </div>

      <div className="content-section">
        <h2 className="page-title">Login</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="primary-button">Login</button>
        </form>

        <div className="social-divider">
          <div className="divider-line"></div>
          <span className="divider-text">Or login with</span>
          <div className="divider-line"></div>
        </div>

        <div className="social-login">
          <button className="social-button facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="social-button google">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          <button className="social-button apple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </button>
        </div>

        <div className="signup-prompt">
          <span>Don't have an account? </span>
          <Link to="/signup" className="signup-link">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
