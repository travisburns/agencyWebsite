import React from 'react'
import heroCover from '../../assets/herocover.png'

function Hero() {
  
  
    return (
    <div>
      <img className='w-full' src={heroCover} alt="heroImage"/> 
      <h1 className='font-black text-white lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white relative  left-40 bottom-[35rem] h-17 w-[30rem]'>Bridge Your Technological Gap Today!</h1>
     
     
     
    </div>
    
  )
}

export default Hero
