import { useState } from "react"
import { Link } from "react-router-dom"
import "./ForgotPassword.css"

export default function ForgotPassword() {
  const [method, setMethod] = useState("email")

  return (
    <div className="fp-container">
      <div className="fp-wrapper">

        {/* LEFT PANEL */}
        <div className="fp-left">
          <h1 className="brand">CAMPUSYS</h1>
          <p className="tag">THE GODANI'S PRODUCT</p>

          <div className="campus-card">
            <div className="overlay">
              <h3>Modern Campus</h3>
              <p>State-of-the-art infrastructure for quality education</p>
            </div>
          </div>

          <div className="feature">
            <div className="circle"></div>
            <div>
              <h4>Secure Recovery</h4>
              <p>Multi-step verification for account security</p>
            </div>
          </div>

          <div className="feature">
            <div className="circle"></div>
            <div>
              <h4>Quick Process</h4>
              <p>Get back to your account in minutes</p>
            </div>
          </div>

          <div className="feature">
            <div className="circle"></div>
            <div>
              <h4>24/7 Support</h4>
              <p>Help available whenever you need it</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="fp-right">
          <h2>Reset Your Password</h2>
          <p className="sub">
            Follow the steps to recover your account
          </p>

          <div className="form-group">
            <label>Account Type</label>
            <select>
              <option>Student</option>
              <option>Admin</option>
              <option>Staff</option>
            </select>
          </div>

          <div className="form-group">
            <label>Username or Email</label>
            <input type="text" placeholder="Enter your username or email" />
          </div>

          <div className="method-box">
            <div
              className={`method-card ${method === "email" ? "active" : ""}`}
              onClick={() => setMethod("email")}
            >
              <div className="icon gold"></div>
              <h4>Email</h4>
              <p>Send code to registered email</p>
            </div>

            <div
              className={`method-card ${method === "sms" ? "active" : ""}`}
              onClick={() => setMethod("sms")}
            >
              <div className="icon blue"></div>
              <h4>SMS</h4>
              <p>Send code to mobile number</p>
            </div>
          </div>

          <button className="reset-btn">
            Send Reset Instructions
          </button>

          <div className="back">
            Remember your password? <Link to="/login">Back to Login</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
