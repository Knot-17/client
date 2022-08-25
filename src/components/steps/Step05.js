import React from 'react'


   

function Step05() {
  return (
   
    <div className='  w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10
    items-center'>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">That's great! What's your estimated <br></br>guest count and total budget</h1> <br></br>
     
<form className="absolute top-[200px]">
<label className="text-[14px] lg:text-[18px] xl:text-[20px]">We plan to invite </label>&nbsp;
<select className='border-b-2 border-slate-300 text-[14px] lg:text-[18px] xl:text-[20px]' >
    <option value="" disabled selected hidden>Estimated guest count</option>
    <option value="">0-100</option>
    <option value="">100-250</option>
    <option value="">250-500</option>
    <option value="">500-1000</option>
    <option value="">1000 +</option>

   
    
  </select>
  <br></br><br></br><br></br>
  <label className="text-[14px] lg:text-[18px] xl:text-[20px]">and spend about </label>&nbsp;
<select className='border-b-2 border-slate-300 text-[14px] lg:text-[18px] xl:text-[20px]' >
    <option value="" disabled selected hidden>Budget range</option>
    <option value="" >500000 Rs - 600000 Rs</option>
    <option value="" >600000 Rs - 1000000 Rs</option>
    <option value="" >1000000 Rs - 1500000 Rs</option>
    <option value="" >1500000 Rs - 2000000 Rs</option>
   
    
  </select>
</form>
</div>
  )
}

export default Step05