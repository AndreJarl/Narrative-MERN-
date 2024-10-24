import { useState } from 'react'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
   
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App
