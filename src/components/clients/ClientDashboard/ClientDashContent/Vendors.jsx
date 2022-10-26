import React from 'react';

import { HeroF1Container, ClientHeroLinks, VendorsH1} from './VendorsElements';

import photographer from './../../../../images/photographer.jpg'
import decorator from './../../../../images/decorator.webp'
import destination from './../../../../images/destination.jpg'
import beutician from './../../../../images/beutician.jpg'
import musicband from './../../../../images/musicband.jpg'
import caterer from './../../../../images/caterer.jpg'


const Vendors = () => {

  

    

    return (
      <HeroF1Container>
        
            
         
        <div className='flex  w-[85%] ml-[8.5%] justify-between '>

          <ClientHeroLinks to='/client/PhotographersList' >

            <div className='w-[60%]'>
              <VendorsH1>Photographers</VendorsH1>
              
            </div>
          
            <div className='h-full w-full'>
              <img src={photographer} alt ="pht" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
            </div>
        
         </ClientHeroLinks>

         <ClientHeroLinks to='/client/DecoratorsList' >

           <div className='w-[60%]'>
            <VendorsH1>Decorators</VendorsH1>
             
           </div>

           <div className='h-full w-full'>
            <img src={decorator} alt="deco" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
           </div>
        
       </ClientHeroLinks>
        </div> 
         

       <div className='flex w-[85%] ml-[8.5%] justify-between '>

        <ClientHeroLinks to='/client/DestinationPlannersList' >

        <div className='w-[60%]'>
          <VendorsH1>Destination <br></br> Planers</VendorsH1>
          
        </div>

          <div className='h-full w-full'>
            <img src={destination} alt="des" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
          </div>

       </ClientHeroLinks>


       <ClientHeroLinks to='/client/beuticians' >
        
       <div className='w-[60%]'>
        <VendorsH1>Beuticians</VendorsH1>
          
        </div>

          <div className='h-full w-full'>
            <img src={beutician} alt="beuti" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
          </div>

       </ClientHeroLinks>
       </div>


       <div className='flex w-[85%] ml-[8.5%] justify-between'>

        <ClientHeroLinks to='/client/MusicBandsList' >

        <div className='w-[60%]'>
          <VendorsH1>Music Bands</VendorsH1>
          
        </div>

          <div className='h-full w-full'>
            <img src={musicband} alt="band" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
          </div>

       </ClientHeroLinks>


       <ClientHeroLinks to='/client/CaterersList'  >

       <div className='w-[60%]'>
        <VendorsH1>Caterers</VendorsH1>
         
        </div>

          <div className='h-full w-full'>
            <img src={caterer} alt="cate" className = 'w-full h-full rounded-r-[20px]  rounded-bl-[500px] float-right'/>
          </div>
        

       </ClientHeroLinks>
       </div>
       
       </HeroF1Container>
      
       
       
        
    );
}

export default Vendors ;
