import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './constants/banner/Banner'
import Hero from './components/hero/Hero'
import Navbar from './constants/navbar/Navbar'
import Services from './components/services/Services'

const App = () => {



 return (
  <div>
    <Banner />
    <Navbar />
    <Hero />
    <Services />
  </div>
 )
}

export default App
