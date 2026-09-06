import React, { useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import "../App.css";
import { AuthContext } from '../contexts/AuthContext';
import { IconButton, Button, TextField } from '@mui/material';
import RestoreIcon from "@mui/icons-material/Restore";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
 const {addToUserHistory} = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode)
    if (meetingCode.trim()) {
      navigate(`/${meetingCode}`);
    }
  };

  return (
    <div className="homeWrapper">
      {/* 1. Navbar */}
      <div className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>VideoCall</h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconButton onClick={()=>{
            navigate("/History");
          }}>
            <RestoreIcon />
          </IconButton>
          <p style={{ margin: 0 }}>History</p>
          <Button 
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* 2. Main Content (Left & Right Panels) */}
      <div className="meetContainer">
        <div className="leftPanel">
          <h2>Providing Quality and flexible VideoCall</h2>
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <TextField 
              id="outlined-basic" 
              label="Meeting Code" 
              variant="outlined" 
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)} 
            />
            <Button onClick={handleJoinVideoCall} variant="contained">
              Join VideoCall
            </Button>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="./homelogo.png" alt="home logo" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);