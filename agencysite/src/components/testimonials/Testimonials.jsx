import React from 'react'
import testimonialImg from '../../assets/testimonialimg.png'


const Testimonials = () => {
  
  
  
    return (
    <div>
        <div className='testimonials text-center font-Poppins text-white 2xl:pb-[10rem]'>
            <h4 className='testimonials_title  text-white text-[30px] font-black mb-10'>Testimonials</h4>
            <p className='testimonials_grabber font-black mb-10'>Dont't take our word for it. Over 100+ people trust us.</p>
            <div classname='testimonials_scroller flex flex-wrap relative mb:left-[0rem] md:left-[2rem] '>
            <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5 mb-5 left-[4rem] sm:left-[8rem] lg:left-[13rem] 2xl:w-[70.2rem] l-desktop:left-[26rem]'>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem] sm:h-[6rem] sm:w-[6rem] xl:w-[17rem] xl:h-[11rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem] xl:w-[23rem] xl:left-[5.5rem] xl:top-[1rem] 2xl:w-[37rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name sm:text-[25px] xl:text-[46px]'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px] sm:text-[20px] lg:w-[30rem] xl:text-[27px]'>CEO of Apple's to oranges</div>
                    </div>
                    </div>
                    </div>
                </div>


                <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5 mb-5 left-[4rem] sm:left-[8rem] lg:left-[13rem] 2xl:w-[70.2rem] l-desktop:left-[26rem] '>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem] sm:h-[6rem] sm:w-[6rem] xl:w-[17rem] xl:h-[11rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem] xl:w-[23rem] xl:left-[5.5rem] xl:top-[1rem] xl:w-[37rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name sm:text-[25px] xl:text-[46px]'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px] sm:text-[20px] lg:w-[30rem] xl:text-[27px]'>CEO of Apple's to oranges</div>
                    </div>
                    </div>
                    </div>
                </div>



                <div className='testimonials_scroller-item rounded-lg bg-slate-950  relative w-3/5 mb-5 left-[4rem] sm:left-[8rem] lg:left-[13rem]  2xl:w-[70.2rem] l-desktop:left-[26rem]'>
                    <p className='testimonials_scroller-item_title  mb-10 pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Doloremque eaque voluptates mollitia ut accusantium exercitationem.
                    </p>
                    <div className='testimonials_scroller-item_data'>

                    
                    <div className='testimonials_scroller-item_clientInfo flex'>
                    
                    <img src={testimonialImg} className='testimonials_scroller-item_clientInfo-img h-[3rem] w-[3rem] sm:h-[6rem] sm:w-[6rem] xl:w-[17rem] xl:h-[11rem]'/>
                    <div className='testimonials_scroller-item_clientInfo-text relative left-[.5rem] xl:w-[23rem] xl:left-[5.5rem] xl:top-[1rem] xl:w-[37rem]'>
                    <div className='testimonials_scroller-item_clientInfo-name sm:text-[25px] xl:text-[46px]'>Mickael Grants</div>
                    <div className='testimonials_scroller-item_clientInfo-role text-[9px] sm:text-[20px] lg:w-[30rem] xl:text-[27px]'>CEO of Apple's to oranges</div>
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
