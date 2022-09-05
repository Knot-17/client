<<<<<<< HEAD
import React from 'react'


const StepperControl = ({handleClick,currentStep,steps,submitData,otpGenerate}) => {


  
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep == 1 ? "opacity-50 cursor-not-allowed":""}`}>
            Back
        </button>

        <button 
          onClick={() =>  currentStep === steps.length -1 ?    submitData() : currentStep === steps.length -2 ? otpGenerate() : handleClick("next")}
          className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
          {currentStep === steps.length -1  ? "Confirm" : "Next" }
        </button>
    </div>
  )
}

=======
import React from 'react'


const StepperControl = ({handleClick,currentStep,steps,submitData,otpGenerate}) => {


  
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep == 1 ? "opacity-50 cursor-not-allowed":""}`}>
            Back
        </button>

        <button 
          onClick={() =>  currentStep === steps.length -1 ?    submitData() : currentStep === steps.length -2 ? otpGenerate() : handleClick("next")}
          className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
          {currentStep === steps.length -1  ? "Confirm" : "Next" }
        </button>
    </div>
  )
}

>>>>>>> 29f386f35d00451c03c2b5d2aee8a2625e1c3fa7
export default StepperControl;