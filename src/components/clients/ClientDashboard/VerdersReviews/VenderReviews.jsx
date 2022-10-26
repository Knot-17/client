import React from 'react';
import { Container, PH1, PH2, VRContainer, YourReviewsH1Container } from './VenderReviewsElements';


const VenderReviews = () => {
    return (
        <VRContainer>
            <Container>
                <PH1>Review Your Wedding Vendors</PH1>
                <PH2>Find Your Vendor</PH2>
                <div className='flex'>
                <div className='border-[1px] border-slate-300 w-[50%] flex justify-center bg-white  '>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[40px] outline-none w-[80%]"
                 placeholder="Vendor Name"/>
                 
                 </div>
                 <button className="bg-red-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-red-600 cursor-pointer ml-[2%] "
             type="submit">
                    Search
                </button>
                </div>
            </Container>
            <YourReviewsH1Container>
                <h1 className='font-medium text-[20px]'>Your Reviews</h1>
            </YourReviewsH1Container>
        </VRContainer>
    );
}

export default VenderReviews;
