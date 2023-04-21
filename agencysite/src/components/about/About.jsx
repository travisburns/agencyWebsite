import React from 'react'
import marketingTeam from '../../assets/marketingTeam.png'
const About = () => {
  
  
    return (
    <div className='mt-12 bg-black-100 rounded-[20px] w-3/5 text-center relative left-[23.3rem]'>
    <div className='bg-slate-950 rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]'>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Our Team</h2>
    
    <div className='mt-20 pb-14 sm:px-16 px-6 flex  gap-7'> 
    <div className='bg-slate-900 p-10 rounded-3xl xs:w-[320px] w-full'>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl' />
            <p className='text-white tracking-wider text-[18px] font-Poppins'>
                Daniel Smith
            </p>
            <p className='text-white tracking-wider text-[14px] font-Poppins font-semi-bold'>
                Obtaining a bachelors of Science and Marketing and over four years of experience, Daniel has been a valueble asset.
            </p>
        </div>
    </div>

    <div className='bg-slate-900 p-10 rounded-3xl xs:w-[320px] w-full'>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl'/>
            <p className='text-white tracking-wider text-[18px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam necessitatibus iusto voluptas?
            </p>
        </div>
    </div>

    <div className='bg-slate-900 p-10 rounded-3xl xs:w-[320px] w-full'>
        <div className='mt-1'>
            <img src={marketingTeam} className='rounded-3xl' />
            <p className='text-white tracking-wider text-[18px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam necessitatibus iusto voluptas?
            </p>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About
