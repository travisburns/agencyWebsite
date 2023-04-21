import React from 'react'
import agencyBackground from '../../assets/herocover.png';

const Work = () => {
  
    return (
        <section className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0' >
            <p className='services_Title-Text 
        text-white 
        font-black 
        md:text-[60px] 
        sm:text-[50px] 
        xs:text-[40px] 
        text-[30px] 
        font-Poppins
        text-center
        '>Past Work</p>
        <div className='mt-20 flex flex-wrap gap-7'>
    
        <div className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <img src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Title</h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </div>

        <div className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <img src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Title</h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </div>

        <div className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full mb-5'>
            <div className='relative w-full h-[230px]'>
            <img src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>Title</h3>
                <p className='mt-2 text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia, minima velit repudiandae minus debitis voluptatibus suscipit excepturi quisquam rerum numquam.</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                <p className='text-[14px] text-blue-500'>React</p>
                <p className='text-[14px] text-green-500'>MongoDb</p>
                <p className='text-[14px] text-pink-500'>Tailwind</p>
            </div>
        </div>
        </div>
        </section>
  )
}

export default Work
