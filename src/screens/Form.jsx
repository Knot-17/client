import React, { useState } from 'react'
import { FilterContext } from '../components/clients/steps/context/FilterContext';
import axios from "axios";
import Swal from 'sweetalert2'

import Step01 from '../components/clients/steps/Step01';
import Step02 from '../components/clients/steps/Step02';
import Step03 from '../components/clients/steps/Step03';
import Step04 from '../components/clients/steps/Step04';
import Step05 from '../components/clients/steps/Step05';

import  st01 from '../images/st01.svg';
import  st02 from '../images/st02.svg';
import  st03 from '../images/st03.svg';
import  st04 from '../images/st04.svg';
import  st05 from '../images/st05.svg';

function Form () {
  const [step, setStep] = useState(0); 
  const [filterdata, setFilterdata] = useState('');
  const [filter, setFilter] = useState('');

  const submitData   = () =>{
    setFilter(filter => [...filter , filterdata]);
    console.log(filterdata);
    setFilterdata(null);
    if(filterdata){
      const response = axios
      .post("http://localhost:5000/api/v1/filter", filterdata)
      .catch((err) => {
        if (err && err.response);
          console.log(err)
      });
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
          // setCurrentStep(currentStep => currentStep - 1);
        }
      });
    }  
  } 

  
   const Steps = ["STEP 1", "STEP 2", "STEP 3", "STEP 4",
   "STEP 5"];

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
           
      }
   }

   const DisplayImages = () =>{
    switch(step) {
        case 0:
          return  <img src={st01} className=" hidden md:block h-[120%] absolute left-[100%] top-[20px] lg:top-[-35px] xl:top-[-40px] " alt="img"  />
        case 1:
          return  <img src={st02} className="hidden md:block h-[120%] absolute left-[100%] top-[10px] lg:top-[-50px] xl:top-[-60px]" alt="img" />
        case 2:
          return <img src={st03} className="hidden md:block h-[120%] absolute left-[100%] top-[-5px] lg:top-[-55px] xl:top-[-75px]" alt="img"/>
        case 3:
          return  <img src={st04} className="hidden md:block h-[120%] absolute left-[100%] top-[25px] lg:top-[-25px] xl:top-[-35px]" alt="img"/>
        case 4:
          return  <img src={st05} className="hidden md:block h-[120%] absolute left-[100%] top-[30px] lg:top-[-20px] xl:top-[-35px]" alt="img"/>
       default:            
      }
   }

  return (
    <div  className="  absolute top-[10%] left-[5%]  w-[90%] h-[500px]  md:w-[55%]  shadow-xl rounded-2xl pb-2 bg-white justify-center">
       
        <div className='ml-[8%]'>
            {/*header */}
            <h1 className=' text-[14px] xl:text-[16px]'>{Steps[step]} OF 5</h1>
        </div>

      <div className='grid justify-items-center w-[100%]'>
        <div className='absolute top-[5%] w-[84%]  h-[2.5%] bg-white  rounded '>
            {/*progress bar */}
            
            <div  className={` h-[100%] bg-green-700 rounded
            ${step === 0 ? "w-[20%]" : step === 1 ? "w-[40%]" : step === 2 ? "w-[60%]" : step === 3 ? "w-[80%]" :"w-[100%]"}
            } `}>
            </div>
          </div>    
        </div>
        
       
        <div className='items-center w-[100%] ' >
            {/*body */}
            <FilterContext.Provider value={{filterdata,setFilterdata}}>   
              {DisplaySteps()}
            </FilterContext.Provider>
          
            
            {DisplayImages()} 
               
           
           
        </div>
        <div className=' absolute top-[90%] w-[100%] xl:top-[80%]'>
            <button 
             disabled={step === 0}
             onClick={ () =>{setStep((currStep) => currStep -1);}}
             className={`ml-[12%] bg-white text-slate-400 uppercase py-1 px-2 xl:py-2 xl:px-4 rounded-xl
                        font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 text-[14px] xl:text-[18px]
                      hover:text-white transition duration-200 ease-in-out ${step===0 ? "hidden" : ""}`}>Prev</button>
           
            <button 
             onClick={ () =>{step === 4 ?  submitData() : setStep((currStep) => currStep +1) }}
             className=' float-right mr-[12%] bg-green-500 text-white uppercase py-1 px-2 xl:py-2 xl:px-4 rounded-xl
                         font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 text-[14px] xl:text-[18px]
                       hover:text-white transition duration-200 ease-in-out'>{step === Steps.length -1 ? "Confirm" : "Next"}</button>
        </div>
    </div>
  )
}

export default Form 
