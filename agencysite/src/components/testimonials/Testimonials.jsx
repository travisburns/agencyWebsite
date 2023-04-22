import React from 'react'

const Testimonials = () => {
  
  
  
    return (
    <div>
        <div className='testimonials text-center font-Poppins text-white'>
            <h4 className='testimonials_title  text-white text-[30px] font-black mb-10'>Testimonials</h4>
            <p className='testimonials_grabber font-black mb-10'>Dont't take our word for it. Over 100+ people trust us.</p>
            <div classname='testimonials_scroller'>
                <div className='testimonials_scroller-item rounded-lg bg-slate-950 w-3/5 relative left-[4rem]'>
                    <p className='testimonials_scroller-item_title  mb-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data flex'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    <div className='testimonials_scroller-item_clientInfo-img'>

                    </div>
                    <div className='testimonials_scroller-item_clientInfo-name'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role'>CEO of Apple's to oranges</div>
                    </div>
                    <div classname='testimonials_scroller-item_clientStars rounded-xl'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
