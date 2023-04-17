import React, { useState } from 'react'
import './banner.css';

const Banner = () => {
    const [bannerMessage, setBannerMessage ] = useState('Grand Opening Deals!')
  
    


    return (
    <div>
      <p className='banner font-mono bg-slate-950 text-slate-100 text-center'>{bannerMessage}</p>
    </div>
  )
}

export default Banner
