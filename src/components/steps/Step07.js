import React from 'react'

function Step07() {
  return (
   
    <div className='  w-[800px] h-[400px]  rounded-2xl pb-2 flex flex-col 
    items-center justify-center'>
        
      <h1 className="absolute top-[10px] text-center font-semibold text-2xl">Next:Gifts! The Knot Registry lets<br></br>you manage and share them all in<br></br> one place.What do you think you'll<br></br>register for?</h1> <br></br>
     
<form className="absolute top-[150px]">
<input type="radio"/>
<label className="text-lg">Items</label>
<br></br>
<input type="radio"/>
<label className="text-lg">Chash</label>
<br></br>
<input type="radio"/>
<label className="text-lg">Both items and Cash</label>
<br></br>
<input type="radio"/>
<label className="text-lg">I'm not sure yet!</label>
</form>
</div>
  )
}

export default Step07