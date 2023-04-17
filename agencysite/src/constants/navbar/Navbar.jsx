import React from 'react'
import logo from '../../assets/eugenewebdevlogo.png'
const Navbar = () => {
  
    return (

    <div className='bg-black h-11'>
    <ul className='flex 
        justify-center 
        text-white 
        font-Poppins
        font-black 
        md:text-[18px] 
        sm:text-[10px] 
        xs:text-[5px]  
        font-Poppins
        font-semibold
        '>

        <li className=''> <img src= {logo}  alt=""/></li>
        <li>Services</li>
        <li>About</li>
        <li>Previous Work</li>
        <li>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar
