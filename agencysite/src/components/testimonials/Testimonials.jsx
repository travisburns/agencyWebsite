import React from 'react'
import testimonialImg from '../../assets/testimonialimg.png'


const Testimonials = () => {
  
  
  
    return (
    <div>
        <div className='testimonials text-center font-Poppins text-white'>
            <h4 className='testimonials_title  text-white text-[30px] font-black mb-10'>Testimonials</h4>
            <p className='testimonials_grabber font-black mb-10'>Dont't take our word for it. Over 100+ people trust us.</p>
            <div classname='testimonials_scroller flex flex-wrap'>
                <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5  mb-5 left-[4rem]'>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5 width-5]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px]'>CEO of Apple's to oranges</div>
                    </div>
                    </div>
                    </div>
                </div>


                <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5 mb-5 left-[4rem]'>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px]'>CEO of Apple's to oranges</div>
                    </div>
                    </div>
                    </div>
                </div>


                <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5 mb-5 left-[4rem]'>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px]'>CEO of Apple's to oranges</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            


        </div>
    </div>
  )
}

export default Testimonials
