import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export default function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const hardUsername = "admin"
    const hardPassword = "123456"

    if (
      formData.username === hardUsername &&
      formData.password === hardPassword
    ) {
      alert("Login Successful ✅")
      navigate("/user-management")
    } else {
      alert("Invalid Username or Password ❌")
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">

        <div className="left-side">
          <div className="logo-container">
            <div className="logo-icon"></div>
          </div>    
        </div>

        <div className="right-side">
          <div className="login-header">
            <h2>Welcome to Campusys</h2>
            <p>Sign in to access your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="forgot-link">
              <span onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </span>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}