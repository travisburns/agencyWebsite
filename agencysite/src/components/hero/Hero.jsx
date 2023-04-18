import React from 'react'
import alienImage from '../../assets/alienimage.png'

function Hero() {
  
  
    return (
    <div className='h-[65rem]'>
      <img className='ml-[25rem] relative' src={alienImage} alt="heroImage"/> 
      <h1 className='font-black 
      text-white 
      lg:text-[70px] 
      sm:text-[60px] 
      xs:text-[50px] 
      text-[40px] 
      lg:leading-[98px] 
      mt-60 text-white relative  
      ml-[50rem] bottom-[35rem] 
      h-17 
      w-[48rem]
      relative
      '>
        Bridge Your Technological Gap Today!
        </h1>
        <button className='
        lg:text-[40px] 
         bg-indigo-950
         font-Poppins
         p-5 
         rounded-2xl 
         sm:w-[450px] 
         text-white
         relative
         left-[30rem] 
         bottom-[35rem] 
        
        '>
          Get Started!</button>
          <button className='
          lg:text-[40px] 
         bg-indigo-950
         font-Poppins
         p-5
         
         rounded-2xl 
         sm:w-[450px] 
         text-white
         relative
         left-[32rem] 
         bottom-[35rem] 
        
        '>
           Our Work</button>
     </div>
    
  )
}

export default Hero
