import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";

const Cardss = ({ AvailableArea, VendorPic }) => {
  const [showReqQuote, setShowReqQuote] = useState(false);
  const [step, setStep] = useState(0);
  const [venue, setVenue] = useState(false);
  const [city, setCity] = useState(false);

  const DisplaySteps = () => {
    switch (step) {
      case 0:
        return "name";
      case 1:
        return "email";
      case 2:
        return "Wedding Date";
      case 3:
        return "Guest Count";
      case 4:
        return "Venue";
      case 5:
        return "Additional Services";
      case 6:
        return "Events";
      case 7:
        return "Duration";
      case 8:
        return "Budget";
      case 9:
        return "Video Chat";
      case 9:
        return "Add a Note";

      default:
    }
  };

  return (
    <div className="w-full">
      <div
        className={`fixed pt-[100px] z-[1] left-0 top-0 overflow-auto w-full h-full
           bg-black/40  justify-center items-center ${
             showReqQuote === true ? "flex" : "hidden"
           }`}
      >
        <div className="flex justify-end">
          <IoCloseOutline
            className="absolute text-[32px] text-slate-400 cursor-pointer mt-3 mr-3"
            onClick={() => {
              setShowReqQuote(false);
              setStep(0);
            }}
          />
          <div className="h-[600px] w-full md:w-[600px] bg-white rounded-[5px] flex justify-center">
            <form className="mt-[50px] w-[85%]">
              <h1 className=" text-[12px] font-[500]">
                {step + 1} of 9 - {DisplaySteps()}
              </h1>
              <div className=" w-full  h-[8px] rounded ">
                {/*progress bar */}

                <div
                  className={` h-[100%] bg-green-700 rounded
            ${
              step === 0
                ? "w-[11%]"
                : step === 1
                ? "w-[22%]"
                : step === 2
                ? "w-[33%]"
                : step === 3
                ? "w-[44%]"
                : step === 4
                ? "w-[55%]"
                : step === 5
                ? "w-[66%]"
                : step === 6
                ? "w-[77%]"
                : step === 7
                ? "w-[88%]"
                : step === 8
                ? "w-[100%]"
                : ""
            }
            } `}
                ></div>
              </div>

              {/* Step 01 */}

              <div
                className={`${
                  step === 0 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <h1 className="text-[18px] font-[500]">
                  Get the most accurate pricing and availability info by sharing
                  some of your wedding details with this vendor.
                </h1>

                <div className="mt-[50px]">
                  <h1 className="text-[20px] font-[600]">What's your name?</h1>
                  <div className="mt-[50px] flex">
                    <div className="border-[1px] border-slate-300 w-[230px] flex justify-center  ">
                      <input
                        type="text"
                        className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none  "
                        placeholder="First Name"
                      />
                    </div>
                    <div className="border-[1px] border-slate-300 w-[230px] flex justify-center ml-2 ">
                      <input
                        type="text"
                        className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 02 */}

              <div
                className={`${
                  step === 1 ? "block" : "hidden"
                } mt-4 h-[400px]   `}
              >
                <div className="pt-[50px]">
                  <h1 className="text-[20px] font-[600]">What's your email?</h1>
                  <div className="mt-[50px] flex">
                    <div className="border-[1px] border-slate-300 w-full flex justify-center  ">
                      <input
                        type="text"
                        className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 03 */}

              <div
                className={`${
                  step === 2 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div className="pt-[50px]">
                  <h1 className="text-[20px] font-[600]">
                    What's your wedding date?
                  </h1>
                  <div className="mt-[50px] ">
                    <div className="border-[1px] border-slate-300 w-full flex justify-center  ">
                      <input
                        type="date"
                        className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="text-[20px]">
                      <FormGroup>
                        <FormControlLabel
                          value="flexible"
                          control={<Checkbox />}
                          label="My wedding date is flexible"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 04 */}

              <div
                className={`${
                  step === 3 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div className="pt-[50px]">
                  <h1 className="text-[20px] font-[600]">
                    How many guests do you plan to have?
                  </h1>
                  <div className="mt-[50px] ">
                    <div className="border-[1px] border-slate-300 w-full h-[50px]  flex justify-center  ">
                      <select className=" outline-none w-full ">
                        <option value="0">Number of guests</option>
                        <option value="0-50" className="h-[400px]">
                          0-50
                        </option>
                        <option value="51-100">51-100</option>
                        <option value="101-150">101-150</option>
                        <option value="151-200">151-200</option>
                        <option value="201-250">201-250</option>
                        <option value="251-300">251-300</option>
                        <option value="301 or more">301 or more</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 05 */}

              <div
                className={`${
                  step === 4 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div className="pt-[30px]">
                  <h1 className="text-[20px] font-[600]">
                    Which events do you plan to hold at this venue?
                  </h1>
                  <div className="mt-[20px] flex">
                    <div className=" w-full flex  ">
                      <FormControl className=" w-full">
                        <FormGroup>
                          <FormControlLabel
                            value="Rehearsal"
                            control={<Checkbox />}
                            label="Rehearsal"
                          />
                          <FormControlLabel
                            value="Ceremony"
                            control={<Checkbox />}
                            label="Ceremony"
                          />
                          <FormControlLabel
                            value="Reception"
                            control={<Checkbox />}
                            label="Reception"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 06 */}

              <div
                className={`${
                  step === 5 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div className="pt-[30px]">
                  <h1 className="text-[20px] font-[600]">
                    What additional services might you be interested in?
                  </h1>
                  <div className="mt-[20px] flex h-[300px] overflow-auto">
                    <div className=" w-full flex  ">
                      <FormControl className=" w-full">
                        <FormGroup>
                          <FormControlLabel
                            value="Indoor area"
                            control={<Checkbox />}
                            label="Indoor area"
                          />
                          <FormControlLabel
                            value="Outdoor area"
                            control={<Checkbox />}
                            label="Outdoor area"
                          />
                          <FormControlLabel
                            value="Sound equipment"
                            control={<Checkbox />}
                            label="Sound equipment"
                          />
                          <FormControlLabel
                            value="Video equipment"
                            control={<Checkbox />}
                            label="Video equipment"
                          />
                          <FormControlLabel
                            value="Tables & chairs"
                            control={<Checkbox />}
                            label="Tables & chairs"
                          />
                          <FormControlLabel
                            value="Linens"
                            control={<Checkbox />}
                            label="Linens"
                          />
                          <FormControlLabel
                            value="Lighting"
                            control={<Checkbox />}
                            label="Lighting"
                          />
                          <FormControlLabel
                            value="Kitchen/Bar area"
                            control={<Checkbox />}
                            label="Kitchen/Bar area"
                          />
                          <FormControlLabel
                            value="On-site catering"
                            control={<Checkbox />}
                            label="On-site catering"
                          />
                          <FormControlLabel
                            value="Party planning services"
                            control={<Checkbox />}
                            label="Party planning services"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 07 */}

              <div
                className={`${
                  step === 6 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div>
                  <h1 className="text-[20px] font-[600]">
                    What's your estimated budget for venue services?
                  </h1>
                  <div className="mt-[10px] flex">
                    <div className=" w-full flex  ">
                      <FormControl className=" w-full">
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          className="  w-full"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Over $65,000"
                            control={<Radio />}
                            label="Over $65,000"
                          />
                          <FormControlLabel
                            value="$55,000 - $65,000"
                            control={<Radio />}
                            label="$55,000 - $65,000"
                          />
                          <FormControlLabel
                            value="$45,000 - $55,000"
                            control={<Radio />}
                            label="$45,000 - $55,000"
                          />
                          <FormControlLabel
                            value="$35,000 - $45,000"
                            control={<Radio />}
                            label="$35,000 - $45,000"
                          />
                          <FormControlLabel
                            value="$35,000 - $45,000"
                            control={<Radio />}
                            label="$35,000 - $45,000"
                          />
                          <FormControlLabel
                            value="$15,000 - $25,000"
                            control={<Radio />}
                            label="$15,000 - $25,000"
                          />
                          <FormControlLabel
                            value="$5,000 - $15,000"
                            control={<Radio />}
                            label="$5,000 - $15,000"
                          />
                          <FormControlLabel
                            value="Less than $5,000"
                            control={<Radio />}
                            label="Less than $5,000"
                          />
                          <FormControlLabel
                            value="not sure"
                            control={<Radio />}
                            label="I'm not sure yet"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 8 */}

              <div
                className={`${
                  step === 7 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div>
                  <h1 className="text-[20px] font-[600]">
                    Would you like to meet this vendor over video chat?
                  </h1>

                  <div className="mt-[50px] ">
                    <div className="text-[20px]">
                      <FormControl className=" w-full">
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          className="  w-full"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes please!"
                          />
                          <FormControlLabel
                            value="Maybe"
                            control={<Radio />}
                            label="Maybe later"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <p className="text-[12px] text-slate-700 mt-[20px]">
                      Video chats can help you easily connect with wedding
                      vendors during these uncertain times. Once you submit your
                      request, this vendor will reach out to schedule your chat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 9 */}

              <div
                className={`${
                  step === 8 ? "block" : "hidden"
                } mt-4 h-[400px]  `}
              >
                <div>
                  <h1 className="text-[20px] font-[600]">Quick Note</h1>
                  <h2 className="text-[16px]">
                    Vendors love learning more about what you're looking for.
                  </h2>

                  <div className="mt-[50px] ">
                    <div className="h-[150px] w-full  border-2 border-slate-400 text-[14px] flex justify-center items-center ">
                      <textarea
                        className="w-[95%] h-[140px]  resize-none outline-none"
                        placeholder="Hello! My partner and I are getting married and we're intersted in learning more about pricing and services."
                      ></textarea>
                    </div>

                    <p className="text-[12px] text-slate-700 mt-[20px]">
                      By using this service, you agree that your email and other
                      information may be shared with the vendor.
                    </p>
                  </div>
                </div>
              </div>

              {/* footer */}
              <div
                className={`flex mt-[50px]   ${
                  step === 0 ? "justify-end" : "justify-between"
                } `}
              >
                <div
                  className={`bg-green-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-green-600 cursor-pointer ${
               step === 0 ? "hidden" : ""
             }`}
                  onClick={() => {
                    setStep((currStep) => currStep - 1);
                  }}
                >
                  Back
                </div>
                <div
                  className={`bg-red-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-red-600 cursor-pointer  ${
               step === 8 ? "hidden" : ""
             }`}
                  onClick={() => {
                    setStep((currStep) => currStep + 1);
                  }}
                >
                  Next
                </div>
                <button
                  className={`bg-red-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-red-600 cursor-pointer  ${
               step === 8 ? "block" : "hidden"
             }`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Link className=" bg-white w-fit   ">
        <div className="flex justify-end">
          <div
            className="absolute flex  mt-2 mr-2 rounded-full text-[20px] bg-white h-[30px] w-[30px]
           items-center justify-center hover:bg-slate-200 cursor-pointer"
          >
            <MdFavoriteBorder />
          </div>

          <img
            src={VendorPic}
            className="h-[170px] w-full 2xl:w-[280px] xl:w-[260px] lg:w-[200px]"
          ></img>
        </div>
        <div className="mt-[10px] ml-2">
          <h1 className="text-[12px] text-slate-600">{AvailableArea}</h1>
          <h1 className="text-[20px] mt-1">Name</h1>
          <h1 className="text-[14px] nt-1 text-slate-700">price</h1>
        </div>
        <div
          className="border-2 border-red-400 ml-auto mr-auto mt-2 text-[14px] h-8 w-full
           flex justify-center items-center hover:bg-red-100 cursor-pointer "
          onClick={() => {
            setShowReqQuote(true);
          }}
        >
          REQUEST QUOTE
        </div>
      </Link>
    </div>
  );
};

export default Cardss;
