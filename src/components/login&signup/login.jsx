import React from 'react';
import './login.css'; // Make sure the path to your CSS file is correct
import loginImage from '../../image/Login Page Image.svg'; // Adjust the path to where your image is located

function Login() {
  return (
    <div className='loginbody'>
    <div className="wrapper">
      <div className="content-section">
        <h2 className="first">Corporate Expensing & Travel</h2>
        <h2 className="second">Simplified</h2>
        <img src={loginImage} alt="Login Page" />
      </div>

      <div className="login-section">
        <div className="login-container">
          <h2 className="login-header">
            <span className="nessco">NESSCO</span><br />
            <span className="expenses">Expenses</span>
          </h2>
          <form>
            <div className="input-group">
              <input type="text" className="form-input" placeholder="Email address or phone number" required />
            </div>
            <div className="input-group">
              <input type="password" className="form-input" placeholder="Password" required />
              <a href="#" className="forgot-password-link">Forgotten password?</a>
            </div>
            <button type="submit" className="login-btn">Log In</button>
            <hr />
            <div className="signup-text">
              <span className="referpart">Don't have an account?</span>
              <a href="#">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
