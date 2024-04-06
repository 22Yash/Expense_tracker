import { useState } from 'react'

import './App.css'
import Signup from './components/Signup'
import LogIn from './components/LogIn'
import Home from './components/Home'


import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LogIn/>}/>

      </Routes>

    </Router>
    
    </>
  )
}

export default App
