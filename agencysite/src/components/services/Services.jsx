import React from 'react'

const Services = () => {
  return (
    <div className='services 
    bg-black
    sm:px-16 
    px-6 
    sm:py-16 
    py-10 
    max-w-7xl 
    mx-auto 
    relative 
    z-0
    '>
      <div className='services_Title text-center'>
        <div className='services_Title-Text 
        text-white 
        font-black 
        md:text-[60px] 
        sm:text-[50px] 
        xs:text-[40px] 
        text-[30px] 
        font-Poppins'>Services</div>
      </div>
      
      <div className='services_servicesList 
        mt-20 
        flex 
        flex-wrap 
        gap-7
        text-center
        '>
        <div className='services_servicesList1
        bg-indigo-950
        p-5 
        rounded-2xl 
        sm:w-[360px] 
        w-full"
        '>
        <img className='services_servicesList1-img'/>
        <div className='services_servicesList1-info'>
            <div className='services_servicesList1-title'>
            <p className='text-white text-3xl'>Web Design</p>
            </div>
            <div className='services_servicesList1-desc'>

            </div>
        </div>
        </div>
        <div className='services_servicesList2
        bg-indigo-950
        p-5 
        rounded-2xl 
        sm:w-[360px] 
        w-full"
        
        
        '>
        <img className='services_servicesList2-img'/>
        <div className='services_servicesList2-info'>
            <div className='services_servicesList2-title'>
            <p className='text-white text-3xl'>Web Design</p>
            </div>
            <div className='services_servicesList2-desc'>
                
            </div>
        </div>
        </div>

        <div className='services_servicesList3
       bg-indigo-950
       p-5 
       rounded-2xl 
       sm:w-[360px] 
       w-full"
        
        '>
        <img className='services_servicesList3-img'/>
        <div className='services_servicesList3-info'>
            <div className='services_servicesList3-title'>
            <p className='text-white text-3xl'>Web Design</p>
            </div>
            <div className='services_servicesList3-desc'>
                
            </div>
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default Services
