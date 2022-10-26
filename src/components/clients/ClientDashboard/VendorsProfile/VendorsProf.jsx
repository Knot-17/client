import React from 'react';
import { Link } from "react-router-dom";
import { About, AboutH1, City, Contact, ContactH1, Details, DetailsContent, DetailsH1, PicsContainer, ReviewContent, ReviewContentH1, Reviews, ReviewsH1 } from './VendorsProfElements';
import Wp1 from './../../../../images/Wp1.jpg'
import Wp2 from './../../../../images/Wp2.jpg'
import Wp3 from './../../../../images/Wp3.jpg'
import Wp4 from './../../../../images/Wp4.jpg'
import Wp5 from './../../../../images/Wp5.jpeg'
const VendorsProf = () => {
    return (
        <div>
            <PicsContainer>
                <div className='w-[40%] h-[100%] flex justify-between rounded'>
                    <div className='w-[50%] h-full bg-slate-200 rounded-l-lg'>
                    <img src={Wp3} alt ="pht" className = 'w-full h-full'/>
                    </div>
                    <div className='w-[48.5%] h-full bg-slate-200 '>
                    <img src={Wp4} alt ="pht" className = 'w-full h-full'/>
                    </div>
                </div>
                <div className='w-[59.5%] h-[100%] flex justify-between rounded'>
                    <div className='w-[40%] h-full '>
                        <div className='w-full h-[49.5%] bg-slate-200'>
                        <img src={Wp1} alt ="pht" className = 'w-full h-full'/>
                        </div>
                        <div className='w-full h-[49.5%] bg-slate-200 mt-[1.5%]'>
                        <img src={Wp2} alt ="pht" className = 'w-full h-full'/>
                        </div>
                    </div>
                    <div className='w-[59%] h-full bg-slate-200 rounded-r-lg '>
                    <img src={Wp5} alt ="pht" className = 'w-full h-full'/>
                    </div>
                </div>
            </PicsContainer>
            <div>
                <About>
                    <AboutH1>VMG Weddings</AboutH1>
                    <City>Colombo</City>
                </About>
                
                <Contact>
                    <ContactH1>Contact Info</ContactH1>
                    <div className='flex mt-[20px]'>

                        <div className=' pr-[20px] border-r-2 border-slate-300'>Colombo</div>
                        <div className='pl-[20px]'>071-2283165</div>

                    </div>
                    <div className='flex mt-[20px]'>
                        <Link className='pr-[10px] border-r-2 border-slate-300 text-[#01bf71] hover:text-[#068550]'>Facebook</Link>
                        <Link className='pl-[10px] pr-[10px] border-r-2 border-slate-300 text-[#01bf71] hover:text-[#068550]'>Instagram</Link>
                        <Link className='pl-[10px] text-[#01bf71] hover:text-[#068550]'>Website</Link>

                    </div>
                </Contact>
                <Reviews>
                    <ReviewsH1>Reviews</ReviewsH1>
                    <ReviewContent>
                        <ReviewContentH1>Reviewed On 9/10/2020 by Andrea C</ReviewContentH1>
                        <p className='mt-[10px]'>Matt and Destiny deserve so much more than a 5 star review!! These two not only captured
                             some amazing pictures and videos but they went ABOVE AND BEYOND their roles! We are so 
                             happy that we chose these two to capture our day. They are the most professional, genuinely
                              nice, and sweetest couple! If you’re reading this review right now... just stop your search,
                               you’ve found your photographer and videographer! This is one thing you don’t want to skimp on
                                when it comes to money and these two definitely are 1000% worth it!</p>
                    </ReviewContent>
                    <ReviewContent>
                    <ReviewContentH1>Reviewed On 6/10/2022 by Ashleigh M</ReviewContentH1>
                        <p className='mt-[10px]'>We found Matt later in our planning process...we didn't think we needed a videographer,
                         saw a family member's wedding video and quickly changed our minds. We are SO glad we had Matt and his team capture
                          our wedding. They were OUTSTANDING. We received three different videos of various lengths and each one is so special. 
                          The moments they captured from first look, to the ceremony, to the joy of our reception, will stay with us forever.
                           Matt was exellent with communication. And on the day of, they were so good, we didn't even know they were filming 
                           a lot of the time! If you're looking for profressional, talented videographers who will capture your day perfectly,
                            hire Matt and his team.</p>
                    </ReviewContent>
                </Reviews>
            </div>
        </div>
    );
}

export default VendorsProf;
