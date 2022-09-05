<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import Stepper from '../components/dealers/Signup/Stepper';
import StepperControl from '../components/dealers/Signup/StepperControl';
import { StepperContext } from '../components/dealers//Signup/context/StepperContext';

import Account from '../components/dealers/Signup/steps/Account';
import Complete from '../components/dealers/Signup/steps/Complete';
import Services from '../components/dealers/Signup/steps/Services';
import OtpConformation from '../components/dealers/Signup/steps/OtpConformation';
import PersonalDetails from '../components/dealers/Signup/steps/PersonalDetails';
import generateOTP from '../components/dealers/Signup/otp';
import emailjs from 'emailjs-com';

import axios from "axios";
import Swal from 'sweetalert2'

function SignUpPageDealers()  {


  const steps =[
    "Personal Details",
    "Services Details",
    "Account Information",
    "OTP",
    "Complete",
  ]
  
  const [currentStep , setCurrentStep] = useState(1);
  const [dealersData , setDealersData] = useState('');
  const [finalData , setFinalData] = useState([]);
  const [checkOTP , setCheckOTP] = useState('');
  const viewSteps = (step) => {
    switch(step){
        case 1:
          return <PersonalDetails/>
        case 2:
          return <Services/>
        case 3:
          return <Account/>
        case 4:
          return <OtpConformation/>
        case 4:
          return <Complete/>
        default : 
    }
  }

const submitData   = () =>{
  setFinalData(finalData => [...finalData , dealersData]);
  setDealersData(null);
  console.log(dealersData);
  if(checkOTP ===dealersData['otp']){
    const response = axios
    .post("http://localhost:5000/api/v1/register", dealersData)
    .catch((err) => {
      if (err && err.response);
        console.log(err)
    });
    handleClick("next");
  }
  else {
    Swal.fire({
      icon: 'danger',
      title: `OTP you entered is incorrect`,
      text: `Ooops...`,
      iconColor: "red",
      confirmButtonColor: "red",
      confirmButtonText: "Re Enter",
      showCancelButton: true,
      cancelButtonColor: "blue",
      cancelButtonText: "Cancel",
      focusConfirm: false,
      focusCancel: false,
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        setCurrentStep(currentStep => currentStep - 1);
      }
    });
    
  }


  
}  


const otpGenerate = () =>{
  const otp = generateOTP();
  setCheckOTP(otp);
      Swal.fire({
        icon: 'success',
        title: `OTP is send to your mail `,
        text: `${dealersData['email']}`,
        iconColor: "green",
        confirmButtonColor: "green",
        confirmButtonText: "OK",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancel",
        focusConfirm: false,
        focusCancel: false,
      }).then((result) => {
        if (!result.value) {
          setCurrentStep(currentStep => currentStep -2);
        }
        else{
          emailjs.send('knototp', 'knotTemp', {to_name:dealersData['firstname'],message:otp,to_mail:dealersData['email']},'pNYqlufVDgCt7Mu28').then((result) => {
            console.log('Success',result.status,result.text);
              }, (error) => {
                  console.log('Failed',error.text);
              });
        }
      });

      handleClick("next");
}

const handleClick   = (direction) =>{
  let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}  

  return (
  <div className='md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white sm:w-full xs:w-full '>
    <div className='container horizontal mt-5'>
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
    </div>

    <div className='my-10 p-10'>
      
      <StepperContext.Provider value={{ dealersData,setDealersData,finalData,setFinalData}}>
          {viewSteps(currentStep)}
      </StepperContext.Provider>  
    </div> 
    {currentStep !== steps.length &&
    <StepperControl
      handleClick ={handleClick}
      currentStep={currentStep}
      steps ={steps} 
      submitData={submitData}
      otpGenerate={otpGenerate}
    /> 
}
  </div>
  )
}

=======
import React from 'react';
import { useState } from 'react';
import Stepper from '../components/dealers/Signup/Stepper';
import StepperControl from '../components/dealers/Signup/StepperControl';
import { StepperContext } from '../components/dealers//Signup/context/StepperContext';

import Account from '../components/dealers/Signup/steps/Account';
import Complete from '../components/dealers/Signup/steps/Complete';
import Services from '../components/dealers/Signup/steps/Services';
import OtpConformation from '../components/dealers/Signup/steps/OtpConformation';
import PersonalDetails from '../components/dealers/Signup/steps/PersonalDetails';
import generateOTP from '../components/dealers/Signup/otp';
import emailjs from 'emailjs-com';

import axios from "axios";
import Swal from 'sweetalert2'

function SignUpPageDealers()  {


  const steps =[
    "Personal Details",
    "Services Details",
    "Account Information",
    "OTP",
    "Complete",
  ]
  
  const [currentStep , setCurrentStep] = useState(1);
  const [dealersData , setDealersData] = useState('');
  const [finalData , setFinalData] = useState([]);
  const [checkOTP , setCheckOTP] = useState('');
  const viewSteps = (step) => {
    switch(step){
        case 1:
          return <PersonalDetails/>
        case 2:
          return <Services/>
        case 3:
          return <Account/>
        case 4:
          return <OtpConformation/>
        case 4:
          return <Complete/>
        default : 
    }
  }

const submitData   = () =>{
  setFinalData(finalData => [...finalData , dealersData]);
  setDealersData(null);
  console.log(dealersData);
  if(checkOTP ===dealersData['otp']){
    const response = axios
    .post("http://localhost:5000/api/v1/register", dealersData)
    .catch((err) => {
      if (err && err.response);
        console.log(err)
    });
    handleClick("next");
  }
  else {
    Swal.fire({
      icon: 'danger',
      title: `OTP you entered is incorrect`,
      text: `Ooops...`,
      iconColor: "red",
      confirmButtonColor: "red",
      confirmButtonText: "Re Enter",
      showCancelButton: true,
      cancelButtonColor: "blue",
      cancelButtonText: "Cancel",
      focusConfirm: false,
      focusCancel: false,
      focusConfirm: false,
    }).then((result) => {
      if (result.value) {
        setCurrentStep(currentStep => currentStep - 1);
      }
    });
    
  }


  
}  


const otpGenerate = () =>{
  const otp = generateOTP();
  setCheckOTP(otp);
      Swal.fire({
        icon: 'success',
        title: `OTP is send to your mail `,
        text: `${dealersData['email']}`,
        iconColor: "green",
        confirmButtonColor: "green",
        confirmButtonText: "OK",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancel",
        focusConfirm: false,
        focusCancel: false,
      }).then((result) => {
        if (!result.value) {
          setCurrentStep(currentStep => currentStep -2);
        }
        else{
          emailjs.send('knototp', 'knotTemp', {to_name:dealersData['firstname'],message:otp,to_mail:dealersData['email']},'pNYqlufVDgCt7Mu28').then((result) => {
            console.log('Success',result.status,result.text);
              }, (error) => {
                  console.log('Failed',error.text);
              });
        }
      });

      handleClick("next");
}

const handleClick   = (direction) =>{
  let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}  

  return (
  <div className='md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white sm:w-full xs:w-full '>
    <div className='container horizontal mt-5'>
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
    </div>

    <div className='my-10 p-10'>
      
      <StepperContext.Provider value={{ dealersData,setDealersData,finalData,setFinalData}}>
          {viewSteps(currentStep)}
      </StepperContext.Provider>  
    </div> 
    {currentStep !== steps.length &&
    <StepperControl
      handleClick ={handleClick}
      currentStep={currentStep}
      steps ={steps} 
      submitData={submitData}
      otpGenerate={otpGenerate}
    /> 
}
  </div>
  )
}

>>>>>>> 29f386f35d00451c03c2b5d2aee8a2625e1c3fa7
export default SignUpPageDealers;