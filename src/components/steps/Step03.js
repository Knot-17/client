import React from 'react'

function Step03() {
  return (
   
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">Congrats!<br></br>Do you know your venue yet?</h1> <br></br>
     
<form className="absolute top-[150px]">

<input type="radio"/>
<label className="text-lg">Yes,we even booked it.</label>
<br></br><br></br><br></br>

<input type="radio"/>
<label className="text-lg">Nope,we`re still considering options</label>

</form>
</div>
  )
}

export default Step03