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
  DecoAccentsForm,
  LightingContainer,
} from "./FilterElements";

const Filter = () => {
  const [showDecoAccents, setShowDecoAccents] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showLighting, setShowLighting] = useState(false);
  const [showAwardWinners, setshowAwardWinners] = useState(false);
  const [showMoreFilters, setshowMoreFilters] = useState(false);

  const [s, e] = useState();

  function useOutsideClickDA(ref1, ref2) {
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
          setShowDecoAccents(false);
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
  function useOutsideClickL(ref1, ref2) {
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
          setShowLighting(false);
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

  const DecoAccentsRef = useRef(null);
  const DADropRef = useRef(null);
  const DistenceRef = useRef(null);
  const DDropRef = useRef(null);
  const LightingRef = useRef(null);
  const LDropRef = useRef(null);

  useOutsideClickDA(DecoAccentsRef, DADropRef);
  useOutsideClickD(DistenceRef, DDropRef);
  useOutsideClickL(LightingRef, LDropRef);

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

        <DecoAccentsContainer
          ref={DecoAccentsRef}
          onClick={() => {
            if (showDecoAccents === false) {
              setShowDecoAccents(true);
            } else {
              setShowDecoAccents(false);
            }
          }}
        >
          <h3>Decorations & Accents</h3>
        </DecoAccentsContainer>

        <LightingContainer
          ref={LightingRef}
          onClick={() => {
            if (showLighting === false) {
              setShowLighting(true);
            } else {
              setShowLighting(false);
            }
          }}
        >
          <h3>Lighting</h3>
        </LightingContainer>

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
          className={`${showDecoAccents ? "block" : "hidden"} ml-[16.5%] `}
          ref={DADropRef}
        >
          <DecoAccentsForm>
            <FormControl className="h-[300px] overflow-auto w-full ">
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Aisle Decorations"
                  control={<Checkbox />}
                  label="Aisle Decorations"
                />
                <FormControlLabel
                  value="Backdrops"
                  control={<Checkbox />}
                  label="Backdrops"
                />
                <FormControlLabel
                  value="Candles"
                  control={<Checkbox />}
                  label="Candles"
                />
                <FormControlLabel
                  value="Centerpieces"
                  control={<Checkbox />}
                  label="Centerpieces"
                />
                <FormControlLabel
                  value="Ceremony Accessories"
                  control={<Checkbox />}
                  label="Ceremony Accessories"
                />
                <FormControlLabel
                  value="Design"
                  control={<Checkbox />}
                  label="Design"
                />
                <FormControlLabel
                  value="Flower Girl Baskets"
                  control={<Checkbox />}
                  label="Flower Girl Baskets"
                />
                <FormControlLabel
                  value="Pendestals"
                  control={<Checkbox />}
                  label="Pendestals"
                />
                <FormControlLabel
                  value="Plants"
                  control={<Checkbox />}
                  label="Plants"
                />
                <FormControlLabel
                  value="Ring Pillows"
                  control={<Checkbox />}
                  label="Ring Pillows"
                />
                <FormControlLabel
                  value="Signs"
                  control={<Checkbox />}
                  label="Signs"
                />
                <FormControlLabel
                  value="Theme Props"
                  control={<Checkbox />}
                  label="Theme Props"
                />
                <FormControlLabel
                  value="Unity Ceremony Supplies"
                  control={<Checkbox />}
                  label="Unity Ceremony Supplies"
                />
                <FormControlLabel
                  value="Vases"
                  control={<Checkbox />}
                  label="Vases"
                />
                <FormControlLabel
                  value="Wedding Arch"
                  control={<Checkbox />}
                  label="Wedding Arch"
                />
                <FormControlLabel
                  value="Wedding Decoration Delivery"
                  control={<Checkbox />}
                  label="Wedding Decoration Delivery"
                />
                <FormControlLabel
                  value="Wedding Decoration Setup"
                  control={<Checkbox />}
                  label="Wedding Decoration Setup"
                />
                <FormControlLabel
                  value="Wedding Designers"
                  control={<Checkbox />}
                  label="Wedding Designers"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </DecoAccentsForm>
        </DropdownContainer>

        <DropdownContainer
          className={`${showLighting ? "block" : "hidden"} ml-[27.5%] `}
          ref={LDropRef}
        >
          <DecoAccentsForm>
            <FormControl>
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Candelabars"
                  control={<Checkbox />}
                  label="Candelabars"
                />
                <FormControlLabel
                  value="Chandeliers"
                  control={<Checkbox />}
                  label="Chandeliers"
                />
                <FormControlLabel
                  value="Lanterns"
                  control={<Checkbox />}
                  label="Lanterns"
                />
                <FormControlLabel
                  value="Lighting Design & Setup"
                  control={<Checkbox />}
                  label="Lighting Design & Setup"
                />
                <FormControlLabel
                  value="Sting Lights"
                  control={<Checkbox />}
                  label="Sting Lights"
                />
                <FormControlLabel
                  value="Uplighting"
                  control={<Checkbox />}
                  label="Uplighting"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </DecoAccentsForm>
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
