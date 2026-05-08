import React from 'react'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'

import { Route, Routes } from 'react-router-dom'
import Browser from './Pages/Browser'

function App() {
  
  return (
    <>
     
    <Routes>
      <Navbar />
      {/* <Browser /> */}
     <Route path="/home" element={<Home />} />
     <Route path="/" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App