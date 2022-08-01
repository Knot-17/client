import React from 'react';
import { useState } from 'react';
import Stepper from '../components/Signup/Stepper';
import { UseContextProvider } from '../components/Signup/context/StepperContext';
import StepperControl from '../components/Signup/StepperControl';

import Account from '../components/Signup/steps/Account';
import Complete from '../components/Signup/steps/Complete';
import OtpConformation from '../components/Signup/steps/OtpConformation';
import PersonalDetails from '../components/Signup/steps/PersonalDetails';



function SignUpPage()  {

  const steps =[
    "Personal Details",
    "Account Information",
    "OTP",
    "Complete",
  ]
  
  const [currentStep , setCurrentStep] = useState(1);
  
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

const handleClick   = (direction) =>{
  let newStep = currentStep;
    direction === "next" ? newStep++ : newStep-- ;
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
      
      <UseContextProvider>
          {viewSteps(currentStep)}
      </UseContextProvider>  
    </div> 
    {currentStep !== steps.length &&
    <StepperControl
      handleClick ={handleClick}
      currentStep={currentStep}
      steps ={steps}
    /> 
}
  </div>
  )
}

export default SignUpPage;