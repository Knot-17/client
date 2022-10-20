import React, { useState}from 'react';

import { VendorsContainer, VLink, VH1, ArrowForwardIcon, StarIcon, ChatIcon, VenIcon  } from './VendorsElements';

const Vendors = () => {

    
    return (
        
        <div>
            
          <VendorsContainer>   
           
              
               <VLink><VH1>Vendors <ArrowForwardIcon/></VH1></VLink>

<div className='flex mt-[30px] ml-[8.5%]'>
    <div >
        <VLink className=' font-medium'>Your Vendors</VLink>
        <div className='mt-[20px]'>
           
        
        <VLink to='/VenReviews' className='flex text-[14px] mt-[10px]'><StarIcon/> Vendor Reviews</VLink> 

        </div>
        

    </div>

    <div className='ml-[70px] border-l-2 border-slate-300'>
        <div className='ml-[20px]'>
            <VLink className=' font-medium'>Your Guest & RSPVs</VLink>
        <div className='mt-[20px]'>
            <VLink to='/PhotographersList' className='flex text-[14px] '>Photographers</VLink>
            <VLink to='/DecoratorsList' className='flex text-[14px] mt-[10px] '>Decorators</VLink>
            <VLink to='/DestinationPlannersList' className='flex text-[14px] mt-[10px] '>Destination Planners</VLink>
            <VLink to='/BeuticiansList' className='flex text-[14px] mt-[10px] '>Beuticians</VLink>
            <VLink to='/MusicBandsList' className='flex text-[14px] mt-[10px] '>Music Bands</VLink>
            <VLink to='/CaterersList' className='flex text-[14px] mt-[10px] '>Caterers</VLink>

        
        </div>
        </div>
    
    </div>
</div>
            
         </VendorsContainer>    
            
            
        </div>
    );
}

export default Vendors;
