
import React from 'react'

const Contact = () => {
  return (
      <div className=' relative w-[80%] left-[2rem] sm:left-[4rem] md:left-[5rem] lg:left-[9rem]  xl:mt-12   gap-10 overflow-hidden l-desktop:left-[15rem]'>
        <p className='text-white font-Poppins text-[1.8rem] relative bottom-[600rem]' >Get in touch</p>
        <h3 className='text-white font-Poppins text-[2rem] font-bold text-center'>Contact.</h3>
        <form 
          
    
          className="mt-12 flex flex-col gap-8 bg-slate-950"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name...</span>
            <input 
              type="text"
              name="name"
             
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none
              border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email...</span>
            <input 
              type="email"
              name="email"
              
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none
              border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message...</span>
            <textarea
              rows="7"
              name="name"
              
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
            <button 
            type ="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            
            >
              
            </button>
          </form>
        

     
        
   </div>
    
  )
}

export default Contact


