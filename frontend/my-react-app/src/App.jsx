import Landing from "./pages/Landing2.jsx";
import Authentication from "./pages/Authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import VideoMeet from "./pages/VideoMeet.jsx";
import HomeComponent from "./pages/HomeComponent.jsx";
import History from './pages/History';


function App() {

  

  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="" element={<Landing/>}/>
        <Route path="/auth" element={<Authentication/>}/>
         <Route path='/history' element={<History />} />
        <Route path="/:url/" element={<VideoMeet/>}/>

        
      </Routes>
      </AuthProvider>
    </Router>
      
    </>
  )
}

export default App
