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
  InstrumentsContainer,
  MusicGernsContainer,
  InstrumentsForm,
  MusicGernsForm,
} from "./FilterElements";

const Filter = () => {
  const [showInstruments, setShowInstruments] = useState(false);
  const [showDistance, setShowDistance] = useState(false);
  const [showMusicGerns, setShowMusicGerns] = useState(false);
  const [showMoreFilters, setshowMoreFilters] = useState(false);

  function useOutsideClickI(ref1, ref2) {
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
          setShowInstruments(false);
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
  function useOutsideClickMG(ref1, ref2) {
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
          setShowMusicGerns(false);
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

  const InstrumentsRef = useRef(null);
  const IDropRef = useRef(null);
  const DistenceRef = useRef(null);
  const DDropRef = useRef(null);
  const MusicGernsRef = useRef(null);
  const MGDropRef = useRef(null);
  const MfDropRef = useRef(null);
  const MoreFiltersRef = useRef(null);

  useOutsideClickI(InstrumentsRef, IDropRef);
  useOutsideClickD(DistenceRef, DDropRef);
  useOutsideClickMG(MusicGernsRef, MGDropRef);
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

        <InstrumentsContainer
          ref={InstrumentsRef}
          onClick={() => {
            if (showInstruments === false) {
              setShowInstruments(true);
            } else {
              setShowInstruments(false);
            }
          }}
        >
          <h3>Instruments</h3>
        </InstrumentsContainer>

        <MusicGernsContainer
          ref={MusicGernsRef}
          onClick={() => {
            if (showMusicGerns === false) {
              setShowMusicGerns(true);
            } else {
              setShowMusicGerns(false);
            }
          }}
        >
          <h3>Music Gerns</h3>
        </MusicGernsContainer>

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
          className={`${showInstruments ? "block" : "hidden"} ml-[16.5%] `}
          ref={IDropRef}
        >
          <InstrumentsForm>
            <FormControl className="h-[300px] overflow-auto w-full ">
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                className="ml-[30px]"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="According"
                  control={<Checkbox />}
                  label="According"
                />
                <FormControlLabel
                  value="Bagpipe"
                  control={<Checkbox />}
                  label="Bagpipe"
                />
                <FormControlLabel
                  value="Banjo"
                  control={<Checkbox />}
                  label="Banjo"
                />
                <FormControlLabel
                  value="Bass"
                  control={<Checkbox />}
                  label="Bass"
                />
                <FormControlLabel
                  value="Bugle"
                  control={<Checkbox />}
                  label="Bugle"
                />
                <FormControlLabel
                  value="Cello"
                  control={<Checkbox />}
                  label="Cello"
                />
                <FormControlLabel
                  value="Fiddle"
                  control={<Checkbox />}
                  label="Fiddle"
                />
                <FormControlLabel
                  value="Flute"
                  control={<Checkbox />}
                  label="Flute"
                />
                <FormControlLabel
                  value="French Horn"
                  control={<Checkbox />}
                  label="French Horn"
                />
                <FormControlLabel
                  value="Guitar"
                  control={<Checkbox />}
                  label="Guitar"
                />
                <FormControlLabel
                  value="Harmonica"
                  control={<Checkbox />}
                  label="Harmonica"
                />
                <FormControlLabel
                  value="Harp"
                  control={<Checkbox />}
                  label="Harp"
                />
                <FormControlLabel
                  value="Keyboard"
                  control={<Checkbox />}
                  label="Keyboard"
                />
                <FormControlLabel
                  value="Mandolin"
                  control={<Checkbox />}
                  label="Mandolin"
                />
                <FormControlLabel
                  value="Organ"
                  control={<Checkbox />}
                  label="Organ"
                />
                <FormControlLabel
                  value="Percussion"
                  control={<Checkbox />}
                  label="Percussion"
                />
                <FormControlLabel
                  value="Piano"
                  control={<Checkbox />}
                  label="Piano"
                />
                <FormControlLabel
                  value="Saxophone"
                  control={<Checkbox />}
                  label="Saxophone"
                />
                <FormControlLabel
                  value="Steel Drum"
                  control={<Checkbox />}
                  label="Steel Drum"
                />
                <FormControlLabel
                  value="Trombone"
                  control={<Checkbox />}
                  label="Trombone"
                />
                <FormControlLabel
                  value="Trumpet"
                  control={<Checkbox />}
                  label="Trumpet"
                />
                <FormControlLabel
                  value="Viola"
                  control={<Checkbox />}
                  label="Viola"
                />
                <FormControlLabel
                  value="Violin"
                  control={<Checkbox />}
                  label="Violin"
                />
                <FormControlLabel
                  value="Vocals"
                  control={<Checkbox />}
                  label="Vocals"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </InstrumentsForm>
        </DropdownContainer>

        <DropdownContainer
          className={`${showMusicGerns ? "block" : "hidden"} ml-[27.5%] `}
          ref={MGDropRef}
        >
          <MusicGernsForm>
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
                  value="Arabic"
                  control={<Checkbox />}
                  label="Arabic"
                />
                <FormControlLabel
                  value="Bluegrass"
                  control={<Checkbox />}
                  label="Bluegrass"
                />
                <FormControlLabel
                  value="Bollywood"
                  control={<Checkbox />}
                  label="Bollywood"
                />
                <FormControlLabel
                  value="Caribbean"
                  control={<Checkbox />}
                  label="Caribbean"
                />
                <FormControlLabel
                  value="Celtic"
                  control={<Checkbox />}
                  label="Celtic"
                />
                <FormControlLabel
                  value="Classical"
                  control={<Checkbox />}
                  label="Classical"
                />
                <FormControlLabel
                  value="Country"
                  control={<Checkbox />}
                  label="Country"
                />
                <FormControlLabel
                  value="Dance"
                  control={<Checkbox />}
                  label="Dance"
                />
                <FormControlLabel
                  value="Disco"
                  control={<Checkbox />}
                  label="Disco"
                />
                <FormControlLabel
                  value="EDM"
                  control={<Checkbox />}
                  label="EDM"
                />
                <FormControlLabel
                  value="Flamenco"
                  control={<Checkbox />}
                  label="Flamenco"
                />
                <FormControlLabel
                  value="Folk"
                  control={<Checkbox />}
                  label="Folk"
                />
                <FormControlLabel
                  value="Hip-Hop"
                  control={<Checkbox />}
                  label="Hip-Hop"
                />
                <FormControlLabel
                  value="Indian"
                  control={<Checkbox />}
                  label="Indian"
                />
                <FormControlLabel
                  value="Jazz"
                  control={<Checkbox />}
                  label="Jazz"
                />
                <FormControlLabel
                  value="Pop"
                  control={<Checkbox />}
                  label="Pop"
                />
                <FormControlLabel
                  value="Rock"
                  control={<Checkbox />}
                  label="Rock"
                />
                <FormControlLabel
                  value="World Music"
                  control={<Checkbox />}
                  label="World Music"
                />
              </FormGroup>
            </FormControl>

            <ButtonContainer>
              <ClearButton>Clear</ClearButton>
              <SaveButton>Save</SaveButton>
            </ButtonContainer>
          </MusicGernsForm>
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

          <FormGroup className="ml-[30px]  h-[500px]">
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
                      value="Moderate"
                      control={<Checkbox />}
                      label="$$$ – Moderate"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Affordable"
                      control={<Checkbox />}
                      label="$$ – Affordable"
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
            <MoreFiltersH1 className="mt-[60px]">Wedding Events</MoreFiltersH1>
            <table className=" w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Rehearsals & Parties"
                      control={<Checkbox />}
                      label="Rehearsals & Parties"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Wedding"
                      control={<Checkbox />}
                      label="Wedding"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <MoreFiltersH1 className="mt-[60px]">Music Services</MoreFiltersH1>
            <table className=" w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <FormControlLabel
                      value="Live Music"
                      control={<Checkbox />}
                      label="Live Music"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Recorded Music"
                      control={<Checkbox />}
                      label="Recorded Music"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControlLabel
                      value="MC Services"
                      control={<Checkbox />}
                      label="MC Services"
                    />
                  </td>
                  <td>
                    <FormControlLabel
                      value="Sound Equipment"
                      control={<Checkbox />}
                      label="Sound Equipment"
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
