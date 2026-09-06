import React from 'react'
import "../App.css";
import {Route,Link,BrowserRouter as Router,Routes} from "react-router-dom"; 
import {  useNavigate } from 'react-router-dom';
export default function Landing() {
  const router = useNavigate();
  return (
    <div className="landingPageContainer">
        <nav>
          <div className='nav-header'>
            <h1>Meetly</h1>
          </div>
          <div className="nav-list">
            <p onClick={()=>{
              router("/aljk23")
            }
            }>Join as guest</p>
            <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
            <div onClick={() => {
                        router("/auth")

                    }} type="button">
              <p>Login</p>
            </div>
               
          </div>
        </nav>
        <div className="landingPageMain">
          <div className="content">
          <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
          <p>Made easier with Zoom</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
            
          </div>

          </div>
          <div className="right">
             <img src="../public/mobile.png"></img>
          </div>
        </div>

    </div>
  )
}
