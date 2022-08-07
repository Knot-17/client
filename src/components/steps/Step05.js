import React from 'react'


   

function Step05() {
  return (
   
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">That's great! What's your estimated <br></br>guest count and total budget</h1> <br></br>
     
<form className="absolute top-[150px]">
<label className="text-lg">We plan to invite </label>&nbsp;
<select className='border-b-2 border-slate-300 ' >
    <option value="" disabled selected hidden>Estimated guest count</option>
   
    
  </select>
  <br></br><br></br><br></br>
  <label className="text-lg">and spend about </label>&nbsp;
<select className='border-b-2 border-slate-300 ' >
    <option value="" disabled selected hidden>Budget range</option>
   
    
  </select>
</form>
</div>
  )
}

export default Step05