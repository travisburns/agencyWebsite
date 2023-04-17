import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './constants/banner/Banner'
import Hero from './components/hero/Hero'

const App = () => {



 return (
  <div>
    <Banner />
    <Hero />
  </div>
 )
}

export default App
