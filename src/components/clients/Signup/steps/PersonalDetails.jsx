import React,{ useContext , useState } from 'react';
import Image from './../../../images/Personal site.gif';
import styled from 'styled-components';
import { StepperContext } from '../context/StepperContext';
import { useForm } from "react-hook-form";

import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";

export const Img = styled.img`
  width: 70%;
  height: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const validation = yup.object({
  firstname:yup.string().min(3,"Please Enter ur real name").required("First name is required!"),
  lastname:yup.string().min(3,"Please Enter ur real name").required("Last name is required!"),
  // dob:yup.date().transform(parseDateString).max(today,"Select your Date of Birth").required("Date of Birth is required"),
  email:yup.string().email("Please enter a valid email address").required(),
  password:yup.string().matches(PASSWORD_REGEX,"Please enter valid strong password").required(),
  confirmPassword:yup.string().when("password",{
    is: val => (val && val.length > 0 ? true:false),
    then :yup.string().oneOf([yup.ref("password")],"Password does not match")
  }),
});

export default function PersonalDetails() {
  const {userData,setUserData} = useContext(StepperContext);
  const {success,setSuccess} = useState(null);

  // const {register,handleSubmit,formState:{errors}} = useForm();y

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  // const formik = useFormik({initialValues:{firstname:"",lastname:""},
  // validationSchema:validation,
  // validateOnBlur:true
  // })

  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full '>
          <Img src={Image}/>
      </div>
      <form>
      {/* <FormSuccess> {success ? success : ""} </FormSuccess>  */}

          <div className="grid grid-flow-row grid-rows-4 ">
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
              <div className="w-full mx-2 flex-1">
              
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Firstname
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["firstname"] || ""}
                    // onBlur={formik.handleBlur}
                    name="firstname"
                    placeholder="Firstname"
                    // {...register("firstname",{required:true,maxLength:3})}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
               
            </div>
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Lastname
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["lastname"] || ""}
                  name="lastname"
                  placeholder="Lastname"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
            
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Date Of Birth
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["dob"] || ""}
                      name="dob"
                      placeholder="DOB"
                      type="date"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-400"
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Gender
                  </div>
                  <div className="bg-white my-2 p-1 flex justify-around">
                    <div className=' font-medium text-slate-500 '> Male  </div>
                    <input
                      onChange={handleChange}
                      value='male'
                      name="gender"
                      type="radio"
                      id="male"
                      className="p-1 px-2 h-8 w-8 text-gray-800"
                    />
                    <div className=' font-medium text-slate-500 '>Female</div>
                    <input
                      onChange={handleChange}
                      value='female'
                      name="gender"
                      type="radio"
                      id="female"
                      className="p-1 px-2 h-8 w-8 text-gray-800"
                    />
                  </div>
                </div>    
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2">  
            
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Mobile
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["mobile"] || ""}
                    name="mobile"
                    placeholder="Mobile"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
              </div>

              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Email
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["email"] || ""}
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
            </div>
            
            
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
            
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Address
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["address"] || ""}
                  name="address"
                  placeholder="Address"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            
            
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                City
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["city"] || ""}
                  name="city"
                  placeholder="City"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
      
            </div>
            
          </div>
      </form>
    </div>
  );
}