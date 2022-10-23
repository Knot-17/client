import React, { useState, useEffect, useRef } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import FormGroup from "@mui/material/FormGroup";

import Checkbox from "@mui/material/Checkbox";
import {
  ButtonContainer,
  DistanceForm,
  ClearButton,
  DistanceContainer,
  DropdownContainer,
  MoreFiltersContainer,
  SaveButton,
  MoreFilters,
  CloseIcon,
  MoreFiltersWrapper,
  MoreFiltersH1,
  FoodCateringContainer,
  CuisineContainer,
  FoodCateringForm,
  CuisineForm,
} from "./FilterElements";

const Filter = () => {
  const [showFoodCatering, setShowFoodCatering] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showCuisine, setShowCuisine] = useState(false);
  const [showAwardWinners, setshowAwardWinners] = useState(false);
  const [showMoreFilters, setshowMoreFilters] = useState(false);

  const [s, e] = useState();

  function useOutsideClickFC(ref1, ref2) {
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
          setShowFoodCatering(false);
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
  function useOutsideClickC(ref1, ref2) {
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
          setShowCuisine(false);
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

  const FoodCaterinfRef = useRef(null);
  const FCDropRef = useRef(null);
  const DistenceRef = useRef(null);
  const DDropRef = useRef(null);
  const CuisineRef = useRef(null);
  const CDropRef = useRef(null);
  const MoreFiltersRef = useRef(null);
  const MfDropRef = useRef(null);

  useOutsideClickFC(FoodCaterinfRef, FCDropRef);
  useOutsideClickD(DistenceRef, DDropRef);
  useOutsideClickC(CuisineRef, CDropRef);
  useOutsideClickMF(MoreFiltersRef, MfDropRef);

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

        <FoodCateringContainer
          ref={FoodCaterinfRef}
          onClick={() => {
            if (showFoodCatering === false) {
              setShowFoodCatering(true);
            } else {
              setShowFoodCatering(false);
            }
          }}
        >
          <h3>Food & Catering</h3>
        </FoodCateringContainer>

        <CuisineContainer
          ref={CuisineRef}
          onClick={() => {
            if (showCuisine === false) {
              setShowCuisine(true);
            } else {
              setShowCuisine(false);
            }
          }}
        >
          <h3>Cuisine</h3>
        </CuisineContainer>

        <MoreFiltersContainer
          ref={MoreFiltersRef}
          onClick={() => {
            if (showMoreFilters === false) {
              setshowMoreFilters(true);
            } else {
              setshowMoreFilters(false);
            }
          }}
        >
          <h3>+ More Filters</h3>
        </MoreFiltersContainer>
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
          className={`${showFoodCatering ? "block" : "hidden"} ml-[16.5%] `}
          ref={FCDropRef}
        >
          <FoodCateringForm>
            <FormControl className="h-[300px] overflow-auto w-full ">
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Buffet"
                  control={<Checkbox />}
                  label="Buffet"
                />
                <FormControlLabel
                  value="Catering Clean Up"
                  control={<Checkbox />}
                  label="Catering Clean Up"
                />
                <FormControlLabel
                  value="Catering Delivery & Setup"
                  control={<Checkbox />}
                  label="Catering Delivery & Setup"
                />
                <FormControlLabel
                  value="Chef Stations"
                  control={<Checkbox />}
                  label="Chef Stations"
                />
                <FormControlLabel
                  value="Family Style"
                  control={<Checkbox />}
                  label="Family Style"
                />
                <FormControlLabel
                  value="Food Trucks"
                  control={<Checkbox />}
                  label="Food Trucks"
                />
                <FormControlLabel
                  value="Menu Tastings"
                  control={<Checkbox />}
                  label="Menu Tastings"
                />
                <FormControlLabel
                  value="Passed Appetizers"
                  control={<Checkbox />}
                  label="Passed Appetizers"
                />
                <FormControlLabel
                  value="Seated Meal"
                  control={<Checkbox />}
                  label="Seated Meal"
                />
                <FormControlLabel
                  value="Servers"
                  control={<Checkbox />}
                  label="Servers"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </FoodCateringForm>
        </DropdownContainer>

        <DropdownContainer
          className={`${showCuisine ? "block" : "hidden"} ml-[27.5%] `}
          ref={CDropRef}
        >
          <CuisineForm>
            <FormControl className="h-[300px] overflow-auto w-full ">
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="African"
                  control={<Checkbox />}
                  label="African"
                />
                <FormControlLabel
                  value="African"
                  control={<Checkbox />}
                  label="African"
                />
                <FormControlLabel
                  value="BBQ"
                  control={<Checkbox />}
                  label="BBQ"
                />
                <FormControlLabel
                  value="Cajun"
                  control={<Checkbox />}
                  label="Cajun"
                />
                <FormControlLabel
                  value="Chinese"
                  control={<Checkbox />}
                  label="Chinese"
                />
                <FormControlLabel
                  value="Eastern European"
                  control={<Checkbox />}
                  label="Eastern European"
                />
                <FormControlLabel
                  value="French"
                  control={<Checkbox />}
                  label="French"
                />
                <FormControlLabel
                  value="Fusion"
                  control={<Checkbox />}
                  label="Fusion"
                />
                <FormControlLabel
                  value="Greek"
                  control={<Checkbox />}
                  label="Greek"
                />
                <FormControlLabel
                  value="Hawaiian"
                  control={<Checkbox />}
                  label="Hawaiian"
                />
                <FormControlLabel
                  value="Indian"
                  control={<Checkbox />}
                  label="Indian"
                />
                <FormControlLabel
                  value="Italian"
                  control={<Checkbox />}
                  label="Italian"
                />
                <FormControlLabel
                  value="Japanese"
                  control={<Checkbox />}
                  label="Japanese"
                />
                <FormControlLabel
                  value="Korean"
                  control={<Checkbox />}
                  label="Korean"
                />
                <FormControlLabel
                  value="Latin American"
                  control={<Checkbox />}
                  label="Latin American"
                />
                <FormControlLabel
                  value="Mexican"
                  control={<Checkbox />}
                  label="Mexican"
                />
                <FormControlLabel
                  value="Middle Eastern"
                  control={<Checkbox />}
                  label="Middle Eastern"
                />
                <FormControlLabel
                  value="Seafood"
                  control={<Checkbox />}
                  label="Seafood"
                />
                <FormControlLabel
                  value="Southern"
                  control={<Checkbox />}
                  label="Southern"
                />
                <FormControlLabel
                  value="Southwestern"
                  control={<Checkbox />}
                  label="Southwestern"
                />
                <FormControlLabel
                  value="Specialty"
                  control={<Checkbox />}
                  label="Specialty"
                />
                <FormControlLabel
                  value="Thai"
                  control={<Checkbox />}
                  label="Thai"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </CuisineForm>
        </DropdownContainer>
      </div>
      <MoreFiltersWrapper
        className={`${showMoreFilters ? "block" : "hidden"} `}
      >
        <MoreFilters
          className={`${showMoreFilters ? "block" : "hidden"} `}
          ref={MfDropRef}
        >
          <CloseIcon
            onClick={() => {
              setshowMoreFilters(false);
            }}
          />

          <FormGroup className="ml-[30px]">
            <MoreFiltersH1>Price</MoreFiltersH1>
            <table className=" w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Inexpensive"
                      control={<Checkbox />}
                      label="$ – Inexpensive"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Affordable"
                      control={<Checkbox />}
                      label="$$ – Affordable"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Moderate"
                      control={<Checkbox />}
                      label="$$$ – Moderate"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Luxury"
                      control={<Checkbox />}
                      label="$$$$ – Luxury"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <MoreFiltersH1 className="mt-[30px]">Dietary Options</MoreFiltersH1>
            <table className=" w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Dairy Free"
                      control={<Checkbox />}
                      label="Dairy Free"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Organic"
                      control={<Checkbox />}
                      label="Organic"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Gluten Free"
                      control={<Checkbox />}
                      label="Gluten Free"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Sugar Free"
                      control={<Checkbox />}
                      label="Sugar Free"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Halal"
                      control={<Checkbox />}
                      label="Halal"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Vegan"
                      control={<Checkbox />}
                      label="Vegan"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Kosher"
                      control={<Checkbox />}
                      label="Kosher"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Vegetarian"
                      control={<Checkbox />}
                      label="Vegetarian"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Nut Free"
                      control={<Checkbox />}
                      label="Nut Free"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <MoreFiltersH1 className="mt-[30px]">
              Photo & Video Options
            </MoreFiltersH1>
            <table className=" w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Digital Files"
                      control={<Checkbox />}
                      label="Digital Files"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Printed Proofs"
                      control={<Checkbox />}
                      label="Printed Proofs"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </FormGroup>

          <ButtonContainer>
            <ClearButton>Clear</ClearButton>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
        </MoreFilters>
      </MoreFiltersWrapper>
    </div>
  );
};

export default Filter;
