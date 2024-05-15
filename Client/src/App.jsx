import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
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
    <Footer/>
    </>
  )
}

export default App
