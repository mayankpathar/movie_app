
import React from 'react'
import Logoapp from './Logoapp'
const featurePoints = [
  {
    icon: 'bx bx-play-circle',
    text: 'Unlimited movies & TV shows',
  },
  {
    icon: 'bx bx-download',
    text: 'Download and watch anywhere',
  },
  {
    icon: 'bx bx-tv',
    text: 'Create lists and get personalized recommendations',
  },
]

const collage = [
  '/images/movies/bat-man.jpg',
  '/images/series/stranger-thing.jpg',
  '/images/movies/insidious.jpg',
  '/images/movies/hunter-killer.jpg',
  '/images/cartoons/dragon.jpg',
  '/images/movies/love-roise.jpg',
]

function Sign() {
  return (
    <main className="sign-page">
      <section className="sign-card">
        <div className="sign-visual">
       

          <div className="collage-grid" aria-hidden="true">
            {collage.map((poster, index) => (
              <img key={poster} src={poster} alt="" className={`collage-poster poster-${index + 1}`} />
            ))}
          </div>

          <div className="sign-visual-overlay" />

          <div className="sign-visual-content">
            <Logoapp/>

            <h1>Welcome to Phoenix Zone</h1>
            <p>
              Create your account and start watching thousands of movies and TV shows.
            </p>

            <ul className="feature-list">
              {featurePoints.map((feature) => (
                <li key={feature.text}>
                  <i className={feature.icon} aria-hidden="true" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sign-form-panel">
          <div className="sign-form-header">
            <h2>Create Your Account</h2>
            <p>Join MovieFlix and enjoy unlimited entertainment.</p>
          </div>

          <form className="sign-form">
            <label>
              <span>Full Name</span>
              <div className="input-shell">
                <i className="bx bx-user" aria-hidden="true" />
                <input type="text" placeholder="Enter your full name" />
              </div>
            </label>

            <label>
              <span>Email Address</span>
              <div className="input-shell">
                <i className="bx bx-envelope" aria-hidden="true" />
                <input type="email" placeholder="Enter your email address" />
              </div>
            </label>

            <label>
              <span>Password</span>
              <div className="input-shell">
                <i className="bx bx-lock-alt" aria-hidden="true" />
                <input type="password" placeholder="Create a password" />
                <button type="button" className="input-action" aria-label="Show password">
                  <i className="bx bx-low-vision" aria-hidden="true" />
                </button>
              </div>
              <small>At least 8 characters with letters, numbers & symbols</small>
            </label>

            <label>
              <span>Confirm Password</span>
              <div className="input-shell">
                <i className="bx bx-lock-alt" aria-hidden="true" />
                <input type="password" placeholder="Confirm your password" />
                <button type="button" className="input-action" aria-label="Show password confirmation">
                  <i className="bx bx-low-vision" aria-hidden="true" />
                </button>
              </div>
            </label>

            <label className="terms-row">
              <input type="checkbox" />
              <span>
                I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
              </span>
            </label>

            <button type="submit" className="primary-button">
              Sign Up
            </button>

            <div className="divider">
              <span />
              <p>or</p>
              <span />
            </div>

            <div className="social-row">
              <button type="button" className="social-button">
                <img src="https://www.google.com/favicon.ico" alt="" aria-hidden="true" />
                <span>Continue with Google</span>
              </button>

              <button type="button" className="social-button">
                <i className="bx bxl-facebook-circle" aria-hidden="true" />
                <span>Continue with Facebook</span>
              </button>
            </div>

            <p className="sign-in-line">
              Already have an account? <a href="#">Sign In</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Sign
