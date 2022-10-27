import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import axios from "axios";

import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { SiWorkplace } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import PaymentGetway from "./../../PaymentGetway/PaymentGetway";

import { useForm } from "react-hook-form";

const Cardss = ({
  AvailableArea,
  VendorPic,
  Price,
  Name,
  Maxguest,
  DealerID,
}) => {
  const [showReqQuote, setShowReqQuote] = useState(false);
  const [step, setStep] = useState(0);
  const [venue, setVenue] = useState(false);
  const [city, setCity] = useState(false);
  const [showPayGetway, setShowPayGetway] = useState(false);
  const [value, setValue] = useState({});

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    const { name, v } = e.target;
    console.log({ ...value, [name]: v });
    setValue({ ...value, [name]: v });
  };

  const onSubmit = (data) => {
    console.log(data);
    const id = localStorage.getItem("id");
    setValue({ ...data, dealerID: DealerID, clientID: id });
    const response = axios
      .post("http://localhost:5000/api/v1/addQuote", {
        ...data,
        dealerID: DealerID,
        clientID: id,
      })
      .catch((err) => {
        if (err && err.response);
        console.log(err);
      });
  };

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
        return "Video Chat";
      case 6:
        return "Add a Note";

      default:
    }
  };

  return (
    <div className="w-full">
      <div
        className={`fixed  z-[1] left-0 top-0 overflow-auto w-full h-full
           bg-black/40  justify-center items-center ${
             showPayGetway === true ? "flex" : "hidden"
           }`}
      >
        <IoCloseOutline
          className="absolute left-[1165px] top-[210px] text-[32px] text-slate-400 cursor-pointer mt-3 mr-3"
          onClick={() => {
            setShowPayGetway(false);
          }}
        />
        <PaymentGetway
          dealersID={DealerID}
          clientsID={localStorage.getItem("id")}
          Price={Price}
        />
      </div>
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
            <form
              className="mt-[50px] w-[85%]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className=" text-[12px] font-[500]">
                {step + 1} of 7 - {DisplaySteps()}
              </h1>
              <div className=" w-full  h-[8px] rounded ">
                {/*progress bar */}

                <div
                  className={` h-[100%] bg-green-700 rounded
            ${
              step === 0
                ? "w-[14.285%]"
                : step === 1
                ? "w-[28.57%]"
                : step === 2
                ? "w-[42.855%]"
                : step === 3
                ? "w-[57.14%]"
                : step === 4
                ? "w-[71.425%]"
                : step === 5
                ? "w-[85.71%]"
                : step === 6
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
                        name="firstname"
                        {...register("firstname", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="border-[1px] border-slate-300 w-[230px] flex justify-center ml-2 ">
                      <input
                        type="text"
                        className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none"
                        placeholder="Last Name"
                        name="lastname"
                        {...register("lastname", {
                          required: true,
                        })}
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
                        name="email"
                        {...register("email", {
                          required: true,
                        })}
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
                        name="weddingdate"
                        {...register("weddingdate", {
                          required: true,
                        })}
                      />
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
                      <select
                        name="guestcount"
                        {...register("guestcount", {
                          required: true,
                        })}
                        className=" outline-none w-full  "
                      >
                        <option value="0">Number of guests</option>
                        <option value="50">0 - 50</option>
                        <option value="150">50 - 150</option>
                        <option value="300">150 - 300 </option>
                        <option value="500">300 - 500</option>
                        <option value="501">500 +</option>
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
                <div className="pt-[50px]">
                  <h1 className="text-[20px] font-[600]">
                    Do you have a venue picked out?
                  </h1>
                  <div className="mt-[20px] flex">
                    <div className=" w-full flex  ">
                      <FormControl className=" w-full">
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          className="  w-full"
                        >
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes, I have picked a venue"
                            onClick={() => {
                              setCity(false);
                              setVenue(true);
                            }}
                          />
                          <div
                            className={`${venue === true ? "block" : "hidden"}`}
                          >
                            <div
                              className={`border-[1px] border-slate-300 w-full flex justify-center `}
                            >
                              <input
                                type="text"
                                className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                                placeholder="Your Wedding Venue"
                                name="weddingvenue"
                                {...register("weddingvenue")}
                              />
                            </div>
                          </div>
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No, I'm still looking for a venue"
                            onClick={() => {
                              setVenue(false);
                              setCity(true);
                            }}
                          />
                          <div
                            className={`border-[1px] border-slate-300 w-full flex justify-center ${
                              city === true ? "block" : "hidden"
                            } `}
                          >
                            <input
                              type="text"
                              className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                              placeholder="Your Wedding City"
                              name="weddingcity"
                              {...register("weddingcity")}
                            />
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 06 */}

              {/* Step 07 */}

              {/* Step 08 */}

              {/* Step 09 */}

              <div
                className={`${
                  step === 5 ? "block" : "hidden"
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
                          name="videochat"
                          {...register("videochat", {
                            required: true,
                          })}
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

              {/* Step 10 */}

              <div
                className={`${
                  step === 6 ? "block" : "hidden"
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
                        name="weddingdescription"
                        {...register("weddingdescription", {
                          required: true,
                        })}
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
               step === 6 ? "hidden" : ""
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
               step === 6 ? "block" : "hidden"
             }`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Link className=" bg-white w-fit "> */}
      <div className="bg-white w-fit border-green-700">
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
          <div className="flex flex-row items-center gap-2 mb-3">
            <div className="text-[18px] text-green-600">
              <FaLocationArrow />
            </div>
            <h1 className="text-[15px] text-slate-600 font-sans font-semibold ">
              {AvailableArea}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2 mb-3">
            <div className="text-[18px] text-green-600">
              <SiWorkplace />
            </div>
            <h1 className="text-[15px] text-slate-600  font-sans font-semibold ">
              {Name}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2 mb-3">
            <div className="text-[18px] text-green-600">
              <HiUserGroup />
            </div>
            <h1 className="text-[15px] text-slate-600  font-sans font-semibold ">
              Max:{Maxguest}
            </h1>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-row items-center gap-2 mb-3">
              <div className="text-[18px] text-green-600">
                <BsCash />
              </div>
              <h1 className="text-[15px] nt-1 text-slate-700  font-sans font-semibold">
                {Price}
              </h1>
            </div>
            <Link
              className="text-[#01bf71] font-medium italic flex hover:text-[#068550]"
              onClick={() => {
                setShowPayGetway(true);
              }}
            >
              <GiNotebook className=" text-[20px]" />
              Book Now
            </Link>
          </div>
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
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Cardss;
