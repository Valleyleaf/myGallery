import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <div className='flex-container-row'>
      <Navbar/>
      <div className='outletClass'><Outlet/></div>
    </div>
    </>
  )
}

export default App
