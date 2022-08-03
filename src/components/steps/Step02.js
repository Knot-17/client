import React from 'react'

function Step02() {
  return (
   
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">When did you get engaged?</h1> <br></br>
     
<form className="absolute top-[150px]">

<input type="date" className="border-b-2 border-slate-300  placeholder:italic placeholder:text-center" /> 

</form>
</div>
  )
}

export default Step02