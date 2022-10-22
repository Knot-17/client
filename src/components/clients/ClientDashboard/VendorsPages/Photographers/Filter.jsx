import React,{useState,useEffect,useRef} from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import FormGroup from '@mui/material/FormGroup';

import Checkbox from '@mui/material/Checkbox';
import {  ButtonContainer,DistanceForm, ClearButton, DistanceContainer, DropdownContainer, MoreFiltersContainer, SaveButton, StartingPriceContainer, StartPriceForm,WeddingEventsContainer, MoreFilters, CloseIcon, MoreFiltersWrapper, MoreFiltersH1 } from './FilterElements';



const Filter = () => {
    const [showStartingPrice,setShowStartingPrice] = useState(false);
    const [showDistance,setShowDistance] = useState(false);
    const [showMoreFilters,setshowMoreFilters] = useState(false);

    const  [s,e] = useState();

    function useOutsideClickSP(ref1,ref2) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref1.current && !ref1.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) {
            setShowStartingPrice(false);
            console.log(`${s}`)
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
      }, [s]);
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
            console.log("distance")
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

    const StaringPriceRef = useRef(null);
    const SPDropRef= useRef(null);
    const DistenceRef = useRef(null);
    const DDropRef= useRef(null);
    const MoreFiltersRef= useRef(null);
    const MfDropRef = useRef(null);

    useOutsideClickSP(StaringPriceRef,SPDropRef);
    useOutsideClickD(DistenceRef,DDropRef);
    useOutsideClickMF(MoreFiltersRef,MfDropRef);



    return (
        
        <div>
            <div className='flex ml-auto mr-auto  w-[200px] xs:ml-[8.5%] xs:w-[90%] '>
            <StartingPriceContainer  ref={StaringPriceRef } 
            onClick={() => {
               if(showStartingPrice===false)
               {
                setShowStartingPrice(true);
               }
               else{
                setShowStartingPrice(false);
               }
              
              }}
            >
                <h3 >Starting Price</h3>
            </StartingPriceContainer>
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
 <DropdownContainer className={`${showStartingPrice? "block":"hidden"} ml-[8.5%]`} ref={SPDropRef}>
            <StartPriceForm >
                
            <FormControl>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='ml-[30px]'
    name="radio-buttons-group"
  >
    <FormControlLabel value="$0-$999" control={<Radio />} label="$0-$999" />
    <FormControlLabel value="$1,000-$1,999" control={<Radio />} label="$1,000-$1,999" />
    <FormControlLabel value="$2,000-$2,999" control={<Radio />} label="$2,000-$2,999" />
    <FormControlLabel value="$3,000-$4,999" control={<Radio />} label="$3,000-$4,999" />
    <FormControlLabel value="$5,000+" control={<Radio />} label="$5,000+" />
  </RadioGroup>
  
  </FormControl>
    
  
  

<ButtonContainer>
    <ClearButton>Clear</ClearButton>
  <SaveButton>Save</SaveButton>
  </ButtonContainer>



</StartPriceForm>
</DropdownContainer >

<DropdownContainer className={`${showDistance? "block":"hidden"} ml-[17.5%]`} ref={DDropRef} >
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





</div>
<MoreFiltersWrapper className={`${showMoreFilters? "block":"hidden"} `} >

<MoreFilters className={`${showMoreFilters? "block":"hidden"} `} ref={MfDropRef} >

  
  <CloseIcon onClick={()=>{
    
    setshowMoreFilters(false);
  }}/>  
 
             
 <FormGroup  className='ml-[30px]'>
     <MoreFiltersH1>Photo & Video Styles</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel value="Artistic" control={<Checkbox />} label="Artistic" /></td>
        <td ><FormControlLabel value="Lifestyle" control={<Checkbox />} label="Lifestyle" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Classic" control={<Checkbox />} label="Classic" /></td>
        <td><FormControlLabel value="Modern" control={<Checkbox />} label="Modern" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Documentary" control={<Checkbox />} label="Documentary" /></td>
        <td><FormControlLabel value="Vintage" control={<Checkbox />} label="Vintage" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Dramatic" control={<Checkbox />} label="Dramatic" /></td>
        
      </tr>
      </tbody>

      
     </table>
     <MoreFiltersH1 className='mt-[30px]'>Photo Shoot Types</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel value="Boudoir" control={<Checkbox />} label="Boudoir" /></td>
        <td ><FormControlLabel value="Engagement" control={<Checkbox />} label="Engagement" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Bridal Portraits" control={<Checkbox />} label="Bridal Portraits" /></td>
        <td><FormControlLabel value="Trash The Dress" control={<Checkbox />} label="Trash The Dress" /></td>
      </tr>
      <tr>
        <td><FormControlLabel value="Trash The Dress" control={<Checkbox />} label="Trash The Dress" /></td>
        
      </tr>
      </tbody>
      
     </table>
     <MoreFiltersH1 className='mt-[30px]'>Photo & Video Options</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel value="Digital Files" control={<Checkbox />} label="Digital Files" /></td>
        <td ><FormControlLabel value="Printed Proofs" control={<Checkbox />} label="Printed Proofs" /></td>
      </tr>
      </tbody>
     
     </table>
      
      
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
