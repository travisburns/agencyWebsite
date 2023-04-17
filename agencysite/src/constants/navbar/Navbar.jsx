import React from 'react'
import logo from '../../assets/eugenewebdevlogo.png'
const Navbar = () => {
  
    return (
    <div className='bg-black h-11'>
    <ul className='flex text-justify text-gray-50 text-xl space-x-4'>
        <li className='pr-36'> <img src= {logo}  alt=""/></li>
        <li>Services</li>
        <li>About</li>
        <li>Previous Work</li>
        <li>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar
