import { Link, useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'

function SignUp() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Sign up submitted')
  }

  return (
    <div className="signup-container">
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
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="back-navigation" onClick={() => navigate('/')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span>Back to login</span>
        </div>

        <h2 className="page-title">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="signup-form">
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

          <div className="input-group">
            <div className="input-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <input type="tel" placeholder="Phone" required />
          </div>

          <button type="submit" className="primary-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
