import React from 'react'
import agencyBackground from '../../assets/agencybackground.png';

const Work = () => {
  
    return (
        <section className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0' >
        <div className='mt-20 flex flex-wrap gap-7'></div>
        <div className='bg-slate-950 p-5 rounded-2xl sm:w-[360px] w-full'>
            <div className='relative w-full h-[230px]'>
            <img src={agencyBackground} className='w-full h-full object-cover rounded-2xl'/>
            </div>
        </div>
        </section>
  )
}

export default Work
