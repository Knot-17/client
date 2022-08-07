import React, { useState } from 'react'
import Step01 from '../components/steps/Step01';
import Step02 from '../components/steps/Step02';
import Step03 from '../components/steps/Step03';
import Step04 from '../components/steps/Step04';
import Step05 from '../components/steps/Step05';
import Step06 from '../components/steps/Step06';
import Step07 from '../components/steps/Step07';

import  st01 from '../images/st01.svg';
import  st02 from '../images/st02.svg';
import  st03 from '../images/st03.svg';
import  st04 from '../images/st04.svg';
import  st05 from '../images/st05.svg';
import  st07 from '../images/st07.svg'; 

function Form () {

   const [step, setStep] = useState(0); 

   const Steps = ["STEP 1", "STEP 2", "STEP 3", "STEP 4",
   "STEP 5", "STEP 6", "STEP 7"];

   const DisplaySteps = () =>{
    switch(step) {
        case 0:
          return (<Step01/>);
        case 1:
          return <Step02/>
        case 2:
          return <Step03/> 
        case 3:
          return <Step04/> 
        case 4:
          return <Step05/>  
        case 5:
          return <Step06/> 
        case 6:
          return <Step07/> 
        default:            
      }
   }

   const DisplayImages = () =>{
    switch(step) {
        case 0:
          return  <img src={st01} className="h-[680px] absolute left-[780px] top-[-150px]" alt="img" />
        case 1:
          return  <img src={st02} className="h-[600px] absolute left-[800px] top-[-130px]" alt="img" />
        case 2:
          return <img src={st03} className="h-[530px] absolute left-[820px] top-[-80px]" alt="img" />
        case 3:
          return  <img src={st04} className="h-[600px] absolute left-[820px] top-[-110px]" alt="img" />
        case 4:
          return  <img src={st05} className="h-[620px] absolute left-[820px] top-[-120px]" alt="img" />
        case 5:
          return <Step06/> 
        case 6:
          return <img src={st07} className="h-[580px] absolute left-[820px] top-[-80px]" alt="img" />
        default:            
      }
   }

   

   



   


  return (
    <div className='form'>

        <div className='ml-[50px]'>
            {/*header */}
            <h1>{Steps[step]} OF 7</h1>
        </div>

      <div className=' flex justify-center'>
        <div className='absolute top-[25px] w-[700px]  h-3 bg-white  rounded  mb-12'>
            {/*progress bar */}
            
            <div  className={` h-3 bg-green-700 rounded
            ${step === 0 ? "w-[100px]" : step === 1 ? "w-[200px]" : step === 2 ? "w-[300px]" : step === 3 ? "w-[400px]" :
             step === 4 ? "w-[500px]" : step === 5 ? "w-[600px]" : step === 6 ? "w-[700px]" : ""}
            } `}>
            </div>
          </div>    
        </div>
        
       
        <div className='absolute top-[60px]'>
            {/*body */}
            {DisplaySteps()}
            {DisplayImages()}
           
           
        </div>
        <div className=' absolute top-[400px] w-[700px]'>
            {/*footer */}
            <button 
            disabled={step === 0}
             onClick={ () =>
                {setStep((currStep) => currStep -1);
                }}

             className={`ml-[100px] bg-white text-slate-400 uppercase py-2 px-4 rounded-xl
    font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700
    hover:text-white transition duration-200 ease-in-out ${step===0 ? "hidden" : ""}`}>Prev</button>
           
            <button 
            
             onClick={ () =>
            {setStep((currStep) => currStep +1);
            }}
            className=' float-right mr-[100px] bg-green-500 text-white uppercase py-2 px-4 rounded-xl
    font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700
    hover:text-white transition duration-200 ease-in-out'>{step === Steps.length -1 ? "Confirm" : "Next"}</button>
        </div>
    </div>
  )
}

export default Form ;