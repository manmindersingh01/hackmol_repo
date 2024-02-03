import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar></Navbar>
      {/* //<Login /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Register' element={<Register />} />
      </Routes>



    </>
  )
}

export default App