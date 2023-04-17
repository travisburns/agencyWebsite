import React from 'react'

const Services = () => {
  return (
    <div className='services bg-black'>
      <div className='services_Title text-center'>
        <div className='services_Title-Text text-white text-5xl'>Services</div>
      </div>
      <div className='services_servicesList flex  space-x-24 justify-center'>
        <div className='services_servicesList1'>
        <img className='services_servicesList1-img'/>
        <div className='services_servicesList1-info'>
            <div className='services_servicesList1-title'>
            <p className='text-white text-3xl'>Web Design</p>
            </div>
            <div className='services_servicesList1-desc'>

            </div>
        </div>
        </div>
        <div className='services_servicesList2'>
        <img className='services_servicesList2-img'/>
        <div className='services_servicesList2-info'>
            <div className='services_servicesList2-title'>
            <p className='text-white text-3xl'>Web Design</p>
            </div>
            <div className='services_servicesList2-desc'>
                
            </div>
        </div>
        </div>

        <div className='services_servicesList3'>
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
