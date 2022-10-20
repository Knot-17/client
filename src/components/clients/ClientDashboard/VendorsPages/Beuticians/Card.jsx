import React,{useState} from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';

const Cardss = ( {AvailableArea,VendorPic}) => {

   const [showReqQuote,setShowReqQuote] = useState(false);
   const [step, setStep] = useState(0);
   const [venue, setVenue] = useState(false);
   const [city, setCity] = useState(false);
   

 

   
   const DisplaySteps = () =>{
       switch(step) {
           case 0:
             return  "name";
           case 1:
             return "email";
           case 2:
             return "Wedding Date";
           case 3:
             return "Guest Count";
           case 4:
             return "Venue"; 
           case 5:
            return  "Services";
          case 6:
            return  "Duration";
          case 7:
            return  "Budget";
           case 8:
            return  "Video Chat";
          case 9:
            return  "Add a Note";
            
            
           default:            
         }
      }

    return (
        <div className='w-full'>
          <div className={`fixed pt-[100px] z-[1] left-0 top-0 overflow-auto w-full h-full
           bg-black/40  justify-center items-center ${showReqQuote===true? 'flex': 'hidden'}`}>
            <div className="flex justify-end" >
              <IoCloseOutline className="absolute text-[32px] text-slate-400 cursor-pointer mt-3 mr-3" 
              onClick={()=>{
                setShowReqQuote(false);
                setStep(0);
              
              }}
              />
            <div className='h-[600px] w-full md:w-[600px] bg-white rounded-[5px] flex justify-center'>
            <form className='mt-[50px] w-[85%]'>
            <h1 className=' text-[12px] font-[500]'>{step +1} of 10 - {DisplaySteps()}</h1>
            <div className=' w-full  h-[8px] rounded '>
            {/*progress bar */}
            
            <div  className={` h-[100%] bg-green-700 rounded
            ${step === 0 ? "w-[14.285%]" : step === 1 ? "w-[28.57%]" : step === 2 ? "w-[42.855%]" : step === 3 ? "w-[57.14%]" :
             step === 4 ? "w-[71.425%]" : step === 5 ? "w-[85.71%]" : step === 6? "w-[100%]"  : ""}
            } `}>
            </div>
          </div>

          {/* Step 01 */}

         <div className={`${step===0 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            <h1 className='text-[18px] font-[500]'>
                Get the most accurate pricing and availability info by sharing some of your wedding 
                details with this vendor.
                </h1>
            
            <div className='mt-[50px]'>
                <h1 className='text-[20px] font-[600]'>What's your name?</h1>
                <div className='mt-[50px] flex'>
                <div className='border-[1px] border-slate-300 w-[230px] flex justify-center  '>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none  "
                 placeholder="First Name"/>
                 </div>
                 <div className='border-[1px] border-slate-300 w-[230px] flex justify-center ml-2 '>
               <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none"
                placeholder="Last Name"/> 
                 </div>
                 </div>
  
            </div>
            
         </div> 

         {/* Step 02 */}

         <div className={`${step===1 ? "block" : "hidden"} mt-4 h-[400px]   `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>What's your email?</h1>
                <div className='mt-[50px] flex'>
                <div className='border-[1px] border-slate-300 w-full flex justify-center  '>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                 placeholder="Your Email"/>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>

         {/* Step 03 */}

         <div className={`${step===2 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>What's your wedding date?</h1>
                <div className='mt-[50px] '>
                <div className='border-[1px] border-slate-300 w-full flex justify-center  '>
                <input type="date" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                 placeholder="Your Email"/>
                 </div>
                 <div className='text-[20px]'>
                 
                     <FormGroup>
      <FormControlLabel value="flexible" control={<Checkbox />} label="My wedding date is flexible" />
      
    </FormGroup>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>

         {/* Step 04 */}

         <div className={`${step===3 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>How many guests do you plan to have?</h1>
                <div className='mt-[50px] '>
                <div className='border-[1px] border-slate-300 w-full h-[50px]  flex justify-center  '>
                <select className=' outline-none w-full '>
    <option value="0" >Number of guests</option>
    <option value="0-50" className='h-[400px]'>0-50</option>
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

         <div className={`${step===4 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>Do you have a venue picked out?</h1>
                <div className='mt-[20px] flex'>
                <div className=' w-full flex  '>
                <FormControl className=' w-full'>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='  w-full'
    name="radio-buttons-group"
  >
    <FormControlLabel value="Yes" control={<Radio />} label="Yes, I have picked a venue"
     onClick={()=>{
                setCity(false);
                setVenue(true);
              }}/>
              <div className={`${venue===true? 'block': 'hidden'}`}>
    <div className={`border-[1px] border-slate-300 w-full flex justify-center `}>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                 placeholder="Your Reception Venue"/>
                 </div>
                 <div className='text-[20px]'>
                 
                 <FormGroup>
  <FormControlLabel control={<Checkbox  />} label="I also need services at a separate ceremony venue" />
  
</FormGroup>
             </div>
             </div>
    <FormControlLabel value="No" control={<Radio />} label="No, I'm still looking for a venue"
    
    onClick={()=>{
        setVenue(false);
        setCity(true);
      }}
    
    />
    <div className={`border-[1px] border-slate-300 w-full flex justify-center ${city===true? 'block': 'hidden'} `}>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[80%]"
                 placeholder="Your Wedding City"/>
                 </div>
    
  </RadioGroup>
  
  </FormControl>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>
         {/* Step 06 */}
        
         <div className={`${step===5 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>How many people will need beauty services?</h1>
                <div className='mt-[20px] flex'>
                <div className=' w-full flex  '>
                <FormControl className=' w-full'>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='  w-full'
    name="radio-buttons-group"
  >
    <FormControlLabel value="1-5" control={<Radio />} label="1-5"/>        
    <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
    <FormControlLabel value="11-15" control={<Radio />} label="11-15" />
    <FormControlLabel value="16-20" control={<Radio />} label="16-20" />
    <FormControlLabel value="20+" control={<Radio />} label="20+" />
    
  </RadioGroup>
  
  </FormControl>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>

         {/* Step 07 */}

         <div className={`${step===6 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div className="pt-[50px]" >
                <h1 className='text-[20px] font-[600]'>What time will the beauty professional need to be finished?</h1>
                <div className='mt-[20px] flex'>
                <div className=' w-full flex  '>
                <FormControl className=' w-full'>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='  w-full'
    name="radio-buttons-group"
  >
    <div className='border-[1px] border-slate-300 w-[40%] flex justify-center  '>
                <input type="text" className="  placeholder:text-center placeholder:text-[14px] h-[50px] outline-none w-[50%]"
                 placeholder="Finish Time"/>
                 </div>
    <FormControlLabel value="Not Sure " control={<Radio />} label="I'm Not Sure Yet" />
    
  </RadioGroup>
  
  </FormControl>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>

        

         {/* Step 08 */}

         <div className={`${step===7 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div  >
                <h1 className='text-[20px] font-[600]'>What is your estimated budget for beauty services?</h1>
                <div className='mt-[20px] flex'>
                <div className=' w-full flex  '>
                <FormControl className=' w-full'>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='  w-full'
    name="radio-buttons-group"
  >
    <FormControlLabel value="Over $1,500" control={<Radio />} label="Over $1,500"/>        
    <FormControlLabel value="$1,250 - $1,500" control={<Radio />} label="$1,250 - $1,500" />
    <FormControlLabel value="$1,000 - $1,250" control={<Radio />} label="$1,000 - $1,250" />
    <FormControlLabel value="$750 - $1,000" control={<Radio />} label="$750 - $1,000" />
    <FormControlLabel value="$500 - $750" control={<Radio />} label="$500 - $750" />
    <FormControlLabel value="Less than $500" control={<Radio />} label="Less than $500" />
    <FormControlLabel value="not sure" control={<Radio />} label="I'm not sure yet" />
    
  </RadioGroup>
  
  </FormControl>
                 </div>
                 
                 </div>
  
            </div>
            
         </div>

         {/* Step 09 */}


         <div className={`${step===8 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div >

            <h1 className='text-[20px] font-[600]'>Would you like to meet this vendor over video chat?</h1>
                
                <div className='mt-[50px] '>
                
                 <div className='text-[20px]'>
                 
                 <FormControl className=' w-full'>
  
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    className='  w-full'
    name="radio-buttons-group"
  >
    <FormControlLabel value="Yes" control={<Radio />} label="Yes please!"/>          
    <FormControlLabel value="Maybe" control={<Radio />} label="Maybe later"/>
    
    
    
    
  </RadioGroup>
  
  </FormControl>
                 </div>

                 <p className='text-[12px] text-slate-700 mt-[20px]'>Video chats can help you easily connect with wedding vendors during these uncertain times. 
                  Once you submit your request, this vendor will reach out to schedule your chat.</p>
                 
                 </div>
  
            </div>
            
         </div>

         {/* Step 10 */}

         <div className={`${step===9 ? "block" : "hidden"} mt-4 h-[400px]  `} >
            
            
            <div >

            <h1 className='text-[20px] font-[600]'>Quick Note</h1>
            <h2 className='text-[16px]'>Vendors love learning more about what you're looking for.</h2>
                
                <div className='mt-[50px] '>
                
                 <div className='h-[150px] w-full  border-2 border-slate-400 text-[14px] flex justify-center items-center '>
                 
                 <textarea className='w-[95%] h-[140px]  resize-none outline-none' placeholder="Hello! My partner and I are getting married and we're intersted in learning more about pricing and services."></textarea>

                 </div>

                 <p className='text-[12px] text-slate-700 mt-[20px]'>By using this service, you agree that your email and other information may be shared with the vendor.</p>
                 
                 </div>
  
            </div>
            
         </div>

         

         {/* footer */}
         <div className={`flex mt-[50px]   ${step===0 ? "justify-end" : "justify-between"} `}>
         <div className={`bg-green-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-green-600 cursor-pointer ${step===0 ? "hidden" : ""}`}
             onClick={ () =>
                {setStep((currStep) => currStep -1);
                }}
             >
                Back
                </div>
            <div className={`bg-red-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-red-600 cursor-pointer  ${step===9 ? "hidden" : ""}`}
             
             onClick={ () =>
                {setStep((currStep) => currStep +1);
                }}
             >
                Next
                </div>
                <button className={`bg-red-500 w-[100px] h-[40px] text-white font-[500]
             flex justify-center items-center hover:bg-red-600 cursor-pointer  ${step===9 ? "block" : "hidden"}`}
             type="submit">
                    Submit
                </button>
         </div>
         </form>
            
        </div>
            </div>
            
          </div>
          
      <Link className=' bg-white w-fit   '>
        <div className="flex justify-end" >
          <div className="absolute flex  mt-2 mr-2 rounded-full text-[20px] bg-white h-[30px] w-[30px]
           items-center justify-center hover:bg-slate-200 cursor-pointer">
            <MdFavoriteBorder /></div>
        
          <img src={VendorPic} className='h-[170px] w-full 2xl:w-[280px] xl:w-[260px] lg:w-[200px]'></img>
          
        </div>
        <div className='mt-[10px] ml-2'>
          <h1 className='text-[12px] text-slate-600'>{AvailableArea}</h1>
          <h1 className='text-[20px] mt-1'>Name</h1>
          <h1 className='text-[14px] nt-1 text-slate-700'>price</h1>
        </div>
        <div className='border-2 border-red-400 ml-auto mr-auto mt-2 text-[14px] h-8 w-full
           flex justify-center items-center hover:bg-red-100 cursor-pointer '
           onClick={()=>{
            setShowReqQuote(true);
           }}
           >
            REQUEST QUOTE</div>

      </Link>
      
          
        
      
    
            

            
        </div>
        
      
        
    );
}

export default Cardss;