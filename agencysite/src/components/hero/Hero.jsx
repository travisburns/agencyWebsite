import React from 'react'
import alienImage from '../../assets/alienimage.png'

function Hero() {
  
  
    return (
    <div className='h-[65rem]'>
      <div className=' relative'>
      <img className='relative mb:top-20 mb:left-0 md:left-[5rem] lg:left-[0rem]' src={alienImage} alt="heroImage"/> 
      <h1 className='font-black 
      text-white 
      mb:text-[30px]
      mb:bottom-[7rem]
      mb:left-[3.8rem]
      mb:w-[13rem]
      mb:max-w-full
      mb:bottom-[10rem]
      sm:w-[34rem]
      sm:text-[42px]
      sm:bottom-[12rem]
      md:left-[7rem]
      lg:text-[70px] 
      
      lg:bottom-[39rem]
      lg:w-[32rem]
      lg:left-[29rem]
      
      xs:text-[50px] 
      text-[40px] 
      lg:leading-[98px] 
      mt-60  text-white relative  
       bottom-[10rem]
       text-center
      h-17 
      
      
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
        mb:bottom-[6rem] 
        sm:bottom-[2rem]
        mb:left-[2rem]  
        sm:left-[6.5rem]
        md:left-[10rem]
        md:bottom-[10rem] 
        l-tablet:left-[2rem]
        l-tablet:w-[400px]
        lg:left-[3.5rem]

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
          
         md: left-[2rem]
         bottom-[8rem] 
        mt-1
        mb:bottom-[6rem] 
        mb:left-[2.2rem]  
        sm:left-[6.5rem]
        md:left-[10rem]
        md:bottom-[10rem]
        l-tablet:left-[3rem]
        l-tablet:w-[400px]
        lg:left-[4.5rem]
        '>
           Our Work</button>
           </div>
     </div>
    
  )
}

export default Hero
