import React, { useState } from 'react'
import './App.css'
import Navigation from './Compunent/Navigation'
import HeroSec from './Compunent/HeroSec'
import Drawer from './Compunent/SideBar'
// import 
// import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  const clickBtn = () => {
    console.log("claikkk")
    // setOpen(!open)
  }

  return (
    <>
      <Drawer open={open} setOpen={setOpen} click={clickBtn} />
      <Navigation open={open} click={clickBtn} setOpen={setOpen} />
      <HeroSec />

    </>
  )
}

export default App
