import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Landing() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Navigation Bar */}
      <nav>
        <div className='nav-header'>
          <h1>Meet<span className="logo-highlight">ly</span></h1>
        </div>
        <div className="nav-list">
          <p onClick={() => {
            const featuresSec = document.getElementById("featuresSection");
            if (featuresSec) featuresSec.scrollIntoView({ behavior: 'smooth' });
          }}>Features</p>
          <p onClick={() => { router("/aljk23"); }}>Join as Guest</p>
          <p onClick={() => { router("/auth"); }}>Register</p>
          <div onClick={() => { router("/auth"); }} type="button" className="loginBtn">
            <p>Login</p>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="landingPageMain">
        <div className="content glass-card">
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your <br />
            <span className="gradient-text">loved Ones</span>
          </h1>
          <p className="subText">
            Experience seamless video calls, instant screen sharing, and interactive live chat — all in one place.
          </p>
          
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>

        {/* Updated Right Section Image with Frame */}
        <div className="right">
          <div className="heroImageFrame">
            <img 
              src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBjb25mcmVuY2luZ3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Video Meeting Preview" 
            />
            
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="featuresSection" className="featuresWrapper">
        <h2 className="featuresTitle">
          Why Choose <span style={{ color: "#FF9839" }}>Meetly</span>?
        </h2>
        <div className="featuresGrid">
          <div className="featureCard">
            <div className="featureIcon">📹</div>
            <h3>HD Video Calls</h3>
            <p>Crystal clear video and audio quality with low latency optimization.</p>
          </div>
          <div className="featureCard">
            <div className="featureIcon">🖥️</div>
            <h3>Screen Sharing</h3>
            <p>Share your presentation or screen instantly with one click.</p>
          </div>
          <div className="featureCard">
            <div className="featureIcon">💬</div>
            <h3>Instant Live Chat</h3>
            <p>Send messages and files in real-time during meeting sessions.</p>
          </div>
          <div className="featureCard">
            <div className="featureIcon">🔒</div>
            <h3>Secure & Private</h3>
            <p>End-to-end encryption ensures your meetings stay protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
