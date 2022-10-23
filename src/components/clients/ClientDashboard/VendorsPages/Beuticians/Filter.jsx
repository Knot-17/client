import React, { useState, useEffect, useRef } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import FormGroup from "@mui/material/FormGroup";

import Checkbox from "@mui/material/Checkbox";
import {
  AwardWinnersContainer,
  ButtonContainer,
  DistanceForm,
  ClearButton,
  DistanceContainer,
  DropdownContainer,
  MoreFiltersContainer,
  SaveButton,
  StartingPriceContainer,
  StartPriceForm,
  WeddingEventsContainer,
  MoreFilters,
  CloseIcon,
  MoreFiltersWrapper,
  MoreFiltersH1,
  DecoAccentsContainer,
  BeutyServicesForm,
  LightingContainer,
  BeauServicesContainer,
  FitnessServicesContainer,
  FitnessServicesForm,
} from "./FilterElements";

const Filter = () => {
  const [showBeauServices, setShowBeauServices] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showFitnessServices, setShowFitnessServices] = useState(false);
  const [showAwardWinners, setshowAwardWinners] = useState(false);
  const [showMoreFilters, setshowMoreFilters] = useState(false);

  const [s, e] = useState();

  function useOutsideClickBS(ref1, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
          setShowBeauServices(false);
          console.log(`${s}`);
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
  function useOutsideClickD(ref1, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
          // setShowStartingPrice(false);
          setShowDistance(false);
          console.log("distance");
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
  function useOutsideClickFS(ref1, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
          // setShowStartingPrice(false);
          // setShowDistance(false);
          setShowFitnessServices(false);
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
  function useOutsideClickAW(ref1, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
          // setShowStartingPrice(false);
          // setShowDistance(false);
          // setshowWeddingEvents(false);
          setshowAwardWinners(false);
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
  function useOutsideClickMF(ref1, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref1.current &&
          !ref1.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
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

  const BeauServicesRef = useRef(null);
  const BSDropRef = useRef(null);
  const DistenceRef = useRef(null);
  const DDropRef = useRef(null);
  const FitnessServicesRef = useRef(null);
  const FSDropRef = useRef(null);

  useOutsideClickBS(BeauServicesRef, BSDropRef);
  useOutsideClickD(DistenceRef, DDropRef);
  useOutsideClickFS(FitnessServicesRef, FSDropRef);

  return (
    <div>
      <div className="flex ml-auto mr-auto  w-[200px] xs:ml-[8.5%] xs:w-[90%] ">
        <DistanceContainer
          ref={DistenceRef}
          onClick={() => {
            if (showDistance === false) {
              setShowDistance(true);
            } else {
              setShowDistance(false);
            }
          }}
        >
          <h3>Distance</h3>
        </DistanceContainer>

        <BeauServicesContainer
          ref={BeauServicesRef}
          onClick={() => {
            if (showBeauServices === false) {
              setShowBeauServices(true);
            } else {
              setShowBeauServices(false);
            }
          }}
        >
          <h3>Beauty Services</h3>
        </BeauServicesContainer>

        <FitnessServicesContainer
          ref={FitnessServicesRef}
          onClick={() => {
            if (showFitnessServices === false) {
              setShowFitnessServices(true);
            } else {
              setShowFitnessServices(false);
            }
          }}
        >
          <h3>Fitness Services</h3>
        </FitnessServicesContainer>

        {/* <MoreFiltersContainer ref={MoreFiltersRef}
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
            </MoreFiltersContainer > */}
      </div>
      <div className="flex">
        {/* <DropdownContainer className={`${showStartingPrice? "block":"hidden"} ml-[8.5%]`} ref={SPDropRef}>
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
</DropdownContainer > */}

        <DropdownContainer
          className={`${showDistance ? "block" : "hidden"} ml-[8.5%]`}
          ref={DDropRef}
        >
          <DistanceForm>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Within 5 miles"
                  control={<Radio />}
                  label="Within 5 miles"
                />
                <FormControlLabel
                  value="Within 10 miles"
                  control={<Radio />}
                  label="Within 10 miles"
                />
                <FormControlLabel
                  value="Within 25 miles"
                  control={<Radio />}
                  label="Within 25 miles"
                />
                <FormControlLabel
                  value="Within 50 miles"
                  control={<Radio />}
                  label="Within 50 miles"
                />
                <FormControlLabel
                  value="Within 100 miles"
                  control={<Radio />}
                  label="Within 100 miles"
                />
              </RadioGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </DistanceForm>
        </DropdownContainer>

        <DropdownContainer
          className={`${showBeauServices ? "block" : "hidden"} ml-[16.5%] `}
          ref={BSDropRef}
        >
          <BeutyServicesForm>
            <FormControl className="h-[300px] overflow-auto w-full ">
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Beauty Group Bookings"
                  control={<Checkbox />}
                  label="Beauty Group Bookings"
                />
                <FormControlLabel
                  value="Hair Stylists"
                  control={<Checkbox />}
                  label="Hair Stylists"
                />
                <FormControlLabel
                  value="Hair Trials Available"
                  control={<Checkbox />}
                  label="Hair Trials Available"
                />
                <FormControlLabel
                  value="Makeup"
                  control={<Checkbox />}
                  label="Makeup"
                />
                <FormControlLabel
                  value="Makeup Artists"
                  control={<Checkbox />}
                  label="Makeup Artists"
                />
                <FormControlLabel
                  value="Makeup Trials Available"
                  control={<Checkbox />}
                  label="Makeup Trials Available"
                />
                <FormControlLabel
                  value="Nails"
                  control={<Checkbox />}
                  label="Nails"
                />
                <FormControlLabel
                  value="On-Site Hair & Makeup"
                  control={<Checkbox />}
                  label="On-Site Hair & Makeup"
                />
                <FormControlLabel
                  value="Spas"
                  control={<Checkbox />}
                  label="Spas"
                />
                <FormControlLabel
                  value="Tanning"
                  control={<Checkbox />}
                  label="Tanning"
                />
                <FormControlLabel
                  value="Teeth Whitening"
                  control={<Checkbox />}
                  label="Teeth Whitening"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </BeutyServicesForm>
        </DropdownContainer>

        <DropdownContainer
          className={`${showFitnessServices ? "block" : "hidden"} ml-[27.5%] `}
          ref={FSDropRef}
        >
          <FitnessServicesForm>
            <FormControl>
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Boot Camps"
                  control={<Checkbox />}
                  label="Boot Camps"
                />
                <FormControlLabel
                  value="Diet & Nutrition"
                  control={<Checkbox />}
                  label="Diet & Nutrition"
                />
                <FormControlLabel
                  value="Fitness Videos"
                  control={<Checkbox />}
                  label="Fitness Videos"
                />
                <FormControlLabel
                  value="Gyms"
                  control={<Checkbox />}
                  label="Gyms"
                />
                <FormControlLabel
                  value="Personal Trainers"
                  control={<Checkbox />}
                  label="Personal Trainers"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </FitnessServicesForm>
        </DropdownContainer>
      </div>
      {/* <MoreFiltersWrapper className={`${showMoreFilters? "block":"hidden"} `} >

<MoreFilters className={`${showMoreFilters? "block":"hidden"} `} ref={MfDropRef} >

  
  <CloseIcon onClick={()=>{
    
    setshowMoreFilters(false);
  }}/>  
 
             
 <FormGroup  className='ml-[30px]'>
     <MoreFiltersH1>Photo & Video Styles</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel  control={<Checkbox />} label="Artistic" /></td>
        <td ><FormControlLabel  control={<Checkbox />} label="Lifestyle" /></td>
      </tr>
      <tr>
        <td><FormControlLabel  control={<Checkbox />} label="Classic" /></td>
        <td><FormControlLabel  control={<Checkbox />} label="Modern" /></td>
      </tr>
      <tr>
        <td><FormControlLabel  control={<Checkbox />} label="Documentary" /></td>
        <td><FormControlLabel  control={<Checkbox />} label="Vintage" /></td>
      </tr>
      <tr>
        <td><FormControlLabel  control={<Checkbox />} label="Dramatic" /></td>
        
      </tr>
      </tbody>

      
     </table>
     <MoreFiltersH1 className='mt-[30px]'>Photo Shoot Types</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel  control={<Checkbox />} label="Boudoir" /></td>
        <td ><FormControlLabel  control={<Checkbox />} label="Engagement" /></td>
      </tr>
      <tr>
        <td><FormControlLabel  control={<Checkbox />} label="Bridal Portraits" /></td>
        <td><FormControlLabel  control={<Checkbox />} label="Trash The Dress" /></td>
      </tr>
      <tr>
        <td><FormControlLabel  control={<Checkbox />} label="Day After Session" /></td>
        
      </tr>
      </tbody>
      
     </table>
     <MoreFiltersH1 className='mt-[30px]'>Photo & Video Options</MoreFiltersH1>
     <table className=' w-[350px]'>
      <tbody>
      <tr >
        <td ><FormControlLabel  control={<Checkbox />} label="Digital Files" /></td>
        <td ><FormControlLabel  control={<Checkbox />} label="Printed Proofs" /></td>
      </tr>
      </tbody>
     
     </table>
      
      
    </FormGroup>
    
  
  

<ButtonContainer>
    <ClearButton >Clear</ClearButton>
  <SaveButton>Save</SaveButton>
  </ButtonContainer>
    
  
</MoreFilters>
</MoreFiltersWrapper> */}
    </div>
  );
};

export default Filter;
