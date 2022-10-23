import React,{useState,useEffect,useRef} from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import FormGroup from '@mui/material/FormGroup';

import Checkbox from '@mui/material/Checkbox';
import { ButtonContainer,DistanceForm, ClearButton, DistanceContainer, DropdownContainer, MoreFiltersContainer, SaveButton, MoreFilters, CloseIcon, MoreFiltersWrapper, MoreFiltersH1,GuestCapacityContainer, GuestCapacityForm} from './FilterElements';



const Filter = () => {
    const [showGuestCapacity,setShowGuestCapacity] = useState(false);
    const [showDistance,setShowDistance] = useState(false);
    const [showMoreFilters,setshowMoreFilters] = useState(false);

    

    function useOutsideClickGC(ref1,ref2) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref1.current && !ref1.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) {
            setShowGuestCapacity(false);
            // console.log(`${s}`)
            // setShowDistance(false);
            // setshowWeddingEvents(false);
            // setshowAwardWinners(false);
            // setshowMoreFilters(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    }
    function useOutsideClickD(ref1,ref2) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref1.current && !ref1.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) {
            // setShowStartingPrice(false);
            setShowDistance(false);
            // console.log("distance")
            // setshowWeddingEvents(false);
            // setshowAwardWinners(false);
            // setshowMoreFilters(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    }
   
   
    function useOutsideClickMF(ref1,ref2) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref1.current && !ref1.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) {
            // setShowStartingPrice(false);
            // setShowDistance(false);
            // setshowWeddingEvents(false);
            // setshowAwardWinners(false);
            setshowMoreFilters(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    }

    const GuestCapacityRef = useRef(null);
    const GCDropRef= useRef(null);
    const DistenceRef = useRef(null);
    const DDropRef= useRef(null);
    const MfDropRef = useRef(null);
    const MoreFiltersRef = useRef(null);

    useOutsideClickGC(GuestCapacityRef,GCDropRef);
    useOutsideClickD(DistenceRef,DDropRef);
    useOutsideClickMF(MoreFiltersRef,MfDropRef);



    return (
        
        <div>
            <div className='flex ml-auto mr-auto  w-[200px] xs:ml-[8.5%] xs:w-[90%] '>
           
            <DistanceContainer ref={DistenceRef} 
            onClick={() => {
               if(showDistance===false){
                setShowDistance(true);
               }
               else{
                setShowDistance(false);
               }
                  
              
              }}
            >
                <h3>Distance</h3>
            </DistanceContainer>

            <GuestCapacityContainer ref={GuestCapacityRef} 
            onClick={() => {
               if(showGuestCapacity===false){
                setShowGuestCapacity(true);
               }
               else{
                setShowGuestCapacity(false);
               }
                  
              
              }}
            >
                <h3>GuestCapacity</h3>
            </GuestCapacityContainer>

            
           
            
            
            <MoreFiltersContainer ref={MoreFiltersRef}
            onClick={() => {
             if(showMoreFilters===false){
              setshowMoreFilters(true);
             }
             else{
              setshowMoreFilters(false)
             }
                  
              
              }}
            >
                <h3>+ More Filters</h3>
            </MoreFiltersContainer >
            </div>
 <div className='flex'>


<DropdownContainer className={`${showDistance? "block":"hidden"} ml-[8.5%]`} ref={DDropRef} >
            <DistanceForm  >
                
            <FormControl>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='ml-[30px]'
    name="radio-buttons-group"
  >
    <FormControlLabel value="Within 5 miles" control={<Radio />} label="Within 5 miles" />
    <FormControlLabel value="Within 10 miles" control={<Radio />} label="Within 10 miles" />
    <FormControlLabel value="Within 25 miles" control={<Radio />} label="Within 25 miles" />
    <FormControlLabel value="Within 50 miles" control={<Radio />} label="Within 50 miles" />
    <FormControlLabel value="Within 100 miles" control={<Radio />} label="Within 100 miles" />
  </RadioGroup>
  
  </FormControl>
    
  
  

<ButtonContainer>
    <ClearButton>Clear</ClearButton>
  <SaveButton>Save</SaveButton>
  </ButtonContainer>



</DistanceForm>
</DropdownContainer>

<DropdownContainer className={`${showGuestCapacity? "block":"hidden"} ml-[16.5%] `} ref={GCDropRef} >
            <GuestCapacityForm  >
                
            <FormControl>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='ml-[30px]'
    name="radio-buttons-group"
  >
    <FormControlLabel value="0-50" control={<Radio />} label="0-50" />
    <FormControlLabel value="51-100" control={<Radio />} label="51-100" />
    <FormControlLabel value="101-150" control={<Radio />} label="101-150" />
    <FormControlLabel value="151-200" control={<Radio />} label="151-200" />
    <FormControlLabel value="201-250" control={<Radio />} label="201-250" />
    <FormControlLabel value="251-300" control={<Radio />} label="251-300" />
    <FormControlLabel value="300+" control={<Radio />} label="300+" />
  </RadioGroup>
  
  </FormControl>
    
  
  

<ButtonContainer>
    <ClearButton>Clear</ClearButton>
  <SaveButton>Save</SaveButton>
  </ButtonContainer>



</GuestCapacityForm>
</DropdownContainer>






</div>
<MoreFiltersWrapper className={`${showMoreFilters? "block":"hidden"} `} >

<MoreFilters className={`${showMoreFilters? "block":"hidden"} `} ref={MfDropRef} >

  
  <CloseIcon onClick={()=>{
    
    setshowMoreFilters(false);
  }}/>  
 
             
 <FormGroup  className='ml-[30px]  h-[500px]'>
     
     <div className='overflow-auto '>

     <MoreFiltersH1>Price</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel value="Inexpensive"  control={<Checkbox />} label="$ – Inexpensive" /></td>
        <td ><FormControlLabel value="Moderate" control={<Checkbox />} label="$$$ – Moderate" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Affordable" control={<Checkbox />} label="$$ – Affordable" /></td>
        <td><FormControlLabel value="Luxury" control={<Checkbox />} label="$$$$ – Luxury" /></td>
      </tr>
      
      </tbody>

      
     </table>
     <MoreFiltersH1 className='mt-[60px]'>Venue Type</MoreFiltersH1>

     <div className='flex '>
     <FormControlLabel value="Backyard" className='w-[190px]' control={<Checkbox />} label="Backyard" />
     <FormControlLabel value="Hotel" control={<Checkbox />} label="Hotel" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Ballroom" className='w-[190px]'  control={<Checkbox />} label="Ballroom" />
     <FormControlLabel value="Industrial & Warehouse" control={<Checkbox />} label="Industrial & Warehouse" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Barn" className='w-[190px]'  control={<Checkbox />} label="Barn" />
     <FormControlLabel value="Library" control={<Checkbox />} label="Library" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Beach" className='w-[190px]'  control={<Checkbox />} label="Beach" />
     <FormControlLabel  value="Loft" control={<Checkbox />} label="Loft" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Brewery & Distillery" className='w-[190px]'  control={<Checkbox />} label="Brewery & Distillery" />
     <FormControlLabel value="Mountain" control={<Checkbox />} label="Mountain" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Castle" className='w-[190px]'  control={<Checkbox />} label="Castle" />
     <FormControlLabel value="Museum" control={<Checkbox />} label="Museum" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="City Hall" className='w-[190px]'  control={<Checkbox />} label="City Hall" />
     <FormControlLabel value="Park" control={<Checkbox />} label="Park" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Country Club" className='w-[190px]'  control={<Checkbox />} label="Country Club" />
     <FormControlLabel value="Religious Setting" control={<Checkbox />} label="Religious Setting" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Cruise" className='w-[190px]'   control={<Checkbox />} label="Cruise" />
     <FormControlLabel value="Restaurant" control={<Checkbox />} label="Restaurant" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Desert" className='w-[190px]'  control={<Checkbox />} label="Desert" />
     <FormControlLabel value="Rooftop" control={<Checkbox />} label="Rooftop" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Estate" className='w-[190px]'  control={<Checkbox />} label="Estate" />
     <FormControlLabel value="Tented" control={<Checkbox />} label="Tented" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Garden" className='w-[190px]'  control={<Checkbox />} label="Garden" />
     <FormControlLabel value="Trees" control={<Checkbox />} label="Trees" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Historic Venue" className='w-[190px]'  control={<Checkbox />} label="Historic Venue" />
     <FormControlLabel value="Vineyard & Winery" control={<Checkbox />} label="Vineyard & Winery" />
     </div>

     <MoreFiltersH1 className='mt-[60px]'>Venue Amenities</MoreFiltersH1>

     <div className='flex '>
     <FormControlLabel value="Ceremony Area" className='w-[190px]' control={<Checkbox />} label="Ceremony Area" />
     <FormControlLabel value="Liability Insurance" control={<Checkbox />} label="Liability Insurance" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Dressing Room" className='w-[190px]'  control={<Checkbox />} label="Dressing Room" />
     <FormControlLabel value="On-Site Accommodations" control={<Checkbox />} label="On-Site Accommodations" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Handicap Accessibl" className='w-[190px]'  control={<Checkbox />} label="Handicap Accessibl" />
     <FormControlLabel value="Reception Area" control={<Checkbox />} label="Reception Area" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Indoor Event Space" className='w-[190px]'  control={<Checkbox />} label="Indoor Event Space" />
     <FormControlLabel value="Wireless Internet" control={<Checkbox />} label="Wireless Internet" />
     </div>

     <MoreFiltersH1 className='mt-[60px]'>Venue Service Offerings</MoreFiltersH1>

     <div className='flex '>
     <FormControlLabel value="Bar & Drinks" className='w-[190px]' control={<Checkbox />} label="Bar & Drinks" />
     <FormControlLabel value="Planning"  control={<Checkbox />} label="Planning" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Cakes & Desserts" className='w-[190px]'  control={<Checkbox />} label="Cakes & Desserts" />
     <FormControlLabel value="Rentals & Equipment" control={<Checkbox />} label="Rentals & Equipment" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Destination Weddings" className='w-[190px]'  control={<Checkbox />} label="Destination Weddings" />
     <FormControlLabel value="Service Staff" control={<Checkbox />} label="Service Staff" />
     </div>
     <div className='flex  '>
     <FormControlLabel value="Food & Catering" className='w-[190px]'  control={<Checkbox />} label="Food & Catering" />
     <FormControlLabel value="Transportation" control={<Checkbox />} label="Transportation" />
     </div>


     

     </div>
     
      
      
    </FormGroup>
    
  
  

<ButtonContainer>
    <ClearButton >Clear</ClearButton>
  <SaveButton>Save</SaveButton>
  </ButtonContainer>
    
  
</MoreFilters>
</MoreFiltersWrapper>


        </div>
    );
}

export default Filter;
