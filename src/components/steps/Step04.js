import React from 'react'
  


const getDropList = () => {
  const year = new Date().getFullYear();
 
  return (
    Array.from( new Array(2), (v,i) =>
      <option key={i} value={year+i}>{year+i}</option>
    )
  );
};
   



function Step04() {
  return (
   
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">Got it!Do you have palce and<br></br>season in mind?</h1> <br></br>
     
<form className="absolute top-[150px]">
<label className="text-lg">We are thinking about </label>
<input type="text" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center" placeholder="Location"/> 
<br></br><br></br><br></br>

<label className="text-lg">During </label>&nbsp;
<select className='border-b-2 border-slate-300 ' >
    <option value="" disabled selected hidden>Season</option>
   
  </select>
  &emsp;
   <select className='border-b-2 border-slate-300' >
   <option value="" disabled selected hidden>Year</option>
    {getDropList()}
    </select>
  
  </form>
</div>
  )
}

export default Step04