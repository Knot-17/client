import React from 'react';
import { useState } from 'react';
import Stepper from '../components/clients/Signup/Stepper';
import StepperControl from '../components/clients/Signup/StepperControl';
import { StepperContext } from '../components/clients//Signup/context/StepperContext';

import Account from '../components/clients/Signup/steps/Account';
import Complete from '../components/clients/Signup/steps/Complete';
import OtpConformation from '../components/clients/Signup/steps/OtpConformation';
import PersonalDetails from '../components/clients/Signup/steps/PersonalDetails';
import generateOTP from '../components/clients/Signup/otp';
import emailjs from 'emailjs-com';

import axios from "axios";
import Swal from 'sweetalert2'

function SignUpPage()  {


  const steps =[
    "Personal Details",
    "Account Information",
    "OTP",
    "Complete",
  ]
  
  const [currentStep , setCurrentStep] = useState(1);
  const [userData , setUserData] = useState('');
  const [finalData , setFinalData] = useState([]);
  const [checkOTP , setCheckOTP] = useState('');
  const viewSteps = (step) => {
    switch(step){
        case 1:
          return <PersonalDetails/>
        case 2:
          return <Account/>
        case 3:
          return <OtpConformation/>
        case 4:
          return <Complete/>
        default : 
    }
  }

const submitData   = () =>{
  setFinalData(finalData => [...finalData , userData]);
  setUserData(null);
  if(checkOTP ===userData['otp']){
    const response = axios
    .post("http://localhost:5000/api/v1/register", userData)
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
        text: `${userData['email']}`,
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
          emailjs.send('knototp', 'knotTemp', {to_name:userData['firstname'],message:otp,to_mail:userData['email']},'pNYqlufVDgCt7Mu28').then((result) => {
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
      
      <StepperContext.Provider value={{ userData,setUserData,finalData,setFinalData}}>
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

export default SignUpPage;