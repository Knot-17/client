import React from 'react'


function Step01() {
  return (
    
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
     
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">Tell us about your self so we can<br></br> customize your planing exprience.</h1> <br></br>
     
<form className="absolute top-[150px]">
<label className="text-lg">My name is </label>
<input type="text" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center" placeholder="Your first name"/> <input type="text" className="border-b-2 border-slate-300 placeholder:italic placeholder:text-center" placeholder="Your last name"/>
<br></br><br></br><br></br>

<label className="text-lg">My partner name is </label>
<input type="text" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center" placeholder="Their first name"/> <input type="text" className="border-b-2 border-slate-300 placeholder:italic placeholder:text-center" placeholder="Their last name"/>
</form>


</div>


  )
}

export default Step01