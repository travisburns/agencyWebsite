import React from 'react'
import automationRobot from '../../assets/robotautomation.png'
import designIcon from '../../assets/designIcon.png'
import developmentIcon from '../../assets/developmentIcon.png'
import seoIcon from '../../assets/seoIcon.png'
const Services = () => {
  return (
    <div className='services 
    bg-gray-920
    rounded-2xl
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
        font-Poppins
        text-center
        '>
          Services
          </div>
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
        sm:w-[250px] 
        w-full"
        '>
        <img className='services_servicesList1-img' src={designIcon}/>
        <div className='services_servicesList1-info'>
            <div className='services_servicesList1-title'>
            <p className='text-white text-3xl bg-black rounded-2xl'>Design</p>
            </div>
            <div className='services_servicesList1-desc'>

            </div>
        </div>
        </div>
        <div className='services_servicesList2
        bg-indigo-950
        p-5 
        rounded-2xl 
        sm:w-[250px] 
        w-full"
        
        
        '>
        <img className='services_servicesList2-img' src={developmentIcon}/>
        <div className='services_servicesList2-info'>
            <div className='services_servicesList2-title'>
            <p className='text-white text-3xl bg-black rounded-2xl'>Development</p>
            </div>
            <div className='services_servicesList2-desc'>
                
            </div>
        </div>
        </div>

        <div className='services_servicesList3
       bg-indigo-950
       p-5 
       rounded-2xl 
       sm:w-[250px] 
       w-full"
        
        '>
        <img className='services_servicesList3-img' src={seoIcon} alt=""/>
        <div className='services_servicesList3-info'>
            <div className='services_servicesList3-title'>
            <p className='text-white text-3xl bg-black rounded-2xl'>SEO</p>
            </div>
            <div className='services_servicesList3-desc'>
                
            </div>
        </div>
        </div>
        
        <div className='services_servicesList3
       bg-indigo-950
       p-5 
       rounded-2xl 
       sm:w-[250px] 
       w-full"
        
        '>
        <img className='services_servicesList4-img' src={automationRobot} alt="automation icon"/>
        <div className='services_servicesList4-info'>
            <div className='services_servicesList4-title'>
            <p className='text-white text-3xl bg-black rounded-2xl'>Automation</p>
            </div>
            <div className='services_servicesList4-desc'>
                
            </div>
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default Services
