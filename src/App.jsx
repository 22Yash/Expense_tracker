import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import LogIn from './components/LogIn'
import MobileHome from './components/MobileHome'
import Home from './components/Home'
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state when window is resized
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  return (
    <>
      <Router>
        <Routes>
          {/* Render different components based on screen size */}
          <Route path='/' element={isMobile ? <MobileHome /> : <Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
